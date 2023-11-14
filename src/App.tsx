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

function App() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    setScroll(true);
  };

  const handleNextPage = () => {
    if (scroll) {
      setScroll(false);
    }
  };

  useEffect(() => {
    handleNextPage();
  }, [scroll]);

  const pages = [MainPage, PageOne, PageTwo, PageThree, PageFour, PageFive, PageSix];

  return (
    <div className="App">
      <section className='mainSection'>
      {pages.map((Page, index) => (
          <div key={index}>
            <div className='inViewPage'>
              {React.createElement(Page)}
            </div>
          </div>
        ))}
      </section>
      <section className='navSection'>
        <Navigation handleScroll={handleScroll} />
      </section>
    </div>
  );
}

export default App;
