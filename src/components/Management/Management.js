import React from 'react';
import './Management.css';
import { managementData } from '../../data/managementData';

const Management = ({ t }) => {
  const currentLang = t.nav.home === 'Home' ? 'en' : 'de';

  return (
    <section id="management" className="management">
      <div className="management-outer-wrapper">
        <div className="management-wrapper">
          <div className="management-container">
            <h2 className="management-title">{t.management.title}</h2>
            <p className="management-subtitle">{t.management.subtitle}</p>
            
            <div className="management-list">
              {managementData.map((person) => (
                <div key={person.id} className="management-card">
                  <div className="management-image-container">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="management-image"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${person.name}&size=300&background=FFC107&color=000`;
                      }}
                    />
                  </div>
                  <div className="management-info">
                    <h3 className="management-name">{person.name}</h3>
                    <h4 className="management-role">{person.title[currentLang]}</h4>
                    <p className="management-description">{person.description[currentLang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;