import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// components
const LauncherButton = dynamic(() => import('../LauncherButton'));

//assets
import kingsBig from '../../public/assets/kings-big.png';
import penelope from '../../public/assets/penelope.png'
import goldCrown from '../../public/assets/gold-crown.png'
import penelopeBig from '../../public/assets/penelope-sit-big.webp';
import kingsFrame from '../../public/assets/kings-frame.png';
import kingsShade from '../../public/assets/kings-shade.webp';

const Section5 = () => {
  return (
    <div className="hidden m:flex flex-col pt-80 m:pt-100 5xl:pt-120  bg-purple-grad">
      <div className="w-full  h-90  z-10 flex xl:h-106.985 5xl:h-154.25 5xl:-ml-8">
        <div className="w-full xl:w-10/12 h-90 xl:h-106.985  relative 2xl:-left-25.75 5xl:h-154.25  5xl:ml-34.25">
          <Image
            layout="fill"
            src={kingsBig}
            className="object-contain opacity-50  z-10"
            alt="kings-desktop"
          />
        </div>
        <div className="w-1/5 xl:hidden h-90 flex align-middle justify-center items-center relative mt-20 z-0">
          <div className="absolute inset-y-0 right-0 scale-150 z-0">
            <Image
              layout="fixed"
              src={penelope}
              className="object-contain bg-transparent z-0"
              alt="penelope"
            />
          </div>
        </div>
        <div className="hidden relative w-3/12 xl:-ml-20 xl:mr-5  xl:flex ">
          <Image src={penelopeBig} alt="penelope" className="object-fill " />
        </div>
      </div>
      <div className="w-11/12  xl:mb-60 5xl:-mt-94.75 5xl:mb-94.75 mx-5  xl:mx-16  xl:-mt-30 2xl:ml-24 5xl:ml-32 ">
        <div className="relative w-fit xl:w-11/12  h-fit opacity">
          <div className="absolute">
            <Image src={kingsFrame} alt="frame" className="object-contain" />
          </div>
          <div className="absolute">
            <Image src={kingsShade} alt="shade" className="object-contain" />
          </div>
          <div
            className="z-40 flex flex-col justify-center align-items items-center -mt-105"
            id="act"
          >
            <Image src={goldCrown} alt="crown" />
            <h2 className="text-pink-main z-40 m:pt-1 m:pb-1 x:pt-14 pb-8 text-steam m:fo font-bebas">
              PLAY ACT 1 FOR FREE
            </h2>
            <span className="text-white z-40 w-10/12  text-center x:pb-10 2xl:pb-14 m:pb-1 x:text-steamParagraph m:text-sm font-montserrat">
              Download our launcher and play Act 1 for free, no login required.
              If you like it, unlock Act 2, 3 and 4 easily inside the launcher
              by becoming a Patron.
            </span>
            <div className="z-40 x:pb-8 2xl:pb-10 m:pb-1">
              <LauncherButton
                text={'DOWNLOAD THE LAUNCHER'}
                icon={true}
                width={350}
                height={70}
              />
            </div>
            <span className="text-white underline z-40 x:text-steamParagraph font-montserrat cursor-pointer">
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
      </div>
    </div>
  );
};

export default Section5;
