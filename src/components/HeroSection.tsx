import dynamic from 'next/dynamic';
import { motion, Variants } from 'framer-motion';
const Phone = dynamic(() => import('@mui/icons-material/PhoneInTalk'));

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
        className="flex flex-col justify-center items-center gap-12 min-h-screen"
      >
        <span className="text-5xl text-center text-detail">Tartak Drewnex</span>
        <h1 className="font-[200] text-4xl sm:text-4xl md:text-7xl leading-normal text-center">
          Twój sprawdzony dostawca wysokiej jakości drewna
        </h1>
        <p className="md:w-[50%] text-lg sm:text-xl font-thin text-center text-textAlternate">
          Oferujemy solidne materiały dla budownictwa oraz ambintych projektów
          stolarskich.
        </p>

        <a
          href="tel:+48609099988"
          className="flex gap-2 px-8 py-5 self-center md:self-auto text-secondary bg-detail border border-detail text-nowrap w-fit rounded-lg hover:bg-detailHovered "
        >
          <Phone />
          <span className="font-bold">Zadzwoń</span>
          <span className="font-thin">+48 609 099 988</span>
        </a>
      </motion.div>
    </div>
  );
};
