# Submission Workflow & Data Management

## Current Setup

Users submit salary data anonymously through the `submissions` table. This data is **separate** from the main `salary_data` table to allow for review before publishing.

## Recommended Workflow Options

### Option 1: Manual Review Dashboard (Recommended)
Create a simple admin dashboard to review and approve submissions.

**Steps:**
1. **Create Admin Page** (`/admin` route - protected)
   - List all pending submissions from `submissions` table
   - Show: role, YoE, salary, city, company type, employment type, tech stack
   - Add "Approve" and "Reject" buttons for each submission

2. **Approval Process**
   - When approved: Copy data from `submissions` → `salary_data`
   - Set `source` field to "Community" or "User Submission"
   - Mark submission as processed (add `status` column)
   - Delete or archive the submission

3. **Authentication**
   - Use Supabase Auth for admin login
   - Or simple password protection for MVP

**SQL for status tracking:**
```sql
-- Add status column to submissions table
ALTER TABLE submissions 
ADD COLUMN status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
ADD COLUMN reviewed_at TIMESTAMP WITH TIME ZONE;

-- Create index for faster queries
CREATE INDEX idx_submissions_status ON submissions(status);
```

**Benefits:**
- ✅ Quality control before data goes live
- ✅ Filter out spam/invalid submissions
- ✅ Manual oversight ensures data accuracy

---

### Option 2: Auto-Approval with Validation
Automatically approve submissions that pass validation rules.

**Validation Rules:**
- Salary is within reasonable range (e.g., 3M - 200M IDR/month)
- All required fields are filled
- Years of experience matches typical ranges (0-50)
- Role is from predefined list

**Implementation:**
```sql
-- Create function to auto-approve valid submissions
CREATE OR REPLACE FUNCTION auto_approve_submission()
RETURNS TRIGGER AS $$
BEGIN
  -- Validate salary range
  IF NEW.salary >= 3000000 AND NEW.salary <= 200000000 THEN
    -- Insert into salary_data
    INSERT INTO salary_data (
      role, years_of_experience, employment_type, 
      city, company_type, payment_type, salary, 
      tech_stack, source
    )
    VALUES (
      NEW.role, NEW.years_of_experience, NEW.employment_type,
      NEW.city, NEW.company_type, NEW.payment_type, NEW.salary,
      NEW.tech_stack, 'Community'
    );
    
    -- Mark as approved
    NEW.status := 'approved';
    NEW.reviewed_at := NOW();
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
CREATE TRIGGER trigger_auto_approve
BEFORE INSERT ON submissions
FOR EACH ROW
EXECUTE FUNCTION auto_approve_submission();
```

**Benefits:**
- ✅ Instant data updates
- ✅ No manual work required
- ⚠️ Risk of spam/invalid data

---

### Option 3: Hybrid Approach (Best of Both)
Auto-approve obvious good submissions, flag suspicious ones for review.

**Logic:**
```javascript
// In /api/submissions/route.ts
const isValidSubmission = (data) => {
  const salaryMin = 3000000
  const salaryMax = 200000000
  const yoeMax = 50
  
  return (
    data.salary >= salaryMin &&
    data.salary <= salaryMax &&
    data.years_of_experience >= 0 &&
    data.years_of_experience <= yoeMax &&
    data.role &&
    data.employment_type &&
    data.salary
  )
}

// After inserting to submissions table
if (isValidSubmission(formData)) {
  // Auto-approve: copy to salary_data
  await supabase.from('salary_data').insert({
    ...formData,
    source: 'Community'
  })
} else {
  // Flag for manual review
  // Admin reviews later
}
```

**Benefits:**
- ✅ Fast approval for valid data
- ✅ Manual review for edge cases
- ✅ Best user experience

---

## Recommended Implementation Plan

**For MVP (Quick Launch):**
1. Use **Option 3 (Hybrid)** with basic validation
2. Build simple admin page later when you have time
3. For now, review flagged submissions via Supabase dashboard directly

**For Production (Later):**
1. Build dedicated admin dashboard
2. Add analytics (submission stats, approval rates)
3. Email notifications for new submissions
4. Batch approval tools

---

## Quick Admin Access via Supabase

Until you build an admin dashboard, you can review submissions directly in Supabase:

1. Go to Supabase Dashboard → Table Editor → `submissions`
2. View pending submissions
3. Manually copy good ones to `salary_data` table:
   ```sql
   -- Copy approved submission (replace ID)
   INSERT INTO salary_data (
     role, years_of_experience, employment_type, 
     city, company_type, payment_type, salary, 
     tech_stack, source
   )
   SELECT 
     role, years_of_experience, employment_type,
     city, company_type, payment_type, salary,
     tech_stack, 'Community'
   FROM submissions
   WHERE id = 'submission-id-here';
   
   -- Delete processed submission
   DELETE FROM submissions WHERE id = 'submission-id-here';
   ```

---

## Data Quality Tips

**To maintain high-quality data:**
- ✅ Periodically review "Community" sourced data
- ✅ Look for outliers (unusually high/low salaries)
- ✅ Check for duplicate submissions
- ✅ Monitor submission frequency (detect spam)

**SQL to find outliers:**
```sql
-- Find suspiciously high salaries
SELECT * FROM salary_data 
WHERE salary > 100000000 
ORDER BY salary DESC;

-- Find duplicate submissions (same role, YoE, salary, city)
SELECT role, years_of_experience, salary, city, COUNT(*)
FROM salary_data
GROUP BY role, years_of_experience, salary, city
HAVING COUNT(*) > 2;
```

---

## Next Steps

**Choose one workflow and implement:**
1. For fastest MVP → Use Hybrid (Option 3) with Supabase manual review
2. For best quality → Build admin dashboard (Option 1)
3. For hands-off → Pure auto-approval (Option 2) - but risky

**My recommendation:** Start with Option 3 (Hybrid), then build proper admin dashboard when you have more submissions to manage.
