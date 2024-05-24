import { Outlet } from "react-router-dom";
import * as React from "react";
import Header from "../Components/Shipments/Header";
//? --------------------------------------------- MUI
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
function createData(
  index,
  product,
  retire,
  date,
  delivery,
  secondDate,
  receiver,
  unity,
  load,
  seca,
  value
) {
  return {
    index,
    product,
    retire,
    date,
    delivery,
    secondDate,
    receiver,
    unity,
    load,
    seca,
    value,
  };
}

const rows = [
  createData(
    "0",
    "#1205",
    "Bobinas de papel",
    "Calle 12, Quito, Peru",
    "12/03/24 12:00hs",
    "Calle 12, Quito, Peru",
    "21/03/24 12:00hs",
    "El mundo del papel",
    "Furgón",
    "Seca",
    "$12.00"
  ),
  createData(
    "1",
    "#1205",
    "Bobinas de papel",
    "Calle 12, Quito, Peru",
    "12/03/24 12:00hs",
    "Calle 12, Quito, Peru",
    "21/03/24 12:00hs",
    "El mundo del papel",
    "Furgón",
    "Seca",
    "$12.00"
  ),
  createData(
    "2",
    "#1903",
    "Cañas de azúcar",
    "Calle 12, Quito, Peru",
    "12/03/24 12:00hs",
    "Calle 12, Quito, Peru",
    "21/03/24 12:00hs",
    "El mundo del papel",
    "Furgón",
    "Peligrosa",
    "$12.00"
  ),
  createData(
    "3",
    "#2092",
    "Gas metano",
    "Calle 12, Quito, Peru",
    "12/03/24 12:00hs",
    "Calle 12, Quito, Peru",
    "21/03/24 12:00hs",
    "El mundo del papel",
    "Furgón",
    "Peligrosa",
    "$12.00"
  ),
];

const LayoutShipments = () => {
  const [value, setValue] = React.useState(0);

  const tabNameToIndex = {
    Pendientes: 0,
    Asignado: 1,
    "En curso": 2,
    Finalizados: 3,
  };

  const handleChange = (event, newValue) => {
    const tabName = event.target.name;
    if (tabName in tabNameToIndex) {
      setValue(tabNameToIndex[tabName]);
    } else {
      setValue(newValue);
    }
  };
  return (
    <div>
      <Box
        sx={{
          minWidth: "100%",
          height: "100%",
          backgroundColor: Colors.terciary.contrastText,
        }}
      >
        <Header />

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
              width: "100%",
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
                    <img src="/src/assets/imgShipments/PendingActive.svg" />
                  ) : (
                    <img src="/src/assets/imgShipments/PendingInactive.svg" />
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
                    <img src="/src/assets/imgShipments/AssignedActive.svg" />
                  ) : (
                    <img src="/src/assets/imgShipments/AssignedInactive.svg" />
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
                    <img src="/src/assets/imgShipments/InProgressActive.svg" />
                  ) : (
                    <img src="/src/assets/imgShipments/InProgressInactive.svg" />
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
                    <img src="/src/assets/imgShipments/DoneActive.svg" />
                  ) : (
                    <img src="/src/assets/imgShipments/DoneInactive.svg" />
                  )
                }
                {...a11yProps(2)}
              />
            </Tabs>
            <Button style={{ margin: 15 }} variant="contained">
              Crear envío
            </Button>
          </Box>
        </Box>
      </Box>
      <Outlet />
      {/* <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel> */}
    </div>
  );
};
export default LayoutShipments;
