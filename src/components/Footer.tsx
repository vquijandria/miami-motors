// src/components/Footer.tsx
import React from 'react';
import './Footer.css';
import facebookIcon from "./../assets/facebook-icon.png";
import instagramIcon from "./../assets/instagram-icon.png";
import whatsappIcon from "./../assets/whatsapp-icon.png";
import mailIcon from "./../assets/mail-icon.png";
import phoneIcon from "./../assets/phone-icon.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Contacto</h2>
          <a href="mailto:miamimotorspe@hotmail.com" className='footer-text'><img src={mailIcon} className='mailIcon' alt="" /> miamimotorspe@hotmail.com</a>
          <br />
          
          <a  className='footer-text' href='tel:+17542959722'><img src={phoneIcon} alt=""/> (+1)754-295-9722</a>
        </div>

        <div className="footer-section">
          <h2>Enlaces</h2>
          <ul className='secciones'>
            <li><a href="/">Inicio</a></li>
            <li><a href="/cotiza">Cotiza</a></li>
            <li><a href="/sobrenosotros">Sobre Nosotros</a></li>
            <li><a href="/contacto">Contactanos</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Síguenos</h2>
          <div className="social-icons">
            <a href="https://wa.me/17542959722" target="_blank" rel="noopener noreferrer"><img className='footer-icons' src={whatsappIcon} alt="" /></a>
            <a href="https://www.instagram.com/miamimotorsperu/" target="_blank" rel="noopener noreferrer"><img className='footer-icons' src={instagramIcon} alt="" /></a>
            <a href="https://www.facebook.com/miamimotorspe" target="_blank" rel="noopener noreferrer"><img className='footer-icons' src={facebookIcon} alt="" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
