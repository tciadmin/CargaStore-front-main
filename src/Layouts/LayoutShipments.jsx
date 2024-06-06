import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CompNavLanding from "../Components/NavLanding/CompNavLanding";
//? --------------------------------------------- MUI
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, useMediaQuery } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//? --------------------------------------------- STYLES
import { Colors } from "../Utils/Colors";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LayoutShipments = () => {
  const mobile = useMediaQuery("(max-width:720px)");
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const tabNameToIndex = {
    Pendientes: 0,
    Asignado: 1,
    "En curso": 2,
    Finalizados: 3,
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickPending = () => {
    setAnchorEl(null);

    navigate("/shipments");
  };
  const clickAssigned = () => {
    setAnchorEl(null);

    navigate("/shipments/assigned");
  };
  const clickProgress = () => {
    setAnchorEl(null);

    navigate("/shipments/in-progress");
  };
  const clickDone = () => {
    setAnchorEl(null);

    navigate("/shipments/finished");
  };

  const handleChange = (event, newValue) => {
    const tabName = event.target.name;

    if (tabName in tabNameToIndex) {
      setValue(tabNameToIndex[tabName]);
    } else {
      setValue(newValue);
    }
  };

  useEffect(() => {
    if (value === 0) {
      navigate("/shipments");
    } else if (value === 1) {
      navigate("/shipments/assigned");
    } else if (value === 2) {
      navigate("/shipments/in-progress");
    } else {
      navigate("/shipments/finished");
    }
  }, [value]);

  return (
    <div>
      <CompNavLanding />
      {mobile ? (
        <>
          <Box
            style={{
              display: "flex",
              alignItems: "right",
              justifyContent: "right",
              padding: "10px",
            }}
          >
            <img
              onClick={handleClick}
              style={{
                backgroundColor: Colors.primary.constrastText,
                cursor: "pointer",
              }}
              src="/public/imgShipments/ArrowDashboard.svg"
            />
            <Menu
              value={value}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                name="Pendientes"
                value="0"
                onClick={clickPending}
                style={{
                  fontWeight: 500,
                  color:
                    location.pathname === "/shipments"
                      ? Colors.primary.main
                      : "",
                }}
              >
                Envíos pendientes
              </MenuItem>
              <MenuItem
                name="Asignado"
                value="1"
                onClick={clickAssigned}
                style={{
                  fontWeight: 500,
                  color:
                    location.pathname === "/shipments/assigned"
                      ? Colors.primary.main
                      : "",
                }}
              >
                Envíos asignados
              </MenuItem>
              <MenuItem
                name="En curso"
                value="2"
                onClick={clickProgress}
                style={{
                  fontWeight: 500,
                  color:
                    location.pathname === "/shipments/in-progress"
                      ? Colors.primary.main
                      : "",
                }}
              >
                Envíos en curso
              </MenuItem>
              <MenuItem
                name="Finalizados"
                value="3"
                onClick={clickDone}
                style={{
                  fontWeight: 500,
                  color:
                    location.pathname === "/shipments/finished"
                      ? Colors.primary.main
                      : "",
                }}
              >
                Envíos finalizados
              </MenuItem>
            </Menu>
          </Box>
        </>
      ) : (
        <Box
          sx={{
            minWidth: "100%",
            height: "100%",
            backgroundColor: Colors.terciary.contrastText,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 5,
              height: "20px",
              backgroundColor: Colors.terciary.contrastText,
            }}
          >
            <Box
              className="slider"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "96%",
                alignItems: "center",
                backgroundColor: Colors.terciary.contrastText,
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{
                  display: "flex",
                  backgroundColor: Colors.terciary.contrastText,
                }}
              >
                <Tab
                  sx={{ textTransform: "none" }}
                  name="Pendientes"
                  label="Pendientes"
                  icon={
                    value === 0 ? (
                      <img src="/public/imgShipments/PendingActive.svg" />
                    ) : (
                      <img src="/public/imgShipments/PendingInactive.svg" />
                    )
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ textTransform: "none" }}
                  name="Asignado"
                  label="Asignado"
                  icon={
                    value === 1 ? (
                      <img src="/public/imgShipments/AssignedActive.svg" />
                    ) : (
                      <img src="/public/imgShipments/AssignedInactive.svg" />
                    )
                  }
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ textTransform: "none" }}
                  name="En curso"
                  label="En curso"
                  icon={
                    value === 2 ? (
                      <img src="/public/imgShipments/InProgressActive.svg" />
                    ) : (
                      <img src="/public/imgShipments/InProgressInactive.svg" />
                    )
                  }
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ textTransform: "none" }}
                  name="Finalizados"
                  label="Finalizados"
                  icon={
                    value === 3 ? (
                      <img src="/public/imgShipments/DoneActive.svg" />
                    ) : (
                      <img src="/public/imgShipments/DoneInactive.svg" />
                    )
                  }
                  {...a11yProps(2)}
                />
              </Tabs>
              <Button
                style={{ margin: 0 }}
                variant="contained"
                onClick={() => navigate("/home/crearEnvios")}
              >
                Crear envío
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      <Outlet />
      {mobile ? (
        <Box
          style={{
            display: "flex",
            alignItems: "right",
            justifyContent: "right",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          <img src="/public/imgShipments/QuestionIcon.svg" />
        </Box>
      ) : (
        ""
      )}
    </div>
  );
};
export default LayoutShipments;
