import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
//components
const LauncherButton = dynamic(() => import('../LauncherButton'));

//assets
import goldCrown from '../../public/assets/gold-crown.png';

const Section6 = () => {
  return (
    <div className="m:hidden">
      <div className="w-full bg-black-main flex flex-col items-center justify-center py-10">
        <div
          className="
            pt-17.133
        relative
        w-105.35
        height-10
        max-w-105.35
        max-h-10
        bg-black-main
       mb-36"
        >
          <Image src={goldCrown} width={105.35} height={98.14} alt="crown" />
        </div>
        <div className="w-full flex flex-col justify-start pl-7.25 pb-6">
          <h3 className="text-subTitle text-pink-main">Like College Kings?</h3>
          <h3 className="text-subTitle text-pink-main">Support me on</h3>
          <h3 className="text-subTitle text-pink-main">Patreon!</h3>
        </div>
        <p className="text-paragraphTwo text-white px-7.25 mb-8 ">
          Game development is funded solely by Patreon, so patrons get exclusive
          content as a thank you!
        </p>
        <span className="py-6 text-white z-40 w-11/12 text-center x:pb-10 2xl:pb-14 m:pb-1 x:text-steamParagraph m:text-sm font-montserrat">
          Download our launcher and play Act 1 for free, no login required. If
          you like it, unlock Act 2, 3 and 4 easily inside the launcher by
          becoming a Patron.
        </span>

        <LauncherButton
          text={'download the launcher'}
          icon={true}
          width={324.96}
          height={65.35}
        />
        <span className="py-5 text-white underline z-40 x:text-steamParagraph font-montserrat cursor-pointer">
          <a
            target="_blank"
            href="https://store.steampowered.com/app/1463120/College_Kings__Act_I/"
            rel="noopener noreferrer"
          >
            Play College Kings on Steam
          </a>
        </span>
      </div>
    </div>
  );
};

export default Section6;
