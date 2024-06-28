import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Stack,
  Button,
  Box,
  Rating,
  useMediaQuery,
  Container,
  Avatar,
  Typography,
} from "@mui/material";
import CompNavLanding from "../NavLanding/CompNavLanding";
import { Colors } from "../../Utils/Colors";
import { useDispatch, useSelector } from "react-redux";
import { postFeedback } from "../../Redux/Actions/FeedbackActions/feedbackActions";

export const CompProfile = () => {
  const [value, setValue] = useState(2);
  const [value2, setValue2] = useState(5);
  const [visibleComments, setVisibleComments] = useState(2);
  const mobile = useMediaQuery("(max-width:720px)");
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.user.feedback) || [];
  const rol = localStorage.getItem("userPrueba");

  const { register } = useForm({
    defaultValues: {
      feed: "",
      score: "",
    },
  });

  const handleShowMore = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 2);
  };

  const newFeedback = (feed) => {
    dispatch(postFeedback(feed));
  };

  const comments = [
    {
      comment:
        "Hola, soy José Luis. Llevo un año siendo parte de esta increíble empresa de envíos. Desde que me uní, me he comprometido al máximo con mi rol de socio y responsable. Mi trabajo consiste en asegurarme de que cada paquete llegue a su destino de manera segura y puntual. Me apasiona trabajar en equipo y encontrar soluciones eficientes para cualquier desafío que se presente en el camino",
      date: "hace 10 días",
      value: 4,
    },
    {
      comment:
        "Hola, soy José Luis. Llevo un año siendo parte de esta increíble empresa de envíos. Desde que me uní, me he comprometido al máximo con mi rol de socio y responsable. Mi trabajo consiste en asegurarme de que cada paquete llegue a su destino de manera segura y puntual. Me apasiona trabajar en equipo y encontrar soluciones eficientes para cualquier desafío que se presente en el camino",
      date: "hace 15 días",
      value: 5,
    },
    {
      comment:
        "Hola, soy José Luis. Llevo un año siendo parte de esta increíble empresa de envíos. Desde que me uní, me he comprometido al máximo con mi rol de socio y responsable. Mi trabajo consiste en asegurarme de que cada paquete llegue a su destino de manera segura y puntual. Me apasiona trabajar en equipo y encontrar soluciones eficientes para cualquier desafío que se presente en el camino",
      date: "hace 15 días",
      value: 5,
    },
    {
      comment:
        "Hola, soy José Luis. Llevo un año siendo parte de esta increíble empresa de envíos. Desde que me uní, me he comprometido al máximo con mi rol de socio y responsable. Mi trabajo consiste en asegurarme de que cada paquete llegue a su destino de manera segura y puntual. Me apasiona trabajar en equipo y encontrar soluciones eficientes para cualquier desafío que se presente en el camino",
      date: "hace 10 días",
      value: 4,
    },
    {
      comment:
        "Hola, soy José Luis. Llevo un año siendo parte de esta increíble empresa de envíos. Desde que me uní, me he comprometido al máximo con mi rol de socio y responsable. Mi trabajo consiste en asegurarme de que cada paquete llegue a su destino de manera segura y puntual. Me apasiona trabajar en equipo y encontrar soluciones eficientes para cualquier desafío que se presente en el camino",
      date: "hace 10 días",
      value: 4,
    },
    {
      comment:
        "Hola, soy José Luis. Llevo un año siendo parte de esta increíble empresa de envíos. Desde que me uní, me he comprometido al máximo con mi rol de socio y responsable. Mi trabajo consiste en asegurarme de que cada paquete llegue a su destino de manera segura y puntual. Me apasiona trabajar en equipo y encontrar soluciones eficientes para cualquier desafío que se presente en el camino",
      date: "hace 10 días",
      value: 4,
    },
    {
      comment:
        "Hola, soy José Luis. Llevo un año siendo parte de esta increíble empresa de envíos. Desde que me uní, me he comprometido al máximo con mi rol de socio y responsable. Mi trabajo consiste en asegurarme de que cada paquete llegue a su destino de manera segura y puntual. Me apasiona trabajar en equipo y encontrar soluciones eficientes para cualquier desafío que se presente en el camino",
      date: "hace 10 días",
      value: 4,
    },
    {
      comment:
        "Hola, soy José Luis. Llevo un año siendo parte de esta increíble empresa de envíos. Desde que me uní, me he comprometido al máximo con mi rol de socio y responsable. Mi trabajo consiste en asegurarme de que cada paquete llegue a su destino de manera segura y puntual. Me apasiona trabajar en equipo y encontrar soluciones eficientes para cualquier desafío que se presente en el camino",
      date: "hace 10 días",
      value: 4,
    },
    {
      comment:
        "Hola, soy José Luis. Llevo un año siendo parte de esta increíble empresa de envíos. Desde que me uní, me he comprometido al máximo con mi rol de socio y responsable. Mi trabajo consiste en asegurarme de que cada paquete llegue a su destino de manera segura y puntual. Me apasiona trabajar en equipo y encontrar soluciones eficientes para cualquier desafío que se presente en el camino",
      date: "hace 10 días",
      value: 4,
    },
  ];

  return (
    <Stack
      sx={{
        height: "100%",
        backgroundColor: "#F6F6F6",
      }}
    >
      <CompNavLanding />
      <Container>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems="flex-start"
          pt={5}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
            justifyContent={"center"}
            alignItems="center"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Box>
                <Avatar
                  src="/imgShipments/DriverDetails.jpg"
                  sx={{ width: "150px", height: "150px" }}
                ></Avatar>
              </Box>
              <p style={{ fontWeight: "bold" }}>José Luis Alvarez</p>
              <p style={{ color: Colors.secondary.contrastText }}>
                Socio desde 01/10/2022
              </p>
              <Box sx={{ width: mobile ? "100%" : "50%", padding: "20px" }}>
                <p>
                  Hola, soy José Luis. Llevo un año siendo parte de esta
                  increíble empresa de envíos. Desde que me uní, me he
                  comprometido al máximo con mi rol de socio y responsable. Mi
                  trabajo consiste en asegurarme de que cada paquete llegue a su
                  destino de manera segura y puntual. Me apasiona trabajar en
                  equipo y encontrar soluciones eficientes para cualquier
                  desafío que se presente en el camino
                </p>
              </Box>
            </Box>

            <Stack
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                maxWidth: "600px",
                width: "100%",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: " center",
                  backgroundColor: Colors.primary.contrastText,
                  padding: "5px",
                  borderRadius: "8px",
                  border: "2px solid",

                  borderColor: Colors.terciary.main,
                  height: "107px",
                  width: mobile ? "100%" : "212px",
                  maxWidth: "33.3%",
                  fontWeight: 600,
                }}
              >
                <p>+500</p>
                <p>Viajes</p>
              </Box>{" "}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: " center",
                  width: mobile ? "100%" : "212px",
                  maxWidth: "33.3%",
                  height: "107px",
                  backgroundColor: Colors.primary.contrastText,
                  padding: "5px",
                  borderRadius: "8px",
                  border: "2px solid",
                  borderColor: Colors.terciary.main,
                  fontWeight: 600,
                }}
              >
                <p>4,3</p>
                <Rating readOnly value={value2} />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: " center",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.primary.contrastText,
                  padding: "5px",
                  borderRadius: "8px",
                  border: "2px solid",
                  borderColor: Colors.terciary.main,
                  height: "107px",
                  width: mobile ? "100%" : "212px",
                  maxWidth: "33.3%",
                  fontWeight: 600,
                }}
              >
                <p>398 </p>
                <p>Reseñas</p>
              </Box>
            </Stack>
            {mobile && rol == "admin" && (
              <Stack
                direction="column"
                justifyContent={"flex-start"}
                alignItems="flex-start"
                width="100%"
                maxWidth={"600px"}
                style={{
                  border: "1px solid lightgrey",
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <Typography fontSize="20px" fontWeight={600} mb={5}>
                  Información personal
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Nombre:{" "}
                  <span style={{ fontWeight: 400 }}>José Luis Alvarez </span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Número de documento:{" "}
                  <span style={{ fontWeight: 400 }}>conductor@gmail.com</span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Correo electrónico:{" "}
                  <span style={{ fontWeight: 400 }}>40993893</span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Número de contacto:{" "}
                  <span style={{ fontWeight: 400 }}>+54 35353535</span>
                </Typography>

                <Typography fontSize="20px" fontWeight={600} my={5}>
                  Información del camión
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Marca: <span style={{ fontWeight: 400 }}>Toyota </span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Modelo: <span style={{ fontWeight: 400 }}>Dyna 300</span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Año: <span style={{ fontWeight: 400 }}>2020</span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Matrícula: <span style={{ fontWeight: 400 }}>1245553</span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Capacidad de carga:{" "}
                  <span style={{ fontWeight: 400 }}>1 tonelada</span>
                </Typography>

                <Typography fontSize="20px" fontWeight={600} my={5}>
                  Información legal
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Licencia de conducir:{" "}
                  <span style={{ fontWeight: 400 }}>12345 </span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Afiliación IESS: <span style={{ fontWeight: 400 }}>si</span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Póliza de seguro:{" "}
                  <span style={{ fontWeight: 400 }}>2344893</span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Permiso de puerto: <span style={{ fontWeight: 400 }}>no</span>
                </Typography>

                <Typography fontSize="20px" fontWeight={600} my={5}>
                  Preferencias de viaje
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Internacional: <span style={{ fontWeight: 400 }}>no</span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Carga: <span style={{ fontWeight: 400 }}>seca</span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Ciudad: <span style={{ fontWeight: 400 }}>Quito</span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Día en ruta: <span style={{ fontWeight: 400 }}>5</span>
                </Typography>
              </Stack>
            )}
            {rol == "cliente" && (
              <Stack
                sx={{
                  alignItems: " center",
                  textAlign: "left",
                }}
                direction="column"
                justifyContent={"center"}
                alignItems={"center"}
                width="100%"
                maxWidth={"600px"}
              >
                <p
                  style={{
                    width: "100%",
                    display: "flex",
                    fontWeight: 500,
                    fontSize: "14px",
                    textAlign: "left",
                    marginBottom: 5,
                  }}
                >
                  Deja tu reseña
                </p>

                <input
                  style={{
                    width: "100%",
                    height: "134px",
                    verticalAlign: "start",
                    borderRadius: "8px",
                    border: "2px solid " + Colors.primary.main,
                    borderColor: Colors.terciary.main,
                  }}
                  {...register("feed", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                ></input>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                    width: "100%",
                    maxWidth: "600px",
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    {...register("score", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <Button
                    sx={{
                      color: "white",
                      backgroundColor: "#007C52",
                      fontWeight: 600,
                    }}
                    onClick={newFeedback()}
                    variant="contained"
                  >
                    Publicar
                  </Button>
                </Box>
              </Stack>
            )}
            {feedback.length > 0 ? (
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    Otras opiniones
                  </p>
                  {feedback.slice(0, visibleComments).map((elem) => (
                    <Stack width={"100%"} mb={2}>
                      <p>{elem.comment}</p>

                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "row",

                          justifyContent: "space-between",
                        }}
                      >
                        <Rating readOnly value={elem.value} />
                        <p
                          style={{
                            color: Colors.secondary.contrastText,
                            fontWeight: 500,
                          }}
                        >
                          {elem.date}
                        </p>
                      </Box>
                    </Stack>
                  ))}
                  {visibleComments < feedback.length && (
                    <p
                      style={{
                        color: Colors.secondary.contrastText,
                        fontWeight: 500,
                        cursor: "pointer",
                        marginTop: "10px",
                      }}
                      onClick={handleShowMore}
                    >
                      Mostrar más opiniones
                    </p>
                  )}
                </Box>
              </Box>
            ) : (
              ""
            )}
          </Stack>
          {!mobile && rol == "admin" && (
            <Stack
              direction="column"
              justifyContent={"flex-start"}
              alignItems="flex-start"
              width="100%"
              maxWidth={"600px"}
              style={{
                border: "1px solid lightgrey",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Typography fontSize="20px" fontWeight={600} mb={5}>
                Información personal
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Nombre:{" "}
                <span style={{ fontWeight: 400 }}>José Luis Alvarez </span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Número de documento:{" "}
                <span style={{ fontWeight: 400 }}>conductor@gmail.com</span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Correo electrónico:{" "}
                <span style={{ fontWeight: 400 }}>40993893</span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Número de contacto:{" "}
                <span style={{ fontWeight: 400 }}>+54 35353535</span>
              </Typography>

              <Typography fontSize="20px" fontWeight={600} my={5}>
                Información del camión
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Marca: <span style={{ fontWeight: 400 }}>Toyota </span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Modelo: <span style={{ fontWeight: 400 }}>Dyna 300</span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Año: <span style={{ fontWeight: 400 }}>2020</span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Matrícula: <span style={{ fontWeight: 400 }}>1245553</span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Capacidad de carga:{" "}
                <span style={{ fontWeight: 400 }}>1 tonelada</span>
              </Typography>

              <Typography fontSize="20px" fontWeight={600} my={5}>
                Información legal
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Licencia de conducir:{" "}
                <span style={{ fontWeight: 400 }}>12345 </span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Afiliación IESS: <span style={{ fontWeight: 400 }}>si</span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Póliza de seguro:{" "}
                <span style={{ fontWeight: 400 }}>2344893</span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Permiso de puerto: <span style={{ fontWeight: 400 }}>no</span>
              </Typography>

              <Typography fontSize="20px" fontWeight={600} my={5}>
                Preferencias de viaje
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Internacional: <span style={{ fontWeight: 400 }}>no</span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Carga: <span style={{ fontWeight: 400 }}>seca</span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Ciudad: <span style={{ fontWeight: 400 }}>Quito</span>
              </Typography>
              <Typography fontSize="16px" fontWeight={600}>
                Día en ruta: <span style={{ fontWeight: 400 }}>5</span>
              </Typography>
            </Stack>
          )}
        </Stack>
      </Container>
    </Stack>
  );
};
