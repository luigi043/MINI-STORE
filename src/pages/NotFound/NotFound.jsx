import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.message}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className={styles.actions}>
          <Link to="/" className={styles.primaryButton}>
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className={styles.secondaryButton}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
