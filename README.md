# Aarav Uniyal — Portfolio

A clean, minimal developer portfolio built with React, Tailwind CSS, and Vite.

**Live:** [Coming soon — deploy on Vercel]

---

## ✨ Features

- **Split-panel layout** — Fixed left sidebar with name, nav & socials; scrollable right content
- **6 Accent color themes** — Indigo, Cyan, Emerald, Rose, Amber, Violet (persisted in localStorage)
- **Cursor spotlight** — Subtle radial gradient follows your mouse
- **Intersection Observer** — Navigation highlights the active section on scroll
- **Hover cards** — Experience & project cards tint on hover
- **Fully responsive** — Mobile-first with sticky section headings
- **Real data** — All content sourced from actual resume

## 📋 Sections

| Section | Content |
|---------|---------|
| **About** | BCA student at Yenepoya University, former TCS iON DevOps Intern |
| **Experience** | DevOps Intern — TCS iON (Nov 2025 – Feb 2026) |
| **Projects** | Cricket Ground Booking Platform, TaskiFlow |
| **Certifications** | 4 certifications from Coursera, TCS iON, UIUC |

## 🛠️ Tech Stack

- **Frontend:** React 18, Tailwind CSS 3
- **Build:** Vite 5
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/SapotaDA/port.git
cd port

# Install
npm install

# Dev server
npm run dev

# Production build
npm run build
```

## 📁 Project Structure

```
src/
├── App.jsx                  # Main layout (split-panel, all sections)
├── main.jsx                 # Entry point
├── styles/
│   └── index.css            # Global styles, hover cards, theme system
├── contexts/
│   └── ThemeContext.jsx      # Accent color picker (6 presets)
└── components/
    ├── canvas/
    │   ├── Stars.jsx         # Ambient star background
    │   └── HeroCanvas.jsx    # 3D hero element
    └── sections/             # (Legacy — sections now inline in App.jsx)
```

## 🎨 Changing Accent Color

Click any color dot in the left sidebar under "Theme". Your choice is saved to `localStorage` and persists across sessions.

## 📄 Adding Your Resume

Place your resume PDF in the `public/` folder:

```
public/
└── Aarav_Uniyal_Resume.pdf
```

The "View Full Résumé" link in the Experience section will automatically point to it.

## 🌐 Deploying to Vercel

1. Push to GitHub (already done)
2. Go to [vercel.com](https://vercel.com) → Import your repo
3. Framework: **Vite** (auto-detected)
4. Click **Deploy**

## 📬 Contact

- **Email:** aaravuniyal3@gmail.com
- **LinkedIn:** [linkedin.com/in/aaravuniyal](https://linkedin.com/in/aaravuniyal)
- **GitHub:** [github.com/SapotaDA](https://github.com/SapotaDA)

---

Built with ❤️ by Aarav Uniyal
