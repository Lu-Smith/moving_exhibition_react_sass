import { useState } from 'react';
import NavSvg from './NavSvg';
import Scroll from './Scroll';
import { motion } from 'framer-motion';

interface navProps {
  handleScroll: () => void,
  movePage: () => void,
  playFromBeginning: boolean,
};

const Navigation = ({handleScroll, movePage, playFromBeginning }: navProps) => {

  const [isMainPage, setMainPage] = useState(true);

  const handleIsMainPage = () => {
    setMainPage(!isMainPage);
    handleScroll();
  }

  if (playFromBeginning) {
    setMainPage(true);
  }

  return (
    <div className='Navigation'>
        <h3>Scroll to explore</h3>
        <div className="scrollButton">
          {isMainPage && 
          <motion.button 
          onClick={handleIsMainPage} 
          className='mainScrollButton'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
            <NavSvg />
          </motion.button>}
          {!isMainPage && 
          <div className='pageScrollContainer'>
            <Scroll handleScroll={handleScroll} movePage={movePage} />
          </div>}
        </div>
    </div>
  )
}

export default Navigation