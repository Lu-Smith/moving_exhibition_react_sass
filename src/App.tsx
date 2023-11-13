import React, { useState } from 'react'
import './App.css';
import MainPage from './components/Artworks/MainPage';
import Navigation from './components/Navigation/Navigation';
import PageOne from './components/Artworks/PageOne';

function App() {

  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    setScroll(!scroll);
  }


  return (
    <div className="App">
      <div>
        <MainPage />
        <PageOne />
      </div>
      <Navigation scroll={scroll} handleScroll={handleScroll} />
    </div>
  );
}

export default App;
