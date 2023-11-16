import React, { useState, useEffect } from 'react';

import InteractiveBackground from './InteractiveBackground'
import InteractiveBackgroundSmall from './InteractiveBackgroundSmall'
import TopBackground from './TopBackground'
import ZinShadows from '../../assets/paintings/Z in Shadows by Luna Smith.jpg'
import ScottishDream from '../../assets/paintings/Scottish Dream by Luna Smith.jpg'
import WomenNature from '../../assets/paintings/LunaSmith_LifeArchitect.jpg'

const PageOne: React.FC = () => {
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
        <div className="backBackgroundSmall">
          <InteractiveBackgroundSmall />
        </div>
        <div className="paintings">
        <div className="imageContainerLandscape one" style={{ border: `8px solid rgba(${mousePosition.x / window.innerWidth * 255}, ${mousePosition.y / window.innerHeight * 255}, 0, 1)` }}>
            <img src={ZinShadows} alt="Z in Shadows, oil painting by Luna Smith" />
          </div>
          <div className="imageContainerLandscape two" style={{ border: `8px solid rgba(${mousePosition.x / window.innerWidth * 255}, ${mousePosition.y / window.innerHeight * 255}, 0, 1)` }}>
            <img src={ScottishDream} alt="L in Shadows, oil painting by Luna Smith" />
          </div>
          <div className="imageContainerPortrait three" style={{ border: `8px solid rgba(${mousePosition.x / window.innerWidth * 255}, ${mousePosition.y / window.innerHeight * 255}, 0, 1)` }}>
            <img src={WomenNature} alt="Women Nature, oil painting by Luna Smith" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageOne