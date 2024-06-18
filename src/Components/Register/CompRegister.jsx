import * as React from "react";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
//? --------------------------------------------- STYLES
import "./styles.css";
import { Colors } from "../../Utils/Colors";
import { useNavigate } from "react-router-dom";

export default function CompRegister() {
  const mobile = useMediaQuery("(max-width:720px)");
  const navigate = useNavigate();

  const nextDriver = () => {
    navigate("/register/driver");
  };
  const nextUser = () => {
    navigate("/register/user");
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      className="registerContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: mobile ? "100vh" : "100%",
        height: "100vh",
        justifyContent: "center",
      }}
    >
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
            width: "80%",
            justifyContent: "center",
          }}
        >
          {mobile ? (
            <img src="/imgRegister/LogoMobile.jpg" />
          ) : (
            <img src="/imgLanding/LogoCargaStore.svg" />
          )}

          <h1 style={{ fontWeight: 600, fontSize: "1.5rem" }}>
            Bienvenido a Carga Store
          </h1>
          <p
            style={{
              color: Colors.secondary.contrastText,
            }}
          >
            Elige tu perfil
          </p>
          {mobile ? (
            ""
          ) : (
            <img style={{ width: "100%" }} src="/imgRegister/RegDivider.svg" />
          )}

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src="/imgRegister/LoadImg.jpg" />
            <Button
              onClick={nextUser}
              name="user"
              sx={{ width: 324 }}
              variant="outlined"
            >
              Quiero generar una carga
            </Button>
            <img src="/imgRegister/AssociateImg.jpg" />
            <Button
              onClick={nextDriver}
              name="driver"
              sx={{ width: 324 }}
              variant="outlined"
            >
              Quiero ser socio conductor
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
