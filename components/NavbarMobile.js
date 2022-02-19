import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from './Modal';
import SmoothScroll from './SmoothScroll';

export default function NavbarMobile() {
  const [active, setActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex z-50 items-center flex-wrap px-3 bg-gradient-to-b from-black-main to-purple-main">
      <div className="relative h-18.325 left-0 top-0 flex-1 z-50">
        <Image src="/assets/logo.png" alt="logo" width={100} height={150} />
      </div>
      <div className=" w-1/2 h-18.325 flex  justify-end items-center align-middle mr-4">
        <button onClick={handleClick}>
          <svg
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.511719"
              y="-0.000488281"
              width="20.4873"
              height="2.28214"
              rx="1.14107"
              fill="#E86F26"
            />
            <rect
              x="0.511719"
              y="7.06201"
              width="20.4873"
              height="2.28214"
              rx="1.14107"
              fill="#E86F26"
            />
            <rect
              x="0.511719"
              y="14.1245"
              width="20.4873"
              height="2.28214"
              rx="1.14107"
              fill="#E86F26"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="  w-full  items-start flex flex-col lg:h-auto">
          <a
            target="_blank"
            href="https://www.patreon.com/collegekings"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-main hover:text-white text-center uppercase "
            rel="noreferrer"
          >
            patreon
          </a>

          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-main hover:text-white text-center uppercase ">
              Home
            </a>
          </Link>
          <div className="w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-main hover:text-white text-center uppercase">
            <SmoothScroll href="#act">
              <a>download</a>
            </SmoothScroll>
          </div>

          <a
            target="_blank"
            href="https://discord.gg/collegekings"
            rel="noopener noreferrer"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-main hover:text-white text-center uppercase"
          >
            discord
          </a>

          <a
            onClick={() => setShowSupport(true)}
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-main hover:text-white text-center uppercase"
          >
            support
          </a>
          <Modal show={showSupport} onClose={() => setShowSupport(false)}>
            <iframe
              src="https://forms.clickup.com/f/4cqgb-379/UHNW2DK7DA66I4AG9X"
              className="w-full h-full"
            ></iframe>
          </Modal>

          <a
            onClick={() => setShowModal(true)}
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-main hover:text-white text-center uppercase"
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
    </nav>
  );
}
