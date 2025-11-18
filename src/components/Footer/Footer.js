import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import logo from '../../assets/logo.png';
import './Footer.css';

const Footer = ({ t }) => {
  const slogans = ['Together We Rise!', 'Burn. Rise. Repeat.'];
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-slogan">
          {slogans[currentSlogan]}
        </div>
        <div className="footer-logo">
          <img src={logo} alt="Phoenix Athletics" className="footer-logo-img" />
          <div className="footer-logo-text">Phoenix <span className="footer-logo-accent">Athletics e.V.</span></div>
        </div>
        <p className="footer-text">
          © 2025 Phoenix Athletics e.V. | Made with <Heart className="footer-heart" /> by our community
        </p>
        <div className="footer-impressum">
          <a href="/imprint" className="footer-impressum-link">{t.footer.imprint}</a>
        </div>
        {/* Download Links */}
        <div className="footer-downloads">
          <a href="/assets/docs/satzung.pdf" className="footer-download-link" download>
            {t.imprint.title}
          </a>
          <a href="/assets/docs/beitragsordnung.pdf" className="footer-download-link" download>
            {t.footer.membershipFeeRegulations}
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;