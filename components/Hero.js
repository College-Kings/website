/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import banner from '../public/assets/banner.webp';

const Hero = () => {
  return (
    <>
      <div className="md:hidden bg-black-secondary">
        <Image
          src={banner}
          priority={true}
          layout="responsive"
          alt="mobile"
          className="w-full background-repeat: no-repeat"
        />
      </div>
      <div className="hidden md:flex w-full md:h-[40rem] m:h-[60rem]  5xl:h-[80rem] justify-center  relative bg-black-secondary">
        <img
          // priority={true}
          alt="desktop"
          src="/assets/fullbanner.webp"
          // layout="fill"
          // objectFit="cover"
        />
      </div>
    </>
  );
};

export default Hero;
