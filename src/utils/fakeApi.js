// Simulate API delays and errors for realistic UX
export const fakeApi = {
  getProducts: (options = {}) => {
    const { category = 'all', maxPrice = 1000, search = '' } = options;
    
    return new Promise((resolve, reject) => {
      // Simulate network delay (0.5-1.5 seconds)
      const delay = Math.random() * 1000 + 500;
      
      setTimeout(() => {
        // Simulate random API failure (5% chance)
        if (Math.random() < 0.05) {
          reject(new Error('Failed to fetch products. Please try again.'));
          return;
        }
        
        // Filter products based on options
        const filteredProducts = products.filter(product => {
          const matchesCategory = category === 'all' || product.category === category;
          const matchesPrice = product.price <= maxPrice;
          const matchesSearch = search === '' || 
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase());
          
          return matchesCategory && matchesPrice && matchesSearch;
        });
        
        resolve({
          data: filteredProducts,
          count: filteredProducts.length,
          total: products.length
        });
      }, delay);
    });
  },
  
  getProductById: (id) => {
    return new Promise((resolve, reject) => {
      const delay = Math.random() * 1000 + 300;
      
      setTimeout(() => {
        const product = products.find(p => p.id === parseInt(id));
        
        if (!product) {
          reject(new Error('Product not found'));
          return;
        }
        
        // Simulate related products
        const related = products
          .filter(p => p.category === product.category && p.id !== product.id)
          .slice(0, 3);
        
        resolve({
          data: product,
          related: related
        });
      }, delay);
    });
  }
};