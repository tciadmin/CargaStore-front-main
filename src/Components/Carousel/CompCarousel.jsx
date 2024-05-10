import { Box, Stack, useMediaQuery, useTheme } from "@mui/material"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import LogoCarousel1 from "../../assets/Carousel/Logo.png"
import LogoCarousel2 from "../../assets/Carousel/Logo2.png"
import LogoCarousel3 from "../../assets/Carousel/Logo3.png"
import LogoCarousel4 from "../../assets/Carousel/Logo4.png"

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
    // cssEase: "linear",
  }
  return (
    <Box>
      <Slider
        {...settings}
        style={{
          margin: "50px auto",
          maxWidth: md ? "1302px" : "100%",
          position: "relative",
          width: "100%",
          height: md ? "460px" : "68px",
          Padding: "5px",
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
                margin: "10px auto",
                gap: md ? "35px" : "15px",
                width: md ? "100%" : "136px",
                height: "100%",
              }}
            />
          </Stack>
        ))}
      </Slider>
    </Box>
  )
}
