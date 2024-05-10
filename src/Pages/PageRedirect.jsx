import React from "react";
import CompNavLanding from "../Components/NavLanding/CompNavLanding";
import CompFooter from "../Components/Footer/CompFooter";
import Hero from '../Components/sections/home/hero/Hero'
import QuienesSomosSection from '../Components/sections/home/QuienesSomosSection'
import NuestroServicioSection from '../Components/sections/home/NuestroServicioSection'
import ImagenYCapacitacion from '../Components/sections/home/ImagenYCapacitacion'


const PageRedirect = () => {
  return (
    <div>
      <CompNavLanding />
      <Hero></Hero>
      <QuienesSomosSection imagen={"/home/quienes.png"}></QuienesSomosSection>
      <NuestroServicioSection></NuestroServicioSection>
      <ImagenYCapacitacion></ImagenYCapacitacion>
      <CompFooter />
    </div>
  );
};

export default PageRedirect;
