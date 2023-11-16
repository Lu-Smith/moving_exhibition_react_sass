import React from 'react'
import TopBackground from './TopBackground'
import WinterSummer from '../../assets/paintings/LunaSmith_WhenWinterMeetsSummer.jpg'
import WinterBreeze from '../../assets/paintings/LunaSmith_Winter Breeze.jpg'
import ItalianAlps from '../../assets/paintings/Italian-Alps-by-Luna-Smith.jpg'

const PageFour = () => {
  return (
    <div className='Page'>
    <div className="backgroundContainer">
      <div className="frontBackground">
        <TopBackground />
      </div>
      <div className="paintings">
        <div className="imageContainerLandscape one">
          <img src={WinterSummer} alt="When Winter Meets Summer, oil painting by Luna Smith" />
        </div>
        <div className="imageContainerLandscape two">
          <img src={WinterBreeze} alt="Winter Breeze, oil painting by Luna Smith" />
        </div>
        <div className="imageContainerPortrait three odd">
          <img src={ItalianAlps} alt="Italian Alps, oil painting by Luna Smith" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default PageFour