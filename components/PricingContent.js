import React, { useState } from 'react';
import Button from './Button';
import Discord from '../public/assets/dicord.svg';
import Separator from '../public/assets/separator.svg';
import Bullet from '../public/assets/bullet.svg';

const PricingContent = ({ width, height, price, text, link }) => {
  return (
    <div className="flex flex-col justify-center align-middle items-center pr-1">
      <span className="uppercase text-pink-main text-pricing z-30">
        ${price}
      </span>
      <span className="uppercase text-white bold z-30 ">a month</span>
      <div className="w-57.5 pt-1 pb-5 z-30">
        <p className="text-gray-secondary underline z-30">
          you save 16% if you pay annually Includes Discord benefits
        </p>
      </div>
      <div className="mx-19.01 mb-6 z-30">
        <Button width={width} height={height} text={'Join'} link={link} />
      </div>
      <div className="my-1.75 z-30">
        <Separator />
      </div>

      <div className="w-full h-auto px-2 flex align-middle justify-start items-center">
        <div className="mr-1.25 z-30">
          <Discord className="inline-block" />
        </div>

        <span className="text-white z-30 font-montserrat">
          Includes Discord benefits
        </span>
      </div>
      {text &&
        text.map((el, index) => (
          <div
            key={index}
            className="flex min-h-[32px] w-full flex-col justify-start align-middle items-start px-2"
          >
            <div className="w-full my-1.75 z-30 flex justify-center align-middle items-center">
              <Separator />
            </div>
            <div className="w-full h-full flex  align-middle justify-start items-center">
              <div className="mr-1.25 z-30">
                <Bullet className=" inline-block z-30" />
              </div>
              <span className="text-white z-30 text-left font-montserrat">
                {el}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PricingContent;
