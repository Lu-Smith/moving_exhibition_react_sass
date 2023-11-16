import React from 'react'
import TopBackground from './TopBackground'
import GlenEtive from '../../assets/paintings/The-Song-of-the-Glen-Etive-by-Luna-Smith.jpg'
import TrappedWind from '../../assets/paintings/The-Trapped-Wind.jpg'
import SecretGarden from '../../assets/paintings/Secret Garden by Luna Smith.jpg'
import PineCone from '../../assets/paintings/pinecone.jpg'

const PageTwo = () => {
  return (
    <div className='Page'>
        <div className="backgroundContainer">
          <div className="frontBackground">
            <TopBackground />
          </div>
          <div className="paintings">
            <div className="imageContainerLandscape one">
              <img src={GlenEtive} alt="The song of Glen Etive, oil painting by Luna Smith" />
            </div>
            <div className="imageContainerLandscape two">
              <img src={TrappedWind} alt="The Trapped Wind, oil painting by Luna Smith" />
            </div>
            <div className="imageContainerPortrait three">
              <img src={SecretGarden} alt="SecretGarden, oil painting by Luna Smith" />
            </div>
            <div className="imageContainerPortrait five">
              <img src={PineCone} alt="Snowy Pinecone, oil painting by Luna Smith" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default PageTwo