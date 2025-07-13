import React from 'react';
import { Instagram } from 'lucide-react';
import './Contact.css';

const Contact = ({ t }) => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">{t.contact.title}</h2>
        
        <div className="contact-instagram">
          <p className="contact-instagram-text">
            {t.contact.findUs}
          </p>
          <a 
            href="https://www.instagram.com/phoenixathletics.ev/"
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-instagram-link"
          >
            <Instagram className="contact-instagram-icon" />
            <span>@phoenixathletics.ev</span>
          </a>
          <p className="contact-instagram-cta">
            {t.contact.followUs}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;