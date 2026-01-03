import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.css';

const Header = ({ onFilterToggle }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>MiniStore</span>
          </Link>
          <button 
            className={styles.mobileFilterButton}
            onClick={onFilterToggle}
            aria-label="Toggle filters"
          >
            <svg className={styles.filterIcon} viewBox="0 0 24 24">
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
            </svg>
            <span>Filters</span>
          </button>
        </div>
        
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
        
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
          <div className={styles.cartIcon} aria-label="Cart">
            <svg viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span className={styles.cartCount}>0</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;