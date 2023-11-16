import React, { useState} from 'react';
import { heart, art, book } from '../../assets/animationPaths';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { getIndex, useFlubber } from '../../use-flubber';

const paths = [art, heart, book];
const colors = [
  "#00cc88",
  "#0099ff",
  "#8855ff",
];

const AnimationPaths = () => {
    const [pathIndex, setPathIndex] = useState(0);
    const progress = useMotionValue(pathIndex);
    const fill = useTransform(progress, paths.map(getIndex), colors);
    const path = useFlubber(progress, paths);

    React.useEffect(() => {
        const animation = animate(progress, pathIndex, {
          duration: 0.8,
          ease: "easeInOut",
          onComplete: () => {
            if (pathIndex === paths.length - 1) {
              progress.set(0);
              setPathIndex(1);
            } else {
              setPathIndex(pathIndex + 1);
            }
          }
        });
    
        return () => animation.stop();
      }, [pathIndex]);

  return (
        <svg width="400" height="400">
        <g transform="translate(10 10) scale(17 17)">
            <motion.path fill={fill} d={path} />
        </g>
        </svg>
  )
}

export default AnimationPaths