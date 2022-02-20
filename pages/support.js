import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import clientPromise from '../lib/mongodb';
import Image from 'next/image';

//components
const MainNav = dynamic(() => import('../components/MainNav'));
const Footer = dynamic(() => import('../components/Footer'));
import SupportOptions from '../components/SupportOptions';
const Button = dynamic(() => import('../components/Button'));
//assets
const SupportSVG = dynamic(() => import('../public/assets/support.svg'));
import discord from '../public/assets/pink_discord.png';
import crown from '../public/assets/pink_crown.webp';

const data = [
  {
    icon: discord,
    btnText: 'JOIN COLLEGE KINGS DISCORD',
    title: 'LIVE BUG CHAT SUPPORT',
    text: 'If you encountered a bug or have problems running the game, please join our Discord server and connect with our support team on the #bugs-help channel.',
  },
  {
    icon: crown,
    btnText: 'SUBMIT AN ISSUE',
    title: 'SUBMIT AN ISSUE',
    text: 'If you have encountered any type of bug or issue with both Patreon or Steam version as well as problems with running our Game Launcher, please submit a ticket by clicking on the button below. Thank You!',
  },
];

export default function Support() {
  const [option, setOption] = useState(data);

  return (
    <div className=" 5xl:max-w-[2133.33px] 5xl:h-full ">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-176402481-3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-176402481-3');
      `}
      </Script>

      <MainNav />
      <div className="h-auto w-screen bg-black-secondary flex flex-col justify-center align-middle items-center">
        <SupportSVG className="mt-[234px]" />
        <h3 className="text-white uppercase font-bebas text-titleBigScreen pt-13.75">
          support
        </h3>
        <span className="max-w-[767px] text-center  text-white font-steamParagraph pt-4">
          If you love the game, consider supporting me for continued
          development, faster updates, and exclusive content only for
          supporters!
        </span>
      </div>
  

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
