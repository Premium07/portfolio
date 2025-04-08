# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# EMAILjs

# EmailJS Setup Guide

This guide will help you set up EmailJS to work with your portfolio contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Add an Email Service

1. In the EmailJS dashboard, go to the "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps to connect your email account
5. Give your service a name (e.g., "Portfolio Contact Form")
6. Note down the **Service ID** (it will look like "service_xxxxxxx")

## Step 3: Create an Email Template

1. In the EmailJS dashboard, go to the "Email Templates" tab
2. Click "Create New Template"
3. Give your template a name (e.g., "Portfolio Contact Form")
4. In the "Content" tab, paste the HTML from the `emailjs-template.html` file
5. Make sure the template uses the variables `{{name}}`, `{{email}}`, and `{{message}}`
6. Set the subject line (e.g., "New Contact Form Submission from {{name}}")
7. Save the template
8. Note down the **Template ID** (it will look like "template_xxxxxxx")

## Step 4: Get Your Public Key

1. In the EmailJS dashboard, go to the "Account" tab
2. Find your **Public Key** in the API Keys section (it will look like "XXXXXXXXXXXXXXXXXX")

## Step 5: Update Your Environment Variables

1. Open the `.env` file in your project
2. Replace the placeholder values with your actual EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Step 6: Test Your Contact Form

1. Start your development server
2. Open your portfolio website
3. Fill out the contact form and submit it
4. Check your email to see if you received the message

## Troubleshooting

If you encounter any issues:

1. Check the browser console for error messages
2. Verify that your EmailJS credentials are correct
3. Make sure your email service is properly connected
4. Check that your template variables match the form field names
5. Ensure your EmailJS account is verified

## Free Plan Limitations

The free plan of EmailJS allows:

- 200 emails per month
- 2 email templates
- 2 email services

This should be sufficient for a personal portfolio website. If you need more, you can upgrade to a paid plan.

# EmailJS Template Configuration Check

If you're experiencing issues with the auto-reply template, please check the following settings in your EmailJS dashboard:

## 1. Check Your Auto-Reply Template Settings

1. Log in to your [EmailJS dashboard](https://dashboard.emailjs.com/admin)
2. Go to the "Email Templates" tab
3. Click on your auto-reply template (template_35ftiuh)
4. Check the following settings:

### Important Settings to Verify:

#### A. "To Email" Field

- This should be set to `{{to_email}}` or one of the alternative variables we've provided:
  - `{{email}}`
  - `{{user_email}}`
  - `{{recipient}}`
- If none of these work, try setting it to a static email address temporarily (like your own email) to test

#### B. "From Email" Field

- This should be set to your verified email address in EmailJS
- Make sure this email is verified and working

#### C. "Reply To" Field

- This should be set to `{{reply_to}}` or your email address

#### D. Template Variables

- Make sure your template HTML is using the correct variable names
- The variables in your template should match the ones we're sending:
  - `{{to_name}}` - The name of the person who submitted the form
  - `{{message}}` - The message they sent
  - `{{from_name}}` - Your name or website name

## 2. Check Your EmailJS Service Settings

1. Go to the "Email Services" tab
2. Click on your email service (service**\*\*\***)
3. Make sure the service is connected and working
4. If you're using Gmail, make sure you've allowed "Less secure app access" or created an app password

## 3. Try a Different Approach

If you continue to have issues with the auto-reply, you can try a different approach:

### Option 1: Use a Single Template for Both Emails

1. Create a new template that sends to both you and the user (using CC or BCC)
2. This way, only one email is sent, which reduces the chance of errors

### Option 2: Use the EmailJS REST API Directly

Instead of using the EmailJS library's `send` method, you can try using the REST API directly:

```javascript
fetch("https://api.emailjs.com/api/v1.0/email/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    service_id: serviceId,
    template_id: autoreplyTemplateId,
    user_id: publicKey,
    template_params: {
      to_email: formData.email,
      to_name: formData.name,
      message: formData.message,
      from_name: "YOUR NAME",
      reply_to: "EXAMPLE@gmail.com",
    },
  }),
})
  .then((response) => response.text())
  .then((result) => console.log("Auto-reply sent:", result))
  .catch((error) => console.error("Error:", error));
```

## 4. Contact EmailJS Support

If none of these solutions work, you may need to contact EmailJS support:

1. Go to [EmailJS Support](https://www.emailjs.com/docs/support/)
2. Provide them with your template ID, service ID, and the error message you're receiving
3. They can help diagnose any issues with your account or templates

# Setting Up Auto-Reply in EmailJS

This guide will help you set up the auto-reply feature in EmailJS to send confirmation emails to users who submit your contact form.

## Step 1: Create the Auto-Reply Template

1. In the EmailJS dashboard, go to the "Email Templates" tab
2. Click "Create New Template"
3. Give your template a name (e.g., "Portfolio Auto-Reply")
4. In the "Content" tab, paste the HTML from the `emailjs-autoreply-template.html` file
5. Make sure the template uses the following variables:
   - `{{to_name}}` - The name of the person who submitted the form
   - `{{to_email}}` - The email address of the person who submitted the form
   - `{{message}}` - The message they sent
   - `{{from_name}}` - Your name or your website name
6. Set the subject line (e.g., "Thank you for your message, {{to_name}}")
7. In the "To Email" field, use the variable `{{to_email}}` to send the auto-reply to the person who submitted the form
8. Save the template
9. Note down the **Template ID** (it will look like "template_xxxxxxx")

## Step 2: Update Your Environment Variables

1. Open the `.env` file in your project
2. Add your auto-reply template ID:
   ```
   VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template_id
   ```

## Step 3: Customize the Auto-Reply Message

In the ContactForm.jsx file, you can customize the auto-reply by modifying the `templateParams` object:

```javascript
const templateParams = {
  to_name: formData.name,
  to_email: formData.email,
  message: formData.message,
  from_name: "Your Name", // Replace with your actual name
};
```

## Step 4: Test the Auto-Reply

1. Start your development server
2. Open your portfolio website
3. Fill out the contact form with your own email address
4. Submit the form
5. Check your email to see if you received both:
   - The original contact form submission (sent to you)
   - The auto-reply confirmation (sent to the email address you entered)

## Important Notes

1. **Email Sending Order**: The code is set up to first send the contact form submission to you, and then send the auto-reply to the user. If the first email fails, the auto-reply won't be sent.

2. **Email Limits**: Remember that the free plan of EmailJS has a limit of 200 emails per month. Each form submission will now count as 2 emails (the contact form submission and the auto-reply).

3. **Template Variables**: Make sure the variable names in your EmailJS template match exactly with the ones used in the code (`to_name`, `to_email`, `message`, `from_name`).

4. **Testing**: Always test the auto-reply feature with your own email address before making it live to ensure everything works correctly.
