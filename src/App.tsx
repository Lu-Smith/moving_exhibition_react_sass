import React, { useState, useEffect } from 'react';
import './styling/app.scss';
import MainPage from './components/Artworks/MainPage';
import Navigation from './components/Navigation/Navigation';
import PageOne from './components/Artworks/PageOne';
import PageTwo from './components/Artworks/PageTwo';
import PageThree from './components/Artworks/PageThree';
import PageFour from './components/Artworks/PageFour';
import PageFive from './components/Artworks/PageFive';
import PageSix from './components/Artworks/PageSix';
import { motion } from 'framer-motion';

function App() {

  const [scroll, setScroll] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = () => {
    setScroll(!scroll);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
  };

  useEffect(() => {
    handleNextPage();
  }, [scroll]);

  const pages = [MainPage, PageOne, PageTwo, PageThree, PageFour, PageFive, PageSix]

  return (
    <div className="App">
      <section className='mainSection'>
        <motion.div 
        className='inViewPage'
        >
          {React.createElement(pages[currentPage])}
        </motion.div>
        <motion.div className='nextPage'>
          {React.createElement(pages[(currentPage + 1) % pages.length])}
        </motion.div>
      </section>
      <section className='navSection'>
        <Navigation handleScroll={handleScroll} />
      </section>
    </div>
  );
}

export default App;
