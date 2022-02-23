import React from 'react';
import Button from './Button';
import Image from 'next/image';

import first from '../public/assets/frame-1.webp';
import second from '../public/assets/frame-2.webp';
import third from '../public/assets/frame-3.webp';

const frames = [
  {
    width: 208.15,
    height: 39.81,
    img: first,
    alt: 'girl-first',
    title: 'discord',
    text: 'active community',
    buttonTitle: 'join our discord',
    link: 'https://discord.gg/collegekings',
  },
  {
    width: 208.15,
    height: 39.81,
    img: second,
    alt: 'girl-second',
    title: 'merch',
    text: 'awesome products',
    buttonTitle: 'visit our store',
    link: 'https://merch.collegekingsgame.com/',
  },
  {
    width: 208.15,
    height: 39.81,
    img: third,
    alt: 'girl-third',
    title: 'merch',
    title: 'patreon hub',
    text: 'exclusive hub',
    buttonTitle: 'coming soon',
    link: '#',
  },
];

export default function Frame() {
  return (
    <div className="flex flex-col  justify-center align-middle items-center  m:flex-row w-full   md:justify-around 2xl:pb-16.25 md:align-middle 5xl:w-full 2xl:justify-center 2xl:items-center 2xl:align-middle">
      {frames &&
        frames.map((frame, index) => (
          <div
            key={index}
            className="w-[331px] m:w-[273px] m:h-[357px] xl:w-[373px] xl:h-[448px]
h-[414px] 5xl:w-[508px] 5xl:h-[634px] frame-background m-2"
          >
            <div className="card-img-wrapper">
              <Image
                layout="fill"
                src={frame.img}
                className="object-fit rounded-lg rounded-tl-3xl rounded-br-3xl z-0"
                alt={frame.alt}
              />
              <span className="card-title">{frame.title}</span>
              <span className="card-txt">{frame.text}</span>
              <div className="card-btn-wrapper">
                <Button
                  width={frame.width}
                  height={frame.height}
                  text={frame.buttonTitle}
                  className="relative"
                  link={frame.link}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
