import { useState, useEffect } from 'react';
import NavSvg from './NavSvg';
import { motion } from 'framer-motion';

interface navProps {
  handleScroll: () => void,
  playFromBeginning: boolean,
};

const Navigation = ({handleScroll, playFromBeginning }: navProps) => {


  const handleIsMainPage = () => {
    handleScroll();
  }

  return (
    <div className='Navigation'>
        <h3>Scroll to explore</h3>
        <div className="scrollButton">
        {!playFromBeginning &&
          <motion.button 
          onClick={handleIsMainPage} 
          className='mainScrollButton'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
            <NavSvg />
          </motion.button>}
          {playFromBeginning &&
          <motion.button 
          onClick={handleIsMainPage} 
          className='mainScrollButton'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
            Start again
          </motion.button>
          }
        </div>
    </div>
  )
}

export default Navigation