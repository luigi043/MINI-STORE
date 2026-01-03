import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fakeApi } from '../../utils/fakeApi';
import ProductCard from '../../components/ProductCard/ProductCard';
import Skeleton from '../../components/Skeleton/ProductSkeleton';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const result = await fakeApi.getProductById(id);
        setProduct(result.data);
        setRelated(result.related);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    // Simulate adding to cart
    alert(`Added ${product.name} to cart!`);
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <Skeleton count={1} />
      </div>
    );
  }

  if (error || !product) {
    return (
      <ErrorMessage 
        message={error || "Product not found"} 
        onRetry={() => navigate('/')}
      />
    );
  }

  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumb}>
        <Link to="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>{product.name}</span>
      </nav>

      <div className={styles.productDetail}>
        {/* Product Images */}
        <div className={styles.imageSection}>
          <div className={styles.mainImage}>
            <img 
              src={product.image} 
              alt={product.name}
              className={styles.productImage}
              loading="lazy"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className={styles.infoSection}>
          <h1 className={styles.productName}>{product.name}</h1>
          
          <div className={styles.productMeta}>
            <span className={styles.category}>{product.category}</span>
            <div className={styles.rating}>
              <span className={styles.stars}>
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </span>
              <span className={styles.reviews}>({product.reviews} reviews)</span>
            </div>
          </div>

          <div className={styles.priceSection}>
            <span className={styles.price}>${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className={styles.description}>{product.description}</p>

          {/* Product Options */}
          {product.sizes && (
            <div className={styles.optionSection}>
              <h3 className={styles.optionTitle}>Size</h3>
              <div className={styles.options}>
                {product.sizes.map((size) => (
                  <button key={size} className={styles.optionButton}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.colors && (
            <div className={styles.optionSection}>
              <h3 className={styles.optionTitle}>Color</h3>
              <div className={styles.options}>
                {product.colors.map((color) => (
                  <button 
                    key={color} 
                    className={styles.colorOption}
                    style={{ backgroundColor: color.toLowerCase() }}
                    aria-label={`Color: ${color}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart */}
          <div className={styles.actionSection}>
            <button 
              className={`${styles.addToCartButton} ${!product.inStock ? styles.disabled : ''}`}
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <button className={styles.wishlistButton}>
              <svg viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              Save for later
            </button>
          </div>

          {/* Product Details */}
          <div className={styles.detailsSection}>
            <h3 className={styles.detailsTitle}>Details</h3>
            <ul className={styles.detailsList}>
              <li><strong>Category:</strong> {product.category}</li>
              <li><strong>Availability:</strong> {product.inStock ? 'In Stock' : 'Out of Stock'}</li>
              <li><strong>SKU:</strong> {product.id.toString().padStart(6, '0')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>Related Products</h2>
          <div className={styles.relatedGrid}>
            {related.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;