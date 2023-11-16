import React from 'react'
import TopBackground from './TopBackground'
import InteractiveBackground from './InteractiveBackground'

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
    </div>
  </div>
  )
}

export default PageThree