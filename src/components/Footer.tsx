import Link from 'next/link';
import dynamic from 'next/dynamic';

import { Logo } from './Logo';

const Phone = dynamic(() => import('@mui/icons-material/Phone'));
const Email = dynamic(() => import('@mui/icons-material/Email'));
const LocationOn = dynamic(() => import('@mui/icons-material/LocationOn'));

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center max-w-screen min-h-5 py-[10%] md:pt-[5%] md:pb-0 px-[5%]">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:w-full">
        <div className="">
          <Logo />
        </div>

        <div className="flex-1 flex flex-row items-center justify-center gap-10 w-fit py-10 md:py-0">
          <nav className="flex flex-col items-center">
            <ul className="flex flex-col items-center py-8 lg:flex-row grow-1 gap-10 font-bold text-nowrap text-detail active:text-primary w-full ">
              <li className="text-detail hover:text-primary active:text-primary hover:cursor-pointer">
                <Link href="/#home">Strona główna</Link>
              </li>
              <li className="text-detail hover:text-primary active:text-primary hover:cursor-pointer">
                <Link href="/#products-list">Oferta</Link>
              </li>
              <li className="text-detail hover:text-primary active:text-primary hover:cursor-pointer">
                <Link href="/#features">Korzyści</Link>
              </li>
              <li className="text-detail hover:text-primary active:text-primary hover:cursor-pointer">
                <Link href="/#map-section">Jak dojechać?</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className=" flex flex-col items-center md:items-end gap-2 md:gap-6 text-sm">
          <div className="flex items-center gap-1">
            <span className="text-detail">
              <LocationOn />
            </span>
            <span>Wolności 29, 32-440 Sułkowice</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-detail">
              <Email />
            </span>
            <span>tartak@drewnex.malopolska.pl</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-detail">
              <Phone />
            </span>
            <span>+48 609 099 988</span>ś
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
