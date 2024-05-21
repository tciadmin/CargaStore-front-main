import React from "react";
import CompNavLanding from "../Components/NavLanding/CompNavLanding";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const LayoutConfi = () => {
  return (
    <>
      <CompNavLanding />
      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        {/* Para la barra lateral */}
        <Stack
          sx={{ width: "472px", border: "1px solid red", height: "95vh" }}
        ></Stack>
        {/* para las subRutas */}
        <Stack sx={{ width: "100%", border: "1px solid blue", height: "95vh" }}>
          {/* Outlet muestra las subRutas */}
          <Outlet />
        </Stack>
      </Stack>
    </>
  );
};

export default LayoutConfi;
