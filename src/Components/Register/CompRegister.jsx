import * as React from "react";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
//? --------------------------------------------- STYLES
import "./styles.css";
import { Colors } from "../../Utils/Colors";

const steps = [
  {
    label: "Elige tu perfil",
    description: `Selecciona si serás un generador de carga o socio conductor`,
  },
  {
    label: "Datos personales",
    description: "Carga tus datos personales para continuar",
  },
  {
    label: "Datos del vehículo",
    description: `Ingresa los datos de vehículo para más seguridad`,
  },
];

export default function CompRegister() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box className="registerContainer">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "50%",
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
            width: "80%",
          }}
        >
          <img src="/src/assets/imgLanding/LogoCargaStore.svg" />
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
          <img
            style={{ width: "100%" }}
            src="/src/assets/imgRegister/RegDivider.svg"
          />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src="/src/assets/imgRegister/LoadImg.jpg" />
            <Button
              onClick={handleNext}
              name="user"
              sx={{ width: 324 }}
              variant="outlined"
            >
              Quiero generar una carga
            </Button>
            <img src="/src/assets/imgRegister/AssociateImg.jpg" />
            <Button
              onClick={handleNext}
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
