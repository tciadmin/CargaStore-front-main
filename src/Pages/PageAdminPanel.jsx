import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import ChargeItemCard from '../Components/cards/ChargeItemCard';
import { Grid, Container } from '@mui/material';
const fakeData = [
  {
    id: "#fe3f3",
    title: "Ázucar",
    weight: "580 Kgs",
    country: "Argentina",
    dates: "20/12/1990 - 12/12/2025",
    typeCharge: "Seca",
    driver: "Juan Baston",
    requests: "6 solicitudes",
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
  },
  {
    id: "#3edf3f",
    title: "Yerba",
    weight: "580 Kgs",
    country: "Bolivia",
    dates: "20/12/2020 - 12/12/2024",
    typeCharge: "Seca",
    driver: "Yerba Stone",
    requests: "2 solicitudes",
  },
  {
    id: "#3343f3",
    title: "Helado",
    weight: "5 Toneladas",
    country: "Colombia",
    dates: "20/12/2024 - 12/12/2025",
    typeCharge: "Helada",
    driver: "Ceferino Alfredo",
  },
]




export default function PageAdminPanel() {
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(0);
  const [viajes, setViajes] = React.useState(0);
  const handleClick = (value) => {
    setValue(value);
    if (value == 0) {
      setOpen(!open);

    } else {
      setOpen(false);
    }
    const filtrarViajes = (value) => {
      setViajes(value)
    }

  };
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: '#e6e6e6', display: 'flex', width: "100%", height: "100%" }}
    >
      <List
        sx={{ width: '100%', paddingTop: 0, marginRight: "5px", maxWidth: 360, fontWeight: 400, minHeight: "100vh", bgcolor: 'transparent', borderRight: "1px solid lightgrey" }}
        component="nav"
        aria-labelledby="nested-list-subheader"

      >
        <ListItemButton onClick={() => handleClick(0)} sx={{ marginTop: 0, background: value === 0 ? "#fff" : "transparent", color: value === 0 ? "#007C52" : "#000", fontWeight: 200, borderRight: value === 0 ? "2px solid #007C52" : "2px solid transparent" }}>

          <ListItemText primaryTypographyProps={{ fontWeight: value === 0 ? 600 : 400 }} primary="Solicitudes de carga" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => filtrarViajes(0)}>

              <ListItemText primaryTypographyProps={{ fontWeight: 400, color: viajes == 0 ? "primary" : "#000" }} primary="Viajes sin asignar" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => filtrarViajes(1)}>

              <ListItemText primaryTypographyProps={{ fontWeight: 400, color: viajes == 1 ? "primary" : "#000" }} primary="Viajes activos" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => filtrarViajes(2)}>

              <ListItemText primaryTypographyProps={{ fontWeight: 400, color: viajes == 2 ? "primary" : "#000" }} primary="Viajes finalizados" />
            </ListItemButton>

          </List>
        </Collapse>
        <ListItemButton sx={{ color: value === 1 ? "#007C52" : "#000", background: value === 1 ? "#fff" : "transparent", borderRight: value === 1 ? "2px solid #007C52" : "2px solid transparent" }}>

          <ListItemText primaryTypographyProps={{ fontWeight: value === 1 ? 600 : 400 }} primary="Socios Activos" onClick={() => handleClick(1)} />
        </ListItemButton>
      </List>






      <Container>
        {value == 0 &&
          <Grid container flexDirection="column" gap="40px" marginTop={5} >
            {fakeData.map((item) => {
              return <ChargeItemCard style={{ marginTop: "10px" }} id={item.id} title={item.title} typeCharge={item.typeCharge}
                country={item.country} dates={item.dates}
                weight={item.weight} driver={item.driver} requests={item.requests} />

            })}


          </Grid>

        }


      </Container>




    </Box>
  );
}
