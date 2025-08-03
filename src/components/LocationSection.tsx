import dynamic from 'next/dynamic';
import { motion, Variants } from 'framer-motion';

// Dynamiczny import komponentu mapy z wyłączonym SSR
const DynamicMap = dynamic(() => import('./Map'), {
  ssr: false, // Wyłączamy renderowanie po stronie serwera dla mapy
  loading: () => (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-secondary">
      <div className="text-center p-4">Ładowanie mapy...</div>
    </div>
  ),
});

const Phone = dynamic(() => import('@mui/icons-material/Phone'));

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

<motion.div
  viewport={{ once: true }}
  initial="hide"
  whileInView="show"
  variants={elementSlidesInFromBottom}
  className="flex flex-col justify-center items-center gap-8"
>
  <h2 className="font-[100] text-4xl text-center leading-normal">
    Nie znalazłeś potrzebnej <b className="font-extrabold">informacji?</b>
  </h2>
  <span className="font-light text-textAlternate text-center text-sm md:text-lg">
    Skontaktuj się z nami telefonicznie, a my od ręku udzielimy Ci odpowiedzi
  </span>
  <a
    href="tel:+48600600600"
    className="flex gap-2 border border-detail text-lg px-4 md:px-8 py-2 md:py-5 rounded-lg flex-nowrap cursor-pointer"
  >
    <span className="flex items-center font-bold">
      <Phone />
    </span>
    <span className="font-bold">Zadzwoń</span>
    <span className="font-light text-nowrap">+48 600 600 600</span>
  </a>
</motion.div>;

export const LocationSection = () => {
  return (
    <>
      {/* <div className="flex flex-col items-center gap-4 flex-1">
        <h2 className="font-[100] text-[40px] mb-4">
          Zobacz jak dojechać do<b className="font-extrabold"> Drewnex</b>
        </h2>
        <p className="text-textAlternate mb-12 font-thin text-center">
          Tutaj znajdziesz naszą lokalizację oraz sposób, jak do nas dojechać, a
          tak że dane kontaktowe.
        </p>
      </div> */}

      <motion.section
        id="map-section"
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        variants={elementSlidesInFromBottom}
        className="relative flex flex-col items-center justify-end md:block min-h-[512px] w-full py-[5%] px-[10%] scroll-mt-[152px]"
      >
        <div id="map" className="absolute top-0 left-0 w-full h-full">
          <DynamicMap />
        </div>
        {/* <div className="z-10 relative flex flex-col gap-5 md:gap-10 bg-secondary p-5 md:p-10 max-w-[430px] rounded-lg shadow-lg">
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
          className="flex items-center justify-center gap-2 border md:w-fit border-detail text-sm md:text-log px-4 md:px-8 py-2 md:py-4 rounded-lg flex-wrap md:flex-nowrap cursor-pointer hover:bg-detail hover:text-white transition-colors"
        >
          <span className="flex items-center font-bold">
            <Phone />
          </span>
          <span className="font-bold">Zadzwoń</span>
          <span className="font-light text-nowrap">+48 600 600 600</span>
        </a>
      </div> */}
      </motion.section>
    </>
  );
};
