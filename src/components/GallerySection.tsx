import { useState, useEffect } from 'react';
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

// Tablica z obrazami z folderu gallery
const galleryImages = [
  {
    src: '/gallery/Image21.48.35 (5)image1image.jpeg',
    alt: 'Zdjęcie galerii 1',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/WhatsApp Image 2025-07-06 at 21.48.36 (7).jpeg',
    alt: 'Zdjęcie galerii 1',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/WhatsApp Image 2025-07-06 at 21.48.37.jpeg',
    alt: 'Zdjęcie galerii 1',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.35 (4)image1image.jpeg',
    alt: 'Zdjęcie galerii 2',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.35 (3)image1image.jpeg',
    alt: 'Zdjęcie galerii 3',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.35 (2)image1image.jpeg',
    alt: 'Zdjęcie galerii 4',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.35 (1)image1image.jpeg',
    alt: 'Zdjęcie galerii 5',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.35image1image.jpeg',
    alt: 'Zdjęcie galerii 6',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.34 (7)image1image.jpeg',
    alt: 'Zdjęcie galerii 7',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.34 (6)image1image.jpeg',
    alt: 'Zdjęcie galerii 8',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.34 (5)image1image.jpeg',
    alt: 'Zdjęcie galerii 9',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.34 (4)image1image.jpeg',
    alt: 'Zdjęcie galerii 10',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.34 (3)image1image.jpeg',
    alt: 'Zdjęcie galerii 11',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.34 (2)image1image.jpeg',
    alt: 'Zdjęcie galerii 12',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.34 (1)image1image.jpeg',
    alt: 'Zdjęcie galerii 13',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.34image1image.jpeg',
    alt: 'Zdjęcie galerii 14',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.33 (6)image1image.jpeg',
    alt: 'Zdjęcie galerii 15',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.33 (5)image1image.jpeg',
    alt: 'Zdjęcie galerii 16',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.33 (4)image1image.jpeg',
    alt: 'Zdjęcie galerii 17',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.33 (3)image1image.jpeg',
    alt: 'Zdjęcie galerii 18',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.33 (2)image1image.jpeg',
    alt: 'Zdjęcie galerii 19',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.33 (1)image1image.jpeg',
    alt: 'Zdjęcie galerii 20',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.33image1.jpeg',
    alt: 'Zdjęcie galerii 21',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.32 (7)image1image.jpeg',
    alt: 'Zdjęcie galerii 22',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.32 (6)image1image.jpeg',
    alt: 'Zdjęcie galerii 23',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.32 (5)image1image.jpeg',
    alt: 'Zdjęcie galerii 24',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.32 (4)image1image.jpeg',
    alt: 'Zdjęcie galerii 25',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.32 (3)image1image.jpeg',
    alt: 'Zdjęcie galerii 26',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.32 (2)image1image.jpeg',
    alt: 'Zdjęcie galerii 27',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.32 (1)image1image.jpeg',
    alt: 'Zdjęcie galerii 28',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.32image1image.jpeg',
    alt: 'Zdjęcie galerii 29',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.31 (1)image1image.jpeg',
    alt: 'Zdjęcie galerii 30',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.31image1image.jpeg',
    alt: 'Zdjęcie galerii 31',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.30 (6)image1image.jpeg',
    alt: 'Zdjęcie galerii 32',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.30 (5)image1.jpeg',
    alt: 'Zdjęcie galerii 33',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.30 (4)image1image.jpeg',
    alt: 'Zdjęcie galerii 34',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.30 (3)image1image.jpeg',
    alt: 'Zdjęcie galerii 35',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.30 (2)image1image.jpeg',
    alt: 'Zdjęcie galerii 36',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.30 (1)image1image.jpeg',
    alt: 'Zdjęcie galerii 37',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.30image1image.jpeg',
    alt: 'Zdjęcie galerii 38',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.29 (2)image1image.jpeg',
    alt: 'Zdjęcie galerii 39',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.29 (1)image1image.jpeg',
    alt: 'Zdjęcie galerii 40',
    width: 1200,
    height: 800,
  },
  {
    src: '/gallery/Image21.48.29image1image.jpeg',
    alt: 'Zdjęcie galerii 41',
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
  const [showAll, setShowAll] = useState(false);

  // Wyświetlamy tylko 9 zdjęć na początku
  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 9);

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
          {displayedImages.map((image, index) => (
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

        {galleryImages.length > 9 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-8 px-8 py-3 text-secondary bg-detail border border-detail rounded-lg hover:bg-detailHovered transition-colors flex items-center justify-center gap-2"
          >
            {showAll ? 'Pokaż mniej' : 'Pokaż więcej'}
          </button>
        )}
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
