import React from "react";

const Footer = () => (
  <footer>
    <div className="contact-container">
      <div className="contact-left">
        <div className="contact-info">
          <p>
            <span className="contact-icon">✈️</span> Telegram: <a href="https://t.me/karasik0002" target="_blank" rel="noopener noreferrer">@karasik0002</a>
          </p>
          <p>
            <span className="contact-icon">📷</span> Instagram: <a href="https://instagram.com/maba.cado" target="_blank" rel="noopener noreferrer">@maba.cado</a>
          </p>
        </div>
      </div>
      <div className="contact-right">
        <div className="contact-info">
          <p>
            <span className="contact-icon">📞</span> Телефон: <a href="tel:+380679744336">+380679744336</a>
          </p>
          <p>
            <span className="contact-icon">📧</span> Email: <a href="mailto:mbiloshytska02@gmail.com">mbiloshytska02@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;