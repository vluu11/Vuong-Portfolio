import { Link, useLocation } from 'react-router-dom';
import styles from '../assets/NavTabs.module.css';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className={`text-primary ${styles.navbarBg} ${styles.spicyRiceRegular}`}>
      <h1 className={` mx-auto p-2 inline-left ${styles.spicyRiceRegular}`}>Vuong's Portfolio</h1>
      <ul className= {`nav nav-tabs justify-content-end fs-2 ${styles.spicyRiceRegular}`}>
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            
            className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'} // Added class here
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
    
  );
}

export default NavTabs;
