import { Button, Box, Stack, Typography } from "@mui/material"
import { Outlet, useNavigate } from "react-router-dom"
//import { Colors } from "../Utils/Colors"
import { useState } from "react"
import CompNav from "../Components/Nav/CompNav"

const LayoutConfi = () => {
  const navigate = useNavigate()
  const [activo, setActivo] = useState("Datos personales")

  const list = [
    "Datos personales",
    "Configuración de cuenta",
    "Configuración de pagos",
    "Historial de pagos",
  ]

  const Redirect = (Element) => {
    setActivo(Element)

    navigate(Element)
  }

  return (
    <Box sx={{ backgroundColor: "#F6F6F6" }}>
      <CompNav />

      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        {/* Para la barra lateral */}
        <Stack
          sx={{
            width: "472px",
            border: "1px solid #D0D5DD",

            height: "100vh",
          }}
        >
          {list.map((Element, index) => (
            <Button
              sx={{ margin: "6px" }}
              onClick={() => Redirect(Element)}
              color={activo === Element ? "primary" : "textDisable"}
              variant="text"
              key={index}
            >
              <Typography
                fontWeight={activo === Element ? 700 : 500}
                sx={{ fontSize: "16px" }}
              >
                {Element}
              </Typography>
            </Button>
          ))}
        </Stack>

        {/* para las subRutas */}
        <Stack sx={{ width: "100%", border: "1px solid #D0D5DD" }}>
          {/* Outlet muestra las subRutas */}
          <Outlet />
        </Stack>
      </Stack>
    </Box>
  )
}

export default LayoutConfi
