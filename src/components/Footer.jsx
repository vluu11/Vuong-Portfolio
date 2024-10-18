import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="text-center py-3" style={{ backgroundColor: '#2B303A', color: '#fff' }}>
      <p>© {new Date().getFullYear()} Vuong's Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
