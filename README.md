# DCCI Dadu — Modern Chamber Website

Professional Next.js website for Dadu Chamber of Commerce & Industry.

## Stack
- Next.js + React + TypeScript
- Tailwind CSS
- Motion animations
- Lucide icons
- Responsive / mobile-first UI
- SEO-ready metadata
- Vercel-ready

## Public asset folders
Upload approved DCCI assets manually into:
- `public/images/branding`
- `public/images/hero`
- `public/images/leadership`
- `public/images/committee`
- `public/images/events`
- `public/images/gallery`
- `public/images/news`
- `public/images/general`
- `public/documents/reports`
- `public/documents/forms`
- `public/documents/notices`
- `public/documents/circulars`
- `public/icons`

## Run locally
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
npm start
```

## Content note
The architecture intentionally avoids carrying forward outdated or potentially compromised content from the old site. Before production publication, replace editorial placeholders with approved DCCI content, confirm current office-bearer and committee records, upload real images/documents, and connect the contact form to an approved email/backend service.
