
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div
      className="w-screen h-screen overflow-x-hidden bg-black-secondary 5xl:flex 5xl:justify-center"
    >
      {children}
    </div>
  );
};

export default Layout;