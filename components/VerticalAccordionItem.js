import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

const VerticalAccordionItem = ({
  name,
  text,
  setActiveGirl,
  activeGirl,
  index,
  setActiveId,
  imageId,
  setEffectImg,
  title
}) => {
  const [effect, setEffect] = useState(false);

  useEffect(() => {
    setActiveGirl(0);
  }, [setActiveGirl]);

  const handeActiveGirl = (indexGirl, id) => {
    setActiveGirl(indexGirl);
    setActiveId(imageId);
    setEffect(true);
    setEffectImg(true);
  };

  return (
    <div className="h-full flex m:justify-end m:items-end align-bottom ">
      <div
        className={`${
          index === activeGirl ? styles.mobileExpanded : styles.accordionMobile
        }   border-solid border-black rounded-lg rounded-tl-3xl rounded-br-3xl m:my-10 bg-black-main bg-opacity-25 `}
        onClick={() => {
          handeActiveGirl(index, imageId);
        }}
        onAnimationEnd={() => setEffect(false)}
      >
        {index === activeGirl ? (
          <div
            className={`animate-none m:${
              effect && 'animate-fadeIn'
            } w-full h-full border-solid border-black rounded-lg rounded-tl-3xl rounded-br-3xl flex `}
          >
            <div className=" flex flex-col ">
              <span className="text-white font-bold">{name}</span>
              <span className="text-orange-main font-bold">{title}</span>
              <span className="text-white text-sm">{text}</span>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex justify-around align-middle  items-center">
            <div className="w-2 h-2 bg-white rounded-full flex items-center justify-center align-middle"></div>
            <span className=" text-lg m:text-accColapsedTitle text-orange-main font-bebas">
              {name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export const MemoizedVertical = React.memo(VerticalAccordionItem);
