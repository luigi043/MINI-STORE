import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
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
          {!product.inStock && (
            <div className={styles.outOfStock}>Out of Stock</div>
          )}
        </div>
        
        <div className={styles.content}>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.category}>{product.category}</p>
          
          <div className={styles.rating}>
            <span className={styles.stars}>{"★".repeat(Math.floor(product.rating))}</span>
            <span className={styles.ratingText}>({product.reviews})</span>
          </div>
          
          <div className={styles.priceContainer}>
            <span className={styles.price}>${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          
          <button 
            className={`${styles.button} ${!product.inStock ? styles.disabled : ''}`}
            disabled={!product.inStock}
            onClick={(e) => {
              e.preventDefault();
              // Simulate add to cart
              console.log('Added to cart:', product.id);
            }}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;