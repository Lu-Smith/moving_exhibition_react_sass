import React from 'react'
import InteractiveBackground from './InteractiveBackground'
import TopBackground from './TopBackground'

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
      </div>
    </div>
  )
}

export default PageOne