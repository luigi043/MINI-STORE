import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <svg className={styles.errorIcon} viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
        <h3 className={styles.errorTitle}>Something went wrong</h3>
        <p className={styles.errorMessage}>{message}</p>
        <div className={styles.errorActions}>
          <button onClick={onRetry} className={styles.retryButton}>
            Try Again
          </button>
          <button 
            onClick={() => window.location.href = '/'} 
            className={styles.homeButton}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
