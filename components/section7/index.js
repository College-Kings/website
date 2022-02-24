import React from 'react';
import Image from 'next/image';

// assets

import kings from '../../public/assets/KINGS.png';
import penelope from '../../public/assets/penelope.png';

const Section7 = () => {
  return (
    <div>
      <section className="m:hidden w-full h-auto bg-purple-grad">
        <div
          className="w-full h-47.86 relative -mb-52   
        "
        >
          <Image layout="fill" src={kings} aly="kings" alt="kings" />
          <div className="z-40 w-full h-2/4 bg-black-main  bg-opacity-80 "></div>
        </div>
        <div className="w-full flex justify-end">
          <div className="relative w-49.803 h-64.688 ">
            <Image
              src={penelope}
              width={184}
              height={258.75}
              alt="penelope"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section7;
