import React, { useState } from 'react'
import './App.css';
import MainPage from './components/Artworks/MainPage';
import Navigation from './components/Navigation/Navigation';

function App() {

  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    setScroll(!scroll);
  }


  return (
    <div className="App">
      <MainPage />
      <Navigation scroll={scroll} handleScroll={handleScroll} />
    </div>
  );
}

export default App;
