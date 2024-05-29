import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar, Button, Stack } from '@mui/material';
import InputForm from '../inputs/InputForm';
import CobroItemCard from '../cards/CobroItemCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [editar, setEditar] = React.useState(0);


  const handleChange = (event, newValue) => {
    setEditar(false);
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: '#e6e6e6', display: 'flex', width: "100%", height: "100%" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: "300px", height: "200vh" }}
      >
        <Tab label="Datos Personales" sx={{ textTransform: "none", background: value == 0 ? "white" : "transparent", width: "100%", alignItems: "flex-start", fontWeight: "bold" }} {...a11yProps(0)} />
        <Tab label="Datos del camión" sx={{ textTransform: "none", background: value == 1 ? "white" : "transparent", width: "100%", alignItems: "flex-start", fontWeight: "bold" }} {...a11yProps(1)} />
        <Tab label="Documentos legales" sx={{ textTransform: "none", background: value == 2 ? "white" : "transparent", width: "100%", alignItems: "flex-start", fontWeight: "bold" }} {...a11yProps(2)} />
        <Tab label="Historial de pagos" sx={{ textTransform: "none", background: value == 3 ? "white" : "transparent", width: "100%", alignItems: "flex-start", fontWeight: "bold" }} {...a11yProps(3)} />

      </Tabs>
      <TabPanel value={value} style={{ width: value == 0 ? "100%" : "0", display: "flex", justifyContent: "center" }} index={0}>

        <Stack display="flex" width={"50vw"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"}>
          {value == 0 && <>  <Avatar
            alt="Admin"
            src="imagen"
            sx={{ width: 100, height: 100, alignSelf: "center" }}
          />
            <InputForm label="Nombre" sizeH='35px' marginT={3} marginB={3} readOnly={!editar} />
            <InputForm label="Apellido" sizeH='35px' marginB={3} readOnly={!editar} />

            <InputForm label="Correo electrónico" type='email' sizeH='35px' marginB={3} readOnly={!editar} />
            <InputForm label="Número de contacto" sizeH='35px' marginB={3} readOnly={!editar} />
            <InputForm label="Descripción" sizeH='150px' marginB={3} readOnly={!editar} sizeXL={true} />
          </>
          }
          {value == 1 && <>  <Avatar
            alt="Admin"
            src="imagen"
            sx={{ width: 100, height: 100, alignSelf: "center" }}
          />
            <InputForm label="Marca" sizeH='35px' marginT={3} marginB={3} readOnly={!editar} />
            <InputForm label="Modelo" sizeH='35px' marginB={3} readOnly={!editar} />

            <InputForm label="Año" type='email' sizeH='35px' marginB={3} readOnly={!editar} />
            <InputForm label="Matrícula" sizeH='35px' marginB={3} readOnly={!editar} />
            <InputForm label="Capacidad de carga" sizeH='35px' marginB={3} readOnly={!editar} />
            <InputForm label="Unidad de carga" sizeH='35px' marginB={3} readOnly={!editar} />

          </>
          }

          {editar ?
            <Button variant="contained" style={{ fontWeight: "bold" }} > Guardar Cambios
            </Button>

            :
            <Button variant="outlined" onClick={() => setEditar(true)} style={{ fontWeight: "bold", width: "80px", alignSelf: "center" }} > Editar
            </Button>

          }
        </Stack>
      </TabPanel>
      <TabPanel value={value} style={{ width: value == 1 ? "100%" : "0", display: "flex", justifyContent: "center" }} index={1}>

        <Stack display="flex" width={"50vw"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"}>
          <Avatar
            alt="Admin"
            src="imagen"
            sx={{ width: 100, height: 100, alignSelf: "center" }}
          />
          <InputForm label="Marca" sizeH='35px' marginT={3} marginB={3} readOnly={!editar} />
          <InputForm label="Modelo" sizeH='35px' marginB={3} readOnly={!editar} />

          <InputForm label="Año" type='email' sizeH='35px' marginB={3} readOnly={!editar} />
          <InputForm label="Matrícula" sizeH='35px' marginB={3} readOnly={!editar} />
          <InputForm label="Capacidad de carga" sizeH='35px' marginB={3} readOnly={!editar} />
          <InputForm label="Unidad de carga" sizeH='35px' marginB={3} readOnly={!editar} />



          {editar ?
            <Button variant="contained" style={{ fontWeight: "bold" }} > Guardar Cambios
            </Button>

            :
            <Button variant="outlined" onClick={() => setEditar(true)} style={{ fontWeight: "bold", width: "80px", alignSelf: "center" }} > Editar
            </Button>

          }
        </Stack>
      </TabPanel>
      <TabPanel value={value} style={{ width: value == 2 ? "100%" : "0", display: "flex", justifyContent: "center" }} index={2}>

        <Stack display="flex" width={"50vw"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"}>
          <Avatar
            alt="Admin"
            src="imagen"
            sx={{ width: 100, height: 100, alignSelf: "center" }}
          />
          <InputForm label="Licencia de conducir" sizeH='35px' marginT={3} marginB={3} readOnly={!editar} />
          <InputForm label="Afiliación IESS" sizeH='35px' marginB={3} readOnly={!editar} />

          <InputForm label="Permiso de puerto" type='text' sizeH='35px' marginB={3} readOnly={!editar} />
          <InputForm label="Matrícula" sizeH='35px' marginB={3} readOnly={!editar} />
          <InputForm label="Póliza de seguro" sizeH='35px' marginB={3} readOnly={!editar} />
          <InputForm label="Unidad de carga" sizeH='35px' marginB={3} readOnly={!editar} />
          <Box style={{ display: "flex", justifyContent: "space-between " }} mb={3} width="100%">
            <Typography style={{ display: "inline", color: "#475367", fontWeight: 500 }} width={"50%"}>Foto de licencia de conducir {editar && <span style={{ color: "red" }}>*</span>}</Typography>
            {editar &&
              <>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="licencia"
                  multiple
                  type="file"

                />
                <label htmlFor="licencia">
                  <Typography style={{ color: "#475367", cursor: "pointer", fontWeight: "bold" }} width={"50%"} >
                    Subir
                  </Typography>
                </label>
              </>
            }


          </Box>
          <Box style={{ display: "flex", justifyContent: "space-between " }} mb={3} width="100%">
            <Typography style={{ display: "inline", color: "#475367", fontWeight: 500 }} >Comprobante de afiliación IESS (PDF) {editar && <span style={{ color: "red" }}>*</span>}</Typography>
            {editar &&
              <>
                <input
                  accept="application/pdf"
                  style={{ display: 'none' }}
                  id="comprobanteAfiliacion"
                  multiple
                  type="file"

                />
                <label htmlFor="comprobanteAfiliacion">
                  <Typography style={{ color: "#475367", cursor: "pointer", fontWeight: "bold" }}  >
                    Subir
                  </Typography>
                </label>
              </>
            }


          </Box>
          <Box style={{ display: "flex", justifyContent: "space-between " }} mb={3} width="100%">
            <Typography style={{ display: "inline", color: "#475367", fontWeight: 500 }} >Comprobante de permiso de puerto (PDF) {editar && <span style={{ color: "red" }}>*</span>}</Typography>
            {editar &&
              <>
                <input
                  accept="application/pdf"
                  style={{ display: 'none' }}
                  id="permisoPuerto"
                  multiple
                  type="file"

                />
                <label htmlFor="permisoPuerto">
                  <Typography style={{ color: "#475367", cursor: "pointer", fontWeight: "bold" }}  >
                    Subir
                  </Typography>
                </label>
              </>
            }


          </Box>
          <Box style={{ display: "flex", justifyContent: "space-between " }} mb={3} width="100%">
            <Typography style={{ display: "inline", color: "#475367", fontWeight: 500 }} >Foto póliza de seguro{editar && <span style={{ color: "red" }}>*</span>}</Typography>
            {editar &&
              <>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="licencia"
                  multiple
                  type="file"

                />
                <label htmlFor="licencia">
                  <Typography style={{ color: "#475367", cursor: "pointer", fontWeight: "bold" }} width={"50%"} >
                    Subir
                  </Typography>
                </label>
              </>
            }


          </Box>


          {editar ?
            <Button variant="contained" style={{ fontWeight: "bold" }} > Guardar Cambios
            </Button>

            :
            <Button variant="outlined" onClick={() => setEditar(true)} style={{ fontWeight: "bold", width: "80px", alignSelf: "center" }} > Editar
            </Button>

          }
        </Stack>
      </TabPanel>
      <TabPanel value={value} style={{ width: value == 3 ? "100%" : "0", display: "flex", justifyContent: "center" }} index={3}>

        <Stack display="flex" width={"50vw"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"}>
          <Box


            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent={"center"}


            sx={{ border: '2px solid #D0D5DD', padding: "30px 50px", borderRadius: "5px" }}
          ><CobroItemCard title="Bobinas de papel" countrys={"Perú - Bolivia"} typeCharge={"Seca"} date={"20/06/2024"} price={4000} discount={"20% de descuento por comisión"}></CobroItemCard>
            <CobroItemCard title="Bobinas de papel" countrys={"Perú - Bolivia"} typeCharge={"Seca"} date={"20/06/2024"} price={4000} discount={"20% de descuento por comisión"}></CobroItemCard>
            <CobroItemCard title="Bobinas de papel" countrys={"Perú - Bolivia"} typeCharge={"Seca"} date={"20/06/2024"} price={4000} discount={"20% de descuento por comisión"}></CobroItemCard>
            <CobroItemCard title="Bobinas de papel" countrys={"Perú - Bolivia"} typeCharge={"Seca"} date={"20/06/2024"} price={4000} discount={"20% de descuento por comisión"}></CobroItemCard>


          </Box>





        </Stack>
      </TabPanel>


    </Box>
  );
}
