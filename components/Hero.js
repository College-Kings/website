/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import banner from '../public/assets/banner.webp';

const Hero = () => {
  return (
    <>
      <div className="md:hidden  bg-black-secondary">
        <Image
          src={banner}
          priority={true}
          layout="responsive"
          alt="mobile"
          className="w-full background-repeat: no-repeat"
        />
      </div>
      <div className="hidden md:flex w-auto h-full justify-center relative bg-black-secondary">
        <img
          alt="desktop"
          src="../assets/fullbanner.webp"
          className='w-auto h-full'
        // layout="fill"
        // objectFit="cover"
        />
      </div>
    </>
  );
};

export default Hero;
