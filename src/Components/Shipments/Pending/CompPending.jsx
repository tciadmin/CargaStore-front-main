import * as React from "react";
import Header from "../Header";
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
import { Colors } from "../../../Utils/Colors";

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
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CompPending() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Header />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Pendientes" {...a11yProps(0)} />
            <Tab label="Asignado" {...a11yProps(1)} />
            <Tab label="En curso" {...a11yProps(2)} />
            <Tab label="Finalizados" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
        <Button variant="contained">Crear envío</Button>
      </Box>
      <Box style={{ display: "flex", color: Colors.primary.main, gap: "10px" }}>
        <TableContainer
          component={Paper}
          style={{
            display: "flex",
            color: Colors.primary.main,
            margin: "20px",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              style={{
                backgroundColor: Colors.primary.main,
              }}
            >
              <TableRow>
                <TableCell
                  style={{ color: Colors.primary.contrastText, padding: 0 }}
                  align="center"
                >
                  Producto
                </TableCell>
                <TableCell
                  style={{ color: Colors.primary.contrastText, padding: 0 }}
                  align="center"
                >
                  Retiro
                </TableCell>
                <TableCell
                  style={{ color: Colors.primary.contrastText, padding: 0 }}
                  align="center"
                >
                  Fecha y hora
                </TableCell>
                <TableCell
                  style={{ color: Colors.primary.contrastText, padding: 0 }}
                  align="center"
                >
                  Entrega
                </TableCell>
                <TableCell
                  style={{ color: Colors.primary.contrastText, padding: 0 }}
                  align="center"
                >
                  Fecha y hora
                </TableCell>
                <TableCell
                  style={{ color: Colors.primary.contrastText, padding: 0 }}
                  align="center"
                >
                  Destinatario
                </TableCell>
                <TableCell
                  style={{ color: Colors.primary.contrastText, padding: 0 }}
                  align="center"
                >
                  Unidad
                </TableCell>
                <TableCell
                  style={{ color: Colors.primary.contrastText, padding: 0 }}
                  align="center"
                >
                  Tipo de carga
                </TableCell>
                <TableCell
                  style={{ color: Colors.primary.contrastText, padding: 0 }}
                  align="center"
                >
                  Valor ofertado
                </TableCell>
                <TableCell
                  style={{ color: Colors.primary.contrastText, padding: 5 }}
                  align="center"
                >
                  Conductor
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
