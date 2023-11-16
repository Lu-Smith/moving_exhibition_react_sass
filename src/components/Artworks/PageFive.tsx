import React, { useState, useEffect } from 'react';
import TopBackground from './TopBackground'
import InteractiveBackground from './InteractiveBackground'
import Reflections from '../../assets/paintings/Autumn Reflection by Luna Smith.jpg'
import WhiteSnake from '../../assets/paintings/Hatching White Snake by Luna Smith.jpg'
import RainbowEgg from '../../assets/paintings/Rainbow-Egg-by-Luna-Smith.jpg'

const PageFive: React.FC = () => {
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
      <div className="paintings">
          <div className="imageContainerLandscape one" style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={Reflections} alt="Shrimp, oil painting by Luna Smith" />
          </div>
          <div className="imageContainerPortrait two" style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={WhiteSnake} alt="Dream, oil painting by Luna Smith" />
          </div>
          <div className="imageContainerPortrait three" style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={RainbowEgg} alt="Owl, oil painting by Luna Smith" />
          </div>
      </div>
    </div>
  </div>
  )
}

export default PageFive