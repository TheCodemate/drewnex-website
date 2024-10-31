"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CallToActionSection } from "@/components/CallToActionSection";

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

const Products = () => {
  return (
    <main>
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
            W naszym tartaku posiadamy szeroki wybór profesjonalnych produktów.
            Oferta obejmuje tarcicę suchą, sezonowaną, mokrą, więźby dachowe,
            impregnację drewna, drewno opałowe i wiele innych wysokiej jakości
            produktów. Pozyskiwane przez nas drewno pochodzi w głównej mierze z
            Polskich lasów Państwowych opierających swoją działalność na
            odpowiedniej gospodarce leśnej FSO® certyfikat PEFCTM. Z wieloletnim
            doświadczeniem w branży drzewnej i pasją do precyzyjnej obróbki
            drewna, zapewniamy Ci kompleksową obsługę i produkty dopasowane do
            Twoich potrzeb. Skontaktuj się z nami, aby dowiedzieć się więcej.
          </p>
        </motion.div>
      </section>
      <section className="">
        <div className="flex flex-col sm:flex-row">
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
                Sucha, sezonowana, mokra
              </span>
              <p className="font-normal text-base">
                Chcąc sprostać różnorodnym potrzebom naszych klientów oferujemy
                tarcicę różnych gatunków drewna liściastego: dąb, buk, dąb
                czerwony, jesion, jawor czy olcha oraz drwna iglaste jak jodła,
                sosna czy świerk. Tarcica dostępna jest w różnych grubościach,
                długościach i klasach jakości. W naszym tartaku tarcica dostępna
                jest w formie mokrej - bezpośrednio po przetarciu; sezonowanej -
                po okresie leżakowania w odpowiednio przygotowanych warunkach;
                suchej - po suszeniu w suszarniach komorowych o wilgotności 8% -
                10%. Kładziemy duży nacisk na jakośc surowca oraz precyzję
                wykonania dlatego pracujemy na wysokiej klasy [...] taśmowych
                oraz profesjonalnych, certyfikowanych piłach tartacznych. Nasza
                tarcica cechuje jakość, precyzja obróbki oraz indywidualne
                dostosowanie do potrzeb klienta. Niezależnie od projektu, który
                masz w planach możesz być pewien, że nasze wyroby będą solidnym
                fundamentem.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse">
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
              <h2 className="font-[200] text-4xl">Suszarnie komorowe</h2>
              <span className="text-detail font-bold uppercase">
                Klucz do jakości i trwałości drewna
              </span>
              <p className="font-normal text-base">
                Nasz zespół suszarni od drewna to nowoczesne [...], które
                zapewnia skuteczne i równomierne suszenie drewna, co jest
                kluczowe do jego trwarłości i jakości. Dzięki nowoczesnej
                techologii, precyzyjnemu systemowi kontroli proces suszenia
                odbywa się w optymalnych warunkach co zapewnia równomierne
                usunięcie wilgotności i minimalizuje ryzyko deformacji oraz
                pęknięć. Susząc różne gatunki drewna dostosowujemy odpowiedni
                program do gatunku i grubości drewna. Dzięki stałemu
                monitorowaniu wilgotności i tęperatury możesz być pewien, ze
                Twoje drewno jest starannie suszone co wpływa na jego trwałość i
                właściwości użytkowe. Wybierając nasze produkty po suszarni
                inwestujesz w materiał, który doskonale sprawdzi się w
                budwnictwie, stolarstwie i meblarstwie. Ciesz się jakością na
                którą zasługujesz i zaufaj naszym rozwiązaniom, które pozwolą Ci
                realizować nawet najbardziej ambitne projekty.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
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
                Najważniejszy element dachu
              </span>
              <p className="font-normal text-base">
                W naszym tartaku zaopatrzysz się w komoletną więźbę dachową.
                Kantówki, łaty, kontrłaty, murłaty, płatwie i wszystkie inne
                elementy składowe, jak również wszelkie nietypowe konstrukcje
                drewniane. Wyroby konstrukcyjne wykonujemy z drewnia iglastego o
                odpowiedniej klasie jakości C24 pozyskiwanego z Polskich lasów
                Państwowych. Dzięki naszemu doświadczeniu i zaawansowanej
                technologii, każda więźba jest wykonana z najwyższą
                starannością, aby zapewnić stabilnosć i wytrzymałość dachów.
                Nasze więźby dachowe są dostosowane do specyfikacji Twojego
                projektu, zapewniając nie tylko funkcjonalność, ale również
                estetyczny wygląd Twojego domu.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row-reverse">
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
                Stosujemy metodę zanurzeniową
              </span>
              <p className="font-normal text-base">
                Impregnacja to proces, który ma na celu przedłużyć żywotność
                drewna. W naszym tartaku stosujemy kompleksową impregnację
                drewna metodą zanurzeniową w wannie hudraulicznej. Technologia
                ta pozwala na równomierne i głębokie nasycenie impregnatem
                każdego elementu drewnianego. Używane przez nas środki
                impregnujące są produktami najwyższej jakości. Zabezpieczają
                wyroby drewniane przed grzybem, pleśnią, oraz szkodnikami, a
                także zwiększają odporność na warunki atmosferyczne takie jak
                deszcz, śnieg i słońce. Kompleksowa, starannie przeprowadzona
                impregnacja przy użyciu środków spełniających odpowiednie
                standardy jakości daje nam poczucie gwarancji, że oddajemy w
                ręce naszych odbiorców produkty, które zachowując swój dobry
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row">
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
              <h2 className="font-[200] text-4xl">Drewno konstrukcyjne</h2>
              <span className="text-detail font-bold uppercase">
                Podtytuł lorem ipsum
              </span>
              <p className="font-normal text-base">
                Drewno konstrukcyjne które oferujemy to idealny wybór do budowy
                Wiat, Altan, Drewutni oraz mebli ogrodowych. Wykonane są z
                wysokiej jakości materiałów. Nasze drewno charakteryzuje się
                doskonałą trwałością i wytrzymałością co [...], że doskonale
                sprawdza się w różnych projektach zewnętrznych. Oferujemy
                również możliwość suszenia oraz strugania co pozwala na
                uzyskanie gładkich powieżchni i precyzyjnych wymiarów
                ułatwijących dalszą orbróbkę i montaż. Dzięki szerokiemu
                asortymentowi z pewnością znajdziesz idealne rozwiązanie, które
                spełni Twoje oczekiwania. Zaufaj doświadczeniu i jakości wybierz
                nasze drewno i realizuj swoje pomysły z Drewnex.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row-reverse">
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
                100% naturalności bez zawartości lakierów i innych środków
                chemicznych
              </span>
              <p className="font-normal text-base">
                W ofercie naszego tartaku znajdziesz drwno opałowe zarówno
                kominkowe jak i do pieców kaflowych czy kotłów na biomasę.
                Dysponujemy rózżymi rodzajami drewna opałowego twardego jak dąb,
                buk czy jesion orz miękkiego jak jodła czy sosna, świerk. Drewno
                dostępne jest w formie zrzyn grubych lub cieńszych lub w formie
                pociętych połupanych klocków. Przygotowane jest do
                bezpośredniego spalania poprzez staranne sezonowanie, a w razie
                potrzeby podsuszane. Dzięki temu nasze drewno gwarantuje
                efektywne, a także ekologiczne ogrzewanie. Dodatkowym atutem
                jest 100% naturalność produktu bez zawartości lakierów czy
                innych środków chemicznych. Nasze drewno opałowe zapewni Ci
                niezawodne źródło ciepła przez cały sezon grzewczy.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
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
              <h2 className="font-[200] text-4xl">Transport</h2>
              <span className="text-detail font-bold uppercase">
                Wygoda i profesjonalizm na kazdym etapie dostawy
              </span>
              <p className="font-normal text-base">
                Nasza firma oferuje transport zamówionych materiałów
                bezpośrednio na miejsce do klienta. Posiadamy Samochody
                ciężarowe z HDS, co ułatwia rozładunek na placu budowy oraz
                samochód. Zakres naszych usług transportowych obejmuje nasze jak
                i sąsiednie województwa. Zamawiając elementy więźby dachowej,
                tarcicę czy drewno opałowe nie musisz martwić się o samochód
                dostawczy. Stawiamy na wygodę i profesjonalizm na każdym etapie
                dostawy
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <CallToActionSection />
    </main>
  );
};

export default Products;
