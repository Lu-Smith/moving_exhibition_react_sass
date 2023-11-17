import React, { useState, useEffect } from 'react'
import MainAnimation from './MainAnimation'

const MainPage:React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = window.innerWidth <= 768;

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
    style={{
        background: isMobile
          ? 'white'
          : `linear-gradient(90deg, transparent 4%, rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1) 4.6%, rgb(251, 248, 248) 5%, transparent 7%, rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1) 8%, rgb(251, 248, 248) 8.5%, transparent 10%, rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1) 10.6%, rgb(251, 248, 248) 11%, transparent 12%, rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1) 13%, rgb(251, 248, 248) 14%)`
      }}>
      <h1>Art Through Time</h1>
      <h2>Throughout the years, both the realm of art and the broader world have undergone transformative changes. From the inception of my career as an artist, I have witnessed a continual evolution in my artwork, a reflection of the dynamic interplay between my creative journey and the shifting landscapes of our shared existence.</h2>
      <div className="animationContainer">
        <MainAnimation />
      </div>
    </div>
  )
}

export default MainPage