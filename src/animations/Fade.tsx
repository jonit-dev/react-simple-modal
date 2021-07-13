import { motion } from "framer-motion";
import React from "react";

interface IProps {
  direction: "in" | "out";
  slideEntrance?: boolean;
  children: React.ReactNode;
}

export const Fade: React.FC<IProps> = ({
  direction,
  children,
  slideEntrance,
}) => {
  const animation = {
    initial: {
      opacity: direction === "in" ? 0 : 1,
      y: slideEntrance ? -20 : undefined,
    },
    animate: {
      opacity: direction === "in" ? 1 : 0,
      y: slideEntrance ? 0 : undefined,
    },
    transition: {
      duration: 1, // in seconds
    },
  };

  return <motion.div {...animation}>{children}</motion.div>;
};
