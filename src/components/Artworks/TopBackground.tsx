import React, { useState, useEffect } from 'react';

const TopBackground: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (event: any) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

  return (
    <div className='TopBackground'>
        <svg className="interactive-background" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="10 -20 80 100">
        <path d="M8.2,34 C10,10 40,10 50,30 C57.5,46 90.1,49.4 91.2,18.25" 
        fill="none" 
        stroke={`rgba(${mousePosition.x / window.innerWidth * 255}, ${mousePosition.y / window.innerHeight * 255}, 0, 0.5)`}
        stroke-width="0.2"
        />
        </svg>
    </div>
  )
}

export default TopBackground