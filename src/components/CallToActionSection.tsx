"use client";
import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";

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
      duration: 0.5,
    },
  },
};

export const CallToActionSection = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-8 bg-cta-pattern  text-2xl py-[15%] md:py-[5%] px-[10%]">
      <motion.h2
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        variants={elementSlidesInFromBottom}
        className="font-[100] text-4xl text-center leading-normal"
      >
        Nie znalazłeś potrzebnej <b className="font-extrabold">informacji?</b>
      </motion.h2>
      <motion.span
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        variants={elementSlidesInFromBottom}
        className="font-light text-textAlternate text-center text-sm md:text-lg"
      >
        Skontaktuj się z nami telefonicznie, a my od ręku udzielimy Ci
        odpowiedzi
      </motion.span>
      <motion.a
        viewport={{ once: true }}
        href="tel:+48600600600"
        initial="hide"
        whileInView="show"
        variants={elementSlidesInFromBottom}
        className="flex gap-2 border border-detail text-lg px-4 md:px-8 py-2 md:py-5 rounded-lg flex-nowrap cursor-pointer"
      >
        <span className="flex items-center font-bold">
          <Phone />
        </span>
        <span className="font-bold">Zadzwoń</span>
        <span className="font-light text-nowrap">+48 600 600 600</span>
      </motion.a>
    </section>
  );
};
