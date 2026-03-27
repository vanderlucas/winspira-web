import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: '/WhatsApp%20Image%202026-03-27%20at%2013.30.29.jpeg',
      caption: t.gallery.img1
    },
    {
      src: '/WhatsApp%20Image%202026-03-27%20at%2013.30.48.jpeg',
      caption: t.gallery.img2
    },
    {
      src: '/WhatsApp%20Image%202026-03-27%20at%2013.32.18.jpeg',
      caption: t.gallery.img3
    },
    {
      src: '/WhatsApp%20Image%202026-03-27%20at%2013.33.17.jpeg',
      caption: t.gallery.img4
    },
    {
      src: '/WhatsApp%20Image%202026-03-27%20at%2013.33.53.jpeg',
      caption: t.gallery.img5
    },
    {
      src: '/WhatsApp%20Image%202026-03-27%20at%2013.39.28.jpeg',
      caption: t.gallery.img6
    }
  ];

  return (
    <section className="gallery-section bg-light" id="gallery">
      <div className="container">
        <h2 className="section-title text-center">{t.gallery.title}</h2>
        
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div key={idx} className="gallery-item group">
              <div className="gallery-img-wrapper">
                <img src={img.src} alt={img.caption} className="gallery-img" loading="lazy" />
              </div>
              <div className="gallery-overlay">
                <p className="gallery-caption">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
