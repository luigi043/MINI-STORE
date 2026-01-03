// In src/context/FilterContext.jsx
import { createContext, useState, useContext, useCallback } from 'react';

const FilterContext = createContext();

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};

export const FilterProvider = ({ children }) => {
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [showOutOfStock, setShowOutOfStock] = useState(true);
  const [minRating, setMinRating] = useState(0);

  const clearFilters = useCallback(() => {
    setCategory('all');
    setPriceRange([0, 1000]);
    setSearchQuery('');
    setSortBy('default');
    setShowOutOfStock(true);
    setMinRating(0);
  }, []);

  const value = {
    filters: {
      category,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      search: searchQuery,
      sort: sortBy,
      showOutOfStock,
      minRating
    },
    setCategory,
    setPriceRange,
    setSearchQuery,
    setSortBy,
    setShowOutOfStock,
    setMinRating,
    clearFilters
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};