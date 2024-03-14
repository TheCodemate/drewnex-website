import dynamic from "next/dynamic";
import { Feature } from "./Feature";
import { motion, Variants } from "framer-motion";

const SupportAgent = dynamic(() => import("@mui/icons-material/SupportAgent"));
const Truck = dynamic(() => import("@mui/icons-material/LocalShipping"));
const DesignServices = dynamic(
  () => import("@mui/icons-material/DesignServices")
);

const Engineering = dynamic(() => import("@mui/icons-material/Engineering"));
const AccessAlarmIcon = dynamic(
  () => import("@mui/icons-material/AccessAlarm")
);

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

export const FeatureSection = () => {
  return (
    <section
      id="features"
      className="flex flex-col justify-center items-center min-h-[512px] py-[5%] px-[10%] scroll-mt-[152px]"
    >
      <motion.div
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        variants={introHeaderVariants}
        className=" flex flex-col items-center"
      >
        <h2 className="font-[100] text-[40px] mb-4 text-center">
          <b className="font-extrabold">Wspieramy Cię </b>
          na wszystkich etapach
        </h2>
        <p className="text-textAlternate text-center font-thin">
          Nasz tartak to miejsce, gdzie tradycja rzemieślniczych umiejętności
          łączy się z nowoczesnym podejściem do jakości. Oferujemy kompleksowe
          wsparcie oparte na długiej historii i doświadczeniu. Szybka dostawa
          drewna i elastyczne terminy realizacji to nasza odpowiedź na Twoje
          potrzeby.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-max px-[5%] py-[5%] items-start gap-y-10 md:gap-y-20 gap-x-5 md:gap-x-10">
          <Feature
            heading="Doradztwo i wsparcie"
            content="Będąc z nami, otrzymasz kompleksowe doradztwo i wsparcie od ekspertów z branży drzewnej. Nasz zespół pomoże Ci wybrać najlepsze rozwiązanie dla Twojego projektu, zawsze służąc fachową radą i pomocą."
            icon={<SupportAgent sx={{ width: "100%", height: "100%" }} />}
          />
          <Feature
            reverse
            heading="Dostawa na miejsce"
            content="Zapewniamy szybką i bezproblemową dostawę zamówionego drewna bezpośrednio na miejsce budowy. Dzięki temu oszczędzisz czas i energię, mogąc skupić się na realizacji swojego projektu."
            icon={<Truck sx={{ width: "100%", height: "100%" }} />}
          />
          <Feature
            heading="Krótkie terminy realizacji"
            content="Nasz tartak słynie z szybkich terminów realizacji zamówień. Dzięki sprawnej organizacji i profesjonalnemu podejściu, Twój projekt będzie gotowy jeszcze szybciej, niż się spodziewasz."
            icon={<DesignServices sx={{ width: "100%", height: "100%" }} />}
          />
          <Feature
            reverse
            heading="Zamówienia indywidualne"
            content="esteśmy elastyczni i gotowi dostosować się do Twoich indywidualnych potrzeb. Bez względu na rozmiar czy specyfikę Twojego projektu, z nami możesz liczyć na spersonalizowane podejście i satysfakcję."
            icon={<Engineering sx={{ width: "100%", height: "100%" }} />}
          />
          <Feature
            heading="Rekomendowani wykonawcy"
            content="Współpracujemy z najlepszymi wykonawcami w branży, którzy mogą wesprzeć Cię w realizacji projektu od A do Z. Możesz być pewien, że Twoje drewno trafi w ręce profesjonalistów."
            icon={<AccessAlarmIcon sx={{ width: "100%", height: "100%" }} />}
          />
          <Feature
            reverse
            heading="Wysoka jakość"
            content="Fundamentem naszej działaności jest wysoka jakość. Dzięki precyzyjnej obróbce, starannie wyselekcjonowanemu surowcowi i wieloletniemu doświadczeniu, oferujemy drewno o niezrównanej jakości, które spełni nawet najwyższe oczekiwania."
            icon={<DesignServices sx={{ width: "100%", height: "100%" }} />}
          />
        </div>
      </motion.div>
    </section>
  );
};
