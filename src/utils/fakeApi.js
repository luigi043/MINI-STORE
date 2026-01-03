import { products } from '../data/products';

export const fakeApi = {
  getProducts: (options = {}) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const { category = 'all', maxPrice = 1000, search = '' } = options;
        
        let filteredProducts = products.filter(product => {
          const matchesCategory = category === 'all' || product.category === category;
          const matchesPrice = product.price <= maxPrice;
          const matchesSearch = !search || 
            product.name.toLowerCase().includes(search.toLowerCase());
          
          return matchesCategory && matchesPrice && matchesSearch;
        });

        resolve({
          data: filteredProducts,
          count: filteredProducts.length,
          total: products.length
        });
      }, 500);
    });
  },
  
  getProductById: (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find(p => p.id === parseInt(id));
        
        if (!product) {
          resolve({ data: null });
          return;
        }
        
        resolve({
          data: product,
          related: products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)
        });
      }, 300);
    });
  }
};
