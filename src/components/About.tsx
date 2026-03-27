import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Package, Activity } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Activity size={32} />,
      title: t.stats.productionTitle,
      value: t.stats.productionValue
    },
    {
      icon: <Package size={32} />,
      title: t.stats.bagsTitle,
      value: t.stats.bagsValue
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="lead">{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            
            <div className="brand-box">
              <span className="brand-name">Son & Vra</span>
              <p>{t.about.brand}</p>
            </div>
          </div>
          
          <div className="about-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-title">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
