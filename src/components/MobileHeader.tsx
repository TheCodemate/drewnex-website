"use client";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { useStickyMenu } from "@/hooks/useStickyMenu";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSticky } = useStickyMenu();

  const onClickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className={`z-50 flex w-full justify-between items-center py-4 xl:py-8 px-[5%] xl:px-[5%] gap-4 xl:gap-8 min-h-14 text-sm ${
        isSticky
          ? "fixed top-0 left-0 shadow-md backdrop-blur backdrop-brightness-0"
          : "absolute bg-transparent"
      } 
      ${isOpen && !isSticky ? "backdrop-blur-sm backdrop-brightness-50" : ""} 
      lg:hidden transition-all`}
    >
      <Logo />
      <nav
        className={`absolute top-[100%] left-0 right-0 lg:hidden w-full px-8 items-center min-w-[360px] overflow-hidden ${
          isOpen ? "h-[300px]" : "h-[0px]"
        } transition-all bg-backgroundDarkTransparent`}
      >
        <ul
          className={`flex flex-col items-center grow-1 gap-10 font-bold mt-6 text-2xl text-nowrap text-detail active:text-primary `}
        >
          <li
            onClick={onClickHandler}
            className="text-detail hover:text-primary active:text-primary hover:cursor-pointer"
          >
            <Link href="/#home">Strona główna</Link>
          </li>
          <li
            onClick={onClickHandler}
            className="text-detail hover:text-primary active:text-primary hover:cursor-pointer"
          >
            <Link href="/#products">Oferta</Link>
          </li>
          <li
            onClick={onClickHandler}
            className="text-detail hover:text-primary active:text-primary hover:cursor-pointer"
          >
            <Link href="/#features">Korzyści</Link>
          </li>
          <li
            onClick={onClickHandler}
            className="text-detail hover:text-primary active:text-primary hover:cursor-pointer"
          >
            <Link href="/#map-section">Jak dojechać?</Link>
          </li>
        </ul>
      </nav>
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
