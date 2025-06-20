// src/pages/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // ✅ التوجيه للصفحة الرئيسية بعد الدخول
    } catch (err) {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
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
    },
    box: {
      backgroundColor: '#222',
      padding: '40px',
      borderRadius: '12px',
      width: '100%',
      maxWidth: '400px',
      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
      color: '#fff',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
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
    error: {
      color: '#ff4d4d',
      textAlign: 'center',
      marginBottom: '15px',
      fontSize: '0.9rem',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.box} onSubmit={handleLogin}>
        <h2 style={styles.heading}>تسجيل الدخول</h2>
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
        <button type="submit" style={styles.button}>دخول</button>
      </form>
    </div>
  );
}

export default Login;
