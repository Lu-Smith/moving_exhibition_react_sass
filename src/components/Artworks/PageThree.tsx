import React from 'react'
import TopBackground from './TopBackground'
import InteractiveBackground from './InteractiveBackground'
import Shrimp from '../../assets/paintings/Shrimp-by-Luna-Smith.jpg'
import Dream from '../../assets/paintings/Dream by Luna Smith.jpg'
import Owl from '../../assets/paintings/Owl by Luna Smith.jpg'

const PageThree = () => {
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
          <div className="imageContainerAnimal one">
            <img src={Shrimp} alt="Shrimp, oil painting by Luna Smith" />
          </div>
          <div className="imageContainerAnimal two">
            <img src={Dream} alt="Dream, oil painting by Luna Smith" />
          </div>
          <div className="imageContainerPortrait three">
            <img src={Owl} alt="Owl, oil painting by Luna Smith" />
          </div>
        </div>
    </div>
  </div>
  )
}

export default PageThree