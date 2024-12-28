'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { CallToActionSection } from '@/components/CallToActionSection';

type ProductData = {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  altText: string;
  reverse?: boolean;
};

const introHeaderVariants: Variants = {
  hide: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const elementSlideInVariants = (direction: 'left' | 'right') => ({
  hide: { opacity: 0, x: direction === 'left' ? -100 : 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
});

const ProductCard: React.FC<ProductData> = ({
  title,
  subtitle,
  description,
  imageSrc,
  altText,
  reverse,
}) => (
  <div
    className={`flex flex-col ${
      reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
    } gap-8 mb-16`}
  >
    <motion.div
      viewport={{ once: true }}
      initial="hide"
      whileInView="show"
      variants={elementSlideInVariants(reverse ? 'right' : 'left')}
      className="relative flex-1 min-w-[240px] min-h-[300px] max-w-full max-h-[380px] sm:max-h-full"
    >
      <Image
        objectFit="cover"
        objectPosition="center"
        fill={true}
        src={imageSrc}
        alt={altText}
      />
    </motion.div>
    <motion.div
      viewport={{ once: true }}
      initial="hide"
      whileInView="show"
      variants={elementSlideInVariants(reverse ? 'left' : 'right')}
      className="flex-1 flex flex-col justify-center p-6 sm:p-12 lg:p-16 bg-gray-50 rounded-md"
    >
      <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
      <span className="text-lg font-thin text-gray-600 uppercase mb-6 text-detail">
        {subtitle}
      </span>
      <p className="text-base text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  </div>
);

const Products: React.FC = () => {
  const productData: ProductData[] = [
    {
      title: 'Tarcica',
      subtitle: 'Sucha, sezonowana, mokra',
      description:
        'Aby sprostać różnorodnym potrzebom naszych klientów, oferujemy tarcicę wykonaną z wielu gatunków drewna liściastego, takich jak dąb, buk, dąb czerwony, jesion, jawor czy olcha, a także drewna iglastego, w tym jodły, sosny i świerku. Tarcica dostępna jest w różnych grubościach, długościach i klasach jakości, dostosowanych do indywidualnych wymagań. W naszym tartaku oferujemy tarcicę w trzech wariantach: mokrą – bezpośrednio po przetarciu, sezonowaną – po odpowiednim czasie leżakowania w przygotowanych warunkach, oraz suchą – suszoną w nowoczesnych suszarniach komorowych, osiągającą wilgotność na poziomie 8–10%. Dbamy o najwyższą jakość surowca i precyzję obróbki, korzystając z zaawansowanych pił taśmowych oraz profesjonalnych, certyfikowanych urządzeń tartacznych. Nasza tarcica wyróżnia się jakością, precyzją wykonania oraz możliwością dostosowania do indywidualnych potrzeb klienta. Niezależnie od tego, jaki projekt planujesz, możesz być pewien, że nasze wyroby będą solidnym fundamentem dla Twoich realizacji.',
      imageSrc: '/tarcica-sucha.webp',
      altText: 'Tarcica leżąca jedna na drugiej',
    },
    {
      title: 'Suszarnie komorowe',
      subtitle: 'Klucz do jakości i trwałości drewna',
      description:
        'Nasz nowoczesny system suszenia drewna to zaawansowane rozwiązanie, które gwarantuje skuteczne i równomierne suszenie, kluczowe dla trwałości i jakości materiału. Dzięki zastosowaniu nowoczesnych technologii oraz precyzyjnego systemu kontroli, proces suszenia odbywa się w optymalnych warunkach, zapewniając równomierne usunięcie wilgoci oraz minimalizując ryzyko deformacji i pęknięć. Dostosowujemy program suszenia do gatunku i grubości drewna, aby osiągnąć najlepsze efekty. Stałe monitorowanie wilgotności i temperatury w trakcie procesu daje pewność, że drewno jest starannie przygotowane, co bezpośrednio przekłada się na jego trwałość i właściwości użytkowe. Wybierając nasze produkty po procesie suszenia, inwestujesz w materiał, który doskonale sprawdzi się w budownictwie, stolarstwie i meblarstwie. Zaufaj naszym rozwiązaniom i ciesz się najwyższą jakością, która pozwoli Ci realizować nawet najbardziej wymagające projekty.',
      imageSrc: '/wiezba-dachowa.webp',
      altText: 'Suszarnia drewna',
      reverse: true,
    },
    {
      title: 'Więźba dachowa',
      subtitle: 'Najważniejszy element dachu',
      description:
        'W naszym tartaku oferujemy kompletną więźbę dachową, obejmującą wszystkie niezbędne elementy, takie jak kantówki, łaty, kontrłaty, murłaty, płatwie oraz wszelkie nietypowe konstrukcje drewniane. Produkty konstrukcyjne wykonujemy z drewna iglastego o klasie jakości C24, pozyskiwanego z polskich lasów państwowych, zarządzanych zgodnie z zasadami zrównoważonej gospodarki leśnej. Dzięki naszemu doświadczeniu oraz zaawansowanym technologiom produkcji każda więźba dachowa tworzona jest z najwyższą starannością, gwarantując stabilność, wytrzymałość i trwałość konstrukcji. Dostosowujemy więźby dachowe do indywidualnych wymagań Twojego projektu, łącząc funkcjonalność z estetyką, aby dach Twojego domu nie tylko spełniał swoją rolę, ale również cieszył oko perfekcyjnym wykonaniem. Wybierz rozwiązanie, które zapewni Twojemu domowi solidne i niezawodne wsparcie.',
      imageSrc: '/wiezba-dachowa.webp',
      altText: 'Więźba dachowa',
    },
    {
      title: 'Impregnacja',
      subtitle: 'Stosujemy metodę zanurzeniową',
      description:
        'Impregnacja to proces, który ma na celu przedłużyć żywotność drewna. W naszym tartaku stosujemy kompleksową impregnację drewna metodą zanurzeniową w wannie hydraulicznej. Technologia ta pozwala na równomierne i głębokie nasycenie impregnatem każdego elementu drewnianego. Używane przez nas środki impregnujące są produktami najwyższej jakości. Zabezpieczają wyroby drewniane przed grzybem, pleśnią oraz szkodnikami, a także zwiększają odporność na warunki atmosferyczne takie jak deszcz, śnieg i słońce. Kompleksowa, starannie przeprowadzona impregnacja przy użyciu środków spełniających odpowiednie standardy jakości daje nam poczucie gwarancji, że oddajemy w ręce naszych odbiorców produkty, które zachowują swój dobry wygląd i właściwości przez wiele lat.',
      imageSrc: '/impregnacja-drewna.webp',
      altText: 'Impregnacja drewna',
      reverse: true,
    },
    {
      title: 'Drewno opałowe',
      subtitle: '100% naturalności bez chemikaliów',
      description:
        'W ofercie naszego tartaku znajdziesz wysokiej jakości drewno opałowe, idealne zarówno do kominków, pieców kaflowych, jak i kotłów na biomasę. Oferujemy różne rodzaje drewna opałowego, w tym twarde gatunki, takie jak dąb, buk i jesion, oraz miękkie, takie jak jodła, sosna czy świerk. Drewno dostępne jest w formie grubych lub cieńszych zrzyn, a także pociętych i połupanych klocków, gotowych do bezpośredniego użycia. Nasze drewno jest starannie sezonowane, a w razie potrzeby podsuszane, co gwarantuje efektywne i ekologiczne spalanie. Dzięki 100% naturalnemu pochodzeniu, bez lakierów i chemikaliów, nasze drewno opałowe jest przyjazne środowisku i zapewnia niezawodne źródło ciepła przez cały sezon grzewczy. Wybierz nasze drewno opałowe i ciesz się ciepłem oraz wydajnością, na którą możesz liczyć.',
      imageSrc: '/drewno-opalowe.webp',
      altText: 'Drewno opałowe',
    },
  ];

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
            Ponizej znajdziesz <span className="font-bold">opis produktów</span>{' '}
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
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
        {productData.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
      <CallToActionSection />
    </main>
  );
};

export default Products;
