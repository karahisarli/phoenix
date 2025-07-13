import React from 'react';
import './About.css';
import { managementData } from '../../data/managementData';

const About = ({ t }) => {
  const currentLang = t.nav.home === 'Home' ? 'en' : 'de';

  return (
    <section id="about" className="about">
      <div className="about-wrapper">
        <div className="about-side-slogan">
          <span>Burn.</span>
          <span>Rise.</span>
          <span>Repeat.</span>
        </div>
        <div className="about-container">
          <h2 className="about-title">{t.about.title}</h2>
          <h3 className="about-subtitle">{t.about.subtitle}</h3>
          
          <div className="about-content">
            {t.about.content.map((paragraph, index) => (
              <p 
                key={index} 
                className={`about-paragraph 
                  ${index === 0 ? 'about-intro' : ''} 
                  ${index === t.about.content.length - 1 ? 'about-cta' : ''}
                  ${index === t.about.content.length - 2 ? 'about-question' : ''}
                `}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Management Section */}
          <div className="about-management">
            <h3 className="management-title">
              {currentLang === 'de' ? 'Unser Vorstand' : 'Our Board'}
            </h3>
            <div className="management-grid">
              {managementData.map((person) => (
                <div key={person.id} className="management-member">
                  <div className="management-image-container">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="management-image"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${person.name}&size=200&background=FFC107&color=000`;
                      }}
                    />
                  </div>
                  <h4 className="management-name">{person.name}</h4>
                  <p className="management-title-text">{person.title[currentLang]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;