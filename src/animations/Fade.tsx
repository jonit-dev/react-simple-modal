import { motion } from "framer-motion";
import React from "react";



interface IProps {
  direction: "in" | "out"
  children: React.ReactNode
}

export const Fade: React.FC<IProps> = ({direction, children}) => {
  

  const animation = {
    initial: {
      opacity: direction === "in" ? 0 : 1
    },
    animate: {
      opacity: direction === "in" ? 1 : 0,
    },
    transition: {
      duration: 1// in seconds
    }
  }

  
  
  return (
    <motion.div {...animation}>
      {children}
    </motion.div>
  );
};
 