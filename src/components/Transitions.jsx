import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import React from 'react'

const Transitions = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
  
    const mainControls = useAnimation();
    const slideControls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        // Fire the animation
        mainControls.start("visible");
        slideControls.start("visible");
      }
  
    }, [isInView]);
  
    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        
        </motion.div>
    )
}


export default Transitions
