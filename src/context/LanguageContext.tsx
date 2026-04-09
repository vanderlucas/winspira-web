import React, { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'es' | 'en';

type Translations = {
  [key in Language]: {
    nav: {
      about: string;
      services: string;
      values: string;
      contact: string;
    };
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    about: {
      title: string;
      p1: string;
      p2: string;
      p3: string;
      brand: string;
    };
    stats: {
      productionTitle: string;
      productionValue: string;
      bagsTitle: string;
      bagsValue: string;
      employeesTitle: string;
      employeesValue: string;
    };
    services: {
      title: string;
      production: string;
      productionDesc: string;
      barranqueras: string;
      barranquerasDesc: string;
      exaltacion: string;
      exaltacionDesc: string;
    };
    values: {
      title: string;
      v1Title: string;
      v1Desc: string;
      v2Title: string;
      v2Desc: string;
      v3Title: string;
      v3Desc: string;
    };
    gallery: {
      title: string;
      img1: string;
      img2: string;
      img3: string;
      img4: string;
      img5: string;
      img6: string;
    };
    contact: {
      title: string;
      address: string;
      phone: string;
      cuit: string;
      email: string;
      manager: string;
    };
    footer: {
      rights: string;
    };
  };
};

const translations: Translations = {
  es: {
    nav: {
      about: 'Nosotros',
      services: 'Operaciones',
      values: 'Valores',
      contact: 'Contacto'
    },
    hero: {
      title: 'Comercio Internacional y Logística Global',
      subtitle: 'Conectando productos de calidad con los mercados del mundo a través de una sólida infraestructura productiva y logística.',
      cta: 'Conocer más'
    },
    about: {
      title: 'Sobre W INSPIRA S.R.L.',
      p1: 'W INSPIRA S.R.L. es una empresa argentina dedicada al comercio internacional, orientada a actividades de importación, exportación y logística de diversos productos destinados a los mercados globales. La compañía desarrolla sus operaciones a través de una estructura que integra producción, almacenamiento y consolidación logística, de manera de poder abastecer eficientemente a clientes en distintas regiones del mundo.',
      p2: 'Fue concebida como una empresa con vocación de desarrollo en el comercio exterior, con especial interés en fortalecer vínculos comerciales con mercados europeos y asiáticos. A través de su infraestructura, la compañía busca consolidar operaciones bajo estándares de cumplimiento normativo y eficiencia.',
      p3: 'La empresa opera de acuerdo con las regulaciones aplicables al comercio internacional y al transporte marítimo, cumpliendo con las normativas vigentes.',
      brand: 'Mediante la marca Son & Vra, comercializamos y posicionamos determinados productos, buscando consolidar una identidad orientada a la calidad y trazabilidad.'
    },
    stats: {
      productionTitle: 'Producción de Carbón',
      productionValue: '80 Tn mensuales',
      bagsTitle: 'Envasado',
      bagsValue: 'Bolsas de 10 Kg y 15 Kg',
      employeesTitle: 'Equipo',
      employeesValue: '11 Empleados'
    },
    services: {
      title: 'Nuestras Operaciones',
      production: 'Producción en Chaco',
      productionDesc: 'Desarrollamos procesos de carbonización mediante hornos especialmente destinados a la transformación de madera en carbón vegetal.',
      barranqueras: 'Logística en Barranqueras, Chaco',
      barranquerasDesc: 'Instalaciones destinadas al almacenamiento y paletizado de bolsas de carbón vegetal para facilitar su consolidación y despacho hacia los puertos.',
      exaltacion: 'Centro Logístico en Exaltación de la Cruz, Bs. As.',
      exaltacionDesc: 'Depósito orientado a la recepción, almacenamiento y manejo de mercaderías de importación, así como la preparación para el comercio internacional.'
    },
    values: {
      title: 'Nuestros Valores',
      v1Title: 'Calidad y Trazabilidad',
      v1Desc: 'Adaptación a los requerimientos de los clientes internacionales con altos estándares.',
      v2Title: 'Eficiencia Operativa',
      v2Desc: 'Integración fluida de producción, almacenamiento y consolidación.',
      v3Title: 'Confiabilidad',
      v3Desc: 'Cumplimiento estricto de las normativas vigentes para la exportación y el comercio marítimo.'
    },
    gallery: {
      title: 'Instalaciones y Productos',
      img1: 'Hornos Media Naranja',
      img2: 'Estiba carbón granel',
      img3: 'Granulometría carbón',
      img4: 'Bolsas con granulometría y peso justo',
      img5: 'Depósito paletizado y Exportación',
      img6: 'Depósito Importación'
    },
    contact: {
      title: 'Contacto',
      address: 'B. MITRE 31 – Exaltación de la Cruz (2812) - Buenos Aires',
      phone: '+54 9 11 5876 8731',
      cuit: '30-71915112-0',
      email: 'winspirasrl@gmail.com',
      manager: 'Eduardo Vanderhoeven, Socio Gerente'
    },
    footer: {
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      about: 'About Us',
      services: 'Operations',
      values: 'Values',
      contact: 'Contact'
    },
    hero: {
      title: 'International Trade & Global Logistics',
      subtitle: 'Connecting quality products with world markets through a solid productive and logistical infrastructure.',
      cta: 'Learn more'
    },
    about: {
      title: 'About W INSPIRA S.R.L.',
      p1: 'W INSPIRA S.R.L. is an Argentine company dedicated to international trade, oriented towards import, export, and logistics activities of various products destined for global markets. The company operates through a structure that integrates production, storage, and logistics consolidation to efficiently supply customers in different regions of the world.',
      p2: 'It was conceived as a company with a vocation for development in foreign trade, with a special interest in strengthening commercial ties with European and Asian markets. Through its infrastructure, the company seeks to consolidate operations under standards of regulatory compliance and efficiency.',
      p3: 'The company operates in accordance with applicable international trade and maritime transport regulations, complying with current regulations.',
      brand: 'Through the Son & Vra brand, we commercialize and position certain products, seeking to consolidate an identity oriented towards quality and traceability.'
    },
    stats: {
      productionTitle: 'Charcoal Production',
      productionValue: '80 Tonnes monthly',
      bagsTitle: 'Packaging',
      bagsValue: '10 Kg and 15 Kg bags',
      employeesTitle: 'Our Team',
      employeesValue: '11 Employees'
    },
    services: {
      title: 'Our Operations',
      production: 'Production in Chaco',
      productionDesc: 'We develop carbonization processes using ovens specially designed for the transformation of wood into charcoal.',
      barranqueras: 'Logistics in Barranqueras, Chaco',
      barranquerasDesc: 'Facilities allocated for the storage and palletizing of charcoal bags to facilitate consolidation and dispatch to ports.',
      exaltacion: 'Logistics Center in Exaltación de la Cruz, BA',
      exaltacionDesc: 'Warehouse oriented towards the reception, storage, and handling of import merchandise, as well as preparation for international trade.'
    },
    values: {
      title: 'Our Core Values',
      v1Title: 'Quality & Traceability',
      v1Desc: 'Adaptation to the requirements of international customers with high standards.',
      v2Title: 'Operational Efficiency',
      v2Desc: 'Seamless integration of production, storage, and consolidation workflows.',
      v3Title: 'Reliability',
      v3Desc: 'Strict compliance with current regulations for export and maritime commerce.'
    },
    gallery: {
      title: 'Facilities & Products',
      img1: 'Charcoal Ovens (Hornos Media Naranja)',
      img2: 'Bulk Charcoal Stowage',
      img3: 'Charcoal Chunk Size',
      img4: 'Bags with Correct Sizing and Weight',
      img5: 'Palletized Warehouse and Exportation',
      img6: 'Import Warehouse'
    },
    contact: {
      title: 'Contact Us',
      address: 'B. MITRE 31 – Exaltación de la Cruz (2812) - Buenos Aires',
      phone: '+54 9 11 5876 8731',
      cuit: '30-71915112-0',
      email: 'winspirasrl@gmail.com',
      manager: 'Eduardo Vanderhoeven, Managing Partner'
    },
    footer: {
      rights: 'All rights reserved.'
    }
  }
};

type LanguageContextType = {
  lang: Language;
  toggleLanguage: () => void;
  t: typeof translations['es'];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('es');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
