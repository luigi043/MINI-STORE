// In src/context/FilterContext.jsx
import { useCallback, useMemo, useState } from 'react';
import { FilterContext } from './filter-context';

const DEFAULT_FILTERS = {
  category: 'all',
  minPrice: 0,
  maxPrice: 1000,
  search: '',
  sort: 'default',
  showOutOfStock: true,
  minRating: 0,
};

export const FilterProvider = ({ children }) => {
  const [category, setCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(DEFAULT_FILTERS.maxPrice);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [showOutOfStock, setShowOutOfStock] = useState(true);
  const [minRating, setMinRating] = useState(0);

  const clearFilters = useCallback(() => {
    setCategory(DEFAULT_FILTERS.category);
    setMaxPrice(DEFAULT_FILTERS.maxPrice);
    setSearchQuery(DEFAULT_FILTERS.search);
    setSortBy(DEFAULT_FILTERS.sort);
    setShowOutOfStock(DEFAULT_FILTERS.showOutOfStock);
    setMinRating(DEFAULT_FILTERS.minRating);
  }, []);

  const value = useMemo(
    () => ({
      filters: {
        category,
        minPrice: DEFAULT_FILTERS.minPrice,
        maxPrice,
        search: searchQuery,
        sort: sortBy,
        showOutOfStock,
        minRating,
      },
      setCategory,
      setMaxPrice,
      setSearchQuery,
      setSortBy,
      setShowOutOfStock,
      setMinRating,
      clearFilters,
    }),
    [category, clearFilters, maxPrice, minRating, searchQuery, showOutOfStock, sortBy],
  );

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};
