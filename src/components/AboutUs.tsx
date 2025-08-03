import Image from 'next/image';
import React, { ReactNode } from 'react';
import tartak from '../app/assets/tartak_foto-01.webp';

export const AboutUs = () => {
  return (
    <div className={`flex flex-col items-center  md:gap-12 px-24 py-12`}>
      <div className="flex flex-col items-center gap-4 flex-1">
        <h2 className="font-[100] text-[40px] mb-4">
          Witamy w<b className="font-extrabold"> Drewnex</b>
        </h2>
        <p className="text-textAlternate mb-12 font-thin text-center">
          Tartak Drewnex to firma z ponad 30-letnim doświadczeniem, która
          specjalizuje się w dostarczaniu najwyższej jakości drewna budowlanego
          oraz tarcicy, idealnych do różnorodnych projektów stolarskich i
          budowlanych. Nasze produkty pochodzą głównie z polskich lasów
          państwowych, co stanowi gwarancję ich doskonałej jakości, trwałości
          oraz ekologicznej odpowiedzialności. Drewnex to rodzinna firma
          tworzona przez zespół zaangażowanych specjalistów, którzy z pasją i
          profesjonalizmem podchodzą do każdego zlecenia, zapewniając
          kompleksową obsługę i indywidualne rozwiązania dopasowane do potrzeb
          naszych klientów. Jesteśmy dumni z naszego rzemiosła i stale dążymy do
          przekraczania oczekiwań klientów, dostarczając produkty, które
          idealnie sprawdzają się w każdej realizacji. Skontaktuj się z nami i
          przekonaj się, jak Drewnex może pomóc Ci w realizacji Twojego projektu
          – z pasją, doświadczeniem i pełnym zaangażowaniem.
        </p>
      </div>
      <div className="flex-1 w-screen min-h-[300px] relative">
        <Image
          src={'/tartak_foto-01.webp'}
          objectFit="cover"
          alt="zdjęcie z tartaku"
          fill={true}
        />
      </div>
    </div>
  );
};
