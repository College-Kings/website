import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
//components
const Button = dynamic(() => import('../Button'));

//assets
import goldCrown from '../../public/assets/gold-crown.png';

const index = () => {
  return (
    <div>
      <section className="m:hidden">
        <div className="w-full bg-black-main flex flex-col items-center justify-center py-10">
          <div
            className="
            pt-17.133
        relative
        w-105.35
        height-10
        max-w-105.35
        max-h-10
        bg-black-main
       mb-36"
          >
            <Image src={goldCrown} width={105.35} height={98.14} alt="crown" />
          </div>
          <div className="w-full flex flex-col justify-start pl-7.25 pb-6">
            <h3 className="text-subTitle text-pink-main">
              Like College Kings?
            </h3>
            <h3 className="text-subTitle text-pink-main">Support me on</h3>
            <h3 className="text-subTitle text-pink-main">Patreon!</h3>
          </div>
          <p className="text-paragraphTwo text-white px-7.25 mb-8 ">
            Game development is funded solely by Patreon, so patrons get
            exclusive content as a thank you!
          </p>
          <Button
            text={'college kings on patreon'}
            icon={true}
            width={324.96}
            height={65.35}
          />
        </div>
      </section>
    </div>
  );
};

export default index;
