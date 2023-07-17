import React from 'react';
import { Typography, Link, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import imageLogo from '../img/Logo/YTBrokersLogoGrisClaro.png'

const Footer = () => {
  return (
    <footer className="app-footer-container">
      <Box className="footer-section">
        <Typography>yt.global.brokers@gmail.com</Typography>
        <Typography>5541240055</Typography>
      </Box>
      <Box className="footer-section">
        <img src={imageLogo} alt="Logo" style={{width:"65px",height:"65px"}} />
        <Typography variant="h6" className="titulo">TY, GLOBAL BROKER´S</Typography>
        <Box className="social-icons">
          <Link href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="https://wa.me/5570858856" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </Link>
        </Box>
      </Box>
      <Box className="footer-section">
        <Typography>Plaza Carso, Lago Zurich 219 piso 12, Ampleacion</Typography>
        <Typography>Granada, Miguel Hidalgo, Cd. de México</Typography>
      </Box>
    </footer>
  );
};

export default Footer;