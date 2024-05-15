import React from "react";
import { Stack } from "@mui/material";
import CompNavLanding from "../Components/NavLanding/CompNavLanding";
import CompFooter from "../Components/Footer/CompFooter";
import Hero from '../Components/sections/home/hero/Hero'
import QuienesSomosSection from '../Components/sections/home/QuienesSomosSection'
import NuestroServicioSection from '../Components/sections/home/NuestroServicioSection'
import ImagenYCapacitacion from '../Components/sections/home/ImagenYCapacitacion'


const PageRedirect = () => {
  return (
    <Stack>
      <CompNavLanding />
      <Hero></Hero>
      <QuienesSomosSection imagen={"/home/quienes.png"}></QuienesSomosSection>
      <NuestroServicioSection></NuestroServicioSection>
      <ImagenYCapacitacion></ImagenYCapacitacion>
      <CompFooter />
    </Stack>
  );
};

export default PageRedirect;
