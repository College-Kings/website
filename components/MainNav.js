import React from 'react';

import Navbar from '../components/Navbar';
import NavbarMobile from '../components/NavbarMobile';

import styles from './index.module.css';
// inset-x-1/5
const MainNav = () => {
  return (
    <div
      className={`${styles.centerFix}  5xl:max-w-[2133.33px] w-full fixed  h-20 z-50 items-center align-middle`}
    >
      <div className="relative z-50 m:hidden">
        <NavbarMobile />
      </div>
      <div className="relative z-50 hidden m:flex ">
        <Navbar />
      </div>
    </div>
  );
};

export default MainNav;
