import React from 'react';
import './Coaches.css';
import { coachesData } from '../../data/coachesData';

const Coaches = ({ t }) => {
  const currentLang = t.nav.home === 'Home' ? 'en' : 'de';

  return (
    <section id="coaches" className="coaches">
      <div className="coaches-outer-wrapper">
        <div className="coaches-wrapper">
          <div className="coaches-container">
            <h2 className="coaches-title">{t.coaches.title}</h2>
            <p className="coaches-subtitle">{t.coaches.subtitle}</p>
            
            <div className="coaches-list">
              {coachesData.map((coach) => (
                <div key={coach.id} className="coach-card">
                  <div className="coach-image-container">
                    <img 
                      src={coach.image} 
                      alt={coach.name}
                      className="coach-image"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${coach.name}&size=300&background=FFC107&color=000`;
                      }}
                    />
                  </div>
                  <div className="coach-info">
                    <h3 className="coach-name">{coach.name}</h3>
                    <h4 className="coach-title">{coach.title[currentLang]}</h4>
                    <p className="coach-description">{coach.description[currentLang]}</p>
                    <div className="coach-certifications">
                      {coach.certifications.map((cert, index) => (
                        <span key={index} className="certification-badge">{cert}</span>
                      ))}
                    </div>
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

export default Coaches;