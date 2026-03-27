import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.values, href: '#values' },
    { name: t.nav.contact, href: '#contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <img src="/LOGO.jpeg" alt="W INSPIRA Logo" className="logo-img" />
          <span className="logo-text">W INSPIRA</span>
        </a>

        {/* Desktop Nav */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle Language">
            <Globe size={18} />
            <span className="lang-text">{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="mobile-only">
          <button className="lang-toggle mobile-lang" onClick={toggleLanguage} aria-label="Toggle Language">
            <span className="lang-text">{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>
          <button className="menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
