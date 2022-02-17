import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './Modal';
import twitter from '../public/assets/twitter.png';
import instagram from '../public/assets/instagram.png';
import coledgeKings from '../public/assets/college-kings.webp';
import SmoothScroll from './SmoothScroll';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-around align-middle sm:align-top items-center sm:items-start w-full bg-black-main px-14.14 lg:px-30 pt-11.715 pb-20.37">
      <div className="w-[220px] flex flex-col align-top h-auto my-4">
        <Image src={coledgeKings} alt="kings" />
        <p className="text-white text-footer my-3 ">© College Kings 2021.</p>
        <p className="text-white text-footer"> All rights reserved.</p>
      </div>
      <div className="w-[220px] flex flex-col h-auto my-4">
        <span className="text-white text-xl font-bold pb-2">Explore</span>
        <a
          target="_blank"
          href="https://www.patreon.com/collegekings"
          rel="noopener noreferrer"
        >
          <span className="text-gray-500 hover:text-white uppercase cursor-pointer">
            patreon
          </span>
        </a>
        <span>
          <SmoothScroll href="#hero">
            <span className="text-gray-500 hover:text-white uppercase cursor-pointer">
              home
            </span>
          </SmoothScroll>
        </span>
        <span>
          <SmoothScroll href="#act">
            <span className="text-gray-500 hover:text-white uppercase cursor-pointer">
              download
            </span>
          </SmoothScroll>
        </span>
        <span>
          <a
            target="_blank"
            href="https://discord.gg/collegekings"
            rel="noopener noreferrer"
            className="cursor-pointer "
          >
            <span className="text-gray-500 hover:text-white uppercase cursor-pointer">
              discord
            </span>
          </a>
        </span>
        <span>
          <span
            className="text-gray-500 hover:text-white uppercase cursor-pointer"
            onClick={() => setShowSupport(true)}
          >
            support
          </span>
          <Modal show={showSupport} onClose={() => setShowSupport(false)}>
            <iframe
              src="https://forms.clickup.com/f/4cqgb-379/UHNW2DK7DA66I4AG9X"
              className="w-full h-full"
            ></iframe>
          </Modal>
        </span>

        <span
          className="text-gray-500 uppercase hover:text-white cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          join the team
        </span>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <iframe
            src="https://forms.clickup.com/f/4cqgb-1901/ZV27XYULHG2DT3U1AP"
            className="w-full h-full"
          ></iframe>
        </Modal>
      </div>
      <div className="w-[220px] flex flex-col h-auto my-4">
        <span className="text-white text-xl font-bold pb-2">Company Info</span>
        <span className="text-gray-500 hover:text-white cursor-pointer">
          CRIMSONSKY LTD
        </span>
        <span className="text-gray-500 hover:text-white cursor-pointer">
          info@crimsonsky.games
        </span>
        <span className="text-gray-500 hover:text-white cursor-pointer">
          Company number: 13061268
        </span>
        <span className="text-gray-500 hover:text-white cursor-pointer">
          71-75 Shelton Street
        </span>
        <span className="text-gray-500 hover:text-white cursor-pointer">
          Covent Garden, London
        </span>
        <span className="text-gray-500 hover:text-white cursor-pointer">
          United Kingdom, WC2H 9JQ
        </span>
      </div>
      <div className="w-[220px] flex flex-col h-auto my-4">
        <span className="text-white text-xl font-bold pb-2">Legal</span>
        <span className="text-gray-500 hover:text-white cursor-pointer">
          <Link href="/terms" className="cursor-pointer ">
            Terms and Conditions
          </Link>
        </span>
        <span className="text-gray-500 hover:text-white cursor-pointer">
          <Link href="/privacy" className="cursor-pointer ">
            Privacy Policy
          </Link>
        </span>
      </div>
      <div className="w-[220px] flex flex-col h-auto my-4">
        <span className="text-white text-xl font-bold pb-2">Follow</span>
        <div className="w-1/2 h-auto flex justify-start items-start">
          <div className="mr-5 cursor-pointer">
            <a
              target="_blank"
              href="https://www.instagram.com/collegekingsgame/"
              rel="noopener noreferrer"
            >
              <Image src={instagram} alt="instagram" />
            </a>
          </div>
          <div className="cursor-pointer">
            <a
              target="_blank"
              href="https://twitter.com/collegekings"
              rel="noopener noreferrer"
            >
              <Image src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
