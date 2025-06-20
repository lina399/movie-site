import React from 'react';
import { FaStar, FaFilm } from 'react-icons/fa';
import backgroundImg from '../assets/images/background.jpg';
import darkImg from '../assets/images/dark.jpg';
const movies = [
  {
    title: 'The Dark Knight',
    description: 'Batman faces the Joker in a dark battle for Gotham.',
    image: darkImg,
    rating: 4.9,
  },
  {
    title: 'Interstellar',
    description: 'A journey through space and time.',
    image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    rating: 4.7,
  },
  {
    title: 'Joker',
    description: 'A dark take on the iconic villain.',
    image: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    rating: 4.5,
  },
];

function Home() {
  const styles = {
    container: {
      fontFamily: "'Segoe UI', sans-serif",
      color: 'white',
      margin: 0,
      padding: 0,
    },
    hero: {
      height: '100vh',
     backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcomeText: {
      fontSize: '3rem',
      animation: 'fadeIn 2s ease-in-out',
    },
    gallery: {
      padding: '50px 20px',
      backgroundColor: '#111',
      textAlign: 'center',
    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '30px',
      marginTop: '30px',
    },
    card: {
      backgroundColor: '#222',
      borderRadius: '16px',
      width: '250px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
    },
    cardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 10px 20px rgba(255, 255, 255, 0.2)',
    },
    image: {
      width: '100%',
      height: '350px',
      objectFit: 'cover',
    },
    title: {
      margin: '15px 10px 5px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    description: {
      fontSize: '0.9rem',
      padding: '0 10px 15px',
      color: '#ccc',
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5px',
      color: '#f1c40f',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={styles.welcomeText} > Welcome to MovieReview </h1>
        </div>
      </div>

      <div style={styles.gallery}>
        <h2><FaFilm /> معرض الأفلام</h2>
        <div style={styles.cardsContainer}>
          {movies.map((movie, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.card)}
            >
              <img src={movie.image} alt={movie.title} style={styles.image} />
              <h3 style={styles.title}><FaFilm /> {movie.title}</h3>
              <div style={styles.rating}>
                <FaStar /> {movie.rating} / 5
              </div>
              <p style={styles.description}>{movie.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Home;
