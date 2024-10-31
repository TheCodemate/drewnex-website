import Image from "next/image";
import React, { ReactNode } from "react";
import tartak from "../app/assets/tartak_foto-01.webp";

export const AboutUs = () => {
  return (
    <div className={`flex items-center  md:gap-12 p-24`}>
      <div className="flex flex-col gap-4 flex-1">
        <h2 className="text-4xl font-bold">O nas</h2>
        <p>
          Witamy w Drewnex, Tartaku z pasją z ponad 30-letnim doświadczeniem
          speckalizującym się w dostarczaniu wysokiej jakości drewna
          budowlanego, jak równiez tarcicy do róznych projektów stolarskich, jak
          równiez innych usług gdzie zachęcamy się do zapoznania z naszą ofertą.
          Nasze drewna pozyskujemy głównie z polskich lasów państwowych co
          zapewnia jego doskonałą jakość oraz ekologiczną odpowiedzialność.
          Zespół Drewnex to rodzina, którą tworzą specjaliści i z zaangaowaniem
          podchodzą do kadego zlecenia oferując kompleksową obsługę oraz
          indywidualne rozwiązania dostosowane do potrzeb naszych klientów.
          Jesteśmy dumni z naszego rzemiosła i dązymy do spełnienia oczekiwań,
          dostarczając produkty które sprawdzają się w kadym projekcie. Poznaj
          Nas Bliej. Skontaktuj się z nami aby odkryć co moemy dla Ciebie zrobić
        </p>
      </div>
      <div className="flex-1 w-screen min-h-[300px] relative">
        <Image
          src={"/tartak_foto-01.webp"}
          objectFit="cover"
          alt="zdjęcie z tartaku"
          fill={true}
        />
      </div>
    </div>
  );
};
