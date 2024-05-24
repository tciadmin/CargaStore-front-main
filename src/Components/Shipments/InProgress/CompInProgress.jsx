import * as React from "react";
//? --------------------------------------------- MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, StepButton, StepConnector } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
//? --------------------------------------------- STYLES
import { Colors } from "../../../Utils/Colors";
import "./styles.css";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const steps = [
  { label: "En preparación", date: "09/03/24" },
  { label: "Preparado", date: "10/03/24" },
  { label: "Retirado", date: "10/03/24" },
  { label: "En camino", date: "10/03/24" },
];

export default function CompInProgress() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(5);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        minWidth: "100%",
        height: "100vh",
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
                        padding: 5,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Producto
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 5,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Retiro
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 5,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Fecha y hora
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 5,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Entrega
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 5,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Fecha y hora
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 5,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Destinatario
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 5,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Unidad
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 5,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Tipo de carga
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 5,
                        fontWeight: 600,
                      }}
                      align="center"
                    >
                      Valor ofertado
                    </TableCell>
                    <TableCell
                      style={{
                        color: Colors.primary.contrastText,
                        padding: 5,
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
                        <Button
                          onClick={handleOpen}
                          variant="outlined"
                          style={{}}
                        >
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                width: "35%",
              }}
            >
              <Stepper
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: Colors.primary.main,
                  fontWeight: 600,
                }}
                activeStep={1}
                alternativeLabel
                orientation="vertical"
              >
                {steps.map((label) => (
                  <StepButton
                    icon={
                      <img src="/src/assets/imgShipments/StepperIcon.svg" />
                    }
                    key={label.label}
                  >
                    <StepLabel
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "left",
                        alignItems: "left",
                        gap: "10px",
                      }}
                    >
                      {label.label}
                      <p style={{ color: "black", fontWeight: 500 }}>
                        {label.date}
                      </p>
                    </StepLabel>
                  </StepButton>
                ))}
              </Stepper>
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "right",
                  cursor: "pointer",
                }}
              >
                <img
                  onClick={handleClose}
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    alignContent: "right",
                  }}
                  src="/src/assets/imgShipments/CloseButton.svg"
                />
              </Box>

              <Typography id="modal-modal-title" variant="h6" component="h2">
                Detalles del conductor
              </Typography>
              <Box
                style={{
                  display: "flex",
                  border: "1px solid",
                  borderColor: Colors.primary.main,
                  borderRadius: "8px",
                  padding: "20px",
                  gap: "10px",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="/src/assets/imgShipments/DriverDetails.jpg" />
                </Box>

                <Box
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <h3 style={{ textAlign: "center" }}>José Luis</h3>

                  <span
                    style={{ display: "flex", gap: "5px", fontWeight: 500 }}
                  >
                    Documento: <p style={{ fontWeight: 400 }}>123456</p>{" "}
                  </span>
                  <span
                    style={{ display: "flex", gap: "5px", fontWeight: 500 }}
                  >
                    Licencia: <p style={{ fontWeight: 400 }}>123456</p>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      fontWeight: 500,
                      gap: "5px",
                    }}
                  >
                    Matrícula:<p style={{ fontWeight: 400 }}>123456</p>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      gap: "5px",
                      fontWeight: 500,
                    }}
                  >
                    Capacidad de carga:<p> 123456</p>
                  </span>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </Box>

              <Typography
                id="modal-modal-description"
                style={{ marginBottom: "20px" }}
              >
                Día de entrega 21/03/24
              </Typography>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
