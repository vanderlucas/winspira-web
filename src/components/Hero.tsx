import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title animate-fade-up">{t.hero.title}</h1>
        <p className="hero-subtitle animate-fade-up delay-1">{t.hero.subtitle}</p>
        
        <div className="hero-actions animate-fade-up delay-2">
          <a href="#about" className="btn btn-primary">{t.hero.cta}</a>
          <a href="#contact" className="btn btn-secondary">{t.nav.contact}</a>
        </div>
      </div>
      
      <div className="scroll-indicator animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
