import React from 'react';
import Play from '../public/assets/play.svg';
import styles from '../components/index.module.css';

const LauncherButton = ({ text, icon, width, height }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        padding: '1px',
        zIndex: '1111',
      }}
    >
      <a
        href="/zip/College_Kings_Setup_v0.1.3.exe"
        download
        target="_self"
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
      </a>
    </div>
  );
};

export default LauncherButton;
