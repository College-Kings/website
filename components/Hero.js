/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
// import banner from '../public/assets/banner.webp';
import fullbaner from '../public/assets/fullbanner.webp'
import gif from '../public/assets/crown.gif'

const Hero = () => {
  return (

    <div className='pt-10 m:pt-0'>
      <Image
        loading='eager'
        alt="desktop"
        src={fullbaner}
        quality={100}
        placeholder={gif}
        width={1920}
        height={1078}
        layout='responsive'
        
      />
    </div>
  );
};

export default Hero;
