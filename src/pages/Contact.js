// src/pages/Contact.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const styles = {
    container: {
      backgroundColor: '#111',
      color: 'white',
      minHeight: '100vh',
      padding: '60px 20px',
      fontFamily: "'Segoe UI', sans-serif",
      textAlign: 'center',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '1.2rem',
      maxWidth: '600px',
      margin: '0 auto 40px',
      lineHeight: '1.8',
      color: '#ccc',
    },
    socials: {
      display: 'flex',
      justifyContent: 'center',
      gap: '25px',
      fontSize: '2rem',
    },
    icon: {
      color: '#fb8500',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    },
    iconHover: {
      color: '#ffb703',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>اتصل بنا</h1>
      <p style={styles.paragraph}>
        هل لديك أي أسئلة أو اقتراحات؟ نحن سعداء بسماع رأيك! تواصل معنا عبر وسائل التواصل الاجتماعي التالية:
      </p>

      <div style={styles.socials}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={styles.icon} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={styles.icon} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={styles.icon} />
        </a>
        <a href="mailto:info@example.com">
          <FaEnvelope style={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
