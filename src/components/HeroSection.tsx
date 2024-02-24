import dynamic from "next/dynamic";

import { motion, Variants } from "framer-motion";

const introHeaderVariants: Variants = {
  hide: {
    opacity: 0,
    x: -500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const Phone = dynamic(() => import("@mui/icons-material/PhoneInTalk"));
export const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center  bg-hero-pattern bg-cover p-[10%] max-h-screen">
      <motion.div
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        variants={introHeaderVariants}
        className="flex flex-col justify-center gap-8 w-full min-h-screen"
      >
        <h1 className="font-[200] text-5xl sm:text-4xl md:text-7xl leading-normal text-center md:text-left">
          Produkujemy <b className="font-[600]">drewno</b>
          <br /> i doradzamy w wyborze
        </h1>
        <p className="md:w-[50%] text-lg sm:text-xl  font-thin text-center md:text-left text-textAlternate">
          W naszym tartaku wspieramy klientów wieloletnim doświadczeniem w
          branzy i pomagamy w doborze jakościowego materiału
        </p>

        <button className="flex gap-2 px-8 py-5 self-center md:self-auto text-secondary bg-detail border border-detail text-nowrap w-fit rounded-lg hover:bg-detailHovered ">
          <Phone />
          <span className="font-bold">Zadzwoń</span>
          <span className="font-thin">+48 600 600 600</span>
        </button>
      </motion.div>
    </div>
  );
};
