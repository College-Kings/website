import React from 'react';
import Image from 'next/image';
import first from '../public/assets/university-1.png';
import second from '../public/assets/university-2.png';
import third from '../public/assets/university-3.webp';
export default function ScrollSnap() {
  return (
    <ul className="snap-x w-full flex flex-row gap-8 5xl:ml-52 5xl:scale-125 overflow-y-hidden overflow-x-auto">
      <li className="snap-center 2xl:pl-7.25 2xl:pb-10">
        <div className="frame-background  w-[345px] h-[199px] 2xl:w-[461px] 2xl:h-[263px]">
          <div className="relative  w-full h-full bg-black-main rounded-lg rounded-tl-3xl rounded-br-3xl">
            <Image src={first} className="frame-imgs object-fit" alt='first' />
            <span className="absolute inset-x-7 top-5 m:top-7.793 frame-title">
              real relationships
            </span>
            <span className=" inset-x-7 top-16 2xl:top-23.5  frame-sub">
              Date Your Dream Girl
            </span>
            <div className="absolute max-w-[211px] inset-x-7 top-24 2xl:top-33.25">
              <span className="frame-content">
                Experience deep relationships with girls that have realistic
                personalities.
              </span>
            </div>
          </div>
        </div>
      </li>

      <li className="snap-center ">
        <div className="frame-background  w-[345px] h-[199px] 2xl:w-[461px] 2xl:h-[263px]">
          <div className="frame-wrapper">
            <Image src={second} className="frame-imgs object-fit" alt='second'/>
            <span className="frame-title inset-x-7 top-5 m:top-7.793">
              STEAMY SEX SCENES
            </span>
            <span className=" inset-x-7  top-16 2xl:top-23.5  frame-sub">
              Live Out Your Fantasies
            </span>
            <div className="absolute max-w-[211px] inset-x-7  top-24 2xl:top-33.25">
              <span className="frame-content">
                Take your relationship to the next level with our fully
                explicit, interactive sex scenes.
              </span>
            </div>
          </div>
        </div>
      </li>

      <li className="snap-center ">
        <div
          className="w-[345px]
       h-[200px] 2xl:w-[462px] 2xl:h-[264px] frame-background"
        >
          <div className="frame-wrapper">
            <Image src={third} className="frame-imgs object-fit" alt='third' />
            <span className="frame-title inset-x-7 top-5 m:top-7.793">
              CHOICES MATTER
            </span>
            <span className=" inset-x-7 top-16 2xl:top-23.5  frame-sub">
              You Decide
            </span>
            <div className="absolute max-w-[211px] inset-x-7 top-24 2xl:top-33.25">
              <span className="frame-content">
                Whether you shower your girlfriend with flowers or sleep with
                her hot sister, you’re in control.
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
