import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Factory, Truck, MapPin } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const servicesList = [
    {
      icon: <Factory size={40} />,
      title: t.services.production,
      desc: t.services.productionDesc
    },
    {
      icon: <Truck size={40} />,
      title: t.services.barranqueras,
      desc: t.services.barranquerasDesc
    },
    {
      icon: <MapPin size={40} />,
      title: t.services.exaltacion,
      desc: t.services.exaltacionDesc
    }
  ];

  return (
    <section className="services-section bg-light" id="services">
      <div className="container">
        <h2 className="section-title text-center">{t.services.title}</h2>
        
        <div className="services-grid">
          {servicesList.map((service, idx) => (
            <div key={idx} className="service-card hover-lift">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
