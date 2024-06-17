import { Box, Stack, useMediaQuery, useTheme, Typography } from "@mui/material"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import LogoCarousel1 from "../../assets/Carousel/Logo.png"
import LogoCarousel2 from "../../assets/Carousel/Logo2.png"
import LogoCarousel3 from "../../assets/Carousel/Logo3.png"
import LogoCarousel4 from "../../assets/Carousel/Logo4.png"
import "./Style.css"

const images = [LogoCarousel1, LogoCarousel2, LogoCarousel3, LogoCarousel4]

export default function CompCarousel() {
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.up("md"))
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  }

  return (
    <Box width={"100%"} height={ md ? "460px" : "100%"}>
      <Stack style={{ position: "relative", width: "100%", height: md ? "460px" : "100%", }}>
        <Slider
          {...settings}
          sx={{
            margin: "0px",
            maxWidth:  "100%",
            width: "100vw",
            xs: "430px",
            height: md ? "460px" : "550px",
            padding: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {images.map((img, index) => (
            <Stack key={index}>
              <img
                src={img}
                alt={img}
                style={{
                  margin: "0px",
                  
                  width: "100%" ,
                  height:  "100%",
                }}
              />
            </Stack>
          ))}
        </Slider>
        <Stack sx={{ position: "absolute", top: "20%", left: "40px" }}>
          <Typography
            sx={{
              color: "white",
              fontWeight: "700",
              fontSize: { md: "38px", xs: "15px" },
            }}
            variant="h6"
          >
            Envía tus productos con <br />
            nosotros
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: { md: "21px", xs: "10px" },
              fontWeight: "500",
            }}
            variant="body1"
          >
            Nuestros camiones garantizan que la <br />
            mercancía se traslade de forma segura y <br />
            oportuna hasta el lugar de destino
          </Typography>
        </Stack>
       
      </Stack>
      </Box>
  )
}
