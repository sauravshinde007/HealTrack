import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export function InfiniteSlider({ children, gap = 80, duration = 40 }) {
  const [ref, { width }] = useMeasure();
  const x = useMotionValue(0);

  useEffect(() => {
    const controls = animate(x, [0, -width / 2], {
      ease: "linear",
      duration,
      repeat: Infinity,
    });
    return controls.stop;
  }, [width]);

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={ref}
        style={{ x }}
        className="flex w-max gap-[80px]"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
