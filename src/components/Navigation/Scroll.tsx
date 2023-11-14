import React from 'react'

const Scroll = () => {

  const years = [
    {
      year: "2018",
      section: ["", "", "", ""]
    }, 
    {
      year: "2019",
      section: ["", "", "", ""]
    },
    {
      year: "2020",
      section: ["", "", "", ""]
    },
    {
      year: "2021",
      section: ["", "", "", ""]
    },
    {
      year: "2022",
      section: ["", "", "", ""]
    },
    {
      year: "2023",
      section: ["", "", "", ""]
    }
  ]
  return (
    <div className='Scroll'>
      {years.map((year, index) => {
        return <div key={index}>
          <div>{year.year}</div>
          {year.section.map((section, index) => {
            return <div key={index} className='yearSection'>
              {section}
            </div>
          })}
          
        </div>
      })}

    </div>
  )
}

export default Scroll