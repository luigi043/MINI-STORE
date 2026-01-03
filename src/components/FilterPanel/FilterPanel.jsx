import { useFilter } from '../../context/FilterContext';
import { categories } from '../../data/products';
import styles from './FilterPanel.module.css';

const FilterPanel = () => {
  const { 
    filters, 
    setCategory, 
    setPriceRange, 
    setSortBy,
    clearFilters 
  } = useFilter();

  return (
    <div className={styles.filterPanel}>
      <div className={styles.header}>
        <h3 className={styles.title}>Filters</h3>
        <button 
          onClick={clearFilters}
          className={styles.clearButton}
        >
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Category</h4>
        <div className={styles.categoryList}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.categoryButton} ${filters.category === cat.id ? styles.active : ''}`}
              onClick={() => setCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h4 className={styles.sectionTitle}>Price</h4>
          <span className={styles.priceValue}>Up to ${filters.maxPrice}</span>
        </div>
        <input
          type="range"
          min="10"
          max="1000"
          step="10"
          value={filters.maxPrice}
          onChange={(e) => setPriceRange(parseInt(e.target.value))}
          className={styles.priceSlider}
          aria-label="Maximum price"
        />
        <div className={styles.priceLabels}>
          <span>$10</span>
          <span>$500</span>
          <span>$1000</span>
        </div>
      </div>

      {/* Sort Options */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Sort By</h4>
        <select
          value={filters.sort}
          onChange={(e) => setSortBy(e.target.value)}
          className={styles.sortSelect}
          aria-label="Sort products"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>

      {/* Active Filters Display */}
      <div className={styles.activeFilters}>
        {filters.category !== 'all' && (
          <span className={styles.activeFilter}>
            Category: {categories.find(c => c.id === filters.category)?.name}
            <button onClick={() => setCategory('all')} className={styles.removeFilter}>×</button>
          </span>
        )}
        {filters.maxPrice < 1000 && (
          <span className={styles.activeFilter}>
            Max: ${filters.maxPrice}
            <button onClick={() => setPriceRange(1000)} className={styles.removeFilter}>×</button>
          </span>
        )}
        {filters.search && (
          <span className={styles.activeFilter}>
            Search: {filters.search}
            <button onClick={() => setSearchQuery('')} className={styles.removeFilter}>×</button>
          </span>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;