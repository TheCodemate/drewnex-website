"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { DividerHorizontal } from "./DividerHorizontal";
import { Logo } from "./Logo";
import { HamburgerMenu } from "./HamburgerMenu";
import { useState } from "react";

const Phone = dynamic(() => import("@mui/icons-material/Phone"));
const Email = dynamic(() => import("@mui/icons-material/Email"));

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className={`sticky top-0 left-0 z-50 flex w-full justify-between items-center py-4 xl:py-8 px-[2%] xl:px-[5%] gap-4 xl:gap-8 min-h-14 text-sm bg-secondary shadow-md`}
    >
      <Logo />
      <div className="hidden lg:flex items-center self-center px-[2%] xl:px-[5%] h-10">
        <DividerHorizontal />
      </div>
      <nav
        className={`fixed left-0 top-[68px] lg:static flex-1 flex flex-col lg:flex-row lg:h-fit text-2xl lg:text-base  items-center w-full overflow-hidden ${
          isOpen ? "h-[0px]" : "h-[300px]"
        } shadow-lg lg:shadow-none transition-all`}
      >
        <ul className="absolute top-0 left-0 lg:static flex flex-col items-center py-8 lg:flex-row grow-1 gap-10 font-bold text-nowrap text-detail active:text-primary bg-secondary w-full ">
          <li className="text-detail hover:text-primary active:text-primary hover:cursor-pointer">
            <Link href="#first-section">Strona główna</Link>
          </li>
          <li className="text-detail hover:text-primary active:text-primary hover:cursor-pointer">
            <Link href="#products-list">Oferta</Link>
          </li>
          <li className="text-detail hover:text-primary active:text-primary hover:cursor-pointer">
            <Link href="#features">Korzyści</Link>
          </li>
          <li className="text-detail hover:text-primary active:text-primary hover:cursor-pointer">
            <Link href="#map-section">Jak dojechać?</Link>
          </li>
        </ul>
      </nav>
      <div
        className="hidden lg:flex items-center gap-[5%]
      "
      >
        {/* <div className="hidden  xl:flex gap-1">
          <Email sx={{ color: "#D4C4A6" }} />
          <span>biuro@drewnex.pl</span>
        </div> */}
        <div className="flex gap-2 border border-detail  px-4 py-3 xl:px-8 xl:py-5  rounded-lg flex-nowrap">
          <span className="flex items-center font-bold">
            <Phone />
          </span>
          <span className="font-bold">Zadzwoń</span>
          <span className="font-light text-nowrap">+48 600 600 600</span>
        </div>
      </div>
      {/* <HamburgerMenu /> */}
      <button
        onClick={onClickHandler}
        className="flex lg:hidden flex-col justify-between h-6 w-8 "
      >
        <div className="border border-primary w-full"></div>
        <div className="border border-primary w-full"></div>
        <div className="border border-primary w-full"></div>
      </button>
    </header>
  );
};
