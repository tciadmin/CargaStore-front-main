import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { StepButton, StepConnector } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
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
  const mobile = useMediaQuery("(max-width:720px)");

  const theme = useTheme();
  const [activeStepMobile, setActiveStepMobile] = React.useState(0);

  const handleNext = () => {
    setActiveStepMobile((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStepMobile((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    if (
      location.pathname === "/register/driver" ||
      location.pathname === "/register/user"
    ) {
      setActiveStep(1) && setActiveStep(0);
    } else if (
      location.pathname === "/register/driver/vehicle-info" ||
      location.pathname === "/register/user/company-info"
    ) {
      setActiveStep(2) && setActiveStep(1);
    } else {
      setActiveStep(0);
    }

    if (
      location.pathname === "/register/user" ||
      location.pathname === "/register/user/company-info"
    ) {
      steps[2] = {
        label: "Información de la empresa",
        description: "Ingresa la información de tu empresa o negocio",
        inactive: "/src/assets/imgRegister/3Inactive.svg",
        active: "/src/assets/imgRegister/3Active.svg",
      };
    } else {
      steps[2] = {
        label: "Datos del vehículo",
        description: `Ingresa los datos de vehículo para más seguridad`,
        inactive: "/src/assets/imgRegister/3Inactive.svg",
        active: "/src/assets/imgRegister/3Active.svg",
      };
    }
  }, [location.pathname]);

  return (
    <Box
      className="registerContainer"
      style={{ overflow: mobile ? "" : "hidden" }}
    >
      {mobile ? (
        ""
      ) : (
        <Box className="imgContainer">
          {" "}
          <img src="/src/assets/imgRegister/registerSideImg.jpg" />{" "}
        </Box>
      )}
      {mobile ? (
        ""
      ) : (
        // location.pathname !== "/register" ? (
        //   <Box sx={{ flexGrow: 1 }}>
        //     <AppBar>
        //       <Toolbar variant="dense">
        //         <IconButton
        //           edge="start"
        //           color="inherit"
        //           aria-label="menu"
        //           sx={{ mr: 2 }}
        //         >
        //           <MenuIcon />
        //         </IconButton>
        //         {activeStepMobile === 0 ? <p>Paso 1</p> : <p>Paso 2</p>}
        //         <MobileStepper
        //           variant="progress"
        //           steps={2}
        //           position="top"
        //           activeStep={activeStepMobile}
        //           sx={{ width: "760px", flexGrow: 1, diplay: "flex",  }}
        //           // nextButton={
        //           //   <Button
        //           //     size="small"
        //           //     onClick={handleNext}
        //           //     disabled={activeStepMobile === 1}
        //           //   >
        //           //     Next
        //           //     {theme.direction === "rtl" ? (
        //           //       <KeyboardArrowLeft />
        //           //     ) : (
        //           //       <KeyboardArrowRight />
        //           //     )}
        //           //   </Button>
        //           // }
        //           // backButton={
        //           //   <Button
        //           //     size="small"
        //           //     onClick={handleBack}
        //           //     disabled={activeStepMobile === 0}
        //           //   >
        //           //     {theme.direction === "rtl" ? (
        //           //       <KeyboardArrowRight />
        //           //     ) : (
        //           //       <KeyboardArrowLeft />
        //           //     )}
        //           //     Back
        //           //   </Button>
        //           // }
        //         />
        //       </Toolbar>
        //     </AppBar>
        //   </Box>
        // ) : (
        //   ""
        // )
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
              <Step key={step.label}>
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
      )}

      <Outlet />
    </Box>
  );
};
export default LayoutRegister;
