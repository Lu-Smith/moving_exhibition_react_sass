import React from 'react'
import TopBackground from './TopBackground'
import Diabaig from '../../assets/paintings/The-Whishper-of-the-Diabaig--by-Luna-Smith.jpg'
import GoldenTrees from '../../assets/paintings/Shimmering Golden Trees.jpg'
import DreamsFuture from '../../assets/paintings/Dreams of a Future Self by Luna Smith.jpg'
import Universe from '../../assets/paintings/The Reflection of my Universe by Luna Smith.jpg'

const PageSix = () => {
  return (
    <div className='Page'>
    <div className="backgroundContainer">
      <div className="frontBackground">
        <TopBackground />
      </div>
      <div className="paintings">
          <div className="imageContainerLandscape one odd">
            <img src={Diabaig} alt="The Wishper of Diabaig, oil painting by Luna Smith" />
          </div>
          <div className="imageContainerLandscape two odd">
            <img src={GoldenTrees} alt="The Golden Trees, oil painting by Luna Smith" />
          </div>
          <div className="imageContainerPortrait three">
            <img src={DreamsFuture} alt="Dreams of Future Self, oil painting by Luna Smith" />
          </div>
          <div className="imageContainerPortrait four">
            <img src={Universe} alt="the Reflection of my Universe, oil painting by Luna Smith" />
          </div>
      </div>
    </div>
  </div>
  )
}

export default PageSix