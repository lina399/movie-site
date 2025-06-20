// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#1a1a1a',
      color: '#ccc',
      padding: '40px 20px',
      textAlign: 'center',
      fontFamily: "'Segoe UI', sans-serif",
    },
    logo: {
      fontSize: '1.5rem',
      marginBottom: '10px',
      color: '#fb8500',
    },
    links: {
      marginBottom: '15px',
      display: 'flex',
      justifyContent: 'center',
      gap: '25px',
      flexWrap: 'wrap',
    },
    link: {
      color: '#ccc',
      textDecoration: 'none',
      transition: 'color 0.3s',
    },
    linkHover: {
      color: '#fb8500',
    },
    icons: {
      marginTop: '10px',
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      fontSize: '1.2rem',
    },
    copy: {
      marginTop: '15px',
      fontSize: '0.9rem',
      color: '#777',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.logo}>🎬 MovieReview</div>
      <div style={styles.links}>
        <a href="/" style={styles.link}>الرئيسية</a>
        <a href="/movies" style={styles.link}>الأفلام</a>
        <a href="/about" style={styles.link}>من نحن</a>
        <a href="/contact" style={styles.link}>اتصل بنا</a>
      </div>
      <div style={styles.icons}>
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaEnvelope />
      </div>
      <div style={styles.copy}>
        &copy; {new Date().getFullYear()} MovieReview. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}

export default Footer;
