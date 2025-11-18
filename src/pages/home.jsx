import React, { useState } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Management from '../components/Management/Management';
import Schedule from '../components/Schedule/Schedule';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Coaches from '../components/Coaches/Coaches';
import { translations } from '../translations/translations';

const Home = () => {
    const [language, setLanguage] = useState('de');
    const t = translations[language];

    const scrollToSection = (section) => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
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
            <About t={t} />
            <Management t={t} />
            <Coaches t={t} />
            <Schedule t={t} />
            <Contact t={t} />
            <Footer t={t} />
        </div>
    );
};

export default Home;