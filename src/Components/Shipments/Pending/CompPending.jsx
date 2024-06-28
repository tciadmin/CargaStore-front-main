import * as React from "react";
import { useSelector } from "react-redux";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import { Button, useMediaQuery } from "@mui/material";
import { Grid, Typography } from "@mui/material";
//? --------------------------------------------- STYLES
import { Colors } from "../../../Utils/Colors";
import "./styles.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "lightGrey",
  boxShadow: 24,
  p: 2,
};

const steps = [
  { label: "En preparación", date: "09/03/24" },
  { label: "Preparado", date: "10/03/24" },
  { label: "Retirado", date: "10/03/24" },
  { label: "En camino", date: "10/03/24" },
];

export default function CompPending() {
  const mobile = useMediaQuery("(max-width:720px)");
  const order = useSelector((state) => state.orders.orders) || [];
  return (
    <Box style={{ background: "#F6F6F6" }}>
      {order.length === 0 ? (
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          height="80vh"
          justifyContent={"center"}
        >
          <svg
            width="175"
            height="196"
            viewBox="0 0 175 196"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M87.6444 83.7031L27.0605 102.543L87.6444 121.014L148.782 102.543L87.6444 83.7031Z"
              fill="#DDF4EC"
            />
            <path
              d="M123.583 142.434L88.7754 193.033L149.621 176.05V135.243L123.583 142.434Z"
              fill="#DDF4EC"
            />
            <path
              d="M46.2959 44.0078L57.8692 57.3812"
              stroke="#007C52"
              stroke-width="1.65451"
              stroke-linecap="round"
            />
            <path
              d="M57.8691 44.0078L46.2959 57.3812"
              stroke="#007C52"
              stroke-width="1.65451"
              stroke-linecap="round"
            />
            <path
              d="M103.647 28.2061L117.535 44.254"
              stroke="#007C52"
              stroke-width="1.98539"
              stroke-linecap="round"
            />
            <path
              d="M117.535 28.2061L103.647 44.254"
              stroke="#007C52"
              stroke-width="1.98539"
              stroke-linecap="round"
            />
            <path
              d="M122.569 171.254L140.076 166.081"
              stroke="#007C52"
              stroke-width="1.65451"
            />
            <path
              d="M128.2 159.798L140.076 156.589"
              stroke="#007C52"
              stroke-width="1.65451"
            />
            <path
              d="M87.1572 140.616V133.454"
              stroke="#007C52"
              stroke-width="2"
            />
            <path
              d="M86.7598 195.127V147.38"
              stroke="#007C52"
              stroke-width="2"
            />
            <path
              d="M23.8936 134.25V175.63L86.3621 194.331L149.228 175.63V135.243"
              stroke="#007C52"
              stroke-width="2"
            />
            <path
              d="M86.7598 84.5142V104.01"
              stroke="#007C52"
              stroke-width="1.65451"
            />
            <path
              d="M107.848 66.6084L87.5557 84.1157L149.228 102.419L166.735 84.1157L107.848 66.6084Z"
              fill="#FDFDFD"
              stroke="#007C52"
              stroke-width="2"
            />
            <path
              d="M7.18164 84.1155L26.2802 102.419L85.1678 84.1155L66.8649 67.4043L7.18164 84.1155Z"
              fill="#FDFDFD"
              stroke="#007C52"
              stroke-width="2"
            />
            <path
              d="M148.433 102.816L87.5557 120.722L108.644 145.789L172.306 129.077L148.433 102.816Z"
              fill="#FDFDFD"
              stroke="#007C52"
              stroke-width="2"
            />
            <path
              d="M25.8826 102.419L2.40723 127.486L64.8758 146.585L86.3617 120.722L25.8826 102.419Z"
              fill="#FDFDFD"
              stroke="#007C52"
              stroke-width="2"
            />
            <circle
              cx="93.5391"
              cy="6.64361"
              r="5.1562"
              stroke="#007C52"
              stroke-width="1.65451"
            />
            <circle cx="69.1983" cy="30.2462" r="5.98346" fill="#007C52" />
            <circle cx="141.414" cy="52.1436" r="4.43559" fill="#007C52" />
          </svg>

          <Typography variant="h4" fontSize={mobile ? "16px" : "24px"}>
            {" "}
            Aun no tienes envíos generados
          </Typography>
          {!mobile && (
            <Typography variant="p">
              {" "}
              Para crear un nuevo envio haz clic en el boton de “Crear envío”
            </Typography>
          )}
        </Box>
      ) : (
        <>
          {mobile ? (
            <>
              <h3
                style={{
                  paddingLeft: "30px",
                }}
              >
                Envíos pendientes
              </h3>
              <Box
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  padding: "20px",
                }}
              >
                {order.map((row) => (
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
                    <span
                      style={{ display: "flex", gap: "5px", fontWeight: 600 }}
                    >
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
                    {/* //? --------------------------------------------- BODY*/}

                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      {order.map((row) => (
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
                                  variant="outlined"
                                  style={{
                                    cursor: "not allowed",
                                    pointerEvents: "none",
                                    color: Colors.secondary.contrastText,
                                    borderColor: Colors.secondary.contrastText,
                                  }}
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
              </Box>
            </Box>
          )}
        </>
      )}
    </Box>
  );
}
