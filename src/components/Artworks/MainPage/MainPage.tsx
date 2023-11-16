import React from 'react'
import MainAnimation from './MainAnimation'

const MainPage:React.FC = () => {
  return (
    <div className='MainPage'>
      <h1>Art Through Time</h1>
      <h2>Throughout the years, both the realm of art and the broader world have undergone transformative changes. From the inception of my career as an artist, I have witnessed a continual evolution in my artwork, a reflection of the dynamic interplay between my creative journey and the shifting landscapes of our shared existence.</h2>
      <div className="animationContainer">
        <MainAnimation />
      </div>
    </div>
  )
}

export default MainPage