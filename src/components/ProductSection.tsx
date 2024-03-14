import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const ArrowRightAlt = dynamic(
  () => import("@mui/icons-material/ArrowRightAlt")
);

import { motion, Variants } from "framer-motion";

const introHeaderVariants: Variants = {
  hide: {
    opacity: 0,
    y: 200,
    top: 0,
    left: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    top: 0,
    left: 0,
    transition: {
      duration: 1,
    },
  },
};

export const ProductSection = () => {
  return (
    <section
      id="products-list"
      className="flex flex-col justify-center items-center px-[10%] py-[5%] scroll-mt-[152px]"
    >
      <motion.div
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        variants={introHeaderVariants}
        className="flex flex-col  items-start md:items-center text-center w-full overflow-x-hidden"
      >
        <h2 className="font-[100] text-[40px] mb-4">
          Zapoznaj się z dostępnymi
          <b className="font-extrabold"> produktami</b>
        </h2>
        <p className="text-textAlternate mb-12 font-thin">
          Prezentujemy naszą tradycyjną ofertę produktów tartacznych, opartą na
          solidnych rzemieślniczych umiejętnościach i doświadczeniu. Znajdziesz
          u nas wszystko, czego potrzebujesz, włączając w to możliwość
          dostosowania produktu do Twoich potrzeb. Odkryj nasz świat drewnianych
          rozwiązań i dołącz do naszej rodziny zadowolonych klientów.
        </p>

        <div className="flex lg:justify-center gap-4 mb-12 w-screen overflow-x-scroll px-[10%]">
          <div className="relative flex flex-col items-center max-w-[320px] max-h-[380px] cursor-pointer">
            <div className="relative min-w-[240px] min-h-[300px] max-w-[300px] max-h-[380px] cursor-pointer">
              <Image
                fill={true}
                objectFit="content"
                objectPosition="center"
                src={"/wiezba-dachowa.webp"}
                alt="fragment konstrukcji drewnianej wiezby dachowej"
              />
            </div>
            <div className="pt-6 px-6 font-bold">
              <h3>Więby dachowe</h3>
            </div>
          </div>
          <div className="relative flex flex-col items-center max-w-[320px] max-h-[380px] cursor-pointer">
            <div className="relative min-w-[240px] min-h-[300px] max-w-[300px] max-h-[380px] cursor-pointer">
              <Image
                className="bg-blend-lighten hover:bg-blend-darken"
                fill={true}
                objectFit="cover"
                objectPosition="left"
                src={"/tarcica-sucha.webp"}
                alt="fragment konstrukcji drewnianej wiezby dachowej"
              />
            </div>
            <div className="pt-6 px-6 font-bold">
              <h3>Tarcica</h3>
            </div>
          </div>
          <div className="relative flex flex-col items-center max-w-[320px] max-h-[380px] cursor-pointer">
            <div className="relative min-w-[240px] min-h-[300px] max-w-[300px] max-h-[380px] cursor-pointer">
              <Image
                fill={true}
                objectFit="cover"
                objectPosition="right"
                src={"/drewno-opalowe.webp"}
                alt="fragment konstrukcji drewnianej wiezby dachowej"
              />
            </div>
            <div className="pt-6 px-6 font-bold">
              <h3>Opał</h3>
            </div>
          </div>
          <div className="relative flex flex-col items-center max-w-[320px] max-h-[380px] cursor-pointer">
            <div className="relative min-w-[240px] min-h-[300px] max-w-[300px] max-h-[380px] cursor-pointer">
              <Image
                fill={true}
                objectFit="cover"
                objectPosition="right"
                src={"/impregnacja-drewna.webp"}
                alt="fragment konstrukcji drewnianej wiezby dachowej"
              />
            </div>
            <div className="pt-6 px-6 font-bold">
              <h3>Impregnacja</h3>
            </div>
          </div>
          <div className="relative flex flex-col items-center max-w-[320px] max-h-[380px] cursor-pointer">
            <div className="relative min-w-[240px] min-h-[300px] max-w-[300px] max-h-[380px] cursor-pointer">
              <Image
                fill={true}
                objectFit="cover"
                objectPosition="right"
                src={"/impregnacja-drewna.webp"}
                alt="fragment konstrukcji drewnianej wiezby dachowej"
              />
            </div>
            <div className="pt-6 px-6 font-bold">
              <h3>Inne...</h3>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="absolute -z-10 top-[50%] left-0 h-[1px] w-full bg-detail"></div>
          <div className="w-fit">
            <Link
              className="relative flex gap-2 border border-detail px-8 py-5 rounded-lg flex-nowrap"
              href={"/oferta"}
            >
              Zobacz ofertę
              <span className="text-detail transform translate-x-0 group-hover:translate-x-2 transition-all">
                <ArrowRightAlt />
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
