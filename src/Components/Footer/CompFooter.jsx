import * as React from 'react';
//? --------------------------------------------- MUI
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
//? --------------------------------------------- STYLES
import { Colors } from '../../Utils/Colors';
import './styles.css';
import { Stack } from '@mui/material';

export default function CompFooter() {
  const mobile = useMediaQuery('(max-width:720px)');
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
    <footer
      style={{
        backgoundColor: Colors.primary.contrastText,
        marginTop: mobile ? '50px' : '250px',
      }}
    >
      {mobile ? (
        <Box className="mobile">
          {/* //? --------------------------------------------- NUESTRA EMPRESA */}
          <List
            className="list"
            sx={{
              width: '100%',
              maxWidth: 720,
              bgcolor: 'background.paper',
            }}
            component="nav"
          >
            <ListItemButton
              onClick={handleClickCompany}
              style={{ color: Colors.primary.main }}
            >
              <ListItemText
                fontWeight={400}
                primary="Nuestra empresa"
              />
              {openCompany ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openCompany} timeout="auto" unmountOnExit>
              <List className="list" component="div" disablePadding>
                <ListItemText
                  className="itemList"
                  primary="Quiénes somos"
                />
                <ListItemText
                  className="itemList"
                  primary="Servicios"
                />
                <ListItemText
                  className="itemList"
                  primary="Contáctanos"
                />
              </List>
            </Collapse>
          </List>
          {/* //? --------------------------------------------- NUESTRA OFICINA */}
          <List
            className="list"
            sx={{
              width: '100%',
              maxWidth: 720,
              bgcolor: 'background.paper',
            }}
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
                <ListItemText
                  className="itemList"
                  primary="Ecuador"
                />
                <ListItemText className="itemList" primary="Perú" />
                <ListItemText
                  className="itemList"
                  primary="Colombia"
                />
              </List>
            </Collapse>
          </List>
          {/* //? --------------------------------------------- PÁGINAS LEGALES */}
          <List
            className="list"
            sx={{
              width: '100%',
              maxWidth: 720,
              bgcolor: 'background.paper',
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClickLegalPages}
              style={{ color: Colors.primary.main }}
            >
              <ListItemText
                sx={{ fontWeight: 400 }}
                primary="Páginas legales"
              />
              {openLegalPages ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={openLegalPages}
              timeout="auto"
              unmountOnExit
            >
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
          <Stack
            direction="row"
            width="600vw"
            justifyContent="space-around"
          >
            <Box>
              <h3
                style={{
                  color: Colors.primary.main,
                  fontWeight: 400,
                  marginBottom: '30px',
                  fontSize: '20px',
                }}
              >
                Nuestra empresa
              </h3>

              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  marginBottom: '20px',
                }}
              >
                Quiénes somos
              </p>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  marginBottom: '20px',
                }}
              >
                Servicios
              </p>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  marginBottom: '20px',
                }}
              >
                Contáctanos
              </p>
            </Box>

            <Box>
              <h3
                style={{
                  color: Colors.primary.main,
                  fontWeight: 400,
                  marginBottom: '30px',
                  fontSize: '20px',
                }}
              >
                Nuestras oficinas
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  marginBottom: '20px',
                }}
              >
                Ecuador
              </p>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  marginBottom: '20px',
                }}
              >
                Perú
              </p>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  marginBottom: '20px',
                }}
              >
                Colombia
              </p>
            </Box>

            <Box>
              <h3
                style={{
                  color: Colors.primary.main,
                  fontWeight: 400,
                  marginBottom: '30px',
                  fontSize: '20px',
                }}
              >
                Páginas legales
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  marginBottom: '20px',
                }}
              >
                Política de privacidad
              </p>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  marginBottom: '20px',
                }}
              >
                Términos y condiciones
              </p>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  marginBottom: '20px',
                }}
              >
                Descargo de responsabilidad
              </p>
            </Box>
          </Stack>
        </Box>
      )}
    </footer>
  );
}
