import * as React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { StepButton, StepConnector } from "@mui/material";
import {
  Button,
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

//? --------------------------------------------- STYLES
import "../Components/Register/styles.css";
import { Colors } from "../Utils/Colors";
import LinealHorizontalProgress from "../Components/progress/LinealHorizontalProgress";

const steps = [
  {
    label: "Elige tu perfil",
    description: `Selecciona si serás un generador de carga o socio conductor`,
    active: "/public/imgRegister/1Active.svg",
    done: "/public/imgRegister/1Done.svg",
  },
  {
    label: "Datos personales",
    description: "Carga tus datos personales para continuar",
    inactive: "/public/imgRegister/2Inactive.svg",
    active: "/public/imgRegister/2Active.svg",
    done: "/public/imgRegister/2Done.svg",
  },
  {
    label: "Datos del vehículo",
    description: `Ingresa los datos de vehículo para más seguridad`,
    inactive: "/public/imgRegister/3Inactive.svg",
    active: "/public/imgRegister/3Active.svg",
  },
];

const LayoutRegister = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const mobile = useMediaQuery("(max-width:720px)");

  const step = ["Paso 1", "Paso 2"];

  const theme = useTheme();
  const [activeStepMobile, setActiveStepMobile] = React.useState(0);

  const onClick = () => {
    setActiveStepMobile(activeStepMobile - 1);
    if (
      location.pathname === "/register/user" ||
      location.pathname === "/register/driver"
    ) {
      navigate("/register");
    } else if (activeStepMobile === 1) {
      location.pathname === "/register/user/company-info"
        ? navigate("/register/user")
        : navigate("/register/driver");
    }
  };

  useEffect(() => {
    if (
      location.pathname === "/register/driver" ||
      location.pathname === "/register/user"
    ) {
      setActiveStep(1);
    } else if (
      location.pathname === "/register/driver/vehicle-info" ||
      location.pathname === "/register/user/company-info"
    ) {
      setActiveStep(2);
    } else {
      setActiveStep(0);
    }
    if (
      location.pathname === "/register/driver" ||
      location.pathname === "/register/user"
    ) {
      setActiveStepMobile(0);
    } else if (
      location.pathname === "/register/driver/vehicle-info" ||
      location.pathname === "/register/user/company-info"
    ) {
      setActiveStepMobile(1);
    } else {
      navigate("/register");
    }

    if (
      location.pathname === "/register/user" ||
      location.pathname === "/register/user/company-info"
    ) {
      steps[2] = {
        label: "Información de la empresa",
        description: "Ingresa la información de tu empresa o negocio",
        inactive: "/public/imgRegister/3Inactive.svg",
        active: "/public/imgRegister/3Active.svg",
      };
    } else {
      steps[2] = {
        label: "Datos del vehículo",
        description: `Ingresa los datos de vehículo para más seguridad`,
        inactive: "/public/imgRegister/3Inactive.svg",
        active: "/public/imgRegister/3Active.svg",
      };
    }
  }, [location.pathname]);

  return (
    <Box
      className="registerContainer"
      style={{
        overflow: mobile ? "" : "hidden",
        flexDirection: mobile ? "column" : "",
      }}
    >
      {mobile ? (
        ""
      ) : (
        <Box className="imgContainer">
          {" "}
          <img src="/public/imgRegister/registerSideImg.jpg" />{" "}
        </Box>
      )}

      {mobile ? (
        location.pathname !== "/register" ? (
          <Box>
            <svg
              width="24"
              style={{ marginLeft: "15px", cursor: "pointer" }}
              onClick={onClick}
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_343_8051)">
                <path
                  d="M23.25 12H0.75"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.25 1.5L0.75 12L11.25 22.5"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_343_8051">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="matrix(-1 0 0 -1 24 24)"
                  />
                </clipPath>
              </defs>
            </svg>
            <Stack direction="row" justifyContent={"center"}>
              <Typography
                color="secondary"
                mb={1}
                fontWeight={600}
                fontSize={"14px"}
              >
                Paso {activeStepMobile + 1}
              </Typography>
            </Stack>
            <LinearProgress
              style={{ width: "100%" }}
              variant="determinate"
              value={(activeStepMobile + 1) * 40}
            />
          </Box>
        ) : (
          ""
        )
      ) : (
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
