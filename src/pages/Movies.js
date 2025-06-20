import React, { useState } from 'react';
import { FaPlayCircle, FaStar, FaTimes } from 'react-icons/fa';
import inceptionImg from '../assets/images/inception.jpg';
import darkImg from '../assets/images/dark.jpg';
import InterstellarImg from '../assets/images/Interstellar.jpg';
import JokerImg from '../assets/images/Joker.jpg';
import AvengersImg from '../assets/images/Avengers.jpg';
import SpiderImg from '../assets/images/Spider.jpg';
import matrixImg from '../assets/images/matrix.jpg';
import FightImg from '../assets/images/Fight.jpg';
import PulpImg from '../assets/images/Pulp.jpg';
import ForrestImg from '../assets/images/Forrest.jpg';
import ShawshankImg from '../assets/images/Shawshank.jpg';
import DuneImg from '../assets/images/Dune.jpg';
import OppenheimerImg from '../assets/images/Oppenheimer.jpg';
import BarbieImg from '../assets/images/Barbie.jpg';
const movies = [
  {
  title: 'Inception',
  description: 'A mind-bending thriller by Christopher Nolan.',
  image: inceptionImg, // بديل مباشر يعمل
  rating: 4.8,
},
 {
  title: 'The Dark Knight',
  description: 'Batman faces the Joker in Gotham City.',
  image: darkImg, // يعمل
  rating: 4.9,
},
 {
  title: 'Interstellar',
  description: 'A space-time adventure beyond imagination.',
  image: InterstellarImg, // بديل مباشر
  rating: 4.7,
},
  {
  title: 'Joker',
  description: 'The origin story of the infamous Gotham villain.',
  image: JokerImg,
  rating: 4.5,
},
 {
  title: 'Avengers: Endgame',
  description: 'The final battle against Thanos.',
  image: AvengersImg,
  rating: 4.6,
},
 {
  title: 'Spider-Man: No Way Home',
  description: 'Spider-Man faces multiverse chaos.',
  image: SpiderImg,
  rating: 4.4,
},
 {
  title: 'The Matrix',
  description: 'A hacker discovers a reality-bending truth.',
  image: matrixImg,
  rating: 4.7,
},
  {
  title: 'Fight Club',
  description: 'An underground fight club challenges society.',
  image: FightImg,
  rating: 4.6,
},
 {
  title: 'Pulp Fiction',
  description: 'A series of intertwined criminal stories.',
  image: PulpImg,
  rating: 4.6,
},
  {
  title: 'Forrest Gump',
  description: 'The life journey of a simple man.',
  image: ForrestImg,
  rating: 4.8,
},
  {
    title: 'The Shawshank Redemption',
    description: 'Hope and friendship behind bars.',
    image: ShawshankImg,
    rating: 4.9,
  },
  {
    title: 'The Godfather',
    description: 'A mafia family’s rise and fall.',
    image: 'https://i.imgur.com/Uzvny9I.jpg',
    rating: 4.9,
  },
  {
  title: 'Dune',
  description: 'A noble family becomes embroiled in a war over a desert planet.',
  image: DuneImg,
  rating: 4.4,
},
{
  title: 'Oppenheimer',
  description: 'The dramatic story of the man behind the atomic bomb.',
  image: OppenheimerImg,
  rating: 4.6,
},
 {
  title: 'Barbie',
  description: 'Barbie and Ken discover the real world beyond Barbie Land.',
  image:BarbieImg,
  rating: 4.0,
},
 
];

function Movies() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const styles = {
    page: {
      backgroundColor: '#111',
      color: 'white',
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', sans-serif",
    },
    heading: {
      textAlign: 'center',
      fontSize: '2.5rem',
      marginBottom: '30px',
    },
    cardsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px',
    },
    card: {
      backgroundColor: '#222',
      borderRadius: '16px',
      width: '260px',
      overflow: 'hidden',
      boxShadow: '0 0 10px rgba(0,0,0,0.4)',
      transition: 'transform 0.3s, box-shadow 0.3s',
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
    content: {
      padding: '15px',
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '1.2rem',
      marginBottom: '10px',
    },
    description: {
      fontSize: '0.9rem',
      color: '#ccc',
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
      gap: '5px',
      color: '#f1c40f',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
   modalContent: {
  backgroundColor: '#222',
  padding: '20px',
  borderRadius: '12px',
  width: '90%',
  maxWidth: '350px', // ⬅️ صغرنا الحجم هنا
  textAlign: 'center',
  position: 'relative',
  color: 'white',
},
modalImage: {
  width: '100%',
  borderRadius: '10px',
  marginBottom: '15px',
  height: '200px', // ⬅️ تصغير ارتفاع الصورة
  objectFit: 'cover',
},

    closeIcon: {
      position: 'absolute',
      top: '15px',
      right: '20px',
      fontSize: '1.5rem',
      color: '#fb8500',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}><FaPlayCircle /> قائمة الأفلام</h1>
      <div style={styles.cardsContainer}>
        {movies.map((movie, index) => (
          <div
            key={index}
            style={styles.card}
            onClick={() => setSelectedMovie(movie)}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.card)}
          >
            <img src={movie.image} alt={movie.title} style={styles.image} />
            <div style={styles.content}>
              <h3 style={styles.title}>
                <FaPlayCircle /> {movie.title}
              </h3>
              <p style={styles.description}>{movie.description}</p>
              <div style={styles.rating}>
                <FaStar /> {movie.rating} / 5
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div style={styles.modalOverlay} onClick={() => setSelectedMovie(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <FaTimes style={styles.closeIcon} onClick={() => setSelectedMovie(null)} />
            <img src={selectedMovie.image} alt={selectedMovie.title} style={styles.modalImage} />
            <h2>{selectedMovie.title}</h2>
            <div style={styles.rating}>
              <FaStar /> {selectedMovie.rating} / 5
            </div>
            <p style={styles.description}>{selectedMovie.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Movies;
