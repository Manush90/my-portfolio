import React from "react";
import "./footerstyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text mb-1 nameHover">
            Created By <br /> Manuel Dell'Oste © 2024
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/manuel-dell-oste-15a3a35b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin shadow me-2"></i>
            </a>
            <a
              href="https://www.instagram.com/manu_.sly/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram shadow me-2 instagramColor"></i>
            </a>
            <a href="https://github.com/Manush90" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github shadow me-2 githubColor"></i>
            </a>
            <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp shadow whatsappColor "></i>
            </a>
          </div>
          <div className="footer-links footerCol">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
