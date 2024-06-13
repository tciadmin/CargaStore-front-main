import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import ChargeItemCard from "../Components/cards/ChargeItemCard";
import { Grid, Container, useMediaQuery, Stack, Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CompRequests } from "../Components/Requests/CompRequests";
const fakeData = [
  {
    id: "#fe3f3",
    title: "Ázucar",
    weight: "580 Kgs",
    country: "Argentina",
    dates: "20/12/1990 - 12/12/2025",
    typeCharge: "Seca",
    driver: "Juan Baston",
    image: "/marketplace/6.png",
    notAssigned: false,
    active: true,
    done: false,
  },
  {
    id: "#fe3f3",
    title: "Ázucar",
    weight: "580 Kgs",
    country: "Argentina",
    dates: "20/12/1990 - 12/12/2025",
    typeCharge: "Seca",
    driver: "Juan Baston",
    requests: "6 solicitudes",
    image: "/marketplace/6.png",
    notAssigned: true,
    active: false,
    done: false,
  },
  {
    id: "#3edf3f",
    title: "Yerba",
    weight: "580 Kgs",
    country: "Bolivia",
    dates: "20/12/2020 - 12/12/2024",
    typeCharge: "Seca",
    driver: "Yerba Stone",
    image: "/marketplace/6.png",
    notAssigned: false,
    active: false,
    done: true,
  },
  {
    id: "#3343f3",
    title: "Helado",
    weight: "5 Toneladas",
    country: "Colombia",
    dates: "20/12/2024 - 12/12/2025",
    typeCharge: "Helada",

    driver: "Ceferino Alfredo",
    image: "/marketplace/6.png",
    notAssigned: false,
    active: true,
    donde: false,
  },
];

export default function PageAdminPanel({ seccion = 0 }) {
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(seccion);
  const mobile = useMediaQuery("(max-width:720px)");
  const navigate = useNavigate();
  const secciones = [ "Viajes sin asignar", "Viajes Activos", "Viajes finalizados","Socios Activos"]

  const clickSocios = (value) => {
    setValue(value);
    setOpen(false);

  };

  return (
    <Box
      sx={{
        bgcolor: "#e6e6e6",
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        justifyContent: mobile ? "flex-start" : "space-between",
        width: "100vw",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      {mobile ? (
        <h2 style={{ padding: "20px" }}>{value > 0 && secciones[value-1]}</h2>
      ) : (
        <Box
          sx={{

            bgcolor: "#e6e6e6",
            width: "250px",
            height: "100%",
          }}
        >
          <List
            sx={{
              width: "250px",
              paddingTop: 0,
              marginRight: "5px",
              maxWidth: 360,
              fontWeight: 400,
              minHeight: "100vh",
              bgcolor: "transparent",
              borderRight: "1px solid lightgrey",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={() => {
                setOpen(!open);
                setValue(0);
              }}
              sx={{
                marginTop: 0,
                background: open ? "#fff" : "transparent",
                color: open ? "#007C52" : "#000",
                fontWeight: 200,
                borderRight:
                  open ? "2px solid #007C52" : "2px solid transparent",
                width: "100%"
              }}
            >
              <ListItemText
                primaryTypographyProps={{ fontWeight: open ? 600 : 400 }}
                primary="Solicitudes de carga"
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setValue(1)}

                >
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: 400,
                      color: value == 1 ? "primary" : "#000",
                    }}
                    primary="Viajes sin asignar"
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={() => setValue(2)}>
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: 400,
                      color: value == 2 ? "primary" : "#000",
                    }}
                    primary="Viajes activos"
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={() => setValue(3)}>
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: 400,
                      color: value == 3 ? "primary" : "#000",
                    }}
                    primary="Viajes finalizados"
                  />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton
              sx={{
                color: value === 4 && !open ? "#007C52" : "#000",
                background: value === 4 && !open ? "#fff" : "transparent",
                borderRight:
                  value === 4 && !open ? "2px solid #007C52" : "2px solid transparent",
              }}
            >
              <ListItemText
                primaryTypographyProps={{ fontWeight: value === 4 && !open ? 600 : 400 }}
                primary="Socios Activos"
                onClick={() => clickSocios(4)}
              />
            </ListItemButton>
          </List>
        </Box>
      )}
      {value == 0 && 
      
      
<Stack direction="row" justifyContent={"flex-start"} maxWidth={"100%"}>
      <CompRequests></CompRequests>
      </Stack>
      }

      {mobile && value == 1 && (
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            placeItems: "center",
            gap: "5px",
            width: "100vw"
          }}
        >
          {fakeData.map((item) => {
            if (item.notAssigned) {
              return (
                <Box
                  style={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justyfyContent: "center",
                    gap: "5px",
                  }}
                >
                  <img style={{ height: 200, width: "100%", maxWidth: 200 }} src={item.image} />
                  <p>{item.id}</p>
                  <p> {item.title}</p>
                  <p> {item.country}</p>
                  <p>{item.typeCharge}</p>
                  <p> {item.driver}</p>
                </Box>
              )
            }
          })}
        </Box>
      )}
      {!mobile && value == 1 && (
        <Container fluid>
          <Grid container flexDirection="column" gap="40px" marginTop={5}>
            {fakeData.map((item) => {
              if (item.notAssigned) {
                return (
                  <ChargeItemCard
                    style={{ marginTop: "10px" }}
                    id={item.id}
                    title={item.title}
                    typeCharge={item.typeCharge}
                    country={item.country}
                    dates={item.dates}
                    weight={item.weight}
                    driver={item.driver}
                    requests={item.requests}
                  />
                )
              }
            }
            )}

          </Grid>
        </Container>
      )}





      {mobile && value == 2 && (
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            placeItems: "center",
            gap: "5px",
            width: "100vw"
          }}
        >
          {fakeData.map((item) => {
            if (item.active) {
              return (
                <Box
                  style={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justyfyContent: "center",
                    gap: "5px",
                  }}
                >
                  <img style={{ height: 200, width: "100%", maxWidth: 200 }} src={item.image} />
                  <p>{item.id}</p>
                  <p> {item.title}</p>
                  <p> {item.country}</p>
                  <p>{item.typeCharge}</p>
                  <p> {item.driver}</p>
                </Box>
              )
            }
          })}
        </Box>
      )}
      {!mobile && value == 2 && (
        <Container fluid>
          <Grid container flexDirection="column" gap="40px" marginTop={5}>
            {fakeData.map((item) => {
              if (item.active) {
                return (
                  <ChargeItemCard
                    style={{ marginTop: "10px" }}
                    id={item.id}
                    title={item.title}
                    typeCharge={item.typeCharge}
                    country={item.country}
                    dates={item.dates}
                    weight={item.weight}
                    driver={item.driver}
                    requests={item.requests}
                  />
                )
              }
            }
            )}

          </Grid>
        </Container>
      )}


      {mobile && value == 3 && (
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            placeItems: "center",
            gap: "5px",
            width: "100vw"
          }}
        >
          {fakeData.map((item) => {
            if (item.done) {
              return (
                <Box
                  style={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justyfyContent: "center",
                    gap: "5px",
                  }}
                >
                  <img style={{ height: 200, width: "100%", maxWidth: 200 }} src={item.image} />
                  <p>{item.id}</p>
                  <p> {item.title}</p>
                  <p> {item.country}</p>
                  <p>{item.typeCharge}</p>
                  <p> {item.driver}</p>
                </Box>
              )
            }
          })}
        </Box>
      )}
      {!mobile && value == 3 && (
        <Container fluid>
          <Grid container flexDirection="column" gap="40px" marginTop={5}>
            {fakeData.map((item) => {
              if (item.done) {
                return (
                  <ChargeItemCard
                    style={{ marginTop: "10px" }}
                    id={item.id}
                    title={item.title}
                    typeCharge={item.typeCharge}
                    country={item.country}
                    dates={item.dates}
                    weight={item.weight}
                    driver={item.driver}
                    requests={item.requests}
                  />
                )
              }
            }
            )}

          </Grid>
        </Container>
      )}





      {
        value == 4 &&
        <Container fluid>
          <Stack direction="column" justifyContent={"center"} spacing={2} width="100%" maxWidth={"1200px"} mt={5} >
            <Stack direction="row" justifyContent={"space-between"} alignItems={"center"} p={2} width="100%" sx={{ background: "#fff", borderRadius: "5px" }}>
              <Stack direction={"row"} justifyContent={"flex-start"} spacing={2} alignItems={"center"}>
                <Avatar mr={2}></Avatar>
                <Typography fontSize="16px">Emanuel Ginobili</Typography>
              </Stack>
              <svg style={{ cursor: "pointer" }} onClick={() => navigate("/conductor")} width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5733 7C19.5733 10.3133 15.3779 13 10.2027 13C5.0274 13 0.832031 10.3133 0.832031 7C0.832031 3.68667 5.0274 1 10.2027 1C15.3779 1 19.5733 3.68667 19.5733 7Z" stroke="#007C52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.546 7.00047C12.575 7.8529 12.1349 8.65321 11.3982 9.08797C10.6614 9.52272 9.74532 9.52272 9.00858 9.08797C8.27185 8.65321 7.83178 7.8529 7.86072 7.00047C7.83178 6.14804 8.27185 5.34773 9.00858 4.91298C9.74532 4.47823 10.6614 4.47823 11.3982 4.91298C12.1349 5.34773 12.575 6.14804 12.546 7.00047V7.00047Z" stroke="#007C52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Stack>

            <Stack direction="row" justifyContent={"space-between"} alignItems={"center"} p={2} width="100%" sx={{ background: "#fff", borderRadius: "5px" }}>
              <Stack direction={"row"} justifyContent={"flex-start"} spacing={2} alignItems={"center"}>
                <Avatar mr={2}></Avatar>
                <Typography fontSize="16px">Juan Perez</Typography>
              </Stack>
              <svg style={{ cursor: "pointer" }} onClick={() => navigate("/conductor")} width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5733 7C19.5733 10.3133 15.3779 13 10.2027 13C5.0274 13 0.832031 10.3133 0.832031 7C0.832031 3.68667 5.0274 1 10.2027 1C15.3779 1 19.5733 3.68667 19.5733 7Z" stroke="#007C52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.546 7.00047C12.575 7.8529 12.1349 8.65321 11.3982 9.08797C10.6614 9.52272 9.74532 9.52272 9.00858 9.08797C8.27185 8.65321 7.83178 7.8529 7.86072 7.00047C7.83178 6.14804 8.27185 5.34773 9.00858 4.91298C9.74532 4.47823 10.6614 4.47823 11.3982 4.91298C12.1349 5.34773 12.575 6.14804 12.546 7.00047V7.00047Z" stroke="#007C52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Stack>

          </Stack>
        </Container>
      }
      {/* {mobile ? (
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
      )} */}
    </Box>
  );
}
