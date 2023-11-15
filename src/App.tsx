import React, { useState, useEffect, useRef } from 'react';
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

  const containerRef = useRef<HTMLDivElement>(null);

  const [scrollValue, setScrollValue] = useState(0);

  const [playFromBeginning, setPlayFromBeginning] = useState(false);


  // const variants = {
  //   scroll: {x : `${scrollValue}vw`},
  //   notScroll: {x : `${scrollValue}vw}`},
  // }

  const handleScroll = () => {
    if(scrollValue >= -500) {
      setPlayFromBeginning(false);
      setScrollValue(scrollValue - 100);
    } else {
      setScrollValue(100);
      setPlayFromBeginning(true);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: -scrollValue * 18.7,
        behavior: 'smooth',
      });
    }
  }, [scrollValue]);

  const pages = [MainPage, PageOne, PageTwo, PageThree, PageFour, PageFive, PageSix];

  return (
    <div className="App">
      <section className='mainSection' ref={containerRef}>
      {pages.map((Page, index) => (
          <div key={index}>
            <motion.div 
            className='inViewPage'>
            {/* // animate={scroll ? 'scroll' : 'notScroll'}
            // variants={variants}> */}
              {React.createElement(Page)}
            </motion.div>
          </div>
        ))}
      </section>
      <section className='navSection'>
        <Navigation handleScroll={handleScroll} playFromBeginning={playFromBeginning} />
      </section>
    </div>
  );
}

export default App;
