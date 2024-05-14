import * as React from "react";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
//? --------------------------------------------- STYLES
import { Colors } from "../../Utils/Colors";
import "./styles.css";

export default function CompFooter() {
  const mobile = useMediaQuery("(max-width:720px)");
  const [openCompany, setOpenCompany] = React.useState(false);
  const [openOffice, setOpenOffice] = React.useState(false);
  const [openLegalPages, setOpenLegalPages] = React.useState(false);

  const handleClickCompany = () => {
    setOpenCompany(!openCompany);
  };
  const handleClickOffice = () => {
    setOpenOffice(!openOffice);
  };
  const handleClickLegalPages = () => {
    setOpenLegalPages(!openLegalPages);
  };
  return (
    <footer style={{ backgoundColor: Colors.primary.contrastText }}>
      {mobile ? (
        <Box className="mobile">
          {/* //? --------------------------------------------- NUESTRA EMPRESA */}
          <List
            className="list"
            sx={{ width: "100%", maxWidth: 720, bgcolor: "background.paper" }}
            component="nav"
          >
            <ListItemButton
              onClick={handleClickCompany}
              style={{ color: Colors.primary.main }}
            >
              <ListItemText primary="Nuestra empresa" />
              {openCompany ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openCompany} timeout="auto" unmountOnExit>
              <List className="list" component="div" disablePadding>
                <ListItemText className="itemList" primary="Quiénes somos" />
                <ListItemText className="itemList" primary="Servicios" />
                <ListItemText className="itemList" primary="Contáctanos" />
              </List>
            </Collapse>
          </List>
          {/* //? --------------------------------------------- NUESTRA OFICINA */}
          <List
            className="list"
            sx={{ width: "100%", maxWidth: 720, bgcolor: "background.paper" }}
            component="nav"
          >
            <ListItemButton
              onClick={handleClickOffice}
              style={{ color: Colors.primary.main }}
            >
              <ListItemText primary="Nuestra oficina" />
              {openOffice ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openOffice} timeout="auto" unmountOnExit>
              <List className="list" component="div" disablePadding>
                <ListItemText className="itemList" primary="TCI Ecuador" />
                <ListItemText className="itemList" primary="TCI Perú" />
                <ListItemText className="itemList" primary="TCI Colombia" />
              </List>
            </Collapse>
          </List>
          {/* //? --------------------------------------------- PÁGINAS LEGALES */}
          <List
            className="list"
            sx={{ width: "100%", maxWidth: 720, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClickLegalPages}
              style={{ color: Colors.primary.main }}
            >
              <ListItemText primary="Páginas legales" />
              {openLegalPages ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openLegalPages} timeout="auto" unmountOnExit>
              <List className="list" component="div" disablePadding>
                <ListItemText
                  className="itemList"
                  primary="Política de privacidad"
                />
                <ListItemText
                  className="itemList"
                  primary="Términos y condiciones"
                />
                <ListItemText
                  className="itemList"
                  primary="Descargo de responsabilidad"
                />
              </List>
            </Collapse>
          </List>
        </Box>
      ) : (
        <Box className="footerContainer">
          <Box>
            <h3 style={{ color: Colors.primary.main }}>Nuestra empresa</h3>

            <p>Quiénes somos</p>
            <p>Servicios</p>
            <p>Contáctanos</p>
          </Box>

          <Box>
            <h3 style={{ color: Colors.primary.main }}>Nuestras oficinas</h3>
            <p>TCI Ecuador</p>
            <p>TCI Perú</p>
            <p>TCI Colombia</p>
          </Box>

          <Box>
            <h3 style={{ color: Colors.primary.main }}>Páginas legales</h3>
            <p>Política de privacidad</p>
            <p>Términos y condiciones</p>
            <p>Descargo de responsabilidad</p>
          </Box>
        </Box>
      )}
    </footer>
  );
}
