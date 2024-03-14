"use client";
import { CallToActionSection } from "@/components/CallToActionSection";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";

const introHeaderVariants: Variants = {
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

const elementSlidesInFromLeft = {
  hide: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const elementSlidesInFromRight = {
  hide: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const Oferta = () => {
  return (
    <main>
      {/* hero section */}
      <section className="flex flex-col justify-center text-6xl sm:min-h-[342px]">
        <div className="flex flex-col min-h-[200px] justify-center bg-hero-pattern bg-center p-8 lg:min-h-[520px] py-4 xl:py-8 px-[2%] xl:px-[5%] gap-4 xl:gap-8">
          <motion.div
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            variants={introHeaderVariants}
          >
            <h1 className="font-[200]">Oferta</h1>
          </motion.div>
        </div>
        <motion.div
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          variants={introHeaderVariants}
          className="flex-1 flex flex-col justify-center items-center text-xl p-8 text-center sm:min-h-[342px] sm:p-16"
        >
          <h2 className="font-thin mb-4 text-4xl">
            Ponizej znajdziesz <span className="font-bold">opis produktów</span>{" "}
            dostępnych w ofercie
          </h2>
          <p className="font-normal text-textAlternate text-base sm:w-3/4">
            W naszym tartaku posiadamy szeroki wybór profesjonalnych produktów
            tartacznych. Oferta obejmuje tarcicę, impregnację drewna, więźby
            dachowe, drewno opałowe i wiele innych wysokiej jakości produktów. Z
            wieloletnim doświadczeniem w branży drzewnej i pasją do precyzyjnej
            obróbki drewna, zapewniamy Ci kompleksową obsługę i produkty
            dopasowane do Twoich potrzeb. Skontaktuj się z nami, aby dowiedzieć
            się więcej!
          </p>
        </motion.div>
      </section>
      {/* product section */}
      <section className="">
        {/* product 1 - tarcica */}
        <div className="flex flex-col border-b border-detail sm:flex-row">
          <motion.div
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            variants={elementSlidesInFromLeft}
            className="relative min-w-[240px] min-h-[300px] max-w-full max-h-[380px] sm:flex-1 sm:max-h-full"
          >
            <Image
              objectFit="cover"
              objectPosition="center"
              fill={true}
              src="/tarcica-sucha.webp"
              alt="tarcica leząca jedna na drugiej"
            />
          </motion.div>
          <div className="flex flex-col items-start gap-4 p-8 sm:flex-1 sm:p-0 sm:gap-0 ">
            <motion.div
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              variants={elementSlidesInFromRight}
              className="flex flex-col gap-4 p-0 sm:p-12 md:p-16 lg:p-24 xl:p-32"
            >
              <h2 className="font-[200] text-4xl">Tarcica</h2>
              <span className="text-detail font-bold uppercase">
                Podtytuł lorem ipsum
              </span>
              <p className="font-normal text-base">
                Chcąc sprostać różnorodnym potrzebom naszych klientów, dostępne
                są u nas tarcice z różnych gatunków drewna, takich jak sosna,
                świerk czy dąb. Bez względu na to, czy potrzebujesz tarcicy do
                mebli, podłóg czy konstrukcji drewnianych, nasze produkty z
                pewnością spełnią Twoje oczekiwania. W naszym tartaku kładziemy
                duży nacisk na jakość surowca oraz precyzję wykonania, co
                sprawia, że nasza tarcica wyróżnia się na tle innych.
                Niezależnie od projektu, który masz w planach, możesz być
                pewien, że nasza tarcica będzie solidnym fundamentem.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col border-b border-detail sm:flex-row-reverse">
          <motion.div
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            variants={elementSlidesInFromRight}
            className="relative min-w-[240px] min-h-[300px] max-w-full max-h-[380px] sm:flex-1 sm:max-h-full"
          >
            <Image
              objectFit="cover"
              objectPosition="center"
              fill={true}
              src="/wiezba-dachowa.webp"
              alt="tarcica leząca jedna na drugiej"
            />
          </motion.div>
          <div className="flex flex-col items-start gap-4 p-8 sm:flex-1 sm:p-0 sm:gap-0 ">
            <motion.div
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              variants={elementSlidesInFromLeft}
              className="flex flex-col gap-4 p-0 sm:p-12 md:p-16 lg:p-24 xl:p-32"
            >
              <h2 className="font-[200] text-4xl">Więźba dachowa</h2>
              <span className="text-detail font-bold uppercase">
                Podtytuł lorem ipsum
              </span>
              <p className="font-normal text-base">
                Oferujemy różnorodne rodzaje więźb dachowych, takich jak
                tradycyjne krokwiowe, prefabrykowane, czy też nietypowe
                konstrukcje na indywidualne zamówienie. Dzięki naszemu
                doświadczeniu i zaawansowanej technologii, każda więźba jest
                projektowana i wykonana z najwyższą starannością, aby zapewnić
                stabilność i wytrzymałość dachu, bez względu na kształt i
                wielkość. Nasze więźby dachowe są dostosowane do specyfiki
                Twojego projektu, zapewniając nie tylko funkcjonalność, ale
                również estetyczny wygląd Twojego domu.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col border-b border-detail sm:flex-row">
          <motion.div
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            variants={elementSlidesInFromLeft}
            className="relative min-w-[240px] min-h-[300px] max-w-full max-h-[380px] sm:flex-1 sm:max-h-full"
          >
            <Image
              objectFit="cover"
              objectPosition="center"
              fill={true}
              src="/impregnacja-drewna.webp"
              alt="tarcica leząca jedna na drugiej"
            />
          </motion.div>
          <div className="flex flex-col items-start gap-4 p-8 sm:flex-1 sm:p-0 sm:gap-0 ">
            <motion.div
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              variants={elementSlidesInFromRight}
              className="flex flex-col gap-4 p-0 sm:p-12 md:p-16 lg:p-24 xl:p-32"
            >
              <h2 className="font-[200] text-4xl">Impregnacja</h2>
              <span className="text-detail font-bold uppercase">
                Podtytuł lorem ipsum
              </span>
              <p className="font-normal text-base">
                Stosujemy tylko najwyższej jakości impregnaty, które penetrują
                drewno głęboko, zapobiegając wnikaniu wilgoci i szkodliwym
                substancjom. Nasze produkty impregnujące są odpowiednie do
                różnych rodzajów drewna, od miękkiego po twarde gatunki,
                zapewniając kompleksową ochronę dla każdego projektu.
                Niezależnie od tego, czy chcesz zabezpieczyć drewniany taras,
                meble ogrodowe czy elewację domu, nasza impregnacja drewna
                zapewni Ci spokój i pewność, że Twój drewniany projekt będzie
                zachwycał przez wiele lat.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col border-b border-detail sm:flex-row-reverse">
          <motion.div
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            variants={elementSlidesInFromRight}
            className="relative min-w-[240px] min-h-[300px] max-w-full max-h-[380px] sm:flex-1 sm:max-h-full"
          >
            <Image
              objectFit="cover"
              objectPosition="center"
              fill={true}
              src="/drewno-opalowe.webp"
              alt="tarcica leząca jedna na drugiej"
            />
          </motion.div>
          <div className="flex flex-col items-start gap-4 p-8 sm:flex-1 sm:p-0 sm:gap-0 ">
            <motion.div
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              variants={elementSlidesInFromLeft}
              className="flex flex-col gap-4 p-0 sm:p-12 md:p-16 lg:p-24 xl:p-32"
            >
              <h2 className="font-[200] text-4xl">Drewno opałowe</h2>
              <span className="text-detail font-bold uppercase">
                Podtytuł lorem ipsum
              </span>
              <p className="font-normal text-base">
                Nasze drewno opałowe to źródło ciepła, które sprawi, że Twój dom
                stanie się przytulnym azylem, nawet w najchłodniejsze dni. W
                naszej ofercie znajdziesz różne rodzaje drewna opałowego, od
                tradycyjnych buków po sosny czy dęby. Rozbudowana oferta pozwoli
                Ci wybrać odpowiedni gatunek, który najlepiej spełni Twoje
                oczekiwania. Nasze drewno jest starannie sezonowane i
                przygotowane do spalania, co gwarantuje nie tylko efektywne, ale
                także ekologiczne ogrzewanie. Bez względu na to, czy masz
                kominek, piec kaflowy czy nowoczesny piec na biomasę, nasze
                drewno opałowe zapewni Ci niezawodne źródło ciepła przez cały
                sezon grzewczy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <CallToActionSection />
    </main>
  );
};

export default Oferta;

// poprawić czcionke opisu na 16px
