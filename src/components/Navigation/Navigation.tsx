import React, { useState } from 'react'
import NavSvg from './NavSvg'
import Scroll from './Scroll'

const Navigation = () => {

  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    setScroll(!scroll);
  }

  return (
    <div>
        <h2>Scorll to explore</h2>
        <div className="scrollButton">
          <div onClick={handleScroll}><NavSvg /></div>
          {scroll && <Scroll />}
        </div>
    </div>
  )
}

export default Navigation