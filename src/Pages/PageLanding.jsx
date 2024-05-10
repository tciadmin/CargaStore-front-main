import React from 'react'
import Hero from '../components/sections/home/hero/Hero'
import QuienesSomosSection from '../components/sections/home/QuienesSomosSection'
import NuestroServicioSection from '../components/sections/home/NuestroServicioSection'
import ImagenYCapacitacion from '../components/sections/home/ImagenYCapacitacion'
import CompNavLanding from '../Components/NavLanding/CompNavLanding'
import CompFooter from '../Components/Footer/CompFooter'

const PageLanding = () => {
  return (
    <>
      <CompNavLanding />

      <Hero></Hero>
      <QuienesSomosSection imagen={"/home/quienes.png"}></QuienesSomosSection>
      <NuestroServicioSection></NuestroServicioSection>
      <ImagenYCapacitacion></ImagenYCapacitacion>
      <CompFooter />

    </>
  )
}

export default PageLanding


