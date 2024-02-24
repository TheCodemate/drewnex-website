import React from "react";
import { Logo } from "./Logo";
import { HamburgerMenu } from "./HamburgerMenu";

export const MobileHeader = () => {
  return (
    <header
      className={`sticky top-0 left-0 z-50 flex w-full justify-between items-center pt-[30px] pb-[20px] px-[5%] overflow-hidden gap-8 `}
    >
      <Logo />

      <HamburgerMenu />
    </header>
  );
};
