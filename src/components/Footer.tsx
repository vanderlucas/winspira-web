import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <img src="/LOGO.jpeg" alt="W INSPIRA Logo" />
          <span>W INSPIRA S.R.L.</span>
        </div>
        <p className="footer-rights text-muted">
          &copy; {year} W INSPIRA S.R.L. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
