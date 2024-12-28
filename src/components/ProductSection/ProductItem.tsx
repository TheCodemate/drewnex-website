import Image from 'next/image';
import { ReactNode } from 'react';

type ProductItemProps = {
  description: string;
  children: ReactNode & typeof Image;
};

export const ProductItem = ({ description, children }: ProductItemProps) => {
  return (
    <div className="relative flex flex-col items-center max-w-[320px] max-h-[380px] cursor-pointer">
      <div className="relative min-w-[240px] min-h-[300px] max-w-[300px] max-h-[380px] cursor-pointer">
        {children}
      </div>
      <div className="pt-6 px-6 font-bold">
        <h3>{description}</h3>
      </div>
    </div>
  );
};
