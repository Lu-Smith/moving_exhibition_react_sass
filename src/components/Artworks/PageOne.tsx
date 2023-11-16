import React from 'react'
import InteractiveBackground from './InteractiveBackground'
import TopBackground from './TopBackground'
import ZinShadows from '../../assets/paintings/Z in Shadows by Luna Smith.jpg'

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
          <div className="imageContainerLandscape">
            <img src={ZinShadows} alt="Z in Shadows, oil painting by Luna Smith" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageOne