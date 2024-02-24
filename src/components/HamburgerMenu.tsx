import Link from "next/link";
import React, { useState } from "react";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="absolute bottom-0 left-0 lg:hidden bg-secondary w-full p-8 items-center min-w-[360px]">
        <ul className=" top-0 left-0 z-20 flex  flex-col items-center grow-1 gap-10 font-bold text-2xl text-nowrap text-detail active:text-primary ">
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
    </>
  );
};
