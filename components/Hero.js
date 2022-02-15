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
          alt="mobile"
          className="w-full background-repeat: no-repeat"
        />
      </div>
      <div className="hidden md:flex relative bg-black-secondary">
        <Image
          alt="desktop"
          src={fullbaner}
          className="w-full background-repeat: no-repeat"
        />
      </div>
    </>
  );
};

export default Hero;
