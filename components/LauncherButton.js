import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

//assets
import styles from '../components/index.module.css';
import Play from '../public/assets/play.svg';
import LauncherModal from './LauncherModal';
const Windows = dynamic(() => import('../public/assets/windows_logo.svg'));
const Apple = dynamic(() => import('../public/assets/apple-logo.svg'));
import ck from '../public/assets/ck-crown-dl.webp';

const LauncherButton = ({ text, icon, width, height }) => {
  const [showPopup, setShowPopup] = useState(false);

  const modalRef = useRef(null);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleClick = () => {

    setShowPopup(true);
  };

  const handleDownload = (arg) => {
    const link = document.createElement('a');
    if (arg === 'windows') {
      link.href = `/zip/College_Kings_Setup_v0.1.3.exe`;
    } else if (arg === 'mac') {
      link.href = `/mac/College_Kings_0.1.3.zip`;
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowPopup(false);
  };

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        padding: '1px',
        zIndex: '1111',
      }}
    >
      <div
        onClick={handleClick}
        className="bg-btn bg-no-repeat bg-cover h-full cursor-pointer  w-full flex justify-center align-center uppercase items-center text-center"
      >
        <div className="w-full h-full bg-btnShade bg-no-repeat bg-cover flex justify-center align-middle items-center text-center relative">
          <div className=" flex justify-center items-center align-center text-center text-white font-semibold  uppercase px-6  font-bebas text-xl tracking-wider">
            {text}

            {icon ? (
              <span className="pl-2">
                <Play />
              </span>
            ) : null}
          </div>

          <div
            className={`${styles.box} rounded-lg rounded-tl-3xl rounded-br-3xl  w-full h-full`}
          ></div>
        </div>
      </div>
      <LauncherModal currRef={modalRef} show={showPopup} onClose={setShowPopup}>
        <div ref={modalRef} className="modal">
          <Image
            src={ck}
            width={150}
            height={150}
            alt="ck-downlaod"
            className="rounded-md z-0"
          />

          <span className="py-8 text-black text-xl font-bold">
            Please choose your OS:
          </span>
          <div className="w-full flex justify-between items-center align-centre pb-5">
            <a
              onClick={() => handleDownload('windows')}
              className="ml-5 w-2/5 rounded py-3 flex flex-col justify-center items-center border cursor-pointer border-sky-400"
            >
              <Windows />
              <span className="py-2">Windows</span>
            </a>
            <button
              onClick={() => handleDownload('mac')}
              className="mr-5 w-2/5 rounded py-3 flex flex-col justify-center items-center border cursor-pointer border-sky-400"
            >
              <Apple />
              <span className="py-2">Mac OS</span>
            </button>
          </div>

          <button
            onClick={handleClose}
            className="w-8/12 bg-sky-400 hover:bg-white text-white hover:text-sky-400 font-bold py-2 px-4 border border-sky-400 rounded"
          >
            Cancel
          </button>
        </div>
      </LauncherModal>
    </div>
  );
};

export default LauncherButton;
