// Create src/utils/devApi.js for development
import { products, categories } from '../data/products';

export const devApi = {
  getProducts: (options = {}) => {
    console.log('📦 Dev API: Fetching products with options:', options);
    
    return new Promise((resolve) => {
      // Immediate response for development
      setTimeout(() => {
        const { category = 'all', maxPrice = 1000, search = '', sort = 'default' } = options;
        
        let filteredProducts = products.filter(product => {
          const matchesCategory = category === 'all' || product.category === category;
          const matchesPrice = product.price <= maxPrice;
          const matchesSearch = !search || 
            product.name.toLowerCase().includes(search.toLowerCase());
          
          return matchesCategory && matchesPrice && matchesSearch;
        });

        // Apply sorting
        switch (sort) {
          case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
          case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
          case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
          case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
          default:
            // Default sort
            filteredProducts.sort((a, b) => b.rating - a.rating);
        }

        resolve({
          data: filteredProducts,
          meta: {
            total: filteredProducts.length,
            category: category,
            search: search
          }
        });
      }, 100); // Very fast response for dev
    });
  },
  
  getProductById: (id) => {
    console.log('📦 Dev API: Fetching product:', id);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find(p => p.id === parseInt(id));
        
        if (!product) {
          resolve({ data: null, error: 'Product not found' });
          return;
        }
        
        // Get related products
        const related = products
          .filter(p => p.category === product.category && p.id !== product.id)
          .slice(0, 3);
        
        resolve({
          data: product,
          related: related
        });
      }, 50);
    });
  }
};