import { useState } from "react";
import { Stack, Button, Typography, Box, Rating, Card } from "@mui/material";
import Profile from "../../assets/Profile/Profile.png";
import Profile4 from "../../assets/Profile/Profile4.png";
import CompNavLanding from "../NavLanding/CompNavLanding";
import { Colors } from "../../Utils/Colors";

export const CompProfile = () => {
  const [value, setValue] = useState(2);
  const [showMore, setShowMore] = useState(false);
  const [value2, setValue2] = useState(5);
  const [visibleComments, setVisibleComments] = useState(2);

  const handleClick = () => {
    setShowMore(!showMore);
  };
  const handleShowMore = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 2);
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

      <Stack
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
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
            <img src="/imgShipments/DriverDetails.jpg" />
          </Box>
          <p>José Luis Alvarez</p>
          <p style={{ color: Colors.secondary.contrastText }}>
            Socio desde 01/10/2022
          </p>
          <Box sx={{ width: "50%", padding: "20px" }}>
            <p>
              Hola, soy José Luis. Llevo un año siendo parte de esta increíble
              empresa de envíos. Desde que me uní, me he comprometido al máximo
              con mi rol de socio y responsable. Mi trabajo consiste en
              asegurarme de que cada paquete llegue a su destino de manera
              segura y puntual. Me apasiona trabajar en equipo y encontrar
              soluciones eficientes para cualquier desafío que se presente en el
              camino
            </p>
          </Box>
        </Box>
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: " center",
              backgroundColor: Colors.primary.contrastText,
              padding: 30,
              borderRadius: "8px",
              border: "2px solid",
              borderColor: Colors.terciary.main,
              height: "107px",
              width: "184px",
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
              textAlign: " center",
              backgroundColor: Colors.primary.contrastText,
              padding: 30,
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
              backgroundColor: Colors.primary.contrastText,
              padding: 30,
              borderRadius: "8px",
              border: "2px solid",
              borderColor: Colors.terciary.main,
              height: "107px",
              width: "184px",
              fontWeight: 600,
            }}
          >
            <p>398 </p>
            <p>Reseñas</p>
          </Box>
        </Stack>

        <Stack
          sx={{
            alignItems: " center",
            textAlign: "left",
          }}
        >
          <p
            style={{
              width: "50%",
              display: "flex",
              fontWeight: 600,
            }}
          >
            Deja tu reseña
          </p>
          <input
            style={{
              width: "50%",
              height: "134px",
              borderRadius: "8px",
              border: "2px solid",
              borderColor: Colors.terciary.main,
            }}
          ></input>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 400,
              padding: 10,
            }}
          >
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography sx={{ color: "white" }}>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#007C52",
                  fontWeight: 600,
                }}
                variant="contained"
              >
                Publicar
              </Button>
            </Typography>
          </Box>
        </Stack>
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
              width: "50%",
            }}
          >
            <p
              style={{
                fontWeight: 600,
              }}
            >
              Otras opiniones
            </p>
            {comments.slice(0, visibleComments).map((elem) => (
              <Stack>
                <p>{elem.comment}</p>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 400,
                    padding: 10,
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
            {visibleComments < comments.length && (
              <p
                style={{
                  color: Colors.secondary.contrastText,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
                onClick={handleShowMore}
              >
                Mostrar más opiniones
              </p>
            )}
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
