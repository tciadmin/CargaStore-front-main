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
import { Grid } from "@mui/material";

//? --------------------------------------------- STYLES
import { Colors } from "../../../Utils/Colors";
import "./styles.css";

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
        {/* //? --------------------------------------------- HEAD */}

        <Box
          style={{
            display: "flex",
            color: Colors.primary.main,
            minWdth: "100%",
            alignItems: "center",
            backgroundColor: Colors.terciary.contrastText,
          }}
        >
          <Box>
            <Grid
              justifyContent={"center"}
              alignItems={"center"}
              style={{
                display: "flex",
                height: "100%",
                marginBottom: 20,
                padding: 5,
                border: "1px solid",
                borderColor: Colors.primary.main,
                backgroundColor: Colors.primary.main,
                color: Colors.primary.contrastText,
                fontWeight: 600,
                textAlign: "center",
              }}
              spacing={0.5}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    marginLeft: "3px",
                  }}
                >
                  Producto
                </p>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    marginLeft: "3px",
                  }}
                >
                  Retiro
                </p>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    marginLeft: "3px",
                  }}
                >
                  Fecha y hora
                </p>
              </Grid>

              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    marginLeft: "3px",
                  }}
                >
                  Entrega
                </p>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p
                  style={{
                    width: "80px",
                    fontSize: "12px",
                    fontWeight: 600,
                    marginLeft: "3px",
                  }}
                >
                  Fecha y hora
                </p>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    marginLeft: "3px",
                  }}
                >
                  Destinatario
                </p>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p
                  style={{
                    width: "80px",
                    fontSize: "12px",
                    fontWeight: 600,
                    marginLeft: "3px",
                  }}
                >
                  Unidad
                </p>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p
                  style={{
                    width: "80px",
                    fontSize: "12px",
                    fontWeight: 600,
                    marginLeft: "3px",
                  }}
                >
                  Tipo de carga
                </p>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p
                  style={{
                    width: "80px",
                    fontSize: "12px",
                    fontWeight: 600,
                    marginLeft: "3px",
                  }}
                >
                  Valor ofertado
                </p>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p
                  style={{
                    width: "80px",
                    fontSize: "12px",
                    fontWeight: 600,
                    marginLeft: "3px",
                  }}
                >
                  Conductor
                </p>
              </Grid>
            </Grid>
            {/* //? --------------------------------------------- BODY */}

            <Box
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {rows.map((row) => (
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    background: "white",
                    color: "black",
                  }}
                >
                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      height: "75px",
                      background: "white",
                    }}
                    spacing={0.5}
                  >
                    <Grid
                      item
                      container
                      width={"9%"}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: 500,
                          marginLeft: "3px",
                        }}
                      >
                        {row.product}
                      </p>
                    </Grid>
                    <Grid
                      item
                      container
                      width={"9%"}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box style={{ display: "flex", gap: "5px" }}>
                        <img src="/src/assets/imgShipments/Product.svg" />
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 500,
                            marginLeft: "3px",
                          }}
                        >
                          {row.retire}
                        </p>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      container
                      style={{ display: "flex" }}
                      width={"9%"}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box style={{ display: "flex", gap: "5px" }}>
                        <img
                          style={{ display: "flex" }}
                          src="/src/assets/imgShipments/Location.svg"
                        />
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 500,
                            marginLeft: "3px",
                          }}
                        >
                          {row.date}
                        </p>
                      </Box>
                    </Grid>

                    <Grid
                      item
                      container
                      width={"9%"}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box style={{ display: "flex", gap: "5px" }}>
                        <img src="/src/assets/imgShipments/Date.svg" />
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 500,
                            marginLeft: "3px",
                          }}
                        >
                          {row.delivery}
                        </p>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      container
                      width={"9%"}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box style={{ display: "flex", gap: "5px" }}>
                        <img src="/src/assets/imgShipments/Location.svg" />
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 500,
                            marginLeft: "3px",
                          }}
                        >
                          {row.secondDate}
                        </p>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      container
                      width={"9%"}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box style={{ display: "flex", gap: "5px" }}>
                        <img src="/src/assets/imgShipments/Date.svg" />
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 500,
                            marginLeft: "3px",
                          }}
                        >
                          {row.receiver}
                        </p>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      container
                      width={"9%"}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box style={{ display: "flex", gap: "5px" }}>
                        <img src="/src/assets/imgShipments/Receiver.svg" />
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 500,
                            marginLeft: "3px",
                          }}
                        >
                          {row.unity}
                        </p>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      container
                      width={"9%"}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box style={{ display: "flex", gap: "5px" }}>
                        <img src="/src/assets/imgShipments/Truck.svg" />
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 500,
                            marginLeft: "3px",
                          }}
                        >
                          {row.load}
                        </p>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      container
                      width={"9%"}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box style={{ display: "flex", gap: "5px" }}>
                        <img src="/src/assets/imgShipments/Load.svg" />
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 500,
                            marginLeft: "3px",
                          }}
                        >
                          {row.seca}
                        </p>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      container
                      width={"9%"}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <p
                        style={{
                          width: "80px",
                          fontSize: "12px",
                          fontWeight: 500,
                          marginLeft: "3px",
                        }}
                      >
                        {row.value}
                      </p>
                    </Grid>
                    <Grid
                      item
                      container
                      width={"9%"}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box className="flexTable">
                        <Button
                          onClick={handleOpen}
                          variant="outlined"
                          style={{}}
                        >
                          Ver
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </Box>
          </Box>
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
                {steps.map(({ label, date }) => (
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      color: Colors.primary.main,
                      fontWeight: 600,
                    }}
                  >
                    <StepButton
                      icon={
                        <img src="/src/assets/imgShipments/StepperIcon.svg" />
                      }
                      key={label}
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
                        {label}
                        <p style={{ color: "black", fontWeight: 500 }}>
                          {date}
                        </p>
                      </StepLabel>
                    </StepButton>
                    {label !== "En camino" ? (
                      <Box
                        style={{
                          width: "100%",
                          height: "10px",
                        }}
                      >
                        <img src="/src/assets/imgShipments/StepConnector.svg" />
                      </Box>
                    ) : (
                      ""
                    )}
                  </Box>
                ))}
              </Stepper>
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
                haight: "100%",
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
                    width: "30%",
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
                  <Rating
                    style={{ marginLeft: "50px" }}
                    name="read-only"
                    value={value}
                    readOnly
                  />
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
