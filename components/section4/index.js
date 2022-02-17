import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

//assets

import collegeBig from '../../public/assets/college-big.webp';
import street from '../../public/assets/street.png';
import girls from '../../public/assets/girls.png';
const Separator = dynamic(() => import('../../public/assets/Union.svg'));

//components
const VerticalAccordion = dynamic(() => import('../VerticalAccordion'));
const HorisontalAccordionMobile = dynamic(() =>
  import('../HorisontalAccordionMobile')
);

const Section4 = () => {
  return (
    <>
      <div className="flex flex-row justify-start align-middle items-center bg-black-secondary pb-9.925 pl-7.25 md:justify-end md:pr-14.14  2xl:pr-40.5">
        <span className="uppercase italic font-syne text-nums font-bold text-pink-main ">
          02
        </span>
        <div className="ml-3 mr-1.67">
          <Separator />
        </div>
        <div className="flex flex-col m:hidden">
          <p className="uppercase text-white font-gameModeTitle font-montserrat">
            game modes
          </p>
          <p className="game-modes font-montserrat">playable today</p>
        </div>
        <div className="hidden m:flex flex-col ">
          <p className="uppercase text-white font-gameModeTitle font-montserrat">
            FIND YOUR DREAM GIRL
          </p>
          <p className="game-modes font-montserrat">Realistic Personalities</p>
        </div>
      </div>

      <div className="w-full h-103  bg-black-secondary flex justify-center align-middle items-center 2xl:h-143 5xl:h-154.25">
        <div className="w-full h-103  md:h-106.985 2xl:h-143 5xl:h-154.25 ">
          <div className="w-full h-103 md:h-106.985 2xl:h-143  5xl:h-154.25 relative ">
            <div className="hidden m:flex w-full right-50 h-full ">
              <VerticalAccordion />
            </div>

            <div className="flex w-full m:hidden h-103 absolute z-50">
              <HorisontalAccordionMobile />
            </div>
            <div className="hidden m:flex  relative w-full  h-106.985 ">
              <div className="absolute m:mb-40 lg:mb-60 2xl:mb-68 h-106.985 m:w-3/4 xl:w-4/6 x:w-3/6 2xl:w-2/3 2xl:-right-10 5xl:w-6/12 bottom-0 right-0">
                <Image
                  layout="fill"
                  src={girls}
                  alt="girls"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="m:hidden">
              <Image
                layout="fill"
                src={street}
                className="object-cover opacity-50 "
                alt="street-background"
              />
            </div>

            <div className="hidden m:flex">
              <Image
                layout="fill"
                src={collegeBig}
                className=" object-cover opacity-50 "
                alt="college-background"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
