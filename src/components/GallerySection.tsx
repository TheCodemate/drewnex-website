import { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamicznie importujemy bibliotekę lightbox dla lepszej optymalizacji
const Lightbox = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
});

// Importy CSS dla lightboxa
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// Tablica z obrazami z projektu
const galleryImages = [
  {
    src: '/tarcica-sucha.webp',
    alt: 'Tarcica sucha',
    width: 1200,
    height: 800,
  },
  {
    src: '/wiezba-dachowa.webp',
    alt: 'Więźba dachowa',
    width: 1200,
    height: 800,
  },
  {
    src: '/drewno-opalowe.webp',
    alt: 'Drewno opałowe',
    width: 1200,
    height: 800,
  },
  {
    src: '/impregnacja-drewna.webp',
    alt: 'Impregnacja drewna',
    width: 1200,
    height: 800,
  },
  {
    src: '/tartak_foto-01.webp',
    alt: 'Tartak',
    width: 1200,
    height: 800,
  },
  {
    src: '/tartak_dron.webp',
    alt: 'Tartak z lotu ptaka',
    width: 1200,
    height: 800,
  },
  {
    src: '/tarcica.webp',
    alt: 'Tarcica',
    width: 1200,
    height: 800,
  },
  {
    src: '/wiezba.webp',
    alt: 'Więźba',
    width: 1200,
    height: 800,
  },
  {
    src: '/opal.webp',
    alt: 'Drewno opałowe',
    width: 1200,
    height: 800,
  },
];

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

const imageVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

export const GallerySection = () => {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setImageIndex(index);
    setOpen(true);
  };

  return (
    <section
      id="gallery"
      className="flex flex-col justify-center items-center min-h-[512px] py-[5%] px-[10%] scroll-mt-[152px]"
    >
      <motion.div
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        variants={elementSlidesInFromBottom}
        className="flex flex-col items-center w-full"
      >
        <h2 className="font-[100] text-[40px] mb-4 text-center">
          <b className="font-extrabold">Nasza </b>
          galeria
        </h2>
        <p className="text-textAlternate text-center font-thin max-w-3xl mb-10">
          Zobacz przykłady naszych produktów i realizacji. Każde zdjęcie
          przedstawia wysoką jakość drewna, które oferujemy naszym klientom.
          Kliknij na zdjęcie, aby zobaczyć je w pełnej okazałości.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover"
                priority={index < 4}
              />
              <div className="absolute inset-0 bg-backgroundDarkTransparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-primary text-lg font-medium">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={imageIndex}
          slides={galleryImages}
          styles={{
            container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
          }}
        />
      )}
    </section>
  );
};
