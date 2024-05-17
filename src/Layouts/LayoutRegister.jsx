import { Outlet } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
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
import "../Components/Register/styles.css";
import { Colors } from "../Utils/Colors";

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

const LayoutRegister = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box className="registerContainer">
      <Box className="imgContainer">
        {" "}
        <img src="/src/assets/imgRegister/registerSideImg.jpg" />{" "}
      </Box>
      <Box
        sx={{ maxWidth: 350 }}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          zIndex: "999",
          marginLeft: "-200px",
          backgroundColor: Colors.primary.contrastText,
          border: "1px solid rgb(102, 113, 133, 0.3)",
          justifyContent: "space-between",
          marginTop: "30px",
          marginBottom: "30px",
          borderRadius: "8px",
        }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index >= 0 ? (
                    <Typography style={{ fontWeight: 400 }}>
                      {step.description}
                    </Typography>
                  ) : (
                    ""
                  )
                }
              >
                <Typography
                  style={{ fontWeight: activeStep === index ? 600 : 500 }}
                >
                  {step.label}
                </Typography>
              </StepLabel>
              <StepContent>
                {/* <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box> */}
              </StepContent>
            </Step>
          ))}
        </Stepper>

        <Box>
          <span
            style={{
              fontWeight: 600,
              color: Colors.secondary.main,
            }}
          >
            ¿Necesitas ayuda?
          </span>
          <p
            style={{
              fontWeight: 400,
              color: Colors.secondary.contrastText,
            }}
          >
            Escríbenos para que podamos resolver el problema.
          </p>
          <Button
            style={{
              color: Colors.secondary.contrastText,
              borderColor: Colors.secondary.contrastText,
            }}
            variant="outlined"
            sx={{ mt: 1, mr: 1 }}
          >
            Contáctanos
          </Button>
        </Box>
      </Box>

      <Outlet />
    </Box>
  );
};
export default LayoutRegister;
