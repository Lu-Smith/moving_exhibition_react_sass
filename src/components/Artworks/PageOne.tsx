import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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

  const imageVariants = {
    hover: { scale: 1.1, x: 30, transition: { duration: 0.3 } },
  };

  const backgroundVariants = {
    hover: { scale: 1.1, y: -30, transition: { duration: 0.3 } },
  };
  
  return (
    <div className='Page'>
      <div className="backgroundContainer">
        <div className="frontBackground">
          <TopBackground />
        </div>
        <div className="backBackground">
          <InteractiveBackground />
        </div>
        <motion.div 
        className="backBackgroundSmall"
        initial="initial"
        whileHover="hover"
        variants={backgroundVariants}>
          <InteractiveBackgroundSmall />
        </motion.div>
        <div className="paintings">
        <motion.div 
        className="imageContainerLandscape one"
        whileHover="hover"
        variants={imageVariants}
        initial="initial" 
        transition={{
          duration: 2,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
        style={{ border: `8px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={ZinShadows} alt="Z in Shadows, oil painting by Luna Smith" />
          </motion.div>
          <motion.div 
          className="imageContainerLandscape two" 
          whileHover="hover"
          variants={imageVariants}
          initial="initial"
          style={{ border: `8px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={ScottishDream} alt="L in Shadows, oil painting by Luna Smith" />
          </motion.div>
          <motion.div 
          className="imageContainerPortrait three"
          whileHover="hover"
          variants={imageVariants}
          initial="initial" 
          style={{ border: `8px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={WomenNature} alt="Women Nature, oil painting by Luna Smith" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PageOne