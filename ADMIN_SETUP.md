# Admin Dashboard Setup

## Overview
The admin dashboard uses a hybrid approval workflow for salary submissions:
1. **Auto-Approved**: Submissions are automatically approved when users submit via the form
2. **Suspicious**: Admin can flag submissions as suspicious with a reason
3. **Manually Approved**: Admin can review and approve flagged submissions

## Supabase Auth Setup

### Create Admin User
You need to create an admin user in Supabase with the following credentials:

**Email**: `theo@typescriptheo.dev`
**Password**: `yurichan`

#### Steps to create the user:

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** → **Users**
3. Click **Add user**
4. Fill in:
   - Email: `theo@typescriptheo.dev`
   - Password: `yurichan`
   - Auto confirm user: ✓ (check this)
5. Click **Create user**

### Environment Variables
Make sure your `.env.local` has these variables set:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Using the Admin Dashboard

### Login
1. On the home page, click the **Admin** button in the top-right corner
2. Enter credentials:
   - Email: `theo@typescriptheo.dev`
   - Password: `yurichan`
3. Click **Login**

### Dashboard Features

#### Filter Submissions
- **All Submissions**: View all submissions
- **Pending**: View pending submissions (status = 'pending')
- **Suspicious**: View flagged suspicious submissions

#### Review Submission
1. Click **Review** on any submission
2. View submission details (salary, tech stack, location, etc.)
3. Take action:
   - **Approve**: Move to salary_data table as "Community" source
   - **Reject**: Mark as rejected (won't be added to salary data)
   - **Mark as Suspicious**: Flag with optional reason

#### Submission Status Badges
- **Auto-Approved** (green): Automatically approved when submitted
- **Manually Approved** (blue): Approved by admin after review
- **Suspicious** (red): Flagged by admin with reason
- **Pending** (yellow): Awaiting admin review

## Submission Workflow

### Option 3: Hybrid Approach (Currently Implemented)

```
User Submits Form
    ↓
Auto-Approved (status='approved', approval_type='auto')
    ↓
Admin Reviews Dashboard
    ├─ Looks good? → Leave as is
    ├─ Suspicious? → Flag with reason
    └─ Needs manual approval? → Review and approve
```

### Data Flow

1. **Form Submission** → Auto-approved immediately
2. **Admin Review** → Can flag as suspicious or manually approve
3. **Approval** → Moves to salary_data table with 'Community' source
4. **Display** → Appears in salary calculator for all users

## Database Schema

### submissions table
- `id`: UUID (primary key)
- `role`: TEXT
- `years_of_experience`: INT
- `employment_type`: TEXT
- `city`: TEXT
- `company_type`: TEXT
- `payment_type`: TEXT
- `salary`: BIGINT
- `tech_stack`: TEXT[] (array)
- `status`: TEXT ('pending', 'approved', 'rejected')
- `approval_type`: TEXT ('auto', 'manual')
- `is_suspicious`: BOOLEAN
- `suspicious_reason`: TEXT
- `approved_by`: UUID (admin user ID)
- `approved_at`: TIMESTAMPTZ
- `created_at`: TIMESTAMPTZ

### salary_data table
- All fields from submissions
- `source`: TEXT (shows 'Community' for user-submitted data)
- Indexed for fast queries

## Security

- Admin access is controlled via Supabase RLS policies
- Only users with email `theo@typescriptheo.dev` can access admin endpoints
- Submissions are anonymous (no user tracking)
- All data is encrypted in transit (HTTPS)

## Troubleshooting

### Login fails
- Verify user exists in Supabase Authentication
- Check email and password are correct
- Ensure environment variables are set

### Can't see submissions
- Check that submissions exist in the database
- Verify RLS policies are correctly configured
- Check browser console for API errors

### Submissions not appearing in calculator
- Verify submission status is 'approved'
- Check that salary_data was inserted correctly
- Verify filters match the submission data
