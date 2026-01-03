// Update src/hooks/useProducts.js
import { useState, useEffect, useCallback } from 'react';
import { fakeApi } from '../utils/fakeApi';

export const useProducts = (filters = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({ count: 0, total: 0 });

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await fakeApi.getProducts(filters);
      setProducts(result.data);
      setStats({ 
        count: result.data.length, 
        total: result.meta?.total || result.data.length 
      });
    } catch (err) {
      console.error('API Error:', err);
      // Fallback to local data if API fails
      const { products } = await import('../data/products');
      const filteredProducts = products.filter(product => {
        const matchesCategory = filters.category === 'all' || product.category === filters.category;
        const matchesPrice = product.price <= (filters.maxPrice || 1000);
        const matchesSearch = !filters.search || 
          product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          (product.description && product.description.toLowerCase().includes(filters.search.toLowerCase()));
        
        return matchesCategory && matchesPrice && matchesSearch;
      });
      
      setProducts(filteredProducts);
      setStats({ count: filteredProducts.length, total: products.length });
      setError('Using offline data. Some features may be limited.');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, stats, refetch: fetchProducts };
};