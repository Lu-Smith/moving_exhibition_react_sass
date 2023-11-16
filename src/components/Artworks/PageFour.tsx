import React, { useState, useEffect } from 'react'
import TopBackground from './TopBackground'
import WinterSummer from '../../assets/paintings/LunaSmith_WhenWinterMeetsSummer.jpg'
import WinterBreeze from '../../assets/paintings/LunaSmith_Winter Breeze.jpg'
import ItalianAlps from '../../assets/paintings/Italian-Alps-by-Luna-Smith.jpg'
import Autumn from '../../assets/paintings/Autumn-by-Luna-Smith.jpg'
import InteractiveBackgroundSmall from './InteractiveBackgroundSmall'
import { motion } from 'framer-motion'

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

  const imageVariants = {
    hover: { scale: 1.1, x: 30, transition: { duration: 0.3 } },
  };

  const backgroundVariants = {
    hover: { scale: 1.1, y: 30, transition: { duration: 0.3 } },
  };

  return (
    <div className='Page'>
    <div className="backgroundContainer">
      <div className="frontBackground">
        <TopBackground />
      </div>
      <motion.div 
        className="backBackgroundSmall"
        initial="initial"
        whileHover="hover"
        variants={backgroundVariants}>
          <InteractiveBackgroundSmall />
        </motion.div>
      <div className="paintings">
        <motion.div className="imageContainerLandscape one" 
           whileHover="hover"
           variants={imageVariants}
           initial="initial"
        style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
          <img src={WinterSummer} alt="When Winter Meets Summer, oil painting by Luna Smith" />
        </motion.div>
        <motion.div 
        className="imageContainerLandscape two" 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover="hover"
        variants={imageVariants}
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
        style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
          <img src={WinterBreeze} alt="Winter Breeze, oil painting by Luna Smith" />
        </motion.div>
        <motion.div className="imageContainerPortrait three odd" 
           whileHover="hover"
           variants={imageVariants}
           initial="initial"
        style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
          <img src={ItalianAlps} alt="Italian Alps, oil painting by Luna Smith" />
        </motion.div>
        <motion.div className="imageContainerPortrait four" 
           whileHover="hover"
           variants={imageVariants}
           initial="initial"
        style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={Autumn} alt="the Reflection of my Universe, oil painting by Luna Smith" />
        </motion.div>
      </div>
    </div>
  </div>
  )
}

export default PageFour