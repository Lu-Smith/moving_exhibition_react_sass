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
import { Link, Element } from 'react-scroll';

function App() {

  const [scroll, setScroll] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

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
  }, [scroll]);

  const pages = [MainPage, PageOne, PageTwo, PageThree, PageFour, PageFive, PageSix]

  return (
    <div className="App">
      <section className='mainSection'>
      {pages.map((Page, index) => (
          <Element key={index} name={`page${index}`}>
            <div className='inViewPage'>
              {React.createElement(Page)}
            </div>
          </Element>
        ))}
      </section>
      <section className='navSection'>
        <Navigation handleScroll={handleScroll} />
        <Link
          activeClass="active"
          to={`page${(currentPage + 1) % pages.length}`}
          spy={true}
          smooth={true}
          duration={500}
        >
          <button onClick={handleNextPage}>Next Page</button>
        </Link>
      </section>
    </div>
  );
}

export default App;
