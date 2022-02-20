import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

//components
const Button = dynamic(() => import('./Button'));

const SupportOptions = ({ option }) => {
  return (
    <div className="my-10 w-full  h-full flex bg-white">
      {data.map((el, index) => {
        <div className="w-[300px] h-[400px] flex flex-col bg-white">
          <Button text={option.btnText} width={260} height={53} icon={false} />
        </div>;
      })}
    </div>
  );
};

export default SupportOptions;
