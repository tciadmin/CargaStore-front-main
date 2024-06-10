import * as React from "react";
import { useNavigate } from "react-router-dom";
//? --------------------------------------------- MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, useMediaQuery } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
//? --------------------------------------------- STYLES
import { Colors } from "../../../Utils/Colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

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
  value,
  driver,
  country,
  img
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
    driver,
    country,
    img,
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
    "$12.00",
    "Luis Alvarez",
    "Colombia",
    "/imgShipments/Bobinas.jpg"
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
    "$12.00",
    "Luis Alvarez",
    "Colombia",
    "/imgShipments/Bobinas.jpg"
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
    "$12.00",
    "Luis Alvarez",
    "Colombia",
    "/imgShipments/Bobinas.jpg"
  ),
];

export default function CompSent() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(5);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const mobile = useMediaQuery("(max-width:720px)");

  return (
    <Box>
      {mobile ? (
        <>
          <h3
            style={{
              paddingLeft: "30px",
            }}
          >
            Envíos finalizados
          </h3>
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              padding: "20px",
            }}
          >
            {rows.map((row) => (
              <Box
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justyfyContent: "center",
                  gap: "5px",
                }}
              >
                <img src={row.img} />
                <p style={{ color: Colors.secondary.contrastText }}>
                  {row.product}
                </p>
                <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
                  Valor ofertado:{" "}
                  <p style={{ fontWeight: 400 }}> {row.value} </p>
                </span>
                <p>{row.retire}</p>
                <p>Tipo de carga: {row.seca}</p>
                <p>{row.country}</p>
                <p style={{ fontWeight: 500 }}>{row.driver}</p>
              </Box>
            ))}
          </Box>
        </>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: Colors.terciary.contrastText,
          }}
        >
          <Box
            sx={{
              minWidth: "100%",
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
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
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
                            <img src="/imgShipments/Product.svg" />
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
                              src="/imgShipments/Location.svg"
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
                            <img src="/imgShipments/Date.svg" />
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
                            <img src="/imgShipments/Location.svg" />
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
                            <img src="/imgShipments/Date.svg" />
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
                            <img src="/imgShipments/Receiver.svg" />
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
                            <img src="/imgShipments/Truck.svg" />
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
                            <img src="/imgShipments/Load.svg" />
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "10px",
                    width: "100%",
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
                      src="/imgShipments/CloseButton.svg"
                    />
                  </Box>

                  <img src="/imgShipments/Success.jpg" />

                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    ¡Tu envío ha sido entregado con éxito!
                  </Typography>

                  <Typography id="modal-modal-description">
                    Califica a José Luis
                  </Typography>
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "15px",
                      marginBottom: "20px",
                      fontWeight: 600,
                    }}
                    onClick={() => {
                      navigate("/calificar-conductor");
                    }}
                  >
                    Calificar
                  </Button>
                </Box>
              </Box>
            </Modal>
          </Box>
        </Box>
      )}
    </Box>
  );
}
