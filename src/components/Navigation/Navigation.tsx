import { useState } from 'react'
import NavSvg from './NavSvg'
import Scroll from './Scroll'

interface navProps {
  scroll: boolean,
  handleScroll: () => void,
}

const Navigation = ({scroll, handleScroll}: navProps) => {

  const [isMainPage, setMainPage] = useState(true);

  const handleIsMainPage = () => {
    setMainPage(!isMainPage);
    handleScroll();
  }

  return (
    <div>
        <h2>Scroll to explore</h2>
        <div className="scrollButton">
          {isMainPage && <div onClick={handleIsMainPage}><NavSvg /></div>}
          {!isMainPage && <div onClick={handleScroll}><Scroll /></div>}
        </div>
    </div>
  )
}

export default Navigation