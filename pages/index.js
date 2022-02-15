import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import clientPromise from '../lib/mongodb';
import goldCrown from '../public/assets/gold-crown.png';
import kings from '../public/assets/KINGS.png';
import penelope from '../public/assets/penelope.png';
import chloeSit from '../public/assets/chloe-sit-under.webp';
import BigCrown from '../public/assets/big-crown.svg';

import aubreyBig from '../public/assets/aubrey-big.webp';
import bigChloe from '../public/assets/big-chloe.webp';
import college from '../public/assets/college-text.png';
import collegeBig from '../public/assets/college-big.webp';
import kingsBig from '../public/assets/kings-big.png';
import street from '../public/assets/street.png';
import girls from '../public/assets/girls.png';
import penelopeBig from '../public/assets/penelope-sit-big.png';
import kingsFrame from '../public/assets/kings-frame.png';
import kingsShade from '../public/assets/kings-shade.webp';
import styles from '../components/index.module.css';

const Separator = dynamic(() => import('../public/assets/Union.svg'));
const VerticalAccordion = dynamic(() =>
  import('../components/VerticalAccordion')
);
const LauncherButton = dynamic(() => import('../components/LauncherButton'));
const Accordion = dynamic(() => import('../components/Accordion'));
import BigScreenAccordion from '../components/BigScreenAccordion';
const HorisontalAccordionMobile = dynamic(() =>
  import('../components/HorisontalAccordionMobile')
);
const Button = dynamic(() => import('../components/Button'));
const Footer = dynamic(() => import('../components/Footer'));
const YouTube = dynamic(() => import('react-youtube'));
const MainNav = dynamic(() => import('../components/MainNav'));
const Hero = dynamic(() => import('../components/Hero'));
const Subtitle = dynamic(() => import('../components/Subtitle'));
const ScrollSnap = dynamic(() => import('../components/ScrollSnap'));
const Section1 = dynamic(() => import('../components/section1'));
const Section3 = dynamic(() => import('../components/section3'));
const Section5 = dynamic(() => import('../components/Section5'));
const Section6 = dynamic(() => import('../components/Section6'));
const Section7 = dynamic(() => import('../components/section7'));

export default function Home({ isConnected }) {
  return (
    <div className="max-w-screen-6xl">
      <span id="hero"></span>
      <MainNav />
      <Hero />

      <Subtitle />
      <Section1 />

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
                oblivious to the path that lays ahead of you. Growing up gets
                real when you learn about the unique cultures of the place you
                must call home.
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

        <div className=" -mb-12 flex justify-center m:hidden">
          <YouTube
            videoId="4Kf-W0M5FwA"
            className={`${styles.youtube} w-83 h-44.25 bg-gradient-to-b from-pink-main to-orange-second p-0.5 rounded-lg rounded-tl-3xl rounded-br-3xl`}
          />
        </div>
        <div className="m:hidden pl-7.25">
          <Image src={chloeSit} className={styles.zIndex} alt="chloe-sit" />
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
                className=" absolute top-0 left-0 w-full  h-full bg-gradient-to-b from-pink-main to-orange-second p-0.5 rounded-lg rounded-tl-3xl rounded-br-3xl"
              />
            </div>

            <div className="w-5/12 flex justify-start align-middle md:-ml-1 xl:-ml-20 scale-150 xl:hidden z-2000">
              <Image src={chloeSit} alt="chloe sit" />
            </div>

            <div className="hidden  w-6/12 xl:flex justify-end align-middle md:-ml-1 xl:-ml-10 scale-110">
              <Image src={bigChloe} alt="chloe" className={styles.zIndex} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center -mt-10 m:pt-10 x:pt-32 2xl:pt-49.5 xl:pt-17.427 overscroll-contain px-1 bg-black-secondary z-0">
        <ScrollSnap />
      </div>

      <div className="w-full flex justify-center items-center  pb-17.133 bg-black-secondary lg:hidden">
        <div className="w-69.74  mt-9.918">
          <Button
            text={'MEET THE GIRLS'}
            icon={true}
            width={278.96}
            height={56.35}
          />
        </div>
      </div>

      <div className="hidden w-full lg:flex justify-center items-center  pb-17.133 bg-black-secondary">
        <div className="w-69.74  mt-9.918">
          <Button
            text={'PLAY NOW'}
            icon={true}
            width={278.96}
            height={56.35}
            link={'#act'}
          />
        </div>
      </div>

      <section>
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
            <p className="game-modes font-montserrat">
              Realistic Personalities
            </p>
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
      </section>
      <section className="hidden m:flex flex-col pt-80 m:pt-100 5xl:pt-120  bg-purple-grad">
        <div className="w-full  h-90  z-10 flex xl:h-106.985 5xl:h-154.25 5xl:-ml-8">
          <div className="w-full xl:w-11/12 h-90 xl:h-106.985  relative 2xl:-left-25.75 5xl:h-154.25  5xl:ml-34.25">
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
              <span className="text-white z-40 w-11/12 text-center x:pb-10 2xl:pb-14 m:pb-1 x:text-steamParagraph m:text-sm font-montserrat">
                Download our launcher and play Act 1 for free, no login
                required. If you like it, unlock Act 2, 3 and 4 easily inside
                the launcher by becoming a Patron.
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
      </section>

      <section className="m:hidden">
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
            <h3 className="text-subTitle text-pink-main">
              Like College Kings?
            </h3>
            <h3 className="text-subTitle text-pink-main">Support me on</h3>
            <h3 className="text-subTitle text-pink-main">Patreon!</h3>
          </div>
          <p className="text-paragraphTwo text-white px-7.25 mb-8 ">
            Game development is funded solely by Patreon, so patrons get
            exclusive content as a thank you!
          </p>
          <Button
            text={'college kings on patreon'}
            icon={true}
            width={324.96}
            height={65.35}
          />
        </div>
      </section>

      <section className="m:hidden w-full h-auto bg-purple-grad">
        <div
          className="w-full h-47.86 relative -mb-52   
        "
        >
          <Image layout="fill" src={kings} aly="kings" alt="kings" />
          <div className="z-40 w-full h-2/4 bg-black-main  bg-opacity-80 "></div>
        </div>
        <div className="w-full flex justify-end">
          <div className="relative w-49.803 h-64.688 ">
            <Image
              src={penelope}
              width={199.21}
              height={258.75}
              alt="penelope"
            />
          </div>
        </div>
      </section>

      <Section3 />
      <Section5 />
      <Section6 />
      <Section7 />

      <section className="bg-black-secondary -mt-23.75 m:hidden">
        <div className="flex justify-center align-middle items-center ">
          <div className="relative">
            <Accordion
              buttonText={'Who makes College Kings?'}
              width={329.86}
              height={66}
              textHeight={133}
              content={
                'College Kings started out being made by me! (Undergrad Steve), but now I have a team of people that help me out with things like rendering, transcription, writing and coding to create the best product possible for you guys.'
              }
            />
          </div>
        </div>
        <div className="flex justify-center align-middle items-center ">
          <Accordion
            buttonText={'WHEN IS THE GAME COMING OUT?'}
            width={329.86}
            height={66}
            textHeight={133}
            content={
              'There is no set release date for a full v1.0 but I try and release updates as much as I have time to.'
            }
          />
        </div>
        <div className="flex justify-center align-middle items-center">
          <Accordion
            buttonText={'What do you do with the Patreon money?'}
            width={329.86}
            height={66}
            textHeight={133}
            content={
              'All Patreon money is used to develop the game further, you can find a more specific breakdown on the Patreon Goals section.'
            }
          />
        </div>
        <div className="flex justify-center align-middle items-center">
          <Accordion
            buttonText={'why should i donate on patreon'}
            width={329.86}
            height={66}
            textHeight={133}
            content={
              'Patreon is the games only source of income, so if you would like to see the game developed further and faster please consider donating. As a show of appreciation, Patrons get many benefits which you can find on the Patreon page.'
            }
          />
        </div>
      </section>
      <section className="bg-black-secondary hidden m:flex 2xl:pl-40">
        <div className="w-2/12 relative bg-black-secondary ">
          <Image
            src={aubreyBig}
            alt="aubrey"
            className="-mt-4 m:mt-10 left-10 scale-130"
          />
        </div>
        <div className="hidden w-10/12 m:flex flex-col justify-center align-middle items-center bg-black-secondary">
          <BigScreenAccordion
            buttonText={'Who makes College Kings?'}
            width={730}
            height={81}
            content={
              'College Kings started out being made by me! (Undergrad Steve), but now I have a team of people that help me out with things like rendering, transcription, writing and coding to create the best product possible for you guys.'
            }
          />
          <BigScreenAccordion
            buttonText={'WHEN IS THE GAME COMING OUT?'}
            width={730}
            height={81}
            content={
              'There is no set release date for a full v1.0 but I try and release updates as much as I have time to.'
            }
          />
          <BigScreenAccordion
            buttonText={'What do you do with the Patreon money?'}
            width={730}
            height={81}
            content={
              'All Patreon money is used to develop the game further, you can find a more specific breakdown on the Patreon Goals section.'
            }
          />
          <BigScreenAccordion
            buttonText={'why should i donate on patreon'}
            width={730}
            height={81}
            content={
              'Patreon is the games only source of income, so if you would like to see the game developed further and faster please consider donating. As a show of appreciation, Patrons get many benefits which you can find on the Patreon page.'
            }
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
