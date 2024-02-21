import { Transition, Variants, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Animation = ({
  children,
  variants = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  transition = { duration: 1, delay: 0.25 },
}) => {
  const ref = useRef(null);

  const IsInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (IsInView) {
      mainControls.start("visible");
    }
  }, [IsInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "fit-content",
      }}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={transition}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Animation;
