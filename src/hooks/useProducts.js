// Update src/hooks/useProducts.js
import { useCallback, useEffect, useState } from 'react';
import { productService } from '../features/products/productService';

export const useProducts = (filters = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({ count: 0, total: 0 });

  const fetchProducts = useCallback(async (signal) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await productService.getProducts(filters, { signal });
      setProducts(result.data);
      setStats({ count: result.data.length, total: result.total });
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Unable to load products. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    const controller = new AbortController();
    fetchProducts(controller.signal);
    return () => controller.abort();
  }, [fetchProducts]);

  return { products, loading, error, stats, refetch: () => fetchProducts() };
};
