import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import title from '../public/assets/title.png';
import frame from '../public/assets/frame2.png';
import aubreyRound from '../public/assets/aubrey-round.webp';
import noraRound from '../public/assets/nora-price.png';
import chloe from '../public/assets/chloe-round.webp';
import lauren from '../public/assets/Lauren-price.webp';
import emily from '../public/assets/Emily-price.webp';
import PricingContent from './PricingContent';

const data = [
  {
    img: emily,
    price: 5,
    name: 'sophomore',
    text: [
      'Access to Patron only posts and behind the scenes',
      'Shape the game by voting in polls',
      'All previous benefits',
    ],
    link: 'https://www.patreon.com/join/collegekings/signup?ru=%2Fjoin%2Fcollegekings%2Fcheckout%3Frid%3D5784655%26',
  },
  {
    img: chloe,
    price: 10,
    name: 'junior',
    text: [
      'Access To Latest Patreon Releases',
      'Bonus content pack',
      'Monthly College Kings character render wallpaper',
      '2 Special Renders every month voted on by you',
      'All previous benefits',
    ],
    link: 'https://www.patreon.com/join/collegekings/signup?ru=%2Fjoin%2Fcollegekings%2Fcheckout%3Frid%3D5784656%26',
  },
  {
    img: noraRound,
    price: 20,
    name: 'senior',
    text: [
      'Instant Access To Latest Patreon Releases',
      'Get your name in the credits',
      'All previous benefits',
    ],
    link: 'https://www.patreon.com/join/collegekings/signup?ru=%2Fjoin%2Fcollegekings%2Fcheckout%3Frid%3D5784719%26',
  },
];

const addImgs = [
  {
    img: lauren,
    price: 50,
    name: 'president',
    text: [
      'Request your own personal render every month',
      'All previous benefits',
    ],
    link: 'https://www.patreon.com/join/collegekings/signup?ru=%2Fjoin%2Fcollegekings%2Fcheckout%3Frid%3D5784720%26',
  },
  {
    img: aubreyRound,
    price: 100,
    name: 'king',
    text: [
      'Create a side character in the game after 3 months',
      'Bonus content pack',
      'All previous benefits',
    ],
    link: 'https://www.patreon.com/join/collegekings/signup?ru=%2Fjoin%2Fcollegekings%2Fcheckout%3Frid%3D5784721%26',
  },
];

export default function Pricing({ width, height, showModal }) {
  const [imgData, setImgData] = useState(data);

  useEffect(() => {
    if (showModal) {
      setImgData([...imgData, ...addImgs]);
      return;
    }
    setImgData(data);
  }, [imgData, showModal]);

  return (
    <>
      {imgData &&
        imgData.map((img, index) => (
          <div
            key={index}
            className="w-83.192 z-10 m:w-71.75 h-233.75 flex align-middle text-center flex-col relative mb-10 lg:mx-3 x:mx-14 xl:pb-20 2xl:w-83.192 2xl:h-233.75"
          >
            {' '}
            <div className="absolute w-full min-h-full">
              <Image
                layout="fill"
                src={frame}
                alt="frame"
                className=" object-fill "
              />
            </div>
            <div className="relative -mt-5  z-10">
              <span className="absolute text-white z-10 inset-2 uppercase font-syne ">
                {img.name}
              </span>
              <Image src={title} alt='title' />
            </div>
            <div>
              <Image src={img.img} alt='image' />
            </div>
            <PricingContent
              width={width}
              height={height}
              price={img.price}
              text={img.text}
              link={img.link}
            />
          </div>
        ))}
    </>
  );
}
