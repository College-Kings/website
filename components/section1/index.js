import React from 'react';
import dynamic from 'next/dynamic';
//assets
const Separator = dynamic(() => import('../../public/assets/Union.svg'));

const Section1 = () => {
  return (
    <div>
      <div className="flex flex-row align-middle bg-black-secondary items-center pb-9.925 pl-7.25 md:pl-14.14 2xl:pl-40.5">
        <span className="uppercase italic font-syne text-nums font-bold text-pink-main ">
          01
        </span>
        <div className="ml-3 mr-1.67">
          <Separator />
        </div>
        <div className="flex flex-col m:hidden">
          <p className="uppercase text-white font-gameModeTitle font-montserrat ">
            game modes
          </p>
          <p className="game-modes ">playable today</p>
        </div>
        <div className="hidden m:flex flex-col ">
          <p className="uppercase text-white font-gameModeTitle font-montserrat">
            STORY DRIVEN ADULT GAME
          </p>
          <p className="game-modes font-montserrat">YOUR CHOICES MATTER</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
