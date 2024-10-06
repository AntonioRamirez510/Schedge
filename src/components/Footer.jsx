import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../../src/index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
        <p>© 2024 Schedge - Automated Scheduling System</p>
          <a href="https://github.com/AntonioRamirez510" target="_blank" rel="noopener noreferrer">
            <FaGithub className="git-icon" />
          </a>
          <a href="https://www.linkedin.com/in/antonio-ramirez-dev/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="linkedin-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
