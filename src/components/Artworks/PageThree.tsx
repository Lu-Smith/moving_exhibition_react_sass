import React, { useState, useEffect } from 'react';
import TopBackground from './TopBackground'
import InteractiveBackground from './InteractiveBackground'
import Shrimp from '../../assets/paintings/Shrimp-by-Luna-Smith.jpg'
import Dream from '../../assets/paintings/Dream by Luna Smith.jpg'
import Owl from '../../assets/paintings/Owl by Luna Smith.jpg'
import AnimatedCircle from './AnimatedCircle';

const PageThree: React.FC = () => {
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
    <div className='Page'>
    <div className="backgroundContainer">
      <div className="frontBackground">
        <TopBackground />
      </div>
      <div className="backBackground">
        <InteractiveBackground />
      </div>
      <div className="animationContainer">
        <AnimatedCircle />
      </div>
      <div className="paintings">
          <div className="imageContainerAnimal one" style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={Shrimp} alt="Shrimp, oil painting by Luna Smith" />
          </div>
          <div className="imageContainerAnimal two" style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={Dream} alt="Dream, oil painting by Luna Smith" />
          </div>
          <div className="imageContainerPortrait three" style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={Owl} alt="Owl, oil painting by Luna Smith" />
          </div>
        </div>
    </div>
  </div>
  )
}

export default PageThree