import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { StepButton } from "@mui/material";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//? --------------------------------------------- STYLES
import "../Components/Register/styles.css";
import { Colors } from "../Utils/Colors";

const steps = [
  {
    label: "Elige tu perfil",
    description: `Selecciona si serás un generador de carga o socio conductor`,
    active: "/src/assets/imgRegister/1Active.svg",
    done: "/src/assets/imgRegister/1Done.svg",
  },
  {
    label: "Datos personales",
    description: "Carga tus datos personales para continuar",
    inactive: "/src/assets/imgRegister/2Inactive.svg",
    active: "/src/assets/imgRegister/2Active.svg",
    done: "/src/assets/imgRegister/2Done.svg",
  },
  {
    label: "Datos del vehículo",
    description: `Ingresa los datos de vehículo para más seguridad`,
    inactive: "/src/assets/imgRegister/3Inactive.svg",
    active: "/src/assets/imgRegister/3Active.svg",
  },
];

const LayoutRegister = () => {
  const [activeStep, setActiveStep] = useState(0);
  const location = useLocation();

  const onChange = () => {
    {
      location.pathname === "/register/driver" ||
      location.pathname === "/register/user"
        ? setActiveStep(1)
        : location.pathname === "/register/driver/vehicle-info"
        ? setActiveStep(2)
        : index === 1;
    }
  };

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
          marginTop: "50px",
          marginBottom: "50px",
          borderRadius: "8px",
        }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step onChange={onChange} key={step.label}>
              <StepButton
                icon={
                  index === activeStep ? (
                    <img src={step.active} />
                  ) : index > activeStep ? (
                    <img src={step.inactive} />
                  ) : (
                    <img src={step.done} />
                  )
                }
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
              </StepButton>

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
