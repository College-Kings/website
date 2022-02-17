import React from 'react';
import dynamic from 'next/dynamic'
//components
const Button = dynamic(() => import('../Button'));

const Section3 = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center pb-17.133 bg-black-secondary lg:hidden">
        <div className="w-69.74  mt-9.918">
          <Button
            text={'MEET THE GIRLS'}
            icon={true}
            width={278.96}
            height={56.35}
          />
        </div>
      </div>

      <div className="hidden w-full lg:flex justify-center items-center  pb-17.133 bg-black-secondary">
        <div className="w-69.74  mt-9.918">
          <Button
            text={'PLAY NOW'}
            icon={true}
            width={278.96}
            height={56.35}
            link={'#act'}
          />
        </div>
      </div>
      
    </>
  );
};

export default Section3;