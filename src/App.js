import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Management from './components/Management/Management';
import Schedule from './components/Schedule/Schedule';  // Add this
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Coaches from './components/Coaches/Coaches';
import { translations } from './translations/translations';
import './App.css';

const App = () => {
  const [language, setLanguage] = useState('de');
  const t = translations[language];

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navigation 
  language={language}
  setLanguage={setLanguage}
  t={t}
  scrollToSection={scrollToSection}
/>
<Hero t={t} scrollToSection={scrollToSection} />
<About t={t} />          {/* Left-side slogan */}
<Management t={t} />     {/* Management section */}
<Coaches t={t} />        {/* Right-side slogan */}
<Schedule t={t} />       {/* No slogan - clean break */}
<Contact t={t} />
<Footer t={t} />
    </div>
  );
};

export default App;