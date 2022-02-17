import React from 'react';
import Image from 'next/image';
import banner from '../public/assets/banner.webp';
import fullbaner from '../public/assets/fullbanner.webp';

const Hero = () => {
  return (
    <>
      <div className="md:hidden bg-black-secondary">
        <Image
          layout="responsive"
          src={banner}
          priority={true}
          alt="mobile"
          className="w-full background-repeat: no-repeat"
        />
      </div>
      <div className="hidden md:flex justify-center  relative bg-black-secondary max-w-[1980px]">
        <Image
          priority={true}
          alt="desktop"
          src={fullbaner}
          className="w-full background-repeat: no-repeat  "
        />
      </div>
    </>
  );
};

export default Hero;
