import { motion } from "framer-motion";

const MainAnimation = () => {
  return (
    <motion.div
    className="MainAnimation"
    animate={{
      scale: [1, 1.5, 1.5, 1, 1],
      rotate: [0, 0, 180, 180, 0],
      borderRadius: ["0%", "0%", "50%", "50%", "0%"]
    }}
    transition={{
      duration: 5,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 20
    }}
  />
  )
}

export default MainAnimation