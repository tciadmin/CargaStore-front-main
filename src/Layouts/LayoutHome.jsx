import React from "react";
import CompNavLanding from "../Components/NavLanding/CompNavLanding";
import { Outlet } from "react-router-dom";

const LayoutHome = () => {
  return (
    <>
          <Outlet />
          
    </>
  );
};

export default LayoutHome;