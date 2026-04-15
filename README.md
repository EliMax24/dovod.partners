# pro-position-visitcard

Boutique international legal practice website for tech & TMT — React + Vite + TypeScript + Tailwind.

Live: http://91.186.219.238/

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS 3
- Framer Motion (scroll reveals + FAQ accordion)
- Lucide React (icons)

## Local development

```bash
npm install
npm run dev       # → http://localhost:5173
npm run build     # → dist/
```

## Structure

```
src/
├── App.tsx
├── index.css            Tailwind + base typography
├── data/content.ts      All page copy (nav, hero, expertise, cases, team, FAQ, contacts)
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── Stats.tsx        О практике (manifest)
    ├── Practices.tsx    Экспертиза (4 направления)
    ├── Stages.tsx       Как работаем + принципы
    ├── Cases.tsx
    ├── Team.tsx
    ├── FAQ.tsx
    ├── Contact.tsx      Форма: Имя / Задача / Как связаться
    ├── Footer.tsx
    └── Reveal.tsx       framer-motion scroll-reveal wrapper
```

## Deployment

Docker multi-stage (Node build → nginx serve) on port 80.

```bash
docker build -t pro-position-web:latest .
docker run -d --name pro-position-web --restart unless-stopped -p 80:80 pro-position-web:latest
```
