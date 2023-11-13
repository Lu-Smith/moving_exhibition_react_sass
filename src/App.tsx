import React, { useState } from 'react'
import './App.css';
import MainPage from './components/Artworks/MainPage';
import Navigation from './components/Navigation/Navigation';
import PageOne from './components/Artworks/PageOne';
import PageTwo from './components/Artworks/PageTwo';
import PageThree from './components/Artworks/PageThree';
import PageFour from './components/Artworks/PageFour';
import PageFive from './components/Artworks/PageFive';

function App() {

  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    setScroll(!scroll);
  }

  const pages = [MainPage, PageOne, PageTwo, PageThree, PageFour, PageFive]

  return (
    <div className="App">
      <div className='inViewPage'>
      </div>
      <div className='nextPage'>
      </div>
      <Navigation scroll={scroll} handleScroll={handleScroll} />
    </div>
  );
}

export default App;
