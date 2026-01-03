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
      setStats({ count: result.count, total: result.total });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, stats, refetch: fetchProducts };
};