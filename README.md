# 📦 Mini Store - React Frontend Demo

![alt text](image.png)
A realistic e-commerce store frontend built with React, featuring a complete product catalog with filters, search, and detailed product pages. This is a **portfolio-ready project** demonstrating modern React patterns, responsive design, and real-world UX concerns.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.5-purple)
![React Router](https://img.shields.io/badge/React_Router-6.15.0-red)

## 🚀 Live Demo

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/luigi043/mini-store)

## ✨ Features

### 🛍️ Core Features
- **Product Grid**: Responsive product listing with card layout
- **Product Details**: Comprehensive product pages with images and specifications
- **Smart Filtering**: Category, price range, and search filters
- **Real-time Search**: Debounced search with instant results
- **Sorting**: Multiple sorting options (price, rating, name)

### 🎨 UX Excellence
- **Loading States**: Skeleton loaders for smooth perceived performance
- **Error Handling**: Graceful error states with retry functionality
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- **Performance**: Lazy loading images, optimized bundles

### 🔧 Technical Highlights
- **State Management**: Context API for global filters
- **Custom Hooks**: Reusable logic for data fetching
- **Fake API**: Simulated API with delays and errors
- **CSS Modules**: Scoped styling with CSS Modules
- **Code Organization**: Modular, reusable components

## 📁 Project Structure

```
mini-store/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ProductCard/     # Product display card
│   │   ├── Header/          # Navigation header
│   │   ├── SearchBar/       # Search functionality
│   │   ├── FilterPanel/     # Filter controls
│   │   ├── Skeleton/        # Loading skeletons
│   │   ├── Layout/          # Main layout wrapper
│   │   ├── EmptyState/      # Empty results UI
│   │   └── ErrorMessage/    # Error display components
│   │
│   ├── pages/               # Route-based pages
│   │   ├── Home/           # Product listing page
│   │   ├── ProductDetail/  # Single product page
│   │   └── NotFound/       # 404 error page
│   │
│   ├── context/            # React Context providers
│   │   └── FilterContext.jsx
│   │
│   ├── hooks/              # Custom React hooks
│   │   └── useProducts.js
│   │
│   ├── utils/              # Utility functions
│   │   └── fakeApi.js
│   │
│   ├── data/               # Mock data
│   │   └── products.js
│   │
│   └── assets/             # Static assets
│       └── images/
```

##  Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **React Router 6** - Client-side routing
- **CSS Modules** - Scoped styling
- **Context API** - State management

##  Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone and setup**
```bash
# Create project
npm create vite@latest mini-store -- --template react
cd mini-store

# Install dependencies
npm install react-router-dom

# Start development server
npm run dev
```

2. **Quick setup (one command)**
```bash
npm create vite@latest mini-store -- --template react && cd mini-store && npm install react-router-dom && npm run dev
```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Format code with Prettier
npm run format

# Lint code
npm run lint
```

## 🔗 Useful Links

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/en/main)
- [CSS Modules](https://github.com/css-modules/css-modules)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/luigi043/mini-store)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy the dist folder to Netlify
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://luigi043.github.io/mini-store",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

## 🎯 Learning Outcomes

By building this project, you'll master:

1. **React Fundamentals**: Components, props, state, hooks
2. **Routing**: Dynamic routes, nested routes, 404 handling
3. **State Management**: Context API, custom hooks
4. **Performance**: Code splitting, lazy loading, debouncing
5. **UX Patterns**: Loading states, error boundaries, empty states
6. **Responsive Design**: CSS Grid, Flexbox, media queries
7. **Build Tools**: Vite configuration, production builds

---

##  Contact

For questions or feedback, feel free to reach out:

- **GitHub**: [@luigi043](https://github.com/luigi043)
- **Portfolio**: [luigi043](https://https://luigi043.github.io/portfolio/)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

**⭐ If you find this project helpful, please give it a star!**

## Quick Deploy Links

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/luigi043/mini-store)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/luigi043/mini-store)

---
