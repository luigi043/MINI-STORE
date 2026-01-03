// In src/components/ProductCard/ProductCard.jsx
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, showQuickView = true }) => {
  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // In a real app, this would open a modal
    console.log('Quick view:', product.id);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  };

  return (
    <div className={styles.card} data-testid="product-card">
      <Link to={`/product/${product.id}`} className={styles.link}>
        <div className={styles.imageContainer}>
          <img 
            src={product.image} 
            alt={product.name}
            className={styles.image}
            loading="lazy"
          />
          {product.featured && (
            <div className={styles.featuredBadge}>Featured</div>
          )}
          {!product.inStock && (
            <div className={styles.outOfStock}>Out of Stock</div>
          )}
          {product.originalPrice && (
            <div className={styles.discountBadge}>
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </div>
          )}
        </div>
        
        <div className={styles.content}>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.category}>{product.category}</p>
          
          <div className={styles.ratingContainer}>
            <div className={styles.stars}>
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
              <span className={styles.ratingNumber}>{product.rating.toFixed(1)}</span>
            </div>
            <span className={styles.reviews}>({product.reviews})</span>
          </div>
          
          <div className={styles.priceContainer}>
            <span className={styles.price}>{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          
          {product.colors && product.colors.length > 0 && (
            <div className={styles.colorOptions}>
              {product.colors.slice(0, 3).map(color => (
                <div 
                  key={color}
                  className={styles.colorDot}
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
              {product.colors.length > 3 && (
                <span className={styles.moreColors}>+{product.colors.length - 3}</span>
              )}
            </div>
          )}
          
          <div className={styles.actionButtons}>
            <button 
              className={`${styles.button} ${!product.inStock ? styles.disabled : ''}`}
              disabled={!product.inStock}
              onClick={(e) => {
                e.preventDefault();
                console.log('Added to cart:', product.id);
              }}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            
            {showQuickView && (
              <button 
                className={styles.quickViewButton}
                onClick={handleQuickView}
                aria-label="Quick view"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;