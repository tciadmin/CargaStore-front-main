import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
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
      <Box className="imgContainer">
        {" "}
        <img src="/src/assets/imgRegister/registerSideImg.jpg" />{" "}
      </Box>
      <Box sx={{ maxWidth: 400 }}>
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
                <Box sx={{ mb: 2 }}>
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
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}

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
  );
}
