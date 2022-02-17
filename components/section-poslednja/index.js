import React from 'react';
import Image from 'next/image';

//assets
import aubrey from '../../public/assets/aubrey-stand.png';

const Section7 = () => {
  return (
    <div className="w-full bg-black-secondary relative h-113.828  m:h-auto m:pl-0 m:pb-32 ">
      <div
        className="
              absolute
              m:hidden
              bg-gradient-to-r from-pink-main to-orange-second
              w-full
              border-y-0.25
              h-0.25
              mt-9.918
            "
      ></div>
      <div className="relative m:hidden">
        <Image src={aubrey} alt="aubrey" className="-mt-4 m:mt-10 scale-190" />
      </div>

      <div className="absolute top-0 right-0  sm:pr-20.37 m:pr-0 m:w-full m:flex m:justify-center m:align-middle m:items-center m:text-center">
        <h3 className="w-51.722 mr-7 md:mr-0 m:w-full h-auto text-orange-main text-aubreyTitle xl:text-steam pt-17.133 font-bebas">
          College Kings Frequently Asked Questions
        </h3>
      </div>
    </div>
  );
};

export default Section7;
