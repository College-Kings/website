import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

//components
import Frame from '../Frame';
//assets
const Separator = dynamic(() => import('../../public/assets/Union.svg'));
const PlayNow = dynamic(() => import('../../public/assets/play-now-btn.svg'));
import exclusive from '../../public/assets/excclusive-access.png';

const Section3 = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-purple-grad to-black-main bg-opacity-0 pt-17.427 2xl:pt-0  m:pb-20 2xl:pb-0">
        <div className="flex flex-row align-middle items-center pb-9.925 pl-7.25 md:pl-14.14 2xl:pl-40.5">
          <span className="uppercase font-syne text-nums font-bold italic text-pink-main">
            03
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
              GET MORE
            </p>
            <p className="game-modes font-montserrat">
              DIVE INTO THE College KINGS UNIVERSE
            </p>
          </div>
        </div>

        <div className="m:flex m:flex-row  md:justify-around 2xl:pb-16.25 md:align-middle 5xl:w-full 2xl:justify-center 2xl:items-center 2xl:align-middle">
          <Frame />
        </div>
      </div>

      <div className="w-full flex justify-center bg-black-main items-center flex-col h-40 xl:hidden">
        <div
          className="
            bg-gradient-to-r from-pink-main to-orange-second
              w-full
              border-y-0.25
              h-0.25
            "
        ></div>
        <div className="m:hidden z-40 max-w-51.428 -mt-6.5  h-9.953">
          <a>
            <PlayNow width={300} height={40} className="z-50" />
          </a>
        </div>
        <div className="hidden m:flex z-40 w-88 -mt-8  h-9.953">
          <Image src={exclusive} alt="exclusive" className="z-40" />
        </div>
      </div>
    </>
  );
};

export default Section3;
