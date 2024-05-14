import React from "react";
import { Stack } from "@mui/material";
import CompNavLanding from "../Components/NavLanding/CompNavLanding";
import CompFooter from "../Components/Footer/CompFooter";

const PageRedirect = () => {
  return (
    <Stack>
      <CompNavLanding />
      <CompFooter />
    </Stack>
  );
};

export default PageRedirect;
