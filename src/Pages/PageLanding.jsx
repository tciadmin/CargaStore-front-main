import { Stack, Typography } from "@mui/material"
import LogoLandingPage from "../assets/Img-Landing/LogoLanding.png"
import CompCarousel from "../Components/Carousel/CompCarousel"
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
  return (
    <>
      <Stack
        sx={{
          width: "1142px",
          height: "500px",
          marginTop: "58px",
          marginLeft: "230px",
          display: "flex",
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
              color: "#007E52",
              fontFamily: "Montserrat",
              fontWeight: "600",
              fontSize: "40px",
              lineHeight: "58.8px",
              textAlign: "center",
              marginLeft: "20px",
              marginTop: "-10px",
            }}
          >
            Otros Servicios
          </Typography>
          {Lista.map((Item, index) => (
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                marginLeft: "30px",

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

                  fontSize: "18px",
                  fontWeight: "400px",
                  marginY: "8px",
                }}
                key={index}
              >
                {Item}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <CompCarousel />
    </>
  )
}

export default PageLanding
