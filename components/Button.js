import React from 'react';
import styles from '../components/index.module.css';
import Play from '../public/assets/play.svg';
import SmoothScroll from './SmoothScroll';

export default function Button({ text, icon, width, height, link }) {
  return (
    <SmoothScroll href={link ? link : ''}>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          padding: '1px',
          zIndex: '1111',
        }}
      >
        <div className="bg-btn bg-no-repeat bg-cover h-full cursor-pointer  w-full flex justify-center align-center uppercase items-center text-center">
          <div className="w-full h-full bg-btnShade bg-no-repeat bg-cover flex justify-center align-middle items-center text-center relative">
            <a className=" flex justify-center items-center align-center text-center text-white font-semibold  uppercase px-6  font-bebas text-xl tracking-wider">
              {text}

              {icon ? (
                <span className="pl-2">
                  <Play />
                </span>
              ) : null}
            </a>

            <div
              className={`${styles.box} rounded-lg rounded-tl-3xl rounded-br-3xl  w-full h-full`}
            ></div>
          </div>
        </div>
      </div>
    </SmoothScroll>
  );
}
