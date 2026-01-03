import styles from './ProductSkeleton.module.css';

const ProductSkeleton = ({ count = 6 }) => {
  return (
    <div className={styles.grid}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.image}></div>
          <div className={styles.content}>
            <div className={styles.title}></div>
            <div className={styles.category}></div>
            <div className={styles.rating}></div>
            <div className={styles.price}></div>
            <div className={styles.button}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;
