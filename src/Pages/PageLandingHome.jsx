import { Stack, Typography } from "@mui/material"
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

const PageLandingHome = () => {
  return (
    <>
    <Stack
        sx={{
          width: { md: "1142px", xs: "100px" },
          height: { md: "500px", xs: "600px" },
          marginTop: "58px",
          marginLeft: { md: "230px", xs: "50px" },
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
              //marginLeft: "20px",
              marginTop: "-10px",
              flexDirection: "column",
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
                marginLeft: { md: "30px", xs: "-300px" },
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
      <CompCarousel />
    </>
  )
}

export default PageLandingHome
