import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import TopBackground from './TopBackground'
import InteractiveBackground from './InteractiveBackground'
import Reflections from '../../assets/paintings/Autumn Reflection by Luna Smith.jpg'
import WhiteSnake from '../../assets/paintings/Hatching White Snake by Luna Smith.jpg'
import RainbowEgg from '../../assets/paintings/Rainbow-Egg-by-Luna-Smith.jpg'
import AnimatedCircle from './AnimatedCircle';

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
      <div className="animationContainer">
        <AnimatedCircle />
      </div>
      <div className="paintings">
          <motion.div 
          className="imageContainerLandscape one" 
          whileHover="hover"
          variants={imageVariants}
          initial="initial"
          style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={Reflections} alt="Autumn Reflection oil painting by Luna Smith" />
          </motion.div>
          <motion.div 
          className="imageContainerPortrait two"
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
          style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={WhiteSnake} alt="White Snake, oil painting by Luna Smith" />
          </motion.div>
          <motion.div 
          className="imageContainerPortrait three" 
          whileHover="hover"
          variants={imageVariants}
          initial="initial"
          style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={RainbowEgg} alt="Rainbow Egg, oil painting by Luna Smith" />
          </motion.div>
      </div>
    </div>
  </div>
  )
}

export default PageFive