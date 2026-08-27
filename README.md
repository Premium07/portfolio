# Prem Sagar Gupta Portfolio

A responsive, interactive portfolio for Prem Sagar Gupta, a full-stack web developer. The site presents selected projects, technical skills, an about section, and a contact form backed by Web3Forms.

## Features

- Responsive portfolio layout for mobile, tablet, and desktop
- GSAP-powered loading, reveal, hover, and contact-form animations
- Locomotive Scroll for smooth scrolling
- Project showcase with technology tags, GitHub links, and live demos
- Animated skills marquee with technology logos
- Expandable contact form with validation, loading, success, and error states
- Custom cursor on desktop screens
- Social links, CV download, and current year/time in the footer

## Tech Stack

- React 19 and React DOM
- Vite 6
- Tailwind CSS 4
- GSAP and `@gsap/react`
- Locomotive Scroll
- Remix Icon
- Web3Forms contact API
- ESLint 9

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Getting Started

```bash
git clone https://github.com/Premium07/portfolio.git
cd portfolio
npm install
npm run dev
```

Vite will print the local development URL, usually `http://localhost:5173`.

## Contact Form Configuration

The contact form submits to [Web3Forms](https://web3forms.com/). Create an access key in the Web3Forms dashboard, then add it to a `.env.local` file in the project root:

```env
VITE_WEB3FORMS_KEY=your_access_key
```

Restart the development server after changing environment variables. The form will not send messages until this key is configured.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project Structure

```text
portfolio/
├── constants/
│   └── data.js                 # Projects, skills, social links, and about content
├── public/
│   └── skills/                 # Skill logos
├── src/
│   ├── assets/                 # Portfolio images and other imported assets
│   ├── components/
│   │   ├── About.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Cursor.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── PageTwo.jsx
│   │   ├── Skill.jsx
│   │   └── SkillsSlider.jsx
│   ├── App.jsx                 # Page composition and scroll setup
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Updating Content

Most portfolio content is centralized in `constants/data.js`:

- Add or edit projects in `data`
- Update social profiles in `socialLinks`
- Update the biography in `about`
- Add or remove technologies in `skillsData`

Component-specific layout and animation changes live in `src/components/`. Global styling is in `src/index.css`.

## Deployment

Build the site with:

```bash
npm run build
```

Deploy the generated `dist/` directory using Vercel, Netlify, GitHub Pages, or another static hosting provider. Add `VITE_WEB3FORMS_KEY` to the provider's environment variables before building.

## Developer

**Prem Sagar Gupta**

- GitHub: https://github.com/Premium07
- LinkedIn: https://www.linkedin.com/in/prem-sagar-gupta-a017a417b/
- Email: premsagarg23@gmail.com

## License

This project is available under the MIT License.
