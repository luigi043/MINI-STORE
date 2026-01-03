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
  const [priceRange, setPriceRange] = useState(1000);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const clearFilters = useCallback(() => {
    setCategory('all');
    setPriceRange(1000);
    setSearchQuery('');
    setSortBy('default');
  }, []);

  const value = {
    filters: {
      category,
      maxPrice: priceRange,
      search: searchQuery,
      sort: sortBy
    },
    setCategory,
    setPriceRange,
    setSearchQuery,
    setSortBy,
    clearFilters
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};