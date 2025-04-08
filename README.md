# 🧱 Newton Design System · React

A reusable React component library with design tokens and Tailwind-powered components, built with Vite, Tailwind CSS, CVA, and Storybook. Share your design language across projects with ease.

[![npm version](https://img.shields.io/npm/v/@newton-design-system/react.svg)](https://www.npmjs.com/package/@newton-design-system/react)
[![license](https://img.shields.io/npm/l/@newton-design-system/react.svg)](LICENSE)

---

## ✨ Features

- 📦 Ready-to-use React components
- 🎨 Centralized design tokens (colors, spacing, typography, etc.)
- ⚡ Tailwind CSS + [CVA](https://cva.style/) for flexible variants
- 📚 Storybook for documentation and testing
- �� Lightweight, tree-shakeable, and optimized for performance
- 🔧 Easily extendable with your own theme
- ✅ Compatible with:
  - Vite + React
  - Next.js 15 (Pages Router and App Router)
  - Next.js 15 + App Router + Turbopack

---

## 🚀 Installation

```bash
npm install @newton-design-system/react
```

> ⚠️ This library uses `react`, `react-dom`, and `tailwindcss` as peer dependencies. Make sure they’re installed in your project.

---

## 🛠️ Usage

```tsx
import '@newton-design-system/react/styles.css'
import { Button } from '@newton-design-system/react'

export default function App() {
  return <Button variant="default">Click me</Button>
}
```

---

## 📚 Documentation

You can browse all available components and tokens in the [📚 Storybook](#)

---

## 🎨 Design Tokens

The design system includes tokens for:

- Colors
- Spacing
- Font Sizes
- Font Weights
- Fonts
- Border Radius
- Line Heights

These tokens are mapped to Tailwind using the config file, so you can use them in both your components and custom styles.

---

## 📦 Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [CVA (Class Variance Authority)](https://cva.style/)
- [Storybook](https://storybook.js.org/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🤝 Contributing

Coming soon! For now, feel free to open issues or discussions.

---

## 📄 License

MIT © Newton Duarte Cavalcanti
