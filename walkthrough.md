EnFix Website Walkthrough — v3
A premium, minimalist website for EnFix — an AI code fixing consulting firm. Featuring immersive full-page sections, typing animations, and refined interactions inspired by high-end design aesthetics.

Latest Design Refinements supported
1. Refined Animations
Typing Animation: Smoother, slower typing effect (preventing layout shifts) with a fading cursor.
Page Transitions: Slower, more deliberate slide-up animation between pages (0.6s).
Hover Effects: Strikethrough animation for navigation links instead of underlines.
2. Layout Adjustments
Top Alignment: Full-page heroes and slides now align content to the top (Tacto style) rather than center by default.
Scroll Indicators: Added "Scroll ↓" indicator to the homepage hero and internal slides.
3. Contact Form Redesign
Transparent Style: Input fields are transparent with black borders, matching the minimalist aesthetic.
Softer Button: Submit button has a refined outline style that fills on hover.
Restored & Verified Pages
Homepage (/)
Hero: Top-aligned, typing "enfix.", scroll indicator.
Content: Rotating words, navigation blocks, about, news.
What We Do (/whatwedo)
Hero: Typing "what we do."
Slides: 6 full-page services (Debug, Refactor, etc.)
Layout: Top-aligned headers, standard clean boxes for details (no emojis).
How It Works (/howitworks)
Hero: Typing "how it works."
Slides: 4 full-page steps (Submit, Diagnose, Fix, Deploy).
Layout: Top-aligned headers, clean detail boxes.
Contact (/contact)
Hero: Typing "contact."
Form: Tacto-style transparent inputs, black borders, soft interactions.
File Structure & key components
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx        # Strikethrough hovers
│   │   ├── FullPageHero.tsx  # Top-aligned, typing, scroll arrow
│   │   ├── FullPageSlide.tsx # Top-aligned, typing trigger
│   │   ├── TypeWriter.tsx    # Slower, smooth typing
│   │   └── ...
│   ├── page.tsx              # Homepage
│   ├── whatwedo/page.tsx     # Services slides
│   ├── howitworks/page.tsx   # Process slides
│   ├── contact/page.tsx      # Tacto-style form
│   └── ...
Run Locally
The server is currently running on port 3001:

http://localhost:3001
If you need to restart:

npm run dev -- -p 3001
Deployment
Ready to deploy to Vercel:

vercel