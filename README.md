# Decision Tree Consulting — Website (Minimal / Readable redesign)

## Run
    npm i
    npm run dev        # local preview
    npm run build      # production build -> /dist

## What changed in this version
- Palette (v4 "paper"): warm cream (#FAF9F5), sand panels (#F3F1EA, #EEEBE1), warm near-black text (#1F1E1B), warm grey body copy (#5E5B53) and one clay-orange accent (#B5502D, decorative #D97757).
- Typography: Newsreader (calm editorial serif) for headings, Inter (neutral, very readable) for body. Labels are sentence case, not all-caps. Softer, rounder corners.
- Spacing: section padding cut roughly in half (no big empty gaps); consistent vertical rhythm; narrower 1200px content width.
- Layout: calmer hero (text + project image), pill buttons, rounded form fields (16px text - no zoom on iPhones), sentence-case labels.
- Motion (subtle): fade-up on scroll, hero entrance, animated nav underline, slow client strip. Respects "reduce motion" settings.
- Content: all copy now matches Decision_Tree_Consulting_Website_Content_.docx (added Home "From clarity to expression" section, updated hero, About, Blueprint and Insights copy).
- Images: hero and About use clean SVG illustrations; case-study covers are shown uncropped.
- Tokens live in src/styles/theme.css (colours) and src/styles/design.css (fonts, motion).
