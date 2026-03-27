import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Zap, Anchor } from 'lucide-react';

const Values: React.FC = () => {
  const { t } = useLanguage();

  const valuesList = [
    {
      icon: <ShieldCheck size={48} />,
      title: t.values.v1Title,
      desc: t.values.v1Desc
    },
    {
      icon: <Zap size={48} />,
      title: t.values.v2Title,
      desc: t.values.v2Desc
    },
    {
      icon: <Anchor size={48} />,
      title: t.values.v3Title,
      desc: t.values.v3Desc
    }
  ];

  return (
    <section className="values-section" id="values">
      <div className="container">
        <h2 className="section-title text-center text-white">{t.values.title}</h2>
        
        <div className="values-grid">
          {valuesList.map((val, idx) => (
            <div key={idx} className="value-card glass-effect">
              <div className="value-icon text-accent">{val.icon}</div>
              <h3 className="value-title">{val.title}</h3>
              <p className="value-desc">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
