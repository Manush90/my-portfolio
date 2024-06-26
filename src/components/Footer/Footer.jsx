import React from "react";
import "./footerstyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text text-center mb-1 nameHover footerCol">
            Created By <br /> Manuel Dell'Oste © 2024
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/manuel-dell-oste-15a3a35b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin  me-2"></i>
            </a>
            <a
              href="https://www.instagram.com/manu_.sly/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram  me-2 instagramColor"></i>
            </a>
            <a href="https://github.com/Manush90" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github  me-2 githubColor"></i>
            </a>
            <a href="https://wa.me/3518589141" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp  whatsappColor "></i>
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
