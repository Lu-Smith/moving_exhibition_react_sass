import React from 'react'

const Scroll = () => {

  const years = [2018, 2019, 2020, 2021, 2022, 2023]
  return (
    <div className='Scroll'>
      {years.map((year, index) => {
        return <div key={index}>
          {year}
        </div>
      })}

    </div>
  )
}

export default Scroll