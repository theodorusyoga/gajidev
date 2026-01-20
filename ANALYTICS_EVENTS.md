# Google Analytics Events Documentation

This document outlines all custom events tracked in GajiDev for monitoring user behavior and engagement.

## Event Overview

GajiDev tracks the following custom events to help you understand how users interact with the platform:

### 1. **filter_changed**
Triggered when a user selects or changes any filter on the homescreen calculator.

**Parameters:**
- `filter_type` (string): The type of filter changed
  - `role` - Job role selection
  - `experience` - Years of experience
  - `employment` - Employment type (Full-time, Part-time, etc.)
  - `city` - City selection
  - `companyType` - Company type selection
  - `paymentType` - Payment type (monthly, yearly, hourly)
  - `techStack` - Technology stack selection

- `filter_value` (string): The selected value for the filter
- `locale` (string): User's language preference (en or id)

**Example Event:**
```
Event: filter_changed
Parameters:
  - filter_type: "role"
  - filter_value: "software-engineer"
  - locale: "en"
```

**Use Case:** Track which filters are most popular and understand user search patterns.

---

### 2. **percentile_calculated**
Triggered when a user calculates their salary percentile using the "Bandingkan Gaji Kamu" (Compare Your Salary) feature.

**Parameters:**
- `role` (string): Job role selected
- `salary` (number): User's input salary amount
- `percentile` (number): Calculated percentile rank (0-100)
- `payment_type` (string): Payment type (monthly, yearly, hourly)
- `experience_level` (string): Years of experience or "not_set"
- `employment_type` (string): Employment type or "not_set"
- `city` (string): City or "not_set"
- `company_type` (string): Company type or "not_set"
- `tech_stack_count` (number): Number of tech stacks selected

**Example Event:**
```
Event: percentile_calculated
Parameters:
  - role: "software-engineer"
  - salary: 5000000
  - percentile: 72.5
  - payment_type: "monthly"
  - experience_level: "3-5"
  - employment_type: "full-time"
  - city: "jakarta"
  - company_type: "startup"
  - tech_stack_count: 3
```

**Use Case:** Understand salary comparison patterns, identify popular roles, and track percentile distribution.

---

### 3. **feedback_submitted**
Triggered when a user successfully submits feedback through the feedback form.

**Parameters:**
- `feedback_type` (string): Type of feedback submitted
  - `general` - General feedback
  - `bug` - Bug report
  - `feature` - Feature request
  - `other` - Other feedback

- `has_name` (boolean): Whether user provided their name
- `has_phone` (boolean): Whether user provided their phone number
- `description_length` (number): Length of the feedback description in characters

**Example Event:**
```
Event: feedback_submitted
Parameters:
  - feedback_type: "bug"
  - has_name: true
  - has_phone: false
  - description_length: 245
```

**Use Case:** Track feedback volume by type, identify engagement patterns, and understand user willingness to share contact info.

---

## Automatic Events (Built-in Google Analytics)

In addition to custom events, Google Analytics automatically tracks:

- **page_view**: Every page visit
- **session_start**: When a user starts a new session
- **user_engagement**: General user interactions
- **scroll**: When users scroll on the page
- **click**: When users click on elements

---

## Viewing Events in Google Analytics

### Step 1: Access Google Analytics
1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your GajiDev property
3. Navigate to **Reports** → **Events**

### Step 2: View Event Data
1. Click on **Events** in the left sidebar
2. You'll see all events listed with:
   - Event count
   - Event rate
   - Users who triggered the event
   - Conversion rate

### Step 3: Analyze Event Details
1. Click on any event name (e.g., `filter_changed`)
2. View detailed parameters and their values
3. See which parameter values are most common

### Step 4: Create Custom Reports
1. Go to **Explore** section
2. Create a custom exploration to analyze:
   - Which filters are most used
   - Correlation between filters and percentile results
   - Feedback types and user engagement
   - User journey through the app

---

## Key Metrics to Monitor

### Filter Usage
- **Most clicked filters**: Identify which filters users prioritize
- **Filter combinations**: See which filters are used together
- **Locale preferences**: Track English vs Indonesian usage

### Salary Comparisons
- **Popular roles**: Which job roles get compared most
- **Salary ranges**: Distribution of input salaries
- **Percentile distribution**: Where most users fall in the salary spectrum
- **Filter adoption**: How many users apply additional filters

### Feedback Quality
- **Feedback volume**: Track engagement through feedback submissions
- **Bug reports**: Identify issues early
- **Feature requests**: Understand user needs
- **Contact willingness**: See how many users share name/phone

---

## Setting Up Goals/Conversions (Optional)

You can create conversion goals for important events:

### Goal 1: Salary Comparison
- **Goal name**: "Salary Comparison"
- **Event name**: `percentile_calculated`
- **Value**: Track as conversion

### Goal 2: Feedback Submission
- **Goal name**: "Feedback Submission"
- **Event name**: `feedback_submitted`
- **Value**: Track as conversion

### Goal 3: Active Filter Usage
- **Goal name**: "Advanced Filter Usage"
- **Event name**: `filter_changed`
- **Condition**: `filter_type` is not "role"
- **Value**: Track as conversion (indicates power users)

---

## Troubleshooting Events

### Events not showing up?
1. Wait 24-48 hours for initial data
2. Check Real-time view first (updates immediately)
3. Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set correctly
4. Open DevTools Console and check for errors

### Event parameters missing?
1. Ensure the event is being triggered (check console logs)
2. Verify parameter names match exactly (case-sensitive)
3. Check that parameter values are not null/undefined

### Need to add more events?
1. Use the `event()` function from `@/lib/analytics.ts`
2. Add event tracking in the relevant component
3. Redeploy and wait for data to appear

---

## Privacy & Compliance

- **No personal data**: Events don't track email, phone, or sensitive data
- **GDPR compliant**: GA is configured for GDPR compliance
- **User consent**: Consider adding a cookie consent banner for EU users
- **Data retention**: Google Analytics retains data for 14 months by default

---

## Next Steps

1. Set up Google Analytics account (see GOOGLE_ANALYTICS_SETUP.md)
2. Deploy to production
3. Monitor events in real-time view
4. Create custom dashboards for key metrics
5. Set up alerts for unusual activity
6. Review analytics weekly to inform product decisions

---

**Questions?** Refer to [Google Analytics Documentation](https://support.google.com/analytics) for more details.
