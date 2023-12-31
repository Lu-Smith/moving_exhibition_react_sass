import React, { useState, useEffect } from 'react';
import TopBackground from './TopBackground'
import Diabaig from '../../assets/paintings/The-Whishper-of-the-Diabaig--by-Luna-Smith.jpg'
import GoldenTrees from '../../assets/paintings/Shimmering Golden Trees.jpg'
import DreamsFuture from '../../assets/paintings/Dreams of a Future Self by Luna Smith.jpg'
import Universe from '../../assets/paintings/The Reflection of my Universe by Luna Smith.jpg'
import { motion } from 'framer-motion'

const PageSix: React.FC = () => {
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

  const imageRotateVariants = {
    hover: { scale: 1.1, y: -30, rotate: -30, transition: { duration: 0.3 } },
  };

  const imageFullRotateVariants = {
    hover: { scale: 0.6, rotate: 360, transition: { duration: 0.3 } },
  };

  return (
    <div className='Page'>
    <div className="backgroundContainer">
      <div className="frontBackground">
        <TopBackground />
      </div>
      <div className="paintings">
          <motion.div className="imageContainerLandscape one odd"
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
            <img src={Diabaig} alt="The Wishper of Diabaig, oil painting by Luna Smith" />
          </motion.div>
          <motion.div className="imageContainerLandscape two odd" 
             whileHover="hover"
             variants={imageVariants}
             initial="initial"
          style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={GoldenTrees} alt="The Golden Trees, oil painting by Luna Smith" />
          </motion.div>
          <motion.div className="imageContainerPortrait three" 
             whileHover="hover"
             variants={imageRotateVariants}
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
            <img src={DreamsFuture} alt="Dreams of Future Self, oil painting by Luna Smith" />
          </motion.div>
          <motion.div 
          className="imageContainerPortrait four" 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
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
          whileHover="hover"
          variants={imageFullRotateVariants}
          style={{ border: `4px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
            <img src={Universe} alt="the Reflection of my Universe, oil painting by Luna Smith" />
          </motion.div>
      </div>
    </div>
  </div>
  )
}

export default PageSix