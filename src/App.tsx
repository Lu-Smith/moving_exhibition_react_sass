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
import { motion, useAnimation } from 'framer-motion';

function App() {

  const [scroll, setScroll] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    setScroll(true);
  };

  const handleNextPage = () => {
    if (scroll) {
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
      setScroll(false);
    }
  };

  useEffect(() => {
    handleNextPage();
    controls.start({ x: `-${currentPage * 100}vw` });
  }, [scroll, controls]);

  const pages = [MainPage, PageOne, PageTwo, PageThree, PageFour, PageFive, PageSix]

  return (
    <div className="App">
      <section className='mainSection'>
        <motion.div 
        className='inViewPage'
        animate={controls}
        transition={{ duration: 0.5, ease: 'easeInOut'}}
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
