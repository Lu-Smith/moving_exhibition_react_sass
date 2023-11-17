import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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

  const imageVariants = {
    hover: { scale: 1.1, x: 30, transition: { duration: 0.3 } },
  };

  return (
    <div className='Page'>
        <div className="backgroundContainer">
          <div className="frontBackground">
            <TopBackground />
          </div>
          <div className="paintings">
            <motion.div 
            className="imageContainerLandscape one" 
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
            initial="initial"
            style={{ border: `8px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
              <img src={GlenEtive} alt="The song of Glen Etive, oil painting by Luna Smith" />
            </motion.div>
            <motion.div 
            className="imageContainerLandscape two" 
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
            initial="initial"
            style={{ border: `8px solid rgba(${mousePosition.x / window.innerWidth * 55}, ${mousePosition.y / window.innerHeight * 55}, 0, 1)` }}>
              <img src={TrappedWind} alt="The Trapped Wind, oil painting by Luna Smith" />
            </motion.div>
            <motion.div 
            className="imageContainerPortrait three"
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
              <img src={SecretGarden} alt="SecretGarden, oil painting by Luna Smith" />
            </motion.div>
            <motion.div 
            className="imageContainerPortrait five"
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
              <img src={PineCone} alt="Snowy Pinecone, oil painting by Luna Smith" />
            </motion.div>
          </div>
        </div>
    </div>
  )
}

export default PageTwo