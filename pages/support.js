import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import clientPromise from '../lib/mongodb';
import Image from 'next/image';

//components
const MainNav = dynamic(() => import('../components/MainNav'));
const Footer = dynamic(() => import('../components/Footer'));
const Button = dynamic(() => import('../components/Button'));
//assets
const SupportSVG = dynamic(() => import('../public/assets/support.svg'));
import discord from '../public/assets/pink_discord.png';
import crown from '../public/assets/pink_crown.webp';
import subtract from '../public/assets/subtract.png'
import help from '../public/assets/help.png'


const data = [
  {
    icon: discord,
    btnText: 'JOIN COLLEGE KINGS DISCORD',
    title: 'LIVE BUG CHAT SUPPORT',
    text: 'If you encountered a bug or have problems running the game, please join our Discord server and connect with our support team on the #bugs-help channel.',
  },
  {
    icon: crown,
    btnText: 'COLLEGE KINGS LAUNCHER LIVE CHAT SUPPORT',
    title: 'SUBMIT AN ISSUE',
    text: 'If you have encountered a bug or have problems installing game via official College Kings Launcher, please join our Discord server and connect with our support team on the #launcher-support channel.'
  },
  {
    icon: subtract,
    btnText: 'SUBMIT AN ISSUE',
    title: 'SUBMIT AN ISSUE',
    text: 'If you have encountered any type of bug or issue with both Patreon or Steam version as well as problems with running our Game Launcher, please submit a ticket by clicking on the button below. Thank You!'
  },
];

export default function Support() {
  const [supportOption, setSupportOption] = useState(data);

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
      <div className="h-auto w-screen bg-black-secondary flex flex-col justify-center align-middle items-center px-10">
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

      <div className='w-full flex flex-wrap justify-between align-middle xl:px-[155px] pt-20 5xl:pt-49.5 px-10'>
        {supportOption && supportOption.map((option, index) => (<div key={index} className='flex flex-col justify-center align-middle items-center text-center max-w-[510px] pb-20'>
          <Image src={option.icon} alt="icon" width={83} height={83} className='mb-[55px]' />
          <h2 className='text-white font-bebas text-support'>{option.title}</h2>
          <p className='text-white pb-12.75 font-montserrat text-supportParag max-w-[500px]'>{option.text}</p>
          <div className='xl:hidden'>

            <Button text={option.btnText}
              icon={false}
              width={278.96}
              height={56.35}
            />

          </div>
          <div className='hidden xl:flex'>
            <Button text={option.btnText}
              icon={false}
              width={409.96}
              height={82.35}
            />
          </div>

        </div>))
        }
      </div>

      <div className='relative'>
        <Image src={help} layout='fill' alt='help' className='' />
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
