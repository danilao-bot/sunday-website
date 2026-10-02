# Sunday Ojima Onalo — Official Website

A luxury, editorial-grade personal portfolio and brand showcase for **Sunday Ojima Onalo** (known creatively as Sunny) — Nigerian businessman, poet, motivational speaker, and mentor with over two decades in marketing leadership, insurance, and youth empowerment.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features & Architecture

- **Editorial Luxury Aesthetic:** High-contrast warm palette (`chalk: #FBF7EC`, `ink: #0F1A24`, `amber: #F2A20C`) featuring Playfair Display serif typography paired with Plus Jakarta Sans body font.
- **Responsive Layout:** Dynamic architectural hero order automatically places portrait photo first on mobile/tablet viewports before flowing into text and action CTAs.
- **Scroll Reveal Animations:** Smooth, performant scroll animations using custom viewport triggers with `mounted` and `prefers-reduced-motion` accessibility fallbacks.
- **Interactive 20-Year Milestone Rail:** A 4-phase interactive milestone journey component detailing 20+ years of commerce, marketing leadership, IPMAN fellowship, and youth empowerment.
- **Custom Brand Loader:** Geometric 2×2 square pulse indicator matching the brand palette for seamless page transitions.
- **Clean SVG Icon System:** Ultra-refined vector SVG icons (`ArrowRight`, `ArrowUpRight`) replacing system glyphs to ensure high-resolution rendering across iOS, Android, and desktop.
- **Sub-pages:** Dedicated routes for `/story`, `/poetry`, `/speaking`, and `/mentorship`.

---

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **Animations:** Framer Motion
- **Icons:** Custom Inline Vector SVG System
- **Deployment:** Vercel Ready

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or later
- npm / pnpm / yarn

### Installation

```bash
git clone https://github.com/danilao-bot/sunday-website.git
cd sunday-website
npm install
```

### Local Development

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

To access on local network devices (e.g. mobile phone testing):

```bash
npm run dev -- -H 0.0.0.0
```

### Production Build

```bash
npm run build
npm run start
```

---

## 📦 Deployment on Vercel

This repository is optimized for one-click deployment on [Vercel](https://vercel.com).

1. Push your changes to GitHub.
2. Import the `sunday-website` repository on Vercel.
3. Vercel automatically detects Next.js framework settings.
4. Deploy!

---

## 📄 License

© 2026 Sunday Ojima Onalo. All rights reserved.
