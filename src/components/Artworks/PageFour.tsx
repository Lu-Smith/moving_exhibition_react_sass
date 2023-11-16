import React, { useState, useEffect } from 'react';
import TopBackground from './TopBackground'
import WinterSummer from '../../assets/paintings/LunaSmith_WhenWinterMeetsSummer.jpg'
import WinterBreeze from '../../assets/paintings/LunaSmith_Winter Breeze.jpg'
import ItalianAlps from '../../assets/paintings/Italian-Alps-by-Luna-Smith.jpg'
import Autumn from '../../assets/paintings/Autumn-by-Luna-Smith.jpg'
import InteractiveBackgroundSmall from './InteractiveBackgroundSmall'

const PageFour: React.FC = () => {
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
      <div className="backBackgroundSmall">
          <InteractiveBackgroundSmall />
      </div>
      <div className="paintings">
        <div className="imageContainerLandscape one" style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
          <img src={WinterSummer} alt="When Winter Meets Summer, oil painting by Luna Smith" />
        </div>
        <div className="imageContainerLandscape two" style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
          <img src={WinterBreeze} alt="Winter Breeze, oil painting by Luna Smith" />
        </div>
        <div className="imageContainerPortrait three odd" style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
          <img src={ItalianAlps} alt="Italian Alps, oil painting by Luna Smith" />
        </div>
        <div className="imageContainerPortrait four" style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={Autumn} alt="the Reflection of my Universe, oil painting by Luna Smith" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default PageFour