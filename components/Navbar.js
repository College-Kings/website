import React, { useState } from 'react';
import Image from 'next/image';

//assets
import logo from '../public/assets/big-logo.webp';
import styles from './index.module.css';
//components
import Modal from './Modal';
import SmoothScroll from './SmoothScroll';
import { backgroundColor } from 'tailwindcss/defaultTheme';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  return (
    <div className="w-full h-20 lg:h-25 ">
      <div className=" w-full absolute inset-x-0 top-0">
        <div className={`${styles.navShape} bg-black-secondary opacity-60`}>
          <Image
            src={'/assets/nav.webp'}
            alt="nav"
            priority={true}
            layout="fill"
            // className="object-contain  w-[500px]  h-20 "
          />
        </div>
      </div>

      <div className={`w-20 ml-13 absolute lg:hidden`}>
        <Image src={logo} alt="logo" width={100} height={150} />
      </div>

      <div className="hidden lg:flex absolute w-46.25 lg:ml-20 xl:ml-40 ">
        <Image
          src={logo}
          alt="logo"
          width={120}
          height={170}
          className="z-100"
          priority={true}
        />
      </div>
      <div className="absolute h-15 lg:h-20 left-36 lg:left-56 xl:ml-100 xl:left-80">
        <div className="h-full flex justify-start align-middle z-50 overflow-hidden">
          <div className="group">
            <div className="h-full w-25 mr-1 flex justify-center align-middle items-center border-b-4 border-orange-main  group-hover:border-white m:w-32.5 xl:w-32.5 x:w-46.25 5xl:w-70 group-hover:bg-gradient-to-b from-orange-main to-orange-second">
              <a
                target="_blank"
                href="https://www.patreon.com/collegekings"
                rel="noopener noreferrer"
                className="2xl:text-nav uppercase text-orange-main group-hover:text-white cursor-pointer"
              >
                patreon
              </a>
            </div>
          </div>
          <div className="group">
            <div className="h-full mr-1  w-25 flex justify-center align-middle items-center border-b-4 border-orange-main group-hover:border-white xl:w-32.5 x:w-32.5 5xl:w-46.25  cursor-pointer group-hover:bg-gradient-to-b from-orange-main to-orange-second">
              <SmoothScroll href="#hero">
                <span className="2xl:text-nav uppercase text-orange-main group-hover:text-white">
                  home
                </span>
              </SmoothScroll>
            </div>
          </div>
          <div className="group">
            <div className="h-full mr-1  w-25 flex justify-center align-middle items-center border-b-4 border-orange-main group-hover:border-white m:w-32.5 xl:w-32.5 x:w-46.25 5xl:w-70 cursor-pointer group-hover:bg-gradient-to-b from-orange-main to-orange-second">
              <SmoothScroll href="#act">
                <span className="2xl:text-nav uppercase text-orange-main group-hover:text-white pr-2">
                  download
                </span>
              </SmoothScroll>
            </div>
          </div>
          <div className="group">
            <div className="h-full mr-1  w-25 flex justify-center align-middle items-center group-hover:bg-gradient-to-b from-orange-main group-hover:border-white to-orange-second border-b-4 border-orange-main xl:w-32.5 x:w-32.5 5xl:w-46.25 ">
              <a
                target="_blank"
                href="https://discord.gg/collegekings"
                rel="noopener noreferrer"
                className="2xl:text-nav uppercase text-orange-main group-hover:text-white cursor-pointer"
              >
                discord
              </a>
            </div>
          </div>
          <div className="group">
            <div className="h-full mr-1  w-25 flex justify-center align-middle items-center border-b-4 border-orange-main group-hover:border-white xl:w-32.5 x:w-32.5 5xl:w-46.25 cursor-pointer group-hover:bg-gradient-to-b from-orange-main to-orange-second">
              <a
                onClick={() => setShowSupport(true)}
                className="2xl:text-nav uppercase text-orange-main group-hover:text-white"
              >
                support
              </a>
              <Modal show={showSupport} onClose={() => setShowSupport(false)}>
                <iframe
                  src="https://forms.clickup.com/f/4cqgb-379/UHNW2DK7DA66I4AG9X"
                  className="w-full h-full"
                ></iframe>
              </Modal>
            </div>
          </div>
          <div className="group">
            <div className="h-full mr-1 flex justify-center align-middle items-center border-b-4 border-orange-main group-hover:border-white m:w-32 xl:w-32.5 x:w-46.25 5xl:w-46.25 cursor-pointer group-hover:bg-gradient-to-b from-orange-main to-orange-second">
              <a
                onClick={() => setShowModal(true)}
                className="2xl:text-nav uppercase text-orange-main group-hover:text-white"
              >
                join the team
              </a>
              <Modal show={showModal} onClose={setShowModal}>
                <iframe
                  src="https://forms.clickup.com/f/4cqgb-1901/ZV27XYULHG2DT3U1AP"
                  className="w-full h-full"
                ></iframe>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
