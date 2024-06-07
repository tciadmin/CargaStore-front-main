import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Grid, useMediaQuery, Menu, MenuItem } from "@mui/material";
import MarketplaceCard from "../Components/cards/MarketplaceCard";
import { Colors } from "../Utils/Colors";
import CompNavLanding from "../Components/NavLanding/CompNavLanding";

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
          <Typography> {children}</Typography>
        </Box>
      )}
    </div>
  );
}
const enviosFake = [
  {
    title: "bobinas de papel",
    price: 12000,
    weight: "1 tonelada",
    typeCharge: "seca",
    image: "/marketplace/10.png",
    international: false,
  },
  {
    title: "Gas botano",
    price: 2000,
    weight: "123m3",
    typeCharge: "peligrosa",
    image: "/marketplace/9.png",
    international: true,
  },
  {
    title: "Maíz",
    price: 15000,
    weight: "2 tonelada",
    typeCharge: "seca",
    image: "/marketplace/8.png",
    international: false,
  },
  {
    title: "Libros",
    price: 2000,
    weight: "100 kilos",
    typeCharge: "seca",
    image: "/marketplace/7.png",
    international: false,
  },
  {
    title: "Remedio para niños",
    price: 1000,
    weight: "640 kilos",
    typeCharge: "refrigerada",
    image: "/marketplace/10.png",
    international: false,
  },
  {
    title: "Disolvente universal",
    price: 8000,
    weight: "300 kilos",
    typeCharge: "líquido",
    image: "/marketplace/6.png",
    international: true,
  },
  {
    title: "Leña",
    price: 10000,
    weight: "10 kilos",
    typeCharge: "seco",
    image: "/marketplace/9.png",
    international: false,
  },
  {
    title: "Alimento para perro",
    price: 13000,
    weight: "13 kilos",
    typeCharge: "seco",
    image: "/marketplace/6.png",
    international: true,
  },
  {
    title: "Tierra orgánica",
    price: 70000,
    weight: "1 tonelada",
    typeCharge: "seco",
    image: "/marketplace/6.png",
    international: true,
  },
  {
    title: "bobinas de papel",
    price: 12000,
    weight: "1 tonelada",
    typeCharge: "seca",
    image: "/marketplace/10.png",
    international: false,
  },
  {
    title: "Gas botano",
    price: 2000,
    weight: "123m3",
    typeCharge: "peligrosa",
    image: "/marketplace/9.png",
    international: true,
  },
  {
    title: "Maíz",
    price: 15000,
    weight: "2 tonelada",
    typeCharge: "seca",
    image: "/marketplace/8.png",
    international: false,
  },
  {
    title: "Libros",
    price: 2000,
    weight: "100 kilos",
    typeCharge: "seca",
    image: "/marketplace/7.png",
    international: false,
  },

  {
    title: "Disolvente universal",
    price: 8000,
    weight: "300 kilos",
    typeCharge: "líquido",
    image: "/marketplace/6.png",
    international: true,
  },
];

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

export default function PageMarketplace() {
  const [value, setValue] = useState(0);
  const mobile = useMediaQuery("(max-width:720px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [national, setNational] = useState(
    enviosFake.filter((item) => item.international == false)
  );
  const [international, setInternational] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickPending = () => {
    setAnchorEl(null);
    setNational(enviosFake.filter((item) => item.international == false));
    setInternational(null);
  };
  const clickAccredited = () => {
    setAnchorEl(null);
    setNational(null);
    setInternational(enviosFake.filter((item) => item.international == true));
  };

  const enviosNacionales = enviosFake.filter(
    (item) => item.international == false
  );
  const enviosInternacionales = enviosFake.filter(
    (item) => item.international == true
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <CompNavLanding></CompNavLanding>
      <Box>
        {mobile ? (
          <>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
              }}
            >
              {national !== null ? (
                <h2>Envíos nacionales</h2>
              ) : (
                <h2>Envíos internacionales</h2>
              )}
              <img
                onClick={handleClick}
                style={{
                  backgroundColor: Colors.primary.constrastText,
                  cursor: "pointer",
                }}
                src="/src/assets/imgShipments/ArrowDashboard.svg"
              />

              <Menu
                value={value}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  name="Pendientes"
                  value="0"
                  onClick={clickPending}
                  style={{
                    fontWeight: 500,
                    color: national !== null ? Colors.primary.main : "",
                  }}
                >
                  Envíos nacionales
                </MenuItem>
                <MenuItem
                  name="Asignado"
                  value="1"
                  onClick={clickAccredited}
                  style={{
                    fontWeight: 500,
                    color: international !== null ? Colors.primary.main : "",
                  }}
                >
                  Envíos internacionales
                </MenuItem>
              </Menu>
            </Box>
            {national !== null ? (
              <Box
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  padding: "20px",
                  
                }}
              >
                {enviosNacionales.map((item) => (
                  <Box
                    style={{
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      justyfyContent: "center",
                      gap: "5px",
                    }}
                  >
                    <img style={{ height: 200, width: 200 }} src={item.image} />
                    <span style={{ fontWeight: 600 }}>
                      {" "}
                      Valor ofertado:{" "}
                      <p style={{ fontWeight: 400 }}> {item.price}</p>
                    </span>
                    <p> {item.title}</p>
                    <p> {item.weight}</p>
                    <p>{item.typeCharge}</p>
                  </Box>
                ))}
              </Box>
            ) : (
              <Box
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  padding: "20px",
                }}
              >
                {enviosInternacionales.map((item) => (
                  <Box
                    style={{
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      justyfyContent: "center",
                      gap: "5px",
                    }}
                  >
                    <img style={{ height: 200, width: 200 }} src={item.image} />
                    <span style={{ fontWeight: 600 }}>
                      {" "}
                      Valor ofertado:{" "}
                      <p style={{ fontWeight: 400 }}> {item.price}</p>
                    </span>
                    <p> {item.title}</p>
                    <p> {item.weight}</p>
                    <p>{item.typeCharge}</p>
                  </Box>
                ))}
              </Box>
            )}
          </>
        ) : (
          <Box sx={{ width: "90%", margin: "30px auto" }}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Tabs
                variant="secondary"
                value={value}
                onChange={handleChange}
                aria-label="envios tabs"
              >
                <Tab
                  label={
                    <Box
                      display={"flex"}
                      justifyContent={"space-around"}
                      alignItems="center"
                    >
                      <Typography
                        variant="p"
                        marginLeft={1}
                        textTransform={"none"}
                      >
                        Envios nacionales
                      </Typography>
                    </Box>
                  }
                  {...a11yProps(0)}
                  color="secondary"
                />

                <Tab
                  label={
                    <Box
                      display={"flex"}
                      justifyContent={"space-around"}
                      alignItems="center"
                    >
                      <Typography
                        variant="p"
                        marginLeft={1}
                        textTransform={"none"}
                      >
                        Envios internacionales
                      </Typography>
                    </Box>
                  }
                  {...a11yProps(1)}
                  color="secondary"
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Grid container spacing={3}>
                {enviosNacionales.map((item) => (
                  <Grid item xs={6} sm={4} md={3} lg={2.4}>
                    <MarketplaceCard
                      image={item.image}
                      title={item.title}
                      weight={item.weight}
                      price={item.price}
                      typeCharge={item.typeCharge}
                    ></MarketplaceCard>
                  </Grid>
                ))}
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Grid container spacing={3}>
                {enviosInternacionales.map((item) => (
                  <Grid item xs={6} sm={4} md={3} lg={2.4}>
                    <MarketplaceCard
                      image={item.image}
                      title={item.title}
                      weight={item.weight}
                      price={item.price}
                      typeCharge={item.typeCharge}
                    ></MarketplaceCard>
                  </Grid>
                ))}
              </Grid>
            </CustomTabPanel>
          </Box>
        )}
        {mobile ? (
          <Box
            style={{
              display: "flex",
              alignItems: "right",
              justifyContent: "right",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <img src="/imgShipments/QuestionIcon.svg" />
          </Box>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}
