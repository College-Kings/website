import React from 'react';
import Play from '../public/assets/play.svg';
import styles from './index.module.css';
const AccordionButton = ({ handleChange, activeGirlIndexNames }) => {
  return (
    <div className="flex justify-center items-center align-middle cursor-pointer">
      <div
        className={`${styles.wrapper} rotate-90  w-16 h-16 m:w-20 m:h-20 border-solid border-black rounded-lg rounded-tl-3xl rounded-br-3xl bg-black-main bg-opacity-25 `}
        onClick={() => handleChange(activeGirlIndexNames + 1)}
      >
        <Play className="m:-rotate-90" />
      </div>
    </div>
  );
};

export default AccordionButton;
