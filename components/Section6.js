import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
// const Pricing = dynamic(() => import('./Pricing'));
import Pricing from './Pricing';
import Button from './Button';
// const Button = dynamic(() => import('./Button'));
import kingsFrame from '../public/assets/kings-frame.png';
import kingsShade from '../public/assets/kings-shade.webp';

const ExclusiveAcc = dynamic(() => import('../public/assets/exclusiveAcc.svg'));
import styles from './index.module.css';

const Section6 = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="hidden xl:flex bg-gradient-to-b from-black-secondary via-blue-main to to-black-secondary py-20">
      <div
        className="hidden w-full min-h-325 xl:flex justify-center items-center
           "
      >
        <div className=" w-full mx-20 min-h-300 ">
          <div className="relative min-h-fit min-w-fit">
            <div
              className={`${
                showModal ? styles.frameExpanded : styles.frameColapsed
              } absolute h-325 inset-0`}
            >
              <Image
                src={kingsFrame}
                layout="fill"
                alt="frame"
                className="object-fill"
              />
            </div>
            <div
              className={`${
                showModal ? styles.frameExpanded : styles.frameColapsed
              } absolute h-325  inset-0`}
            >
              <Image
                layout="fill"
                src={kingsShade}
                alt="shade"
                className="object-fill "
              />
            </div>
          </div>

          <div className="flex w-full flex-col mt-20 align-middle justify-center items-center text-center">
            <div className="z-20  -mt-24 mb-10 ">
              <ExclusiveAcc width={300} height={40} />
            </div>
            <div className="w-7/12 pb-2 z-40">
              <h2 className="text-white z-40 font-montserrat">
                Become a Patron now to get early access to the latest game
                updates, exclsusive wallpapers, developement insights and voting
                rights in game-shaping polls.
              </h2>
            </div>
            <div className="flex w-full mx-10 pt-10 align-middle justify-center items-center flex-wrap z-10">
              <Pricing
                width={229}
                height={46.26}
                name={'freshman'}
                className="mr-5"
                showModal={showModal}
              />
            </div>
            <div className="w-full flex justify-center items-center pb-6 z-10">
              <div
                className={styles.btn}
                onClick={() => setShowModal(!showModal)}
              >
                <Button
                  text={'See All 5 Levels'}
                  width={260}
                  height={53}
                  icon={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
