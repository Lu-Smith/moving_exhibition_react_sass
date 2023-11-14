import { useState } from 'react'
import NavSvg from './NavSvg'
import Scroll from './Scroll'

interface navProps {
  handleScroll: () => void,
}

const Navigation = ({handleScroll}: navProps) => {

  const [isMainPage, setMainPage] = useState(true);

  const handleIsMainPage = () => {
    setMainPage(!isMainPage);
    handleScroll();
  }

  const handleNextPage = () => {
    handleScroll();
  }

  return (
    <div className='Navigation'>
        <h3>Scroll to explore</h3>
        <div className="scrollButton">
          {isMainPage && <div onClick={handleIsMainPage} className='mainScrollButton'><NavSvg /></div>}
          {!isMainPage && <div onClick={handleNextPage} className='pageScrollButton'><Scroll /></div>}
        </div>
    </div>
  )
}

export default Navigation