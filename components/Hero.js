/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import banner from '../public/assets/banner.webp';
import fullbaner from '../public/assets/fullbanner.webp'

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
      <div className="hidden md:flex w-full h-auto justify-center  relative bg-black-secondary">
      {/* md:h-[40rem] m:h-[60rem]  5xl:h-[80rem] */}
        <Image
          loading='eager'
          unoptimized={true}
          alt="desktop"
          src={fullbaner}
          // className='w-auto h-full'
          // layout="fill"
          // layout='responsive'
          placeholder='blur'
          width={1920}
          height={1078}

        // objectFit="cover"
        />
      </div>
    </>
  );
};

export default Hero;
