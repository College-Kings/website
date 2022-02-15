import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './index.module.css';
import YouTube from 'react-youtube';
import college from '../public/assets/college-text.png';
import chloeSit from '../public/assets/chloe-sit-under.webp';
import bigChloe from '../public/assets/big-chloe.webp';
const BigCrown = dynamic(() => import('../public/assets/big-crown.svg'));

const Section2 = () => {
  return (
    <div className="w-full bg-black-secondary ">
      <div className="relative h-77.51 pl-7.25 md:pl-14.14  mb-9.918  sm:h-auto w-full overflow-hidden md:flex 2xl:pl-40.5">
        <div className=" md:flex md:flex-col md:w-1/3 ">
          <p className="hidden m:flex relative pr-7.25 z-10 text-white text-title font-bebas">
            What is College Kings?
          </p>
          <p className="sm:pr-0 m:hidden relative pr-7.25  z-10 text-white text-title font-bebas">
            What is
          </p>
          <p className="sm:pr-0 m:hidden relative pr-7.25  z-10 text-white text-title font-bebas">
            College Kings?
          </p>

          <div className="w-auto  h-auto flex flex-wrap ">
            <p className="relative z-10 text-white text-paragraph pb-5 pr-7.25 font-monserrat inline wrap font-montserrat">
              Just an innocent freshman at San Vallejo College, you are
              oblivious to the path that lays ahead of you. Growing up gets real
              when you learn about the unique cultures of the place you must
              call home.
            </p>
            <p className="relative pr-7.25 z-10 text-white text-paragraph font-montserrat">
              As loyalties form and tensions rise can you lead your fraternity
              to the crown and with it become the king on campus?
            </p>
          </div>
        </div>
        <div className=" md:w-2/3 h-80 -mt-52.5 -mr-30 md:mt-0 opacity-75">
          <BigCrown />
        </div>
      </div>

      {/* <div className=" -mb-12 flex justify-center m:hidden">
        <YouTube
          videoId="4Kf-W0M5FwA"
          className={`${styles.youtube} w-83 h-44.25 frame-backgroundf`}
        />
      </div> */}
      <div className="m:hidden pl-7.25">
        <Image src={chloeSit} className={styles.zIndex} alt="chloe" />
      </div>

      <div className="hidden m:flex my-10 md:justify-center md:align-middle items-center bg-transparent w-full  m:h-84.987 lg:h-103 5xl:h-154.25  ">
        <div className="relative flex flex-row justify-center align-middle items-center w-full m:h-84.987 lg:h-103 5xl:h-154.25">
          <Image
            layout="fill"
            src={college}
            className="h-84.987"
            alt="college"
          />

          <div className="w-5/12 lg:w-6/12 lg:ml-10  relative flex justify-center align-middle md:h-77.51 2xl:h-95 5xl:h-136 5xl:ml-37.75">
            <YouTube
              videoId="4Kf-W0M5FwA"
              className=" absolute top-0 left-0 w-full  h-full frame-background"
            />
          </div>

          <div className="w-5/12 flex justify-start align-middle md:-ml-1 xl:-ml-20 scale-150 xl:hidden ">
            <Image src={chloeSit} alt="chloe sit" />
          </div>

          <div className="hidden  w-6/12 xl:flex justify-end align-middle md:-ml-1 xl:-ml-10 scale-110">
            <Image
              src={bigChloe}
              alt="chloe sit large"
              className={styles.zIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
