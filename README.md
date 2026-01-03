# 📦 Mini Store - React Frontend Demo

A realistic e-commerce store frontend built with React, featuring a complete product catalog with filters, search, and detailed product pages. This is a **portfolio-ready project** demonstrating modern React patterns, responsive design, and real-world UX concerns.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.5-purple)
![React Router](https://img.shields.io/badge/React_Router-6.15.0-red)

## ✨ Features

### 🛍️ Core Features
- **Product Grid**: Responsive product listing with card layout
- **Product Details**: Comprehensive product pages with images and specifications
- **Smart Filtering**: Category, price range, and search filters
- **Real-time Search**: Debounced search with instant results
- **Sorting**: Multiple sorting options (price, rating, name)


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
# MINI-STORE
