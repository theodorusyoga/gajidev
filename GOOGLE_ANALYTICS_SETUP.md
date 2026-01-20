# Google Analytics Setup Guide for GajiDev

This guide will help you set up Google Analytics for tracking user behavior and engagement on GajiDev before launching publicly.

## Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Start measuring"** or sign in with your Google account
3. Click **"Create"** to set up a new property
4. Fill in the account details:
   - **Account name**: `GajiDev` (or your preferred name)
   - **Website URL**: Your domain (e.g., `gajidev.com`)
   - **Industry category**: Select "Technology" or "Business Services"
   - **Reporting timezone**: Select your timezone (e.g., Asia/Jakarta for Indonesia)
5. Click **"Create"**

## Step 2: Create a Web Data Stream

1. After creating the account, you'll be prompted to create a data stream
2. Select **"Web"** as your platform
3. Enter your website details:
   - **Website URL**: Your full domain (e.g., `https://gajidev.com`)
   - **Stream name**: `GajiDev Web` (or your preferred name)
4. Click **"Create stream"**

## Step 3: Get Your Measurement ID

1. After creating the stream, you'll see a page with your **Measurement ID**
2. It looks like: `G-XXXXXXXXXX`
3. Copy this ID - you'll need it in the next step

## Step 4: Add Measurement ID to Environment Variables

1. Open your project's `.env.local` file (or create one if it doesn't exist)
2. Add the following line:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID from Step 3

3. Save the file

**Important**: The `NEXT_PUBLIC_` prefix makes this variable accessible in the browser. This is safe because Measurement IDs are meant to be public.

## Step 5: Verify Installation

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your website in a browser
3. Go to [Google Analytics Real-time](https://analytics.google.com/analytics/web/) → Your Property → Real-time
4. You should see yourself as an active user within a few seconds
5. Navigate around your site and watch the real-time data update

## Step 6: Deploy to Netlify

1. When deploying to Netlify, add the environment variable:
   - Go to your Netlify site settings
   - Navigate to **Build & deploy** → **Environment**
   - Click **Edit variables**
   - Add: `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
   - Save and redeploy

## Step 7: Monitor Analytics

After deployment, you can track:

### Key Metrics to Watch:
- **Users**: Total unique visitors
- **Sessions**: Number of visits
- **Pages/Session**: Average pages viewed per session
- **Bounce Rate**: Percentage of single-page sessions
- **Average Session Duration**: How long users stay on your site

### Important Events Being Tracked:
- **Page views**: Automatically tracked
- **User interactions**: Clicks, form submissions
- **Salary comparisons**: When users use the percentile tool
- **Feedback submissions**: When users submit feedback

## Step 8: Custom Events (Optional)

The analytics system is already set up to track custom events. You can add more tracking by using the `event` function from `@/lib/analytics.ts`:

```typescript
import { event } from '@/lib/analytics'

// Track a custom event
event('salary_comparison', {
  role: 'Software Engineer',
  salary: 5000000,
})
```

## Troubleshooting

### No data showing in Google Analytics?
1. Check that `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set correctly
2. Verify the Measurement ID format (should start with `G-`)
3. Wait 24-48 hours for initial data to appear in reports
4. Check the Real-time view first - it updates immediately

### Environment variable not loading?
1. Make sure you're using `NEXT_PUBLIC_` prefix
2. Restart your development server after adding the variable
3. For Netlify, redeploy after adding the variable

### Still not working?
1. Open browser DevTools → Console
2. Type `window.gtag` - should return a function
3. Check Network tab for requests to `googletagmanager.com`

## Security Notes

- **Measurement ID is public**: It's safe to expose in your code
- **No sensitive data**: Never send passwords, emails, or personal data to GA
- **Privacy compliant**: GA is GDPR compliant when configured properly
- **User consent**: Consider adding a cookie consent banner for EU users

## Next Steps

1. Set up Google Analytics goals to track important conversions
2. Create custom dashboards to monitor key metrics
3. Set up alerts for unusual activity
4. Review analytics weekly to understand user behavior

---

**Ready to launch?** Once you've completed these steps and verified data is flowing, you're ready to deploy publicly!
