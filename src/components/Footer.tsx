import Link from "next/link";
import dynamic from "next/dynamic";

import { Logo } from "./Logo";
import { DividerHorizontal } from "./DividerHorizontal";

const Phone = dynamic(() => import("@mui/icons-material/Phone"));
const Email = dynamic(() => import("@mui/icons-material/Email"));
const LocationOn = dynamic(() => import("@mui/icons-material/LocationOn"));

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center max-w-screen min-h-5 py-[10%] md:pt-[5%] md:pb-0 px-[5%]">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:w-full">
        {/* <div className="flex flex-col md:flex-row justify-stretch md:text-nowrap items-center md:justify-start gap-4 md:gap-10"> */}
        <div className="">
          <Logo />
        </div>

        {/* </div> */}
        <div className="flex-1 flex flex-row items-center justify-center gap-10 w-fit py-10 md:py-0">
          <nav className="flex flex-col items-center">
            <ul className="flex flex-col items-center md:flex-row font-thin text-sm  gap-2 md:gap-[5%] text-nowrap">
              <li>Strona główna</li>
              <li>Oferta</li>
              <li>Twoje korzyści</li>
              <li>Kontakt</li>
            </ul>
          </nav>
          {/* <DividerHorizontal /> */}
        </div>
        <div className=" flex flex-col items-center md:items-end gap-2 md:gap-6 text-sm">
          <div className="flex gap-1">
            <span className="text-detail">
              <LocationOn />
            </span>
            <span>Wolności 29, 32-440 Sułkowice</span>
          </div>
          <div className="flex gap-1">
            <span className="text-detail">
              <Email />
            </span>
            <span>biuro@drewnex.pl</span>
          </div>
          <div className="flex gap-1">
            <span className="text-detail">
              <Phone />
            </span>
            <span>+48 600 600 600</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end w-full py-5 text-xs text-textAlternate">
        <span className="font-thin">Designed &#38; produced by </span>
        <Link
          className="font-extrabold"
          rel="stylesheet"
          href="https://www.thecodemates.tech"
        >
          TheCodemates
        </Link>
      </div>
    </footer>
  );
};
