import * as React from "react";
import { useNavigate } from "react-router-dom";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
//? --------------------------------------------- STYLES
import { Colors } from "../../Utils/Colors";

export default function CompVehicleInfo() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onClick = () => {
    navigate("/login/forgot-password");
  };

  return (
    <Box className="registerContainer">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            border: "1px solid rgb(102, 113, 133, 0.3)",
            borderRadius: "8px",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "1.5rem" }}> Información del vehículo </h1>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* //? --------------------------------------------- BRAND */}
            <span style={{ display: "flex", width: "100%" }}>
              Marca<p style={{ color: Colors.terciary.main }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                placeholder="Honda"
                style={{
                  borderRadius: "8px",
                  height: "40px",
                  width: 400,
                }}
              />
            </FormControl>
            {/* //? --------------------------------------------- MODEL */}
            <span style={{ display: "flex", width: "100%" }}>
              Modelo<p style={{ color: Colors.terciary.main }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                placeholder="Dyna 300"
                style={{ borderRadius: "8px", height: "40px", width: 400 }}
              />
            </FormControl>
            {/* //? --------------------------------------------- YEAR */}
            <span style={{ display: "flex", width: "100%" }}>
              Año del camión<p style={{ color: Colors.terciary.main }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                placeholder="2020"
                style={{ borderRadius: "8px", height: "40px", width: 400 }}
              />
            </FormControl>
            {/* //? --------------------------------------------- LOAD CAPACITY */}
            <span style={{ display: "flex", width: "100%" }}>
              Capacidad de carga<p style={{ color: Colors.terciary.main }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                placeholder="2 toneladas"
                style={{ borderRadius: "8px", height: "40px", width: 400 }}
              />
            </FormControl>
            {/* //? --------------------------------------------- LOAD TYPE*/}
            <span style={{ display: "flex", width: "100%" }}>
              Tipo de unidad de carga
              <p style={{ color: Colors.terciary.main }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                placeholder="Refrigeradas"
                style={{ borderRadius: "8px", height: "40px", width: 400 }}
              />
            </FormControl>

            <Button
              variant="contained"
              sx={{
                m: 1,
                height: "40px",
                width: 400,
              }}
              style={{
                color: Colors.primary.contrastText,
                backgroundColor: Colors.primary.main,
                borderRadius: "8px",
              }}
            >
              Registrarse
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
