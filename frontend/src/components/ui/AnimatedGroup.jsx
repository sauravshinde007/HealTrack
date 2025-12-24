import { motion } from "framer-motion";
import React from "react";
import { cn } from "../../utils/cn";

const defaultContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const defaultItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function AnimatedGroup({ children, className, variants }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants?.container || defaultContainer}
      className={cn(className)}
    >
      {React.Children.map(children, (child, i) => (
        <motion.div
          key={i}
          variants={variants?.item || defaultItem}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
