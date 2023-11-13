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
    <div>
        <h2>Scroll to explore</h2>
        <div className="scrollButton">
          {isMainPage && <div onClick={handleIsMainPage}><NavSvg /></div>}
          {!isMainPage && <div onClick={handleNextPage}><Scroll /></div>}
        </div>
    </div>
  )
}

export default Navigation