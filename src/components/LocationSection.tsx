import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";
import DynamicMap from "./Map";

const Phone = dynamic(() => import("@mui/icons-material/Phone"));

const elementSlidesInFromBottom: Variants = {
  hide: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const LocationSection = () => {
  return (
    <motion.section
      id="map-section"
      viewport={{ once: true }}
      initial="hide"
      whileInView="show"
      variants={elementSlidesInFromBottom}
      className="relative flex flex-col items-center justify-end md:block min-h-[512px] w-full py-[5%] px-[10%] scroll-mt-[152px]"
    >
      <div id="map">
        <DynamicMap />
      </div>
      <div className="z-10 flex flex-col gap-5 md:gap-10 bg-secondary p-5 md:p-10 max-w-[430px] rounded-lg">
        <h2 className="hidden md:block font-thin text-4xl">
          Zobacz jak do nas dojechać
        </h2>
        <div className="flex flex-col items-start">
          <span className="font-bold text-detail">Adres</span>
          <span>Drewnex - Grzegorz Pyrtek</span>
          <span>ul. Wolności 29</span>
          <span>32-440 Sułkowice</span>
        </div>
        <a
          href="tel:+48600600600"
          tabIndex={0}
          className="flex  items-center justify-center gap-2 border md:w-fit border-detail text-sm md:text-log px-4 md:px-8 py-2 md:py-4 rounded-lg flex-wrap md:flex-nowrap cursor-pointer "
        >
          <span className="flex items-center font-bold">
            <Phone />
          </span>
          <span className="font-bold">Zadzwoń</span>
          <span className="font-light text-nowrap">+48 600 600 600</span>
        </a>
      </div>
    </motion.section>
  );
};
