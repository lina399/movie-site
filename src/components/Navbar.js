import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFilm, FaInfoCircle, FaEnvelope , FaSignInAlt} from 'react-icons/fa';


function Navbar() {
  const styles = {
    navbar: {
      backgroundColor: '#1a1a1a',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
      fontFamily: "'Segoe UI', sans-serif",
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      direction: 'rtl', // ← دعم اللغة العربية
    },
    logo: {
      color: '#fb8500',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    links: {
      display: 'flex',
      gap: '20px',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      transition: 'color 0.3s',
    },
    linkHover: {
      color: '#ffb703',
    },
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = '#ffb703';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = 'white';
  };

  return (
    <nav style={styles.navbar}>
      {/* اللوغو في اليمين */}
     <Link to="/" style={styles.logo}><FaFilm /> MovieReview</Link>


      {/* الروابط في اليسار */}
      <div style={styles.links}>
        <Link
          to="/"
          style={styles.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaHome /> الرئيسية
        </Link>

        <Link
          to="/movies"
          style={styles.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaFilm /> الأفلام
        </Link>

        <Link
          to="/about"
          style={styles.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaInfoCircle /> من نحن
        </Link>

        <Link
          to="/contact"
          style={styles.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaEnvelope /> اتصل بنا
        </Link>
         <Link
           to="/login"
           style={styles.link}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
         >
          <FaSignInAlt /> تسجيل الدخول
          </Link>
          <Link to="/register" style={styles.link}>
  📝 إنشاء حساب
</Link>



      </div>
    </nav>
  );
}

export default Navbar;
