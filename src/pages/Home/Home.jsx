import { useFilter } from '../../hooks/useFilter';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductSkeleton from '../../components/Skeleton/ProductSkeleton';
import EmptyState from '../../components/EmptyState';
import ErrorMessage from '../../components/ErrorMessage';
import styles from './Home.module.css';

const Home = () => {
  const { filters } = useFilter();
  const { products, loading, error, stats, refetch } = useProducts(filters);
  const { clearFilters } = useFilter();

  // Handle different states
  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <ProductSkeleton />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <EmptyState
        title="No products found"
        message="Try adjusting your filters or search term"
        actionText="Clear Filters"
        onAction={clearFilters}
      />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Products</h1>
        <div className={styles.resultsInfo}>
          Showing {products.length} of {stats.total} products
        </div>
      </div>
      
      <div className={styles.productsGrid}>
        {products.map((product) => (
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
