import React from 'react';

import Navbar from '../components/Navbar';
import NavbarMobile from '../components/NavbarMobile';

const MainNav = () => {
  return (
    <>
      <div className="relative z-50 m:hidden">
        <NavbarMobile />
      </div>
      <div className="sticky top-0 z-50 hidden m:flex items-start ">
        <Navbar />
      </div>
    </>
  );
};

export default MainNav;
