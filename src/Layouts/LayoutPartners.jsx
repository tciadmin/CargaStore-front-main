import * as React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CompNavLanding from "../Components/NavLanding/CompNavLanding";
//? --------------------------------------------- MUI
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useMediaQuery } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//? --------------------------------------------- STYLES
import { Colors } from "../Utils/Colors";

const drawerWidth = 240;

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

export default function LayoutPartners() {
  const [value, setValue] = React.useState(0);
  const mobile = useMediaQuery("(max-width:720px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickPending = () => {
    setAnchorEl(null);
    navigate("/partners");
  };
  const clickAccredited = () => {
    setAnchorEl(null);
    navigate("/partners/active-members");
  };

  const tabNameToIndex = {
    Pendientes: 0,
    Acreditados: 1,
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
      navigate("/partners");
    } else {
      navigate("/partners/active-members");
    }
  }, [value]);
  return (
    <Box>
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
                name="Pendientes"
                value="0"
                onClick={clickPending}
                style={{
                  fontWeight: 500,
                  color:
                    location.pathname === "/payment" ? Colors.primary.main : "",
                }}
              >
                Solicitudes de carga
              </MenuItem>
              <MenuItem
                name="Asignado"
                value="1"
                onClick={clickAccredited}
                style={{
                  fontWeight: 500,
                  color:
                    location.pathname === "/shipments/acredited"
                      ? Colors.primary.main
                      : "",
                }}
              >
                Socios activos
              </MenuItem>
            </Menu>
          </Box>
        </>
      ) : (
        <Box sx={{ minWidth: "100%", display: "flex" }}>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
                marginTop: "64px",
              },
            }}
          >
            <Box sx={{ border: "none" }}>
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{
                    textTransform: "none",
                    display: "flex",
                    width: "239px",
                  }}
                  label="Solicitudes de carga"
                  name="Pendientes"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ textTransform: "none" }}
                  label="Socios activos"
                  name="Acreditados"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
          </Drawer>{" "}
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
          <img src="/imgAdminPayment/ChatIcon.svg" />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

// import { Button, Stack, Typography } from "@mui/material";
// import { Outlet, useNavigate } from "react-router-dom";
// //import { Colors } from "../Utils/Colors"
// import { useState } from "react";
// import CompNav from "../Components/Nav/CompNav";
// import { CompDashboard } from "../Components/Dashboard/CompDashboard";

// const LayoutConfi = () => {
//   const navigate = useNavigate();
//   const [activo, setActivo] = useState("Solicitudes de carga");

//   const list = ["Solicitudes de carga", "Socios activos"];

//   const Redirect = (Element) => {
//     setActivo(Element);

//     navigate(Element);
//   };

//   return (
//     <>
//       <Stack sx={{ display: { xs: "none", md: "block" } }}>
//         <CompNav />

//         <Stack
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             backgroundColor: "#F6F6F6",
//           }}
//         >
//           {/* Para la barra lateral */}
//           <Stack
//             sx={{
//               width: "472px",
//               border: "1px solid",
//               color: "#D0D5DD",
//               // height: "100vh",
//               backgroundColor: "#F6F6F6",
//             }}
//           >
//             {list.map((Element, index) => (
//               <Button
//                 sx={{ margin: "6px" }}
//                 onClick={() => Redirect(Element)}
//                 color={activo === Element ? "primary" : "textDisable"}
//                 variant="text"
//                 key={index}
//               >
//                 <Typography
//                   fontWeight={activo === Element ? 700 : 500}
//                   sx={{ fontSize: "16px" }}
//                 >
//                   {Element}
//                 </Typography>
//               </Button>
//             ))}
//           </Stack>

//           {/* para las subRutas */}
//           <Stack
//             sx={{
//               width: "100%",
//               border: "1px solid #D0D5DD",
//               height: "100vh",
//               backgroundColor: "D0D5DD",
//             }}
//           >
//             {/* Outlet muestra las subRutas */}
//             {/* <Outlet /> */}
//           </Stack>
//         </Stack>
//         <Outlet />
//       </Stack>
//     </>
//   );
// };

// export default LayoutConfi;
