import * as React from "react";
import Header from "../Header";
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
import { Colors } from "../../../Utils/Colors";
import "./styles.css";

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
];

export default function CompPending() {
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
    <Box
      sx={{
        minWidth: "100%",
        height: "100vh",
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
        {/* //? --------------------------------------------- TABLE */}

        <Box
          style={{
            display: "flex",
            color: Colors.primary.main,
            width: "100%",
            alignItems: "center",
            backgroundColor: Colors.terciary.contrastText,
          }}
        >
          <TableContainer
            component={Paper}
            style={{
              display: "flex",
              color: Colors.primary.main,
              padding: "10px",
              width: "110%",
              boxShadow: "none",
              backgroundColor: Colors.terciary.contrastText,
            }}
          >
            <Table sx={{ width: "110%" }} aria-label="simple table">
              <Box>
                <TableHead
                  style={{
                    border: "1px solid",
                    borderColor: Colors.primary.main,
                    backgroundColor: Colors.primary.main,
                    marginBottom: 20,
                    padding: 10,
                  }}
                >
                  <TableRow
                    style={{
                      backgroundColor: Colors.primary.main,
                      marginBottom: 20,
                      padding: 10,
                    }}
                  >
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 0,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Producto
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 0,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Retiro
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 0,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Fecha y hora
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 0,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Entrega
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 0,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Fecha y hora
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 0,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Destinatario
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 0,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Unidad
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 0,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Tipo de carga
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 0,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Valor ofertado
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 10,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Conductor
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody style={{ padding: "10px" }}>
                  {rows.map((row) => (
                    <TableRow
                      key={row.product}
                      sx={{
                        // display: "flex",
                        padding: 0,
                        border: "1px solid",
                        borderColor: Colors.terciary.main,
                      }}
                    >
                      {/* product, retire, date, delivery, secondDate,receiver, unity, load, value */}
                      <TableCell align="center">{row.product}</TableCell>
                      <TableCell
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row",
                          border: "none",
                        }}
                      >
                        <Box className="flexTable">
                          <Box className="flexTable">
                            <img src="/src/assets/imgShipments/Product.svg" />
                            {row.retire}{" "}
                          </Box>
                          <Box className="flexTable">
                            <img src="/src/assets/imgShipments/Location.svg" />{" "}
                            {row.date}
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        <Box className="flexTable">
                          <img src="/src/assets/imgShipments/Date.svg" />{" "}
                          {row.delivery}
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <Box className="flexTable">
                          <img src="/src/assets/imgShipments/Location.svg" />{" "}
                          {row.secondDate}
                        </Box>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {" "}
                        <Box className="flexTable">
                          <img src="/src/assets/imgShipments/Date.svg" />{" "}
                          {row.receiver}
                        </Box>
                      </TableCell>
                      <TableCell
                        align="center"
                        // style={{margin: }}
                      >
                        {" "}
                        <Box className="flexTable">
                          <img src="/src/assets/imgShipments/Receiver.svg" />
                          {row.unity}
                        </Box>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Box className="flexTable">
                          <img src="/src/assets/imgShipments/Truck.svg" />
                          {row.load}
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <Box className="flexTable">
                          <img src="/src/assets/imgShipments/Load.svg" />{" "}
                          {row.seca}
                        </Box>
                      </TableCell>

                      <TableCell align="center">
                        <Box className="flexTable">{row.value}</Box>
                      </TableCell>

                      <Box className="flexTable">
                        <Button variant="outlined" style={{}}>
                          Ver
                        </Button>
                      </Box>
                    </TableRow>
                  ))}
                </TableBody>
              </Box>
            </Table>
          </TableContainer>
        </Box>
        {/* <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel> */}
      </Box>
    </Box>
  );
}
