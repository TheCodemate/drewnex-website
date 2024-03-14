"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { DividerHorizontal } from "./DividerHorizontal";
import { Logo } from "./Logo";
import { useStickyMenu } from "@/hooks/useStickyMenu";

const Phone = dynamic(() => import("@mui/icons-material/Phone"));

export const Header = () => {
  const { isSticky } = useStickyMenu();

  return (
    <header
      className={`header z-50 hidden lg:flex w-full justify-between items-center py-4 xl:py-8 px-[2%] xl:px-[5%] gap-4 xl:gap-8 min-h-14 text-sm ${
        isSticky
          ? "fixed top-0 left-0 shadow-md backdrop-blur-sm backdrop-brightness-75"
          : "absolute bg-transparent"
      } transition-all`}
    >
      <Logo />
      <div className="flex items-center self-center px-[2%] xl:px-[5%] h-10">
        <DividerHorizontal />
      </div>
      <nav
        className={`flex-1 flex flex-row text-2xl lg:text-base  items-center w-full overflow-hidden shadow-lg lg:shadow-none transition-all`}
      >
        <ul className="flex items-center py-8 flex-row grow-1 gap-10 font-bold text-nowrap text-detail active:text-primary w-full ">
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
      <div
        className="hidden lg:flex items-center gap-[5%]
      "
      >
        <a
          href="tel:+48600600600"
          className="flex items-center gap-2 border border-detail  px-4 py-3 xl:px-8 xl:py-5  rounded-lg flex-nowrap"
        >
          <span className="flex items-center font-bold">
            <Phone />
          </span>
          <span className="font-bold">Zadzwoń</span>
          <span className="font-light text-nowrap">+48 600 600 600</span>
        </a>
      </div>
    </header>
  );
};
