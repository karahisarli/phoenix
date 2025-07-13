import React from 'react';
import heroBackground from '../../assets/hero-background.png';
import './Hero.css';

const Hero = ({ t, scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in">
          {t.hero.title}
        </h1>
        <p className="hero-subtitle animate-fade-in-delay">
          {t.hero.subtitle}
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="hero-cta animate-fade-in-delay-2"
        >
          {t.hero.cta}
        </button>
      </div>
    </section>
  );
};

export default Hero;