import { useState } from 'react';
import NavSvg from './NavSvg';
import Scroll from './Scroll';
import { motion } from 'framer-motion';
import { Link} from 'react-scroll';

interface navProps {
  handleScroll: () => void,
  currentPage: number,
  pages: (() => JSX.Element)[],
};

const Navigation = ({handleScroll, currentPage, pages}: navProps) => {

  const [isMainPage, setMainPage] = useState(true);

  const handleIsMainPage = () => {
    setMainPage(false);
    handleScroll();
  }

  return (
    <div className='Navigation'>
        <h3>Scroll to explore</h3>
        <div className="scrollButton">
          {isMainPage && 
          <motion.div
          className='mainScrollButton'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
            <Link
            activeClass="active"
            to={`page${(currentPage + 1) % pages.length}`}
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleIsMainPage} >
              <NavSvg />
            </Link>
          </motion.div>}
          {!isMainPage && 
          <div className='pageScrollContainer'>
            <Scroll handleScroll={handleScroll} />
          </div>}
        </div>
    </div>
  )
}

export default Navigation