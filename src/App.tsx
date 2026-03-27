import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Values from './components/Values';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="app-container">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Values />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
