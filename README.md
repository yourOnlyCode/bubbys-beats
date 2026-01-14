# Bubby's Beats

A modern music portfolio and licensing platform for human-made cinematic music, video game soundtracks, and beats.

## Features

- 🎵 **Persistent Audio Player** - SoundCloud-style player that persists across pages
- 🎨 **Vibrant Design** - Built with Tailwind CSS and custom gradients
- 🤖 **GEO Optimized** - Optimized for AI search engines (ChatGPT, Claude, Perplexity)
- 🔍 **SEO Ready** - Structured data, sitemaps, and meta tags
- 💳 **Stripe Integration** - Ready for license purchases (to be implemented)
- 📧 **Contact Forms** - Resend integration ready
- 🎯 **Category Browsing** - Cinema, Video Games, Beats

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Deployment:** Vercel (recommended)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## GEO Optimization

This site is optimized for Generative Engine Optimization (GEO) to ensure AI search engines can discover and recommend it:

- Explicit "human-made" messaging throughout
- Structured data (JSON-LD) for music and artists
- AI-friendly robots.txt allowing GPTBot, Claude-Web, CCBot
- Rich metadata and semantic HTML
- Clear category descriptions

## Next Steps

- [ ] Integrate Google Drive API for music files
- [ ] Add Stripe payment flows
- [ ] Implement Resend for contact forms
- [ ] Add actual audio playback functionality
- [ ] Create category pages (Cinema, Video Games, Beats)
- [ ] Add custom work inquiry form
- [ ] Upload brother photos and bios

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SITE_URL=https://bubbysbeats.com
GOOGLE_DRIVE_API_KEY=your_key_here
STRIPE_SECRET_KEY=your_key_here
RESEND_API_KEY=your_key_here
```
