import { useState } from 'react';
import Header from '../Header/Header';
import FilterPanel from '../FilterPanel/FilterPanel';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Header 
        onFilterToggle={() => setMobileFiltersOpen(!mobileFiltersOpen)}
      />
      
      <div className={styles.main}>
        <aside className={`${styles.sidebar} ${mobileFiltersOpen ? styles.sidebarOpen : ''}`}>
          <FilterPanel />
          <button 
            className={styles.closeFilters}
            onClick={() => setMobileFiltersOpen(false)}
          >
            Close Filters
          </button>
        </aside>
        
        <main className={styles.content}>
          {children}
        </main>
      </div>
      
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Mini Store - A React Demo Project</p>
        <p className={styles.disclaimer}>
          This is a front-end demo project. Products and data are simulated.
        </p>
      </footer>
    </div>
  );
};

export default Layout;