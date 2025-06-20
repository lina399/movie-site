import React from 'react';
import { FaFilm, FaStar, FaUsers } from 'react-icons/fa';

function About() {
  const styles = {
    container: {
      backgroundColor: '#111',
      color: 'white',
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', sans-serif",
      lineHeight: 1.7,
    },
    heading: {
      textAlign: 'center',
      fontSize: '2.8rem',
      marginBottom: '20px',
    },
    intro: {
      maxWidth: '800px',
      margin: '0 auto',
      fontSize: '1.1rem',
      textAlign: 'center',
      marginBottom: '40px',
      color: '#ccc',
    },
    section: {
      maxWidth: '900px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
    },
    card: {
      backgroundColor: '#222',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    icon: {
      fontSize: '2rem',
      color: '#fb8500',
      marginBottom: '10px',
    },
    title: {
      fontSize: '1.2rem',
      marginBottom: '10px',
    },
    text: {
      fontSize: '0.95rem',
      color: '#bbb',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>من نحن</h1>

      <p style={styles.intro}>
        موقعنا مخصص لعشاق السينما، حيث يمكنك استكشاف مراجعات الأفلام، تقييماتها، ومعرفة آراء المشاهدين. هدفنا هو بناء مجتمع سينمائي يتبادل الآراء وينشر ثقافة المشاهدة الهادفة.
      </p>

      <div style={styles.section}>
        <div style={styles.card}>
          <FaFilm style={styles.icon} />
          <h3 style={styles.title}>قاعدة بيانات غنية</h3>
          <p style={styles.text}>نقوم بجمع معلومات دقيقة عن أحدث وأشهر الأفلام العالمية مع صور ومراجعات مفصلة.</p>
        </div>

        <div style={styles.card}>
          <FaStar style={styles.icon} />
          <h3 style={styles.title}>تقييمات حقيقية</h3>
          <p style={styles.text}>نظام تقييم يعتمد على تقييمات المستخدمين لإعطاء فكرة واضحة عن جودة كل فيلم.</p>
        </div>

        <div style={styles.card}>
          <FaUsers style={styles.icon} />
          <h3 style={styles.title}>مجتمع تفاعلي</h3>
          <p style={styles.text}>أضف تعليقاتك وشارك آرائك مع آلاف المتابعين من محبي السينما.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
