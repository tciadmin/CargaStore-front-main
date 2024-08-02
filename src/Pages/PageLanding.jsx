import React from "react";
import Hero from "../Components/sections/home/hero/Hero";
import QuienesSomosSection from "../Components/sections/home/QuienesSomosSection";
import NuestroServicioSection from "../Components/sections/home/NuestroServicioSection";
import ImagenYCapacitacion from "../Components/sections/home/ImagenYCapacitacion";
import CompNavLanding from "../Components/NavLanding/CompNavLanding";
import CompCarousel from "../Components/Carousel/CompCarousel"
import CompFooter from "../Components/Footer/CompFooter";
import { Grid, Stack, Typography, useMediaQuery } from "@mui/material"
import LogoLandingPage from "../assets/Img-Landing/LogoLanding.png"
import Punto from "../assets/Icons/punto.svg"
const Lista = [
  "Trámites de Importación y Exportación, Regímenes Especiales.  ",
  "Asesoramiento en Comercio Exterior.",
  "Ubicación satelital de la mercadería.",
  "Transporte de carga en contenedores de 20, 40 y 45 pies.",
  "Transporte de maquinaria extrapesada y sobre dimensionada.",
  "Ofrecemos servicios de montacargas y contenedores.",
]
const PageLanding = () => {
  const mobile = useMediaQuery("(max-width: 750px)");
  return (
    <>
      <Hero></Hero>
      <QuienesSomosSection imagen={"/home/quienes.png"}></QuienesSomosSection>
      <NuestroServicioSection></NuestroServicioSection>
      {mobile &&
      <Stack direction="column" width={"100vw"} my={5} px="10px" justifyContent={"center"} alignItems={"center"}>
        <Typography fontSize="20px" mb={2} color="primary">Otros servicios</Typography>
        <Grid container spacing={1}>
        {Lista.map((Item, index) => (
          
          <Grid
          item
          xs={6}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent:"start",
              alignItems:  "center",
            }}
            key={index}
          >
            <img
              style={{ width: "15px", height: "15px" }}
              src={Punto}
            ></img>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                marginLeft: "10px",

                fontSize:  "12px" ,
                fontWeight: "400px",
                marginY:  "5px" ,
                mt: { xs: "6px" },
              }}
              key={index}
            >
              {Item}
            </Typography>
          </Grid>
        ))}





        </Grid>
        


      </Stack>
      }
      <ImagenYCapacitacion></ImagenYCapacitacion>
      {
        !mobile && 
          <Stack
          sx={{
            width:  "100%",
            
            marginTop: "58px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Stack>
            <img
              style={{ height: 310 }}
              src={LogoLandingPage}
              alt="Logo Landing Page"
            />
          </Stack>

          <Stack sx={{ width: "634px", height: "467px" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "35px",
                lineHeight: "58.8px",
                textAlign: "center",
                //marginLeft: "20px",
                marginTop: "-10px",
                flexDirection: "column",
              }}
              color={"primary"}
            >
              Otros Servicios
            </Typography>
            {Lista.map((Item, index) => (
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  marginLeft: "30px" ,
                  alignItems: "center",
                }}
                key={index}
              >
                <img
                  style={{ width: "15px", height: "15px" }}
                  src={Punto}
                ></img>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    marginLeft: "10px",

                    fontSize: { md: "18px", xs: "12px" },
                    fontWeight: "400px",
                    marginY: { md: "8px", xs: "5px" },
                    mt: { xs: "6px" },
                  }}
                  key={index}
                >
                  {Item}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      }
      
      <CompCarousel></CompCarousel>
      <CompFooter />
    </>
  );
};

export default PageLanding;
