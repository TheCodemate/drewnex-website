import React from "react";

import { motion, Variants } from "framer-motion";

const introHeaderVariants: Variants = {
  hide: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Banner = () => {
  return (
    <section className="flex bg-banner-pattern justify-between min-h-[300px] md:min-h-[380px] w-full py-5 md:py-[5%] px-5 md:px-[10%]">
      <div className="md:flex-1 "></div>
      <motion.div
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        variants={introHeaderVariants}
        className="flex-1 flex flex-col justify-center items-right text-4xl lg:text-6xl pr-[10%] leading-relaxed"
      >
        <p className="font-[100] text-right">Ponad 30 lat</p>
        <p className="text-right">
          <b className="font-bold">doświadczenia</b>
        </p>
      </motion.div>
    </section>
  );
};
