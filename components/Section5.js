import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './index.module.css';
import Button from './Button';
import Pricing from './Pricing';
const BulletBlack = dynamic(() => import('../public/assets/bullet-black.svg'));
const BulletYellow = dynamic(() =>
  import('../public/assets/bullet-yellow.svg')
);



const Section5 = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex flex-col m:flex-row m:flex-wrap justify-center m:justify-around items-center align-middle bg-gradient-to-b  from-black-main via-blue-main to-black-main bg-opacity-75 xl:hidden z-10">
        <Pricing
          width={184}
          height={38.26}
          name={'freshman'}
          showModal={showModal}
        />
      </div>

      <div className="m:hidden flex justify-center items-center align-middle pb-6 bg-black-secondary">
        <BulletBlack className="mr-1" />
        <BulletYellow className="mr-1" />
        <BulletBlack className="mr-1" />
        <BulletBlack className="mr-1" />
      </div>
      <div className="w-full flex justify-center items-center pb-6 bg-black-secondary xl:hidden">
        <div className={styles.btn} onClick={() => setShowModal(!showModal)}>
          <Button
            text={'See All 5 Levels'}
            width={260}
            height={53}
            icon={true}
          />
        </div>
      </div>
      <div className="m:hidden flex justify-between align-middle items-center px-5 sm:px-20.37 pb-6 bg-black-secondary">
        <Button text={'to share'} width={159} height={33} />
        <Button text={'follow'} width={159} height={33} />
      </div>
    </>
  );
};

export default Section5;
