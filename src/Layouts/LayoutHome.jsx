import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutHome = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default LayoutHome;
