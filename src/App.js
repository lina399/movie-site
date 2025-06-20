import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
      </Routes>
       <Footer />
    </div>
  );
}

export default App;
