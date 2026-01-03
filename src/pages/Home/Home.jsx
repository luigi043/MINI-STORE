import { useMemo } from 'react';
import { useFilter } from '../../context/FilterContext';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductSkeleton from '../../components/Skeleton/ProductSkeleton';
import EmptyState from '../../components/EmptyState';
import ErrorMessage from '../../components/ErrorMessage';
import styles from './Home.module.css';

const Home = () => {
  const { filters } = useFilter();
  const { products, loading, error, stats } = useProducts(filters);

  // Sort products based on selected sort option
  const sortedProducts = useMemo(() => {
    const productsCopy = [...products];
    
    switch (filters.sort) {
      case 'price-asc':
        return productsCopy.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return productsCopy.sort((a, b) => b.price - a.price);
      case 'rating':
        return productsCopy.sort((a, b) => b.rating - a.rating);
      case 'name':
        return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return productsCopy;
    }
  }, [products, filters.sort]);

  // Handle different states
  if (error) {
    return <ErrorMessage message={error} onRetry={() => window.location.reload()} />;
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <ProductSkeleton />
      </div>
    );
  }

  if (sortedProducts.length === 0) {
    return (
      <EmptyState
        title="No products found"
        message="Try adjusting your filters or search term"
        actionText="Clear Filters"
        onAction={() => window.location.reload()}
      />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Products</h1>
        <div className={styles.resultsInfo}>
          Showing {sortedProducts.length} of {stats.total} products
        </div>
      </div>
      
      <div className={styles.productsGrid}>
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className={styles.paginationInfo}>
        <button className={styles.loadMoreButton} disabled>
          Showing all matching products
        </button>
      </div>
    </div>
  );
};

export default Home;
