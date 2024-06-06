import * as React from "react";
import { useNavigate } from "react-router-dom";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
//? --------------------------------------------- STYLES
import { Colors } from "../../Utils/Colors";

export default function CompCompanyInfo() {
  const mobile = useMediaQuery("(max-width:720px)");
  const navigate = useNavigate();

  const onClickRegister = () => {
    navigate("/login");
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
            border: mobile ? "none" : "1px solid rgb(102, 113, 133, 0.3)",
            borderRadius: "8px",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "1.5rem" }}> Información de la empresa </h1>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* //? --------------------------------------------- COMPANY NAME */}
            <span style={{ display: "flex", width: "100%" }}>
              Nombre de la empresa
              <p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                placeholder="El mundo del papel"
                style={{
                  borderRadius: "8px",
                  height: "40px",
                  width: 400,
                }}
              />
            </FormControl>
            {/* //? --------------------------------------------- ADDRESS */}
            <span style={{ display: "flex", width: "100%" }}>
              Dirección<p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                placeholder="Calle 1"
                style={{ borderRadius: "8px", height: "40px", width: 400 }}
              />
            </FormControl>
            {/* //? --------------------------------------------- CITY */}
            <span style={{ display: "flex", width: "100%" }}>
              Ciudad<p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                placeholder="Bogotá"
                style={{ borderRadius: "8px", height: "40px", width: 400 }}
              />
            </FormControl>
            {/* //? --------------------------------------------- CONTACT PHONE */}
            <span style={{ display: "flex", width: "100%" }}>
              Teléfono de contacto
              <p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                placeholder="123456"
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
              onClick={onClickRegister}
            >
              Registrarse
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
