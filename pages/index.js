import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import clientPromise from '../lib/mongodb';

import aubreyBig from '../public/assets/aubrey-big.webp';
const Accordion = dynamic(() => import('../components/Accordion'));
import BigScreenAccordion from '../components/BigScreenAccordion';
const Footer = dynamic(() => import('../components/Footer'));
const MainNav = dynamic(() => import('../components/MainNav'));
const Hero = dynamic(() => import('../components/Hero'));
const Subtitle = dynamic(() => import('../components/Subtitle'));
const ScrollSnap = dynamic(() => import('../components/ScrollSnap'));
const Section1 = dynamic(() => import('../components/section1'));
const Section2 = dynamic(() => import('../components/section2'));
const Section3 = dynamic(() => import('../components/section3'));
const Section4 = dynamic(() => import('../components/section4'));
const Section5 = dynamic(() => import('../components/section5'));
const Section6 = dynamic(() => import('../components/section6'));
const Section7 = dynamic(() => import('../components/section7'));
const Section8 = dynamic(() => import('../components/section8'));
const Section9 = dynamic(() => import('../components/Section9'));
const Section10 = dynamic(() => import('../components/Section10'));
const SectionPoslednja = dynamic(() =>
  import('../components/section-poslednja')
);

export default function Home({ isConnected }) {
  return (
    <div className=" 5xl:max-w-[1980px] 5xl:h-full ">
      <span id="hero"></span>
      <MainNav />
      <Hero />
      <Subtitle />
      <Section1 />
      <Section2 />
      <div className="flex justify-center -mt-10 m:pt-10 x:pt-32 2xl:pt-49.5 xl:pt-17.427 overscroll-contain px-1 bg-black-secondary z-0">
        <ScrollSnap />
      </div>
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <SectionPoslednja />
      <Accordion />

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
