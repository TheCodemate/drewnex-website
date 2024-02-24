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
    <section className="flex flex-col justify-center items-center min-h-[512px] py-[5%] px-[10%]">
      <motion.div
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        variants={introHeaderVariants}
        className=" flex flex-col items-center"
      >
        <h2 id="features" className="font-[100] text-[40px] mb-4 text-center">
          <b className="font-extrabold">Wspieramy Cię </b>
          na wszystkich etapach
        </h2>
        <p className="text-textAlternate text-center font-thin">
          Możesz na nas polegać od pierwszej konsultacji, przez realizację i
          dostawę, a nawet po zrealizowaniu zamówienia!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-max px-[15%] py-[5%] gap-y-10 md:gap-y-20 gap-x-5 md:gap-x-10">
          <Feature
            heading="Doradztwo i wsparcie"
            content="Lorem ipsum dolor sit amet consectetur. Dui morbi rhoncus maecenas quisque aenean ultricies."
            icon={<SupportAgent sx={{ width: "100%", height: "100%" }} />}
          />
          <Feature
            reverse
            heading="Doradztwo i wsparcie"
            content="Lorem ipsum dolor sit amet consectetur. Dui morbi rhoncus maecenas quisque aenean ultricies."
            icon={<Truck sx={{ width: "100%", height: "100%" }} />}
          />
          <Feature
            heading="Doradztwo i wsparcie"
            content="Lorem ipsum dolor sit amet consectetur. Dui morbi rhoncus maecenas quisque aenean ultricies."
            icon={<DesignServices sx={{ width: "100%", height: "100%" }} />}
          />
          <Feature
            reverse
            heading="Doradztwo i wsparcie"
            content="Lorem ipsum dolor sit amet consectetur. Dui morbi rhoncus maecenas quisque aenean ultricies."
            icon={<Engineering sx={{ width: "100%", height: "100%" }} />}
          />
          <Feature
            heading="Doradztwo i wsparcie"
            content="Lorem ipsum dolor sit amet consectetur. Dui morbi rhoncus maecenas quisque aenean ultricies."
            icon={<AccessAlarmIcon sx={{ width: "100%", height: "100%" }} />}
          />
          <Feature
            reverse
            heading="Doradztwo i wsparcie"
            content="Lorem ipsum dolor sit amet consectetur. Dui morbi rhoncus maecenas quisque aenean ultricies."
            icon={<DesignServices sx={{ width: "100%", height: "100%" }} />}
          />
        </div>
      </motion.div>
    </section>
  );
};
