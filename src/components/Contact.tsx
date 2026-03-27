import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: <MapPin size={24} />, text: t.contact.address },
    { icon: <Phone size={24} />, text: t.contact.phone },
    { icon: <Mail size={24} />, text: t.contact.email }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="container text-center">
        <h2 className="section-title text-center text-white">{t.contact.title}</h2>
        
        <div className="contact-card glass-effect">
          <ul className="contact-list">
            {contactInfo.map((info, idx) => (
              <li key={idx} className="contact-item">
                <span className="contact-icon text-accent">{info.icon}</span>
                <span className="contact-text">{info.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
