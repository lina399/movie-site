import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('كلمتا المرور غير متطابقتين');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // ✅ التوجيه إلى الصفحة الرئيسية
    } catch (err) {
      setError(err.message);
    }
  };

  const styles = {
    container: {
      backgroundColor: '#111',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Segoe UI', sans-serif",
      color: 'white',
    },
    box: {
      backgroundColor: '#222',
      padding: '40px',
      borderRadius: '12px',
      width: '100%',
      maxWidth: '400px',
      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '25px',
      fontSize: '1.8rem',
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '15px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#333',
      color: 'white',
      fontSize: '1rem',
    },
    button: {
      width: '100%',
      padding: '12px',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#fb8500',
      color: 'white',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    link: {
      marginTop: '15px',
      display: 'block',
      textAlign: 'center',
      fontSize: '0.9rem',
      color: '#ffb703',
      textDecoration: 'none',
    },
    error: {
      color: '#ff4d4d',
      textAlign: 'center',
      marginBottom: '15px',
      fontSize: '0.9rem',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.box} onSubmit={handleRegister}>
        <h2 style={styles.heading}>إنشاء حساب جديد</h2>
        {error && <div style={styles.error}>{error}</div>}
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="تأكيد كلمة المرور"
          style={styles.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" style={styles.button}>تسجيل</button>
        <Link to="/login" style={styles.link}>هل لديك حساب؟ تسجيل الدخول</Link>
      </form>
    </div>
  );
}

export default Register;
