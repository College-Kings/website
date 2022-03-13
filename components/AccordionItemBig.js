import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import Image from 'next/image';

const AccordionItemBig = ({
  name,
  text,
  setActiveGirl,
  activeGirl,
  index,
  setActiveId,
  imageId,
  setEffectImg,
  small,
  title
}) => {
  const [effect, setEffect] = useState(false);
  const handeActiveGirl = (indexGirl, id) => {
    setActiveGirl(indexGirl);
    setActiveId(imageId);
    setEffect(true);
    setEffectImg(true);
  };

  useEffect(() => {
    setActiveGirl(0);
  }, [name, setActiveGirl]);

  return (
    <div className="h-2/3 justify-center items-center align-bottom">
      <div
        className={`${index === activeGirl ? styles.expanded : styles.accordion
          }  border-solid border-black rounded-lg rounded-tl-3xl rounded-br-3xl m:my-3 bg-black-main bg-opacity-25`}
        onClick={() => {
          handeActiveGirl(index, imageId);
        }}
        onAnimationEnd={() => setEffect(false)}
      >
        {index === activeGirl ? (
          <div
            className={`${effect && 'animate-fadeIn'
              } w-full h-full border-solid border-black rounded-lg rounded-tl-3xl rounded-br-3xl flex `}
          >
            <div className=" w-1/2 h-full rounded-br-3xl m:flex flex-col justify-start m:pl-1 pl-11.715 xl:pl-8">
              <span className="text-white xl:text-frameTitle 5xl:pt-10.27 5xl:pb-6.655 m:pt-2 m:pb-2 m:text-xl ">
                {name}
              </span>

              <span className="text-orange-main xl:text-cardSubtitle font-bold 5xl:pb-5 m:pb-1 m:text-xl">
                {title}
              </span>
              <div className="max-w-[205px]">
                <span className="font-montserrat m:text-sm xl:text text-white">
                  {text}
                </span>
              </div>
            </div>
            <div className="w-1/2 h-full relative rounded-br-3xl rounded-tl-3xl overflow-y-hidden">
              <Image
                layout="fill"
                loading='lazy'
                quality={100}
                placeholder='blur'
                // width={315}
                // height={315}
                alt="small"
                src={small}
                className="rounded-br-3xl rounded-tr-md"
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-full align-middle">
            <span className="-rotate-90 text-accColapsedTitle text-orange-main font-bebas">
              {name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export const AccMemoized = React.memo(AccordionItemBig);
