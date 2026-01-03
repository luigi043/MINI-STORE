import styles from './EmptyState.module.css';

const EmptyState = ({ title, message, actionText, onAction }) => {
  return (
    <div className={styles.emptyContainer}>
      <div className={styles.emptyContent}>
        <svg className={styles.emptyIcon} viewBox="0 0 24 24">
          <path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"/>
        </svg>
        <h3 className={styles.emptyTitle}>{title}</h3>
        <p className={styles.emptyMessage}>{message}</p>
        {onAction && (
          <button onClick={onAction} className={styles.emptyAction}>
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
