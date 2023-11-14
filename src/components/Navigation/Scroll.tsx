import React from 'react';

interface navProps {
  handleScroll: () => void,
  movePage: () => void,
};

const Scroll = ({handleScroll, movePage}: navProps) => {

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
          <button className='year' onClick={handleScroll} >{year.year}</button>
          {year.section.map((section, index) => {
            return <div key={index} className='yearSection'>
              <button onClick={movePage}>{section}</button>
            </div>
          })}
          
        </div>
      })}

    </div>
  )
}

export default Scroll