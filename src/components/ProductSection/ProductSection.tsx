import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const ArrowRightAlt = dynamic(
  () => import('@mui/icons-material/ArrowRightAlt')
);

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

type Props = {
  productName: string;
  productImageUrl: string;
  altText: string;
};

const ProductCard = ({ productName, productImageUrl, altText }: Props) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full max-h-[380px] cursor-pointer">
      <div
        className={`relative min-w-[240px] min-h-[300px] w-full max-h-[380px] ${
          !productImageUrl && 'border border-detail'
        } mx-auto`}
      >
        {productImageUrl && (
          <Image
            fill={true}
            objectFit="cover"
            objectPosition="center"
            src={productImageUrl}
            alt={altText}
          />
        )}
      </div>
      <div className="px-6 font-bold">
        <h3>{productName}</h3>
      </div>
    </div>
  );
};

export const ProductSection = () => {
  const products = [
    {
      productName: 'Tarcica',
      productImageUrl: '/tarcica-sucha.webp',
      altText: 'tarcica leząca jedna na drugiej',
    },
    {
      productName: 'Suszarnie komorowe',
      productImageUrl: '/wiezba-dachowa.webp',
      altText: 'suszarnie komorowe drewna',
    },
    {
      productName: 'Więźba dachowa',
      productImageUrl: '/wiezba-dachowa.webp',
      altText: 'fragment konstrukcji drewnianej więźby dachowej',
    },
    {
      productName: 'Impregnacja',
      productImageUrl: '/impregnacja-drewna.webp',
      altText: 'impregnacja drewna w procesie zanurzeniowym',
    },
    {
      productName: 'Drewno konstrukcyjne',
      productImageUrl: '/tarcica-sucha.webp',
      altText: 'drewno konstrukcyjne dla projektów zewnętrznych',
    },
    {
      productName: 'Drewno opałowe',
      productImageUrl: '/drewno-opalowe.webp',
      altText: 'fragment drewna opałowego gotowego do użytku',
    },
    {
      productName: 'Transport',
      productImageUrl: '/impregnacja-drewna.webp',
      altText: 'transport drewna tartacznego',
    },
    {
      productName: 'Inne...',
      productImageUrl: '',
      altText: 'inne produkty tartaczne',
    },
  ];

  return (
    <section
      id="products"
      className="flex flex-col justify-center items-center px-[10%] py-[5%] scroll-mt-[152px]"
    >
      <motion.div
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        variants={elementSlidesInFromBottom}
        className="flex flex-col items-start md:items-center text-center w-full overflow-x-hidden"
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

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-y-8 px-2 md:gap-4 mb-12 w-full">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              productName={product.productName}
              productImageUrl={product.productImageUrl}
              altText={product.altText}
            />
          ))}
        </div>

        <div className="relative flex justify-center items-center w-full">
          <div className="absolute -z-10 top-[50%] left-0 h-[1px] w-full bg-detail"></div>
          <div className="relative">
            <Link
              className="flex gap-2 border bg-secondary border-detail px-8 py-5 rounded-lg flex-nowrap"
              href={'/products'}
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
