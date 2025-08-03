'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants, AnimatePresence } from 'framer-motion';
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

const ProductCard: React.FC<ProductData & { index: number }> = ({
  title,
  subtitle,
  description,
  imageSrc,
  altText,
  reverse,
  index,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxDescriptionLength = 150;
  const shortDescription =
    description.length > maxDescriptionLength
      ? `${description.substring(0, maxDescriptionLength)}...`
      : description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } gap-8 mb-16 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="relative flex-1 min-w-[240px] min-h-[300px] max-w-full max-h-[380px] sm:max-h-full overflow-hidden group">
        <motion.div
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          variants={elementSlideInVariants(reverse ? 'right' : 'left')}
          className="w-full h-full"
        >
          <Image
            objectFit="cover"
            objectPosition="center"
            fill={true}
            src={imageSrc}
            alt={altText}
            className="group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
      <motion.div
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        variants={elementSlideInVariants(reverse ? 'left' : 'right')}
        className="flex-1 flex flex-col justify-center p-6 sm:p-8 lg:p-12 bg-gray-50 rounded-md"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h2>
        <span className="text-lg font-thin text-gray-600 uppercase mb-6 text-detail">
          {subtitle}
        </span>
        <AnimatePresence>
          <motion.div
            initial={{ height: 'auto' }}
            animate={{ height: 'auto' }}
            className="text-base text-gray-700 leading-relaxed"
          >
            {isExpanded ? description : shortDescription}
          </motion.div>
        </AnimatePresence>
        {description.length > maxDescriptionLength && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-detail font-medium hover:underline self-start focus:outline-none focus:ring-2 focus:ring-detail rounded-md px-2"
          >
            {isExpanded ? 'Pokaż mniej' : 'Czytaj więcej'}
          </button>
        )}
      </motion.div>
    </motion.div>
  );
};

const Products: React.FC = () => {
  const productData: ProductData[] = [
    {
      title: 'Tarcica',
      subtitle: 'Sucha, sezonowana, mokra',
      description:
        'Aby sprostać różnorodnym potrzebom naszych klientów, oferujemy tarcicę wykonaną z wielu gatunków drewna liściastego, takich jak dąb, buk, dąb czerwony, jesion, jawor czy olcha, a także drewna iglastego, w tym jodły, sosny i świerku. Tarcica dostępna jest w różnych grubościach, długościach i klasach jakości, dostosowanych do indywidualnych wymagań. W naszym tartaku oferujemy tarcicę w trzech wariantach: mokrą – bezpośrednio po przetarciu, sezonowaną – po odpowiednim czasie leżakowania w przygotowanych warunkach, oraz suchą – suszoną w nowoczesnych suszarniach komorowych, osiągającą wilgotność na poziomie 8–10%. Dbamy o najwyższą jakość surowca i precyzję obróbki, korzystając z zaawansowanych pił taśmowych oraz profesjonalnych, certyfikowanych urządzeń tartacznych. Nasza tarcica wyróżnia się jakością, precyzją wykonania oraz możliwością dostosowania do indywidualnych potrzeb klienta. Niezależnie od tego, jaki projekt planujesz, możesz być pewien, że nasze wyroby będą solidnym fundamentem dla Twoich realizacji.',
      imageSrc: '/gallery/Image21.48.33 (2)image1image.jpeg',
      altText: 'Tarcica leżąca jedna na drugiej',
    },
    {
      title: 'Drewno konstrukcyjne',
      subtitle: 'Sucha, sezonowana, mokra',
      description:
        'Drewno konstrukcyjne, które oferujemy, to idealny wybór do budowy wiat, altan, drewutni oraz mebli ogrodowych. Wykonane z wysokiej jakości materiałów, charakteryzuje się doskonałą trwałością i wytrzymałością, co sprawia, że świetnie sprawdza się w różnego rodzaju projektach zewnętrznych. Oferujemy również możliwość suszenia i strugania, co pozwala uzyskać gładką powierzchnię oraz precyzyjne wymiary, ułatwiające dalszą obróbkę i montaż. Dzięki szerokiemu asortymentowi z pewnością znajdziesz rozwiązanie idealnie dopasowane do Twoich potrzeb. Zaufaj naszemu doświadczeniu i jakości. Wybierz drewno od Drewnex i realizuj swoje pomysły bez kompromisów.',
      imageSrc: '/gallery/Image21.48.33 (2)image1image.jpeg',
      altText: 'Tarcica leżąca jedna na drugiej',
      reverse: true,
    },
    {
      title: 'Suszarnie komorowe',
      subtitle: 'Klucz do jakości i trwałości drewna',
      description:
        'Nasz nowoczesny system suszenia drewna to zaawansowane rozwiązanie, które gwarantuje skuteczne i równomierne suszenie, kluczowe dla trwałości i jakości materiału. Dzięki zastosowaniu nowoczesnych technologii oraz precyzyjnego systemu kontroli, proces suszenia odbywa się w optymalnych warunkach, zapewniając równomierne usunięcie wilgoci oraz minimalizując ryzyko deformacji i pęknięć. Dostosowujemy program suszenia do gatunku i grubości drewna, aby osiągnąć najlepsze efekty. Stałe monitorowanie wilgotności i temperatury w trakcie procesu daje pewność, że drewno jest starannie przygotowane, co bezpośrednio przekłada się na jego trwałość i właściwości użytkowe. Wybierając nasze produkty po procesie suszenia, inwestujesz w materiał, który doskonale sprawdzi się w budownictwie, stolarstwie i meblarstwie. Zaufaj naszym rozwiązaniom i ciesz się najwyższą jakością, która pozwoli Ci realizować nawet najbardziej wymagające projekty.',
      imageSrc: '/gallery/Image21.48.35 (1)image1image.jpeg',
      altText: 'Suszarnia drewna',
    },
    {
      title: 'Więźba dachowa',
      subtitle: 'Najważniejszy element dachu',
      description:
        'W naszym tartaku oferujemy kompletną więźbę dachową, obejmującą wszystkie niezbędne elementy, takie jak kantówki, łaty, kontrłaty, murłaty, płatwie oraz wszelkie nietypowe konstrukcje drewniane. Produkty konstrukcyjne wykonujemy z drewna iglastego o klasie jakości C24, pozyskiwanego z polskich lasów państwowych, zarządzanych zgodnie z zasadami zrównoważonej gospodarki leśnej. Dzięki naszemu doświadczeniu oraz zaawansowanym technologiom produkcji każda więźba dachowa tworzona jest z najwyższą starannością, gwarantując stabilność, wytrzymałość i trwałość konstrukcji. Dostosowujemy więźby dachowe do indywidualnych wymagań Twojego projektu, łącząc funkcjonalność z estetyką, aby dach Twojego domu nie tylko spełniał swoją rolę, ale również cieszył oko perfekcyjnym wykonaniem. Wybierz rozwiązanie, które zapewni Twojemu domowi solidne i niezawodne wsparcie.',
      imageSrc: '/gallery/Image21.48.35 (1)image1image.jpeg',
      altText: 'Więźba dachowa',
      reverse: true,
    },
    {
      title: 'Impregnacja',
      subtitle: 'Stosujemy metodę zanurzeniową',
      description:
        'Impregnacja to proces, który ma na celu przedłużyć żywotność drewna. W naszym tartaku stosujemy kompleksową impregnację drewna metodą zanurzeniową w wannie hydraulicznej. Technologia ta pozwala na równomierne i głębokie nasycenie impregnatem każdego elementu drewnianego. Używane przez nas środki impregnujące są produktami najwyższej jakości. Zabezpieczają wyroby drewniane przed grzybem, pleśnią oraz szkodnikami, a także zwiększają odporność na warunki atmosferyczne takie jak deszcz, śnieg i słońce. Kompleksowa, starannie przeprowadzona impregnacja przy użyciu środków spełniających odpowiednie standardy jakości daje nam poczucie gwarancji, że oddajemy w ręce naszych odbiorców produkty, które zachowują swój dobry wygląd i właściwości przez wiele lat.',
      imageSrc: '/gallery/WhatsApp Image 2025-07-06 at 21.48.36 (7).jpeg',
      altText: 'Impregnacja drewna',
    },
    {
      title: 'Drewno opałowe',
      subtitle: '100% naturalności bez chemikaliów',
      description:
        'W ofercie naszego tartaku znajdziesz wysokiej jakości drewno opałowe, idealne zarówno do kominków, pieców kaflowych, jak i kotłów na biomasę. Oferujemy różne rodzaje drewna opałowego, w tym twarde gatunki, takie jak dąb, buk i jesion, oraz miękkie, takie jak jodła, sosna czy świerk. Drewno dostępne jest w formie grubych lub cieńszych zrzyn, a także pociętych i połupanych klocków, gotowych do bezpośredniego użycia. Nasze drewno jest starannie sezonowane, a w razie potrzeby podsuszane, co gwarantuje efektywne i ekologiczne spalanie. Dzięki 100% naturalnemu pochodzeniu, bez lakierów i chemikaliów, nasze drewno opałowe jest przyjazne środowisku i zapewnia niezawodne źródło ciepła przez cały sezon grzewczy. Wybierz nasze drewno opałowe i ciesz się ciepłem oraz wydajnością, na którą możesz liczyć.',
      imageSrc: '/gallery/Image21.48.33 (4)image1image.jpeg',
      altText: 'Drewno opałowe',
      reverse: true,
    },
  ];

  return (
    <main>
      <section className="flex flex-col justify-center">
        <div className="flex flex-col min-h-[200px] justify-center bg-hero-pattern bg-center bg-cover p-8 lg:min-h-[520px] py-4 xl:py-8 px-[2%] xl:px-[5%] gap-4 xl:gap-8">
          <motion.div
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            variants={introHeaderVariants}
            className="text-6xl backdrop-blur-sm bg-white/30 p-6 rounded-lg inline-block self-start"
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
            Poniżej znajdziesz{' '}
            <span className="font-bold text-detail">opis produktów</span>{' '}
            dostępnych w ofercie
          </h2>
          <p className="font-normal text-textAlternate text-base sm:w-3/4 leading-relaxed">
            W naszym tartaku posiadamy szeroki wybór profesjonalnych produktów.
            Oferta obejmuje tarcicę suchą, sezonowaną, mokrą, więźby dachowe,
            impregnację drewna, drewno opałowe i wiele innych wysokiej jakości
            produktów. Pozyskiwane przez nas drewno pochodzi w głównej mierze z
            Polskich lasów Państwowych opierających swoją działalność na
            odpowiedniej gospodarce leśnej FSO® certyfikat PEFCTM. Z wieloletnim
            doświadczeniem w branży drzewnej i pasją do precyzyjnej obróbki
            drewna, zapewniamy Ci kompleksową obsługę i produkty dopasowane do
            Twoich potrzeb. Skontaktuj się z nami, aby dowiedzieć się więcej.
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="#produkty"
              className="bg-detail text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium"
            >
              Zobacz produkty
            </a>
            <a
              href="tel:+48609099988"
              className="border border-detail text-detail px-8 py-3 rounded-lg hover:bg-detail hover:text-primary transition-all duration-300 font-medium"
            >
              +48 609 099 988
            </a>
          </div>
        </motion.div>
      </section>
      <section id="produkty" className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-16">
            {productData.map((product, index) => (
              <ProductCard key={index} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>
      <CallToActionSection />
    </main>
  );
};

export default Products;
