import React from 'react';
import dynamic from 'next/dynamic';
import Button from './Button';
const Steam = dynamic(() => import('../public/assets/steam.svg'));

const Subtitle = () => {
  return (
    <div className="w-full flex flex-col justify-center bg-black-secondary pb-17.427 md:w-full md:px-30 lg:px-52.25  items-center md:items-stretch">
      <div className="flex flex-col md:flex-row">
        <div className="w-full pl-6.25 lg:pl-10.27 xl:pl-20.37 2xl:pl-54.25 mb-12.563 pt-10 flex justify-start align-bottom items-end ">
          <div className="mr-1.75">
            <Steam className="w-13 h-13" />
          </div>
          <p className="sub-txt-white">92%</p>
          <div>
            <p className="sub-txt">positive reviews</p>
            <p className="sub-txt">on steam</p>
          </div>
        </div>

        <div className="w-full pl-6.25 mb-9.313 pt-10 flex  justify-start md:justify-end  md:pr-6.25 lg:pr-10.27 xl:pr-20.37 2xl:pr-54.25 align-bottom items-end">
          <div className="mr-1.75">
            <Steam className="w-13 h-13 " />
          </div>
          <p className="sub-txt-white">900k</p>
          <div className="flex flex-col flex-nowrap">
            <p className="sub-txt">players</p>
            <p className="sub-txt">on steam</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10.27  mb-19.01 md:hidden">
        <Button
          text={'support us on patron'}
          icon={false}
          width={278.96}
          height={56.35}
          link={'#act'}
        />
      </div>
      <div className="hidden w-full md:flex md:justify-center md:mt-10.27  md:mb-19.01 z-10">
        <a>
          <Button
            text={'play now'}
            icon={true}
            width={278.96}
            height={56.35}
            link={'#act'}
          />
        </a>
      </div>
      <div className="flex flex-col justify-center align-middle items-center">
        <h2 className="text-subTitle text-white px-4 font-bebas m:hidden">
          Enjoy The Full
        </h2>
        <h2 className="text-subTitle text-white px-4 mb-6.5 font-bebas m:hidden">
          College Experience
        </h2>
        <h2 className="hidden text-subTitle text-white px-4  font-bebas m:flex m:text-titleBigScreen">
          Enjoy The Full College Experience
        </h2>
      </div>
      <div className="flex flex-col justify-center align-middle items-center">
        <h2 className="text-subTitle text-pink-main px-1.75 m:hidden font-bebas">
          Meet the college girls
        </h2>
        <h2 className="text-subTitle text-pink-main px-1.75 m:hidden font-bebas">
          waiting for you
        </h2>
        <h2 className="hidden text-subTitle m:text-subTitleBigScreen text-pink-main px-1.75 m:flex font-bebas">
          Meet the college girls waiting for you
        </h2>
      </div>
    </div>
  );
};

export default Subtitle;
