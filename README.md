# 🚀 Prem Sagar Gupta - Full Stack Developer Portfolio

A modern, responsive, and interactive portfolio website showcasing full stack web development expertise. Built with React, Vite, and cutting-edge web technologies.

![Portfolio Preview](./public/skills/react.png)

## ✨ Features

- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop screens
- **Smooth Animations** - GSAP animations with ScrollTrigger for engaging user experience
- **Smooth Scrolling** - Locomotive Scroll for fluid page navigation
- **Interactive Projects Showcase** - Hover-enabled project preview with live links
- **Skills Carousel** - Animated skills slider responding to scroll direction
- **Contact Form** - EmailJS integration for direct messaging
- **Custom Cursor** - Interactive cursor animation (desktop)
- **Modern UI** - Built with Tailwind CSS for sleek design
- **Performance Optimized** - Fast load times and smooth performance
- **SEO Friendly** - Optimized meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite 6** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **GSAP 3** - Animation library
- **Locomotive Scroll** - Smooth scrolling
- **Framer Motion** - Alternative animation library
- **Remix Icon** - Icon library

### Backend Integration
- **EmailJS** - Email service integration
- **React Router DOM** - Client-side routing

### Development Tools
- **ESLint** - Code linting
- **Node.js** - Runtime environment

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Premium07/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📧 EmailJS Setup

To enable the contact form functionality:

### Step 1: Create an EmailJS Account
1. Visit [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

### Step 2: Add an Email Service
1. Go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Complete the authentication process
5. Note your **Service ID** (format: `service_xxxxxxx`)

### Step 3: Create Email Templates
1. Go to "Email Templates"
2. Create a template for contact form notifications
   - Use variables: `{{name}}`, `{{email}}`, `{{message}}`
   - Subject: `New Contact Form Submission from {{name}}`
   - Note your **Template ID** (format: `template_xxxxxxx`)
3. Create an auto-reply template for users
   - Note the **Auto-reply Template ID**

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Set Environment Variables
Create a `.env.local` file in the project root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_template_id
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📦 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code quality checks

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── About.jsx          # About section with images
│   │   ├── ContactForm.jsx    # Contact form with EmailJS
│   │   ├── Cursor.jsx         # Custom cursor animation
│   │   ├── Footer.jsx         # Footer with social links
│   │   ├── Hero.jsx           # Hero/landing section
│   │   ├── Loader.jsx         # Loading animation
│   │   ├── PageTwo.jsx        # Projects showcase
│   │   ├── Skill.jsx          # Skills marquee
│   │   └── SkillsSlider.jsx   # Skills carousel
│   ├── assets/                # Images and static files
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── constants/
│   └── data.js                # Portfolio data (projects, skills, etc.)
├── public/                    # Static files
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint rules
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🎯 Components Overview

### Hero (`Hero.jsx`)
- Landing section with animated heading
- Navigation bar with profile image
- Social media icons
- Call-to-action buttons (Freelancer, Developer)
- Responsive design for all screen sizes

### Projects Showcase (`PageTwo.jsx`)
- Grid layout of featured projects
- Hover preview images (desktop)
- Tech stack badges
- Links to GitHub and live demos
- Mobile-optimized layout

### Skills (`Skill.jsx`)
- Animated marquee display
- Skill logos and names
- Responsive grid

### About Section (`About.jsx`)
- Multi-column image gallery
- Professional bio/description
- CV download button
- Responsive image layout

### Contact Form (`ContactForm.jsx`)
- Toggle-able form overlay
- Email validation
- Success/error messages
- Powered by EmailJS
- Mobile-friendly design

### Footer (`Footer.jsx`)
- Current year and time display
- Social media links
- Responsive layout

## 🎨 Responsive Breakpoints

- **Mobile** (`< 640px`) - `sm:`
- **Tablet** (`640px - 1024px`) - `md:`, `lg:`
- **Desktop** (`> 1024px`) - `xl:`

The portfolio is fully optimized and tested across all screen sizes.

## 🚀 Deployment

### Deploy with Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Deploy with Netlify
1. Build the project: `npm run build`
2. Connect your GitHub to [Netlify](https://netlify.com/)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables in Netlify dashboard

### Deploy with GitHub Pages
1. Update `vite.config.js` with your repo name
2. Run: `npm run build`
3. Push the `dist` folder or use GitHub Actions

## 🔧 Configuration

### Customize Portfolio Data
Edit `constants/data.js` to update:
- Projects and their details
- Skills and logos
- Social media links
- About section text
- Custom icons

### Customize Styles
- Global styles: `src/index.css`
- Component-specific: Use Tailwind classes
- Animations: GSAP configuration in components

## 🎬 Animations

- **Page Load** - Progress bar loading animation
- **Heading** - Staggered text reveal
- **Scroll** - Locomotive Scroll for smooth navigation
- **Projects** - Hover image animations
- **Skills** - Direction-responsive marquee
- **Custom Cursor** - Smooth tracking (desktop only)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Optimizations

- Code splitting with Vite
- Image optimization
- Smooth animations with GSAP
- Lazy loading capabilities
- Responsive design reduces redundant assets
- Minified and optimized production build

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is open source and available under the MIT License.

## 👤 About the Developer

**Prem Sagar Gupta**
- Full Stack Developer based in Nepal
- Specializing in React, Next.js, Node.js, and modern web technologies
- Available for freelance projects
- Open to new opportunities

### Connect With Me
- 💼 [LinkedIn](https://linkedin.com)
- 🐙 [GitHub](https://github.com/Premium07)
- 🐦 [Twitter](https://twitter.com)
- 📧 Email: premsagarg23@gmail.com

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) for smooth scrolling
- [Vite](https://vitejs.dev/) for the build tool
- [React](https://react.dev/) for the UI library

## 📞 Support

If you have any questions or need assistance:
1. Check the [Issues](https://github.com/Premium07/portfolio/issues) page
2. Create a new issue with detailed information
3. Contact via email: premsagarg23@gmail.com

---

**Made with ❤️ by Prem Sagar Gupta**

Last Updated: May 2026


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
