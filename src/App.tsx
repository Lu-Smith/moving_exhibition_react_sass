import React, { useState, useEffect} from 'react';
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

  const [scrollValue, setScrollValue] = useState(0);

  const [playFromBeginning, setplayFromBeginning] = useState(false);

  const variants = {
    scroll: {x : `${scrollValue}vw`},
    notScroll: {x : `${scrollValue}vw}`},
  }

  const handleScroll = () => {
    setScroll(true);
    if(scrollValue >= -500) {
      setScrollValue(scrollValue - 100);
      console.log(scrollValue)
    } else {
      setScrollValue(100);
      setplayFromBeginning(true);
      setScroll(false);
    }
  };

  const movePage = () => {
    setScroll(true);
    if(scrollValue >= -500) {
      setScrollValue(scrollValue - 25);
      console.log(scrollValue);
    } else {
      setScrollValue(25);

      console.log(scrollValue)
      setScroll(false);
    }
  };

  const pages = [MainPage, PageOne, PageTwo, PageThree, PageFour, PageFive, PageSix];

  return (
    <div className="App">
      <section className='mainSection'>
      {pages.map((Page, index) => (
          <div key={index}>
            <motion.div 
            className='inViewPage'
            animate={scroll ? 'scroll' : 'notScroll'}
            variants={variants}>
              {React.createElement(Page)}
            </motion.div>
          </div>
        ))}
      </section>
      <section className='navSection'>
        <Navigation handleScroll={handleScroll} movePage={movePage} playFromBeginning={playFromBeginning}/>
      </section>
    </div>
  );
}

export default App;
