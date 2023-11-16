import React from 'react';
import { motion } from 'framer-motion';

const TopBackground: React.FC = () => {

  return (
    <motion.div 
    className="TopBackground"
    initial={{ opacity: 0}} 
    whileInView={{opacity: 1}} 
    transition={{ delay: 1, duration: 3}}>
      <svg className="interactive-background" xmlns="http://www.w3.org/2000/svg" viewBox="10 -20 80 100">
        <motion.path
          d="M8.76,34 C10,6.5 40,10 50,30 C57.5,46 90.1,49.4 91.2,18.25"
          fill="none"
          stroke={`rgba(55, 55, 0, 1)`}
          strokeWidth="0.2"
          strokeDasharray="200"
          initial={{ pathLength: 0, pathOffset: -1 }} 
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 8 }}
        />
        </svg>
    </motion.div>
  );
}

export default TopBackground;