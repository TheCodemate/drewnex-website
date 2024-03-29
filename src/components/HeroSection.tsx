import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";
const Phone = dynamic(() => import("@mui/icons-material/PhoneInTalk"));

const elementSlidesInFromLeft: Variants = {
  hide: {
    opacity: 0,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="flex flex-col justify-center  bg-hero-pattern bg-blend-darken bg-cover p-[10%] max-h-screen backdrop--50"
    >
      <motion.div
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        variants={elementSlidesInFromLeft}
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

        <a
          href="tel:+48600600600"
          className="flex gap-2 px-8 py-5 self-center md:self-auto text-secondary bg-detail border border-detail text-nowrap w-fit rounded-lg hover:bg-detailHovered "
        >
          <Phone />
          <span className="font-bold">Zadzwoń</span>
          <span className="font-thin">+48 600 600 600</span>
        </a>
      </motion.div>
    </div>
  );
};
