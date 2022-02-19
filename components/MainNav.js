import React from 'react';

import Navbar from '../components/Navbar';
import NavbarMobile from '../components/NavbarMobile';

const MainNav = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="relative z-50 m:hidden">
        <NavbarMobile />
      </div>
      <div className="relative z-50 hidden m:flex">
        <Navbar />
      </div>
    </div>
  );
};

export default MainNav;
