import React, { ReactNode } from "react";

type FeatureProps = {
  icon: ReactNode;
  heading: string;
  content: string;
  reverse?: boolean;
};

export const Feature = ({
  icon,
  reverse = false,
  heading,
  content,
}: FeatureProps) => {
  return (
    <div
      className={`flex flex-col gap-1 items-center  ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="text-detail aspect-square min-w-10 max-w-14">{icon}</div>
      <div
        className={`flex flex-col gap-4 text-center ${
          reverse ? "md:text-left" : "md:text-right"
        }`}
      >
        <h3 className="font-bold ">{heading}</h3>
        <p
          className={`font-thin text-textAlternate text-sm text-center ${
            reverse ? "md:text-left" : "md:text-right"
          }`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};
