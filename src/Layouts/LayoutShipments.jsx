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
import { Button, ButtonGroup, useMediaQuery } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//? --------------------------------------------- STYLES
import { Colors } from "../Utils/Colors";
import { useDispatch } from "react-redux";
import { listOrder } from "../Redux/Actions/OrderActions/listOrder";

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
  const [userRol, setUserRol] = React.useState("cliente");
  React.useEffect(() => {
    if (localStorage.getItem("userPrueba")) {
      setUserRol(localStorage.getItem("userPrueba"));
    } else {
      localStorage.setItem("userPrueba", "cliente");
    }
  }, []);
  const mobile = useMediaQuery("(max-width:720px)");
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    dispatch(listOrder(event.target.name));
  };
  const tabNameToIndex = {
    pendiente: 0,
    asignado: 1,
    "en curso": 2,
    finalizado: 3,
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
              src="/imgShipments/ArrowDashboard.svg"
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
                name="pendiente"
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
                name="asignado"
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
                name="en curso"
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
                name="finalizado"
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
                height: "60px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  height: "34px",
                  zIndex: 0,
                  width: "100%",
                  maxWidth: "780px",
                  borderBottom: "1px solid #475367",
                }}
              >
                <Button
                  onClick={() => setValue(0)}
                  sx={{
                    border: "none",
                    height: "33px",
                    padding: "0px",
                    borderBottom:
                      value == 0 ? "2px solid rgb(0, 124, 82)" : "none",
                    color: value == 0 ? Colors.primary.main : "#475367",
                    fontWeight: 600,
                    fontSize: "16px",
                    borderRadius: "0px",
                  }}
                  zIndex={10}
                  variant="none"
                >
                  {value === 0 ? (
                    <img
                      src="/imgShipments/PendingActive.svg"
                      style={{ marginRight: "5px" }}
                      width="24px"
                    />
                  ) : (
                    <img
                      src="/imgShipments/PendingInactive.svg"
                      style={{ marginRight: "5px" }}
                      width="24px"
                    />
                  )}
                  Pendientes{" "}
                </Button>
                <Button
                  onClick={() => setValue(1)}
                  sx={{
                    border: "none",
                    height: "33px",
                    padding: "0px",
                    borderRadius: "0px",
                    borderBottom:
                      value == 1 ? "2px solid rgb(0, 124, 82)" : "none",
                    color: value == 1 ? Colors.primary.main : "#475367",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                  variant="none"
                >
                  {value === 1 ? (
                    <img
                      src="/imgShipments/AssignedActive.svg"
                      style={{ marginRight: "5px" }}
                      width="24px"
                    />
                  ) : (
                    <img
                      src="/imgShipments/AssignedInactive.svg"
                      style={{ marginRight: "5px" }}
                      width="24px"
                    />
                  )}
                  Asignado
                </Button>
                <Button
                  onClick={() => setValue(2)}
                  sx={{
                    border: "none",
                    height: "33px",
                    padding: "0px",
                    borderRadius: "0px",
                    borderBottom:
                      value == 2 ? "2px solid rgb(0, 124, 82)" : "none",
                    color: value == 2 ? Colors.primary.main : "#475367",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                  variant="none"
                >
                  {value === 2 ? (
                    <img
                      src="/imgShipments/InProgressActive.svg"
                      style={{ marginRight: "5px" }}
                      width="24px"
                    />
                  ) : (
                    <img
                      src="/imgShipments/InProgressInactive.svg"
                      style={{ marginRight: "5px" }}
                      width="24px"
                    />
                  )}
                  En curso{" "}
                </Button>
                <Button
                  sx={{
                    border: "none",
                    height: "33px",
                    borderRadius: "0px",
                    padding: "0px",
                    borderBottom:
                      value == 3 ? "2px solid rgb(0, 124, 82)" : "none",
                    color: value == 3 ? Colors.primary.main : "#475367",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                  onClick={() => setValue(3)}
                  variant="none"
                >
                  {value === 3 ? (
                    <img
                      src="/imgShipments/DoneActive.svg"
                      style={{ marginRight: "5px" }}
                      width="24px"
                    />
                  ) : (
                    <img
                      src="/imgShipments/DoneInactive.svg"
                      style={{ marginRight: "5px" }}
                      width="24px"
                    />
                  )}
                  Finalizados
                </Button>
              </div>
              {userRol == "cliente" && (
                <Button
                  style={{ margin: 0 }}
                  variant="contained"
                  onClick={() => navigate("/crearEnvios")}
                >
                  Crear envío
                </Button>
              )}
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
          <img src="/imgShipments/QuestionIcon.svg" />
        </Box>
      ) : (
        ""
      )}
    </div>
  );
};
export default LayoutShipments;
