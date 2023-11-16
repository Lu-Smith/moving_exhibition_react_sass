import React, { useState, useEffect } from 'react';
import TopBackground from './TopBackground'
import GlenEtive from '../../assets/paintings/The-Song-of-the-Glen-Etive-by-Luna-Smith.jpg'
import TrappedWind from '../../assets/paintings/The-Trapped-Wind.jpg'
import SecretGarden from '../../assets/paintings/Secret Garden by Luna Smith.jpg'
import PineCone from '../../assets/paintings/pinecone.jpg'

const PageTwo: React.FC = () => {
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
          <div className="paintings">
            <div className="imageContainerLandscape one" style={{ border: `8px solid rgba(${mousePosition.x / window.innerWidth * 255}, ${mousePosition.y / window.innerHeight * 255}, 0, 0.5)` }}>
              <img src={GlenEtive} alt="The song of Glen Etive, oil painting by Luna Smith" />
            </div>
            <div className="imageContainerLandscape two" style={{ border: `8px solid rgba(${mousePosition.x / window.innerWidth * 255}, ${mousePosition.y / window.innerHeight * 255}, 0, 0.5)` }}>
              <img src={TrappedWind} alt="The Trapped Wind, oil painting by Luna Smith" />
            </div>
            <div className="imageContainerPortrait three" style={{ border: `8px solid rgba(${mousePosition.x / window.innerWidth * 255}, ${mousePosition.y / window.innerHeight * 255}, 0, 0.5)` }}>
              <img src={SecretGarden} alt="SecretGarden, oil painting by Luna Smith" />
            </div>
            <div className="imageContainerPortrait five">
              <img src={PineCone} alt="Snowy Pinecone, oil painting by Luna Smith" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default PageTwo