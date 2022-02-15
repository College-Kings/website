import React from 'react';

const Layout = ({ children }) => {
  return <div className="w-screen h-screen overflow-x-hidden bg-black-secondary items-center">{children}</div>;
};

export default Layout;
