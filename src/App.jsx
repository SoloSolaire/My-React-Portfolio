import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'about' && <AboutMe />}
      {currentPage === 'portfolio' && <Portfolio />}
      {currentPage === 'contact' && <ContactMe />}
      {currentPage === 'resume' && <Resume />}
      <Footer />
    </div>
  )
}

export default App
