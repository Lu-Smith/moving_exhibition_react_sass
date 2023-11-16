import React from 'react'
import InteractiveBackground from './InteractiveBackground'
import TopBackground from './TopBackground'
import ZinShadows from '../../assets/paintings/Z in Shadows by Luna Smith.jpg'
import ScottishDream from '../../assets/paintings/Scottish Dream by Luna Smith.jpg'
import WomenNature from '../../assets/paintings/LunaSmith_LifeArchitect.jpg'

const PageOne = () => {
  return (
    <div className='Page'>
      <div className="backgroundContainer">
        <div className="frontBackground">
          <TopBackground />
        </div>
        <div className="backBackground">
          <InteractiveBackground />
        </div>
        <div className="paintings">
          <div className="imageContainerLandscape one">
            <img src={ZinShadows} alt="Z in Shadows, oil painting by Luna Smith" />
          </div>
          <div className="imageContainerLandscape two">
            <img src={ScottishDream} alt="L in Shadows, oil painting by Luna Smith" />
          </div>
          <div className="imageContainerPortrait three">
            <img src={WomenNature} alt="Women Nature, oil painting by Luna Smith" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageOne