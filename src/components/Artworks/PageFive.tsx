import React from 'react'
import TopBackground from './TopBackground'
import InteractiveBackground from './InteractiveBackground'
import Reflections from '../../assets/paintings/Autumn Reflection by Luna Smith.jpg'
import WhiteSnake from '../../assets/paintings/Hatching White Snake by Luna Smith.jpg'
import RainbowEgg from '../../assets/paintings/Rainbow-Egg-by-Luna-Smith.jpg'

const PageFive = () => {
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
            <img src={Reflections} alt="Shrimp, oil painting by Luna Smith" />
          </div>
          <div className="imageContainerPortrait two">
            <img src={WhiteSnake} alt="Dream, oil painting by Luna Smith" />
          </div>
          <div className="imageContainerPortrait three">
            <img src={RainbowEgg} alt="Owl, oil painting by Luna Smith" />
          </div>
        </div>
    </div>
  </div>
  )
}

export default PageFive