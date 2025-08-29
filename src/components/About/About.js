import React from 'react';
import './About.css';

const About = ({ t }) => {

  return (
    <section id="about" className="about">
      <div className="about-wrapper">
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

        </div>
      </div>
    </section>
  );
};

export default About;