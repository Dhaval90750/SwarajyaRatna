# SwarajyaRatna Platform 🚩

Swarajyacha Dhyas, Ratna cha Gaurav. A premier youth-driven cultural movement in Maharashtra promoting Maratha history, arts, drama, and digital community engagement.

## Features (V2 Release)

### 🎨 Native Typography & UI
- Integrated true Unicode Devanagari web fonts (`Eczar`, `Gotu`, `Yatra One`, `Tiro Devanagari`).
- Replaced legacy AMS typing issues with responsive, culturally-tuned Tailwind CSS utilities.
- Responsive design tailored for mobile, tablet, and widescreen reading environments.

### ✨ Cinematic Interactions
- Framer Motion animation framework integration.
- Scroll-triggered numeric counters for Activity and Organization statistics.
- Staggered cascading reveal interactions on feature grids.

### ✉️ Zero-Dependency Server Actions
- Integrated a highly secure `Web3Forms` Next.js Server Action layer. Form submissions (Registration & Contact) instantly bypass traditional databases and route directly to `swarajyaratna@gmail.com`.

### 🌍 Global SEO & Internationalization
- Standardized Marathi (`/mr`) and English (`/en`) routing functionality via `next-intl`.
- Automated Progressive Web App (PWA) manifest generation (`manifest.ts`).
- Fully baked OpenGraph and Twitter social media cards for rich iMessage/WhatsApp previews.

## Environment Variables

Create a local `.env` file at the root of your project before running:

```env
# Required for Registration & Contact forms to send emails
# Get a free access key from https://web3forms.com/ entering swarajyaratna@gmail.com
WEB3FORMS_ACCESS_KEY=your_key_here
```

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Visit [http://localhost:3000](http://localhost:3000)

## Build Validation
The application uses strict TypeScript compilation and Next.js 15 routing. If you run into build errors during deployment, ensure your `.env` variables are correctly passed into Vercel/Netlify environments.
