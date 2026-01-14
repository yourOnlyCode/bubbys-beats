# AI Development Handoff - Bubby's Beats

## Project Overview
A music portfolio and licensing platform for three brothers who create human-made cinematic music, video game soundtracks, and beats. The site emphasizes "100% human-made" to differentiate from AI-generated music and is optimized for Generative Engine Optimization (GEO) to be discoverable by AI search engines like ChatGPT, Claude, and Perplexity.

## Current Status: MVP Complete ✅

### What's Built
- ✅ Next.js 15 app with TypeScript and Tailwind CSS
- ✅ Floating capsule navigation bar (top of page)
- ✅ Persistent audio player (bottom bar, SoundCloud-style)
- ✅ Splash page with hero, 3 brother profiles, featured tracks, categories
- ✅ Category pages: Cinema, Video Games, Beats
- ✅ Custom Work page (studio collaboration info)
- ✅ Licenses page (3 pricing tiers: $49, $199, $499)
- ✅ Google Drive integration for music file hosting
- ✅ Zustand state management for audio player
- ✅ SEO & GEO optimization (metadata, structured data, robots.txt, sitemap)
- ✅ Vibrant gradient color scheme (purple/pink/cyan)

### Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State:** Zustand
- **Icons:** Lucide React
- **Animations:** Framer Motion (installed but minimal usage)
- **Deployment:** Vercel (recommended)

## Project Structure
```
/app
  /layout.tsx          # Root layout with metadata, NavBar, AudioPlayer
  /page.tsx            # Splash page (hero, brothers, featured tracks, categories)
  /globals.css         # Tailwind + CSS variables
  /robots.ts           # AI-friendly robots.txt (allows GPTBot, Claude-Web, CCBot)
  /sitemap.ts          # Dynamic sitemap
  /cinema/page.tsx     # Cinema category page
  /video-games/page.tsx # Video games category page
  /beats/page.tsx      # Beats category page
  /custom-work/page.tsx # Custom work inquiry page
  /licenses/page.tsx   # Licensing tiers page

/components
  /nav-bar.tsx         # Floating capsule navigation
  /audio-player.tsx    # Persistent bottom audio player
  /track-card.tsx      # Individual track display card
  /category-card.tsx   # Category browse cards

/lib
  /audio-store.ts      # Zustand store for player state
  /google-drive.ts     # Google Drive API integration
```

## Key Design Decisions

### 1. Music Upload System
**Choice:** Google Drive API (Option 1)
- Three brothers upload music to 3 Google Drive folders (Cinema, Video Games, Beats)
- Site fetches files via Google Drive API
- 1-hour cache for performance
- No database needed
- See `GOOGLE_DRIVE_SETUP.md` for setup instructions

**Why:** Simple, free, accessible for non-technical users

### 2. Audio Player
**Current:** UI only (no actual playback yet)
- Persistent bottom bar
- Zustand manages current track and play state
- Play button on track cards sets current track

**Next Step:** Integrate Howler.js or React-H5-Audio-Player for actual audio playback

### 3. GEO Optimization
- Explicit "human-made" messaging throughout
- Structured JSON-LD data for MusicGroup schema
- AI-friendly robots.txt allowing GPTBot, Claude-Web, CCBot, anthropic-ai
- Rich metadata on every page
- Clear category descriptions for AI understanding

### 4. Color Scheme
- **Cinema:** Purple (#8B5CF6)
- **Video Games:** Pink (#EC4899)
- **Beats:** Cyan (#06B6D4)
- Gradients used extensively for modern feel

## What's NOT Built Yet (Priority Order)

### High Priority
1. **Actual Audio Playback**
   - Install: `npm install howler` or `react-h5-audio-player`
   - Update `audio-player.tsx` to play actual audio
   - Add progress bar functionality
   - Handle next/previous track logic

2. **Stripe Payment Integration**
   - Install: `npm install @stripe/stripe-js stripe`
   - Create `/app/api/checkout/route.ts` for Stripe Checkout
   - Add "Buy License" buttons to track cards
   - Implement license purchase flow on `/licenses` page
   - Webhook handler for successful payments

3. **Contact Form (Resend)**
   - Install: `npm install resend`
   - Create `/app/api/contact/route.ts`
   - Add contact form to `/custom-work` page
   - Email notifications to brothers

### Medium Priority
4. **Brother Photos & Bios**
   - Replace gradient circles with actual photos
   - Add detailed bios for each brother
   - Consider adding social media links

5. **Track Metadata Enhancement**
   - Currently: filename becomes title, duration is "0:00"
   - Solution: Use Google Drive file descriptions or separate JSON file
   - Add: actual duration, BPM, key, mood tags

6. **Search & Filter**
   - Search tracks by name
   - Filter by mood, tempo, duration
   - Sort options (newest, popular, alphabetical)

### Low Priority
7. **Admin Panel**
   - Simple dashboard to manage tracks
   - View analytics (plays, downloads, purchases)
   - Manage licenses

8. **User Accounts**
   - License history
   - Download purchased tracks
   - Favorites/playlists

9. **Waveform Visualizations**
   - Use Wavesurfer.js for track previews
   - Visual feedback during playback

## Environment Variables Needed

```env
# Required for Google Drive
GOOGLE_DRIVE_API_KEY=
GOOGLE_DRIVE_CINEMA_FOLDER_ID=
GOOGLE_DRIVE_VIDEOGAMES_FOLDER_ID=
GOOGLE_DRIVE_BEATS_FOLDER_ID=

# Required for Stripe (when implemented)
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Required for Resend (when implemented)
RESEND_API_KEY=

# Optional
NEXT_PUBLIC_SITE_URL=https://bubbysbeats.com
```

## Known Issues / Technical Debt
1. **Audio player is UI-only** - No actual playback functionality
2. **Track duration is hardcoded** - Shows "0:00" for all tracks
3. **No error handling** - Google Drive API failures not handled gracefully
4. **No loading states** - Category pages don't show loading indicators
5. **Mobile nav** - Navigation bar may overflow on small screens
6. **No analytics** - No tracking for plays, popular tracks, etc.

## Development Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Deployment Notes
- **Recommended:** Vercel (seamless Next.js integration)
- Set environment variables in Vercel dashboard
- Google Drive folders must be public (anyone with link)
- Domain: bubbysbeats.com (update in metadata)

## Design Philosophy
- **Vibrant & Fun:** Bold gradients, smooth animations
- **Human-First:** Emphasize human creativity vs AI
- **Simple UX:** Easy navigation, clear CTAs
- **Performance:** Image optimization, caching, lazy loading
- **Accessibility:** Semantic HTML, ARIA labels (needs improvement)

## Next Session Recommendations

**If focusing on functionality:**
1. Implement actual audio playback (Howler.js)
2. Add Stripe payment flow
3. Create contact form with Resend

**If focusing on content:**
1. Upload brother photos and write bios
2. Upload sample tracks to Google Drive
3. Test Google Drive integration end-to-end

**If focusing on polish:**
1. Add loading states and error handling
2. Improve mobile responsiveness
3. Add animations with Framer Motion
4. Implement waveform visualizations

## Important Context
- **Three brothers** (not two) - updated throughout site
- **GEO = Generative Engine Optimization** (not geographic)
- **Human-made emphasis** is core to brand identity
- **SoundCloud-style player** means persistent bottom bar
- **Google Drive** is current solution (may change to Vercel Blob later)

## Questions to Ask User
1. Do you have actual music files ready to upload?
2. What's your priority: playback, payments, or content?
3. Do you have brother photos and bios ready?
4. What's your target launch date?
5. Do you need help setting up Google Drive API?

---

**Last Updated:** Initial scaffold complete
**Status:** Ready for feature implementation
**Blockers:** None - all dependencies installed and configured
