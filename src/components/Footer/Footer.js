import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
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
      </div>
    </footer>
  );
};

export default Footer;