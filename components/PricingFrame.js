import React from 'react';
import Pricing from './Pricing';
import Image from 'next/image';
import frame from '../public/assets/big-frame-pricing.webp';

export default function PricingFrame() {
  return (
    <div className="flex flex-row bg-red-600 align-middle justify-center items-center w-full h-80 max-h-auto overflow-clip">
      <Image src={frame} className="relative" alt='frame' />

      <div className="w-full h-full bg-pricingShade bg-no-repeat bg-cover absolute ">
        <Pricing width={184} height={38.26} name={'freshman'} />
      </div>
    </div>
  );
}
