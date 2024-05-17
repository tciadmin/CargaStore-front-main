import CompNavLanding from "../Components/NavLanding/CompNavLanding"
import { Stack, Typography } from "@mui/material"
import { Outlet } from "react-router-dom"
import { Colors } from "../Utils/Colors"
import { useState } from "react"

const LayoutConfi = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    console.log(isOpen)
    setIsOpen(!isOpen)
  }

  return (
    <>
      <CompNavLanding />

      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        {/* Para la barra lateral */}
        <Stack sx={{ width: "472px", border: "1px solid red", height: "95vh" }}>
          <Typography
            onClick={toggleSidebar}
            sx={{ color: Colors.primary.main }}
          >
            Datos personales
          </Typography>
          <Typography sx={{ color: Colors.primary.main }}>
            Datos personales
          </Typography>
          <Typography
            sx={{
              color: Colors.primary.main,
              fontSize: "16px",
              lineHeight: "23px",
            }}
          >
            Datos personales
          </Typography>
        </Stack>

        {/* para las subRutas */}
        <Stack sx={{ width: "100%", border: "1px solid blue", height: "95vh" }}>
          {/* Outlet muestra las subRutas */}
          <Outlet />
        </Stack>
      </Stack>
    </>
  )
}

export default LayoutConfi
