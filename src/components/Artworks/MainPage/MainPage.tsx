import React, { useState, useEffect } from 'react'
import MainAnimation from './MainAnimation'

const MainPage:React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
    className='MainPage'
    style={{ background: `linear-gradient(68.3deg, rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1) 5.6%, transparent 22.7%)` }}>
      <h1>Art Through Time</h1>
      <h2>Throughout the years, both the realm of art and the broader world have undergone transformative changes. From the inception of my career as an artist, I have witnessed a continual evolution in my artwork, a reflection of the dynamic interplay between my creative journey and the shifting landscapes of our shared existence.</h2>
      <div className="animationContainer">
        <MainAnimation />
      </div>
    </div>
  )
}

export default MainPage