# ACTION TAILOR

A static website for **Action Tailor**, a men's tailoring shop in Navi Mumbai, Maharashtra — built with plain HTML/CSS/JS and hosted on GitHub Pages, with a Firebase-powered admin panel so the shop owner can update the gallery and services without touching code.

🔗 **Live site:** https://mrtosif222.github.io/actiontailor/

## Features

- Responsive single-page site — hero, services, gallery, about, and contact sections
- Admin panel to add/delete gallery photos and services in real time
- Firebase Authentication — only the logged-in shop owner can edit content
- Firebase Firestore — stores gallery and service entries, synced live to the site
- Falls back to default sample content when no custom entries exist yet

## Tech Stack

- HTML, CSS, JavaScript (no build tools/frameworks)
- [Firebase](https://firebase.google.com/) — Authentication + Firestore
- GitHub Pages (deployed via GitHub Actions, see `.github/workflows/static.yml`)

## Project Structure

```
├── index.html              # Main website
├── admin.html               # Admin panel (login + manage gallery/services)
├── js/
│   └── firebase-config.js   # Firebase project configuration
└── .github/workflows/
    └── static.yml            # GitHub Pages deployment workflow
```

## Managing Content

1. Go to the admin panel (URL known only to the site owner) and log in with the admin email/password.
2. **Add Gallery Photo** — paste an image URL (upload photos via [imgbb.com](https://imgbb.com), copy the *direct* image link), add a title/subtitle, and submit.
3. **Add Service** — paste an image URL, title, and description.
4. Delete any entry from the "Current" lists below each form.
5. Changes appear on the live site within seconds.

> Note: once at least one gallery/service entry exists, it replaces the default sample content shown on the homepage.

## Deployment

Pushes to the `main` branch are automatically built and deployed to GitHub Pages via GitHub Actions.

```bash
git add .
git commit -m "Update content"
git push
```

## License

© 2026 Action Tailor. All rights reserved.

## Author

**Tosif Rayan** [GitHub](https://github.com/mrtosif222)
