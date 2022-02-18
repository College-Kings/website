import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

//assets
import styles from '../components/index.module.css';
import Play from '../public/assets/play.svg';
import Modal from './Modal';
const Windows = dynamic(() => import('../public/assets/windows_logo.svg'));
const Apple = dynamic(() => import('../public/assets/apple-logo.svg'));
import ck from '../public/assets/ck-crown-dl.webp';

const LauncherButton = ({ text, icon, width, height }) => {
  const [showModal, setShowModal] = useState(false);

  const modalRef = useRef(null);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleDownload = (arg) => {
    const link = document.createElement('a');
    if (arg === 'windows') {
      link.href = `/zip/College_Kings_Setup_v0.1.3.exe`;
    } else {
      link.href = `/zip/College-Kings-0.1.2.dmg`;
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        onClick={() => setShowModal(true)}
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
      <Modal currRef={modalRef} show={showModal} onClose={setShowModal}>
        <div ref={modalRef} className="modal">
          <Image
            src={ck}
            width={150}
            height={150}
            alt="ck-downlaod"
            className="rounded-md z-0"
          />

          <span className="py-8 text-white text-xl font-bold">
            Please choose your OS:
          </span>
          <div className="w-full flex justify-between items-center align-centre pb-5">
            <button
              onClick={() => handleDownload('windows')}
              className="ml-5 w-2/5 rounded py-3 flex justify-center tems-center border cursor-pointer border-sky-400 "
            >
              <Windows className="z-0" />
            </button>
            <button
              onClick={() => handleDownload('mac')}
              className="mr-5 w-2/5 rounded py-3 flex justify-center tems-center border cursor-pointer border-sky-400"
            >
              <Apple />
            </button>
          </div>

          <button
            onClick={handleClose}
            className="w-8/12 bg-sky-400 hover:bg-white text-white hover:text-sky-400 font-bold py-2 px-4 border border-sky-400 rounded"
          >
            No, thanks
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default LauncherButton;
