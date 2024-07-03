/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Alert, Avatar, Button, Container, Grid, Paper, Snackbar, Stack, useMediaQuery } from '@mui/material';
import ResponsiveImageBox from '../imageComponents/ResponsiveImageBox'
import InputForm from '../inputs/InputForm';
import CobroItemCard from '../cards/CobroItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../Redux/Actions/UserActions/userActions';
import Cookies from 'js-cookie';
//Agregar setter a todos los campos
//Agregar al backend la posibilidad de editar
// Validar datos editados antes de que se guarden en la base de datos
//mostrar errores y mensaje de guardado
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
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [errorValidation,setErrorValidation]=React.useState({value: false, message: "Mensaje incorrecto"});
  const [dataChanged,setDataChanged] = React.useState(true)


  const [editar, setEditar] = React.useState(0);
  const { user } = useSelector(state => state.user);
  React.useEffect(() => {
    dispatch(getUser(Cookies.get("id")));
    setData(user);
    setEditar(false);
  }, []);
  const [data, setData] = React.useState(user);

  React.useEffect(() => {
    if (!editar) {
      setData(user);
    }

  }, [user])
  const mobile = useMediaQuery("(max-width: 750px)");
  const driverOptionsMobile = ["Datos Personales", "Datos del camión", "Documentos Legales", "Historial de cobros"]
  const containerBox = mobile ? { flexGrow: 1, bgcolor: '#e6e6e6', display: 'flex', flexDirection: "column", maxWidth: "100%", height: "100%" } : { flexGrow: 1, bgcolor: '#e6e6e6', display: 'flex', width: "100%", height: "100%" }
  const clientOptionsMobile = ["Datos Personales", "Configuración de la cuenta", "Configuración de pagos", "Historial de cobros"]

  const handleInputClient = (value, name) => {

    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

 const putBasicDataClient = ()=> {
  if(!data.name ){
    setErrorValidation({value: true, message: "El campo nombre debe completarse"})
  }else if(!data.lastname){
    setErrorValidation({value: true, message: "El campo apellido debe completarse"})

  }else{
    const regex = /^[a-zA-Z\s]+$/;
        if(regex.test(data.name) == false){
      setErrorValidation({value: true, message: "Su nombre no puede contener carácteres especiales ni números"})

    }else if(regex.test(data.lastname) == false){
      setErrorValidation({value: true, message: "Su apellido no puede contener carácteres especiales ni números"})

    }else{
      setDataChanged(true)

    }
  }

 }
 const putCustomerDataClient = ()=> {
  if(!data.customer.company_name ){
    setErrorValidation({value: true, message: "El nombre de la empresa debe completarse"})
  }else if(!data.customer.address){
    setErrorValidation({value: true, message: "La dirección es obligatoria"})

  }else{
    const regex = /^[a-zA-Z0-9.\-'\s]+$/;
            if(regex.test(data.customer.company_name) == false){
      setErrorValidation({value: true, message: "El nombre de su empresa no puede contener carácteres especiales "})

    }else if(regex.test(data.customer.address) == false){
      setErrorValidation({value: true, message: "La dirección no puede contener carácteres especiales "})

    }else{
      setDataChanged(true)

    }
  }

 }
  // const putDataDriver = ()=>{
  // }


  const handleChange = (event, newValue) => {
    setEditar(false);
    setData(user);
    setValue(newValue);
  };

  return (
    <Box
      pb={5}
      sx={containerBox}

    >
      {mobile &&
        <Container>
          <Stack direction="row" justifyContent={"space-between"} style={{ padding: "10px 0" }} alignContent={"center"}>
            <Typography fontSize={"20px"} fontWeight={600}>{user.role == "driver" ? driverOptionsMobile[value] : clientOptionsMobile[value]}</Typography>
            <div style={{ height: "100%", position: "relative" }}>
              <Button variant="terciary"
                onClick={() => setOpen(!open)}
              >
                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.7869 1.2809L8.51452 8.78006C8.44698 8.84978 8.36677 8.9051 8.27849 8.94284C8.1902 8.98058 8.09557 9 8 9C7.90443 9 7.8098 8.98058 7.72151 8.94284C7.63323 8.9051 7.55302 8.84978 7.48548 8.78006L0.213121 1.2809C0.0766618 1.14018 0 0.949334 0 0.750333C0 0.551332 0.0766618 0.360482 0.213121 0.219767C0.34958 0.0790523 0.534658 0 0.72764 0C0.920622 0 1.1057 0.0790523 1.24216 0.219767L8 7.1893L14.7578 0.219767C14.8254 0.150092 14.9056 0.0948231 14.9939 0.0571154C15.0822 0.0194076 15.1768 0 15.2724 0C15.3679 0 15.4625 0.0194076 15.5508 0.0571154C15.6391 0.0948231 15.7193 0.150092 15.7869 0.219767C15.8544 0.289442 15.908 0.372158 15.9446 0.463193C15.9812 0.554227 16 0.651798 16 0.750333C16 0.848868 15.9812 0.946439 15.9446 1.03747C15.908 1.12851 15.8544 1.21122 15.7869 1.2809Z" fill="#007C52" />
                </svg>
              </Button>
              {
                open &&
                <Paper style={{ maxWidth: "500px", width: "200px", position: "absolute", right: "25px ", top: "30px", zIndex: 10 }}>
                  {user.role == "driver" && driverOptionsMobile.map((option, index) => <Button variant='terciary' key={index} sx={{ fontSize: "14px", textAlign: "start", width: "100%", display: "inline-block", fontWeight: value == index ? 600 : 400, color: value == index ? "#007C52" : "black" }} onClick={() => setValue(index)}>{option}</Button>
                  )}
                  {user.role == "customer" && clientOptionsMobile.map((option, index) => <Button variant='terciary' key={index} sx={{ fontSize: "14px", textAlign: "start", width: "100%", display: "inline-block", fontWeight: value == index ? 600 : 400, color: value == index ? "#007C52" : "black" }} onClick={() => setValue(index)}>{option}</Button>
                  )}

                </Paper>
              }

            </div>
          </Stack>
        </Container>
      }

      {!mobile && user.role == "driver" &&
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
      }
      {!mobile && user.role == "customer" &&
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider', width: "300px", height: "200vh" }}
        >
          <Tab label="Datos Personales" sx={{ textTransform: "none", background: value == 0 ? "white" : "transparent", width: "100%", alignItems: "flex-start", fontWeight: "bold" }} {...a11yProps(0)} />
          <Tab label="Configuración de cuenta" sx={{ textTransform: "none", background: value == 1 ? "white" : "transparent", width: "100%", alignItems: "flex-start", fontWeight: "bold" }} {...a11yProps(1)} />
          <Tab label="Configuración de pagos" sx={{ textTransform: "none", background: value == 2 ? "white" : "transparent", width: "100%", alignItems: "flex-start", fontWeight: "bold" }} {...a11yProps(2)} />
          <Tab label="Historial de pagos" sx={{ textTransform: "none", background: value == 3 ? "white" : "transparent", width: "100%", alignItems: "flex-start", fontWeight: "bold" }} {...a11yProps(3)} />

        </Tabs>
      }

      <TabPanel value={value} style={{ width: value == 0 ? "100%" : "0", display: "flex", justifyContent: "center" }} index={0}>

        <Stack display="flex" width={mobile ? "85vw" : "50vw"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"}>
          <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>

            {editar ?
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="avatar"

                type="file"

              /> : ""
            }
            <label htmlFor="avatar">
              <Avatar
                alt="Profile"
                src="imagen"
                sx={{
                  width: 100,
                  height: 100,
                  alignSelf: "center",
                  cursor: editar ? "cell" : "default"
                }}
              />

            </label>


          </div>
          {value == 0 && user.role === "driver" && <>

            <InputForm value={data.name} setter={(valor) => handleInputClient(valor, "name")} label="Nombre" sizeH='35px' marginT={3} marginB={3} readOnly={!editar} />
            <InputForm value={data.lastname} setter={(valor) => handleInputClient(valor, "lastname")} label="Apellido" sizeH='35px' marginB={3} readOnly={!editar} />

            <InputForm value={data.email} setter={(valor) => handleInputClient(valor, "email")} label="Correo electrónico" type='email' sizeH='35px' marginB={3} readOnly={!editar} />
            <InputForm value={data.name} setter={(valor) => handleInputClient(valor, "name")} label="Número de contacto" sizeH='35px' marginB={3} readOnly={!editar} />
            <InputForm value={data.name} setter={(valor) => handleInputClient(valor, "name")} label="Descripción" sizeH='150px' marginB={3} readOnly={!editar} sizeXL={true} />
          </>
          }
          {value == 0 && user.role === "customer" && <>

            <InputForm value={data.name} setter={(valor) => handleInputClient(valor, "name")} label="Nombre" sizeH='35px' marginT={3} marginB={3} readOnly={!editar} />
            <InputForm value={data.lastname} setter={(valor) => handleInputClient(valor, "lastname")} label="Apellido" sizeH='35px' marginB={3} readOnly={!editar} />
            <InputForm value={data.email} setter={(valor) => handleInputClient(valor, "email")} label="Correo electrónico" type='email' sizeH='35px' marginB={3} readOnly={!editar} />

          </>
          }

          {editar ?
            <Button variant="contained" style={{ fontWeight: "bold" }} onClick={() => {
              putBasicDataClient()}} > Guardar Cambios
            </Button>
            :
            <Button variant="outlined" onClick={() => setEditar(true)} style={{ fontWeight: "bold", width: "80px", alignSelf: "center" }} > Editar
            </Button>

          }
        </Stack>
      </TabPanel>
      <TabPanel value={value} style={{ width: value == 1 ? "100%" : "0", display: "flex", justifyContent: "center" }} index={1}>

        <Stack display="flex" width={mobile ? "85vw" : "50vw"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"}>
          <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
            {editar &&
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="avatar"

                type="file"

              />
            }

            <label htmlFor="avatar">
              <Avatar
                alt="profile image"
                src="imagen"
                sx={{
                  width: 100,
                  height: 100,
                  alignSelf: "center",
                  cursor: editar ? "cell" : "none"
                }}
              />

            </label>


          </div>
          <form >
            {user.role == "customer" &&
              <>
                <InputForm value={data.customer && data.customer.company_name} setter={(valor) => {
                  setData(prevState => ({
                    ...prevState,
                    customer: {
                      ...prevState.customer,
                      company_name: valor
                    }
                  }))
                }} label="Nombre de la empresa" sizeH='35px' marginT={3} marginB={3} readOnly={!editar} />
                <InputForm 
                required={false}
                value={data.customer && data.customer.ruc} 
                setter={(valor) => {
                  setData(prevState => ({
                    ...prevState,
                    customer: {
                      ...prevState.customer,
                      ruc: valor
                    }
                  }))
                }}
                label="RUC" sizeH='35px' marginB={3} readOnly={!editar} />

                <InputForm value={data.customer && data.customer.address}
                  setter={(valor) => {
                    setData(prevState => ({
                      ...prevState,
                      customer: {
                        ...prevState.customer,
                        address: valor
                      }
                    }))
                  }}
                  label="Dirección" type='text' sizeH='35px' marginB={3} readOnly={!editar} />
                <InputForm 
                required={false}
                value={data.customer && data.customer.country}
                  setter={(valor) => {
                    setData(prevState => ({
                      ...prevState,
                      customer: {
                        ...prevState.customer,
                        country: valor
                      }
                    }))
                  }}
                  label="País" sizeH='35px' marginB={3} readOnly={!editar} />
              </>
            }
            {user.role == "driver" &&
              <>
                <InputForm label="Marca" sizeH='35px' marginT={3} marginB={3} readOnly={!editar} />
                <InputForm label="Modelo" sizeH='35px' marginB={3} readOnly={!editar} />

                <InputForm label="Año" type='email' sizeH='35px' marginB={3} readOnly={!editar} />
                <InputForm label="Matrícula" sizeH='35px' marginB={3} readOnly={!editar} />
                <InputForm label="Capacidad de carga" sizeH='35px' marginB={3} readOnly={!editar} />
                <InputForm label="Unidad de carga" sizeH='35px' marginB={3} readOnly={!editar} />
              </>
            }




            {editar ?
              <Button variant="contained" style={{ fontWeight: "bold" }} onClick={()=>{
                putCustomerDataClient()
              }}> Guardar Cambios
              </Button>

              :
              <Button variant="outlined" onClick={() => setEditar(true)} style={{ fontWeight: "bold", width: "80px", alignSelf: "center" }} > Editar
              </Button>

            }
          </form>
          {user.role == "customer" &&
            <Stack direction="column" mt={5}>
              <svg width="665" height="2" viewBox="0 0 665 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.1875" y1="1.11719" x2="665" y2="1.11719" stroke="#D0D5DD" />
              </svg>

              <InputForm label="Contraseña" cambiar={true} type="password" sizeH='35px' marginT={3} marginB={3} readOnly={!editar} />

            </Stack>
          }
        </Stack>
      </TabPanel>
      <TabPanel value={value} style={{ width: value == 2 ? "100%" : "0", display: "flex", justifyContent: "center" }} index={2}>

        <Stack display="flex" width={mobile ? "85vw" : "50vw"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"}>

          <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
            {editar &&
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="avatar"

                type="file"

              />
            }

            <label htmlFor="avatar">
              <Avatar
                alt="profile image"
                src="imagen"
                sx={{
                  width: 100,
                  height: 100,
                  alignSelf: "center",
                  cursor: editar ? "cell" : "none"
                }}
              />

            </label>


          </div>
          {
            user.role == "driver" && <>

              <InputForm label="Licencia de conducir" sizeH='35px' marginT={3} marginB={3} readOnly={!editar} />
              <InputForm label="Afiliación IESS" sizeH='35px' marginB={3} readOnly={!editar} />

              <InputForm label="Permiso de puerto" type='text' sizeH='35px' marginB={3} readOnly={!editar} />
              <InputForm label="Matrícula" sizeH='35px' marginB={3} readOnly={!editar} />
              <InputForm label="Póliza de seguro" sizeH='35px' marginB={3} readOnly={!editar} />
              <InputForm label="Unidad de carga" sizeH='35px' marginB={3} readOnly={!editar} />
              <Box style={{ display: "flex", justifyContent: "space-between " }} mb={3} width="100%">
                <Typography style={{ display: "inline", color: "#475367", fontWeight: 500 }} width={"50%"}>Foto de licencia de conducir {editar && <span style={{ color: "red" }}>*</span>}</Typography>
              </Box>
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
            </>
          }
          {user.role == "customer" &&
            <>
              <InputForm label="Nombre" sizeH='35px' marginT={3} marginB={3} readOnly={!editar} />
              <InputForm label="Banco" sizeH='35px' marginB={3} readOnly={!editar} />

              <InputForm label="Tipo de cuenta" type='number' sizeH='35px' marginB={3} readOnly={!editar} />
              <InputForm label="Número de cuenta" type='number' sizeH='35px' marginB={3} readOnly={!editar} />

              <InputForm label="País" sizeH='35px' marginB={3} readOnly={!editar} />
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
      <TabPanel value={value} style={{ width: value == 3 ? "100%" : "0", display: "flex", justifyContent: "center" }} index={3}>
        {
          mobile ?
            <Stack width="100%" direction="column" alignItems={"center"} style={{ border: "none" }} spacing={3} >
              <Grid item container xs={12} height="100%" width="100%" p={1} style={{ borderRadius: "5px", border: "1px solid lightgrey" }} spacing={2}>
                <Grid item container direction="row" justifyContent={"flex-end"} xs={6}>
                  <ResponsiveImageBox w='120px' h="120px" url={"/marketplace/7.png"} />
                </Grid>
                <Grid item xs={6} >
                  <Typography fontSize="14px">Bobinas de papel</Typography>
                  <Typography fontSize="12px" color="secondary">Perú - Bolivia</Typography>
                  <Typography fontSize="12px" color="secondary">Carga seca</Typography>

                  <Typography fontSize="12px" color="secondary"> 20/5/2024</Typography>
                  <Typography fontSize="12px" color="primary">$2000</Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} height="100%" width="100%" p={1} style={{ borderRadius: "5px", border: "1px solid lightgrey" }} spacing={2}>
                <Grid item container direction="row" justifyContent={"flex-end"} xs={6}>
                  <ResponsiveImageBox w='120px' h="120px" url={"/marketplace/7.png"} />
                </Grid>
                <Grid item xs={6} >
                  <Typography fontSize="14px">Bobinas de papel</Typography>
                  <Typography fontSize="12px" color="secondary">Perú - Bolivia</Typography>
                  <Typography fontSize="12px" color="secondary">Carga seca</Typography>

                  <Typography fontSize="12px" color="secondary"> 20/5/2024</Typography>
                  <Typography fontSize="12px" color="primary">$2000</Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} height="100%" width="100%" p={1} style={{ borderRadius: "5px", border: "1px solid lightgrey" }} spacing={2}>
                <Grid item container direction="row" justifyContent={"flex-end"} xs={6}>
                  <ResponsiveImageBox w='120px' h="120px" url={"/marketplace/7.png"} />
                </Grid>
                <Grid item xs={6} >
                  <Typography fontSize="14px">Bobinas de papel</Typography>
                  <Typography fontSize="12px" color="secondary">Perú - Bolivia</Typography>
                  <Typography fontSize="12px" color="secondary">Carga seca</Typography>

                  <Typography fontSize="12px" color="secondary"> 20/5/2024</Typography>
                  <Typography fontSize="12px" color="primary">$2000</Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} height="100%" width="100%" p={1} style={{ borderRadius: "5px", border: "1px solid lightgrey" }} spacing={2}>
                <Grid item container direction="row" justifyContent={"flex-end"} xs={6}>
                  <ResponsiveImageBox w='120px' h="120px" url={"/marketplace/7.png"} />
                </Grid>
                <Grid item xs={6} >
                  <Typography fontSize="14px">Bobinas de papel</Typography>
                  <Typography fontSize="12px" color="secondary">Perú - Bolivia</Typography>
                  <Typography fontSize="12px" color="secondary">Carga seca</Typography>

                  <Typography fontSize="12px" color="secondary"> 20/5/2024</Typography>
                  <Typography fontSize="12px" color="primary">$2000</Typography>
                </Grid>
              </Grid>
            </Stack>
            :
            <Stack display="flex" width={mobile ? "85vw" : "65vw"} maxWidth={"600px"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"}>
              <Box
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                justifyContent={"center"}
                sx={{ border: '2px solid #D0D5DD', padding: "30px 50px", borderRadius: "5px" }}
              >
                <CobroItemCard title="Bobinas de papel" countrys={"Perú - Bolivia"} typeCharge={"Seca"} date={"20/06/2024"} price={4000} discount={"20% de descuento por comisión"}></CobroItemCard>
                <CobroItemCard title="Bobinas de papel" countrys={"Perú - Bolivia"} typeCharge={"Seca"} date={"20/06/2024"} price={4000} discount={"20% de descuento por comisión"}></CobroItemCard>
                <CobroItemCard title="Bobinas de papel" countrys={"Perú - Bolivia"} typeCharge={"Seca"} date={"20/06/2024"} price={4000} discount={"20% de descuento por comisión"}></CobroItemCard>
                <CobroItemCard title="Bobinas de papel" countrys={"Perú - Bolivia"} typeCharge={"Seca"} date={"20/06/2024"} price={4000} discount={"20% de descuento por comisión"}></CobroItemCard>
              </Box>
            </Stack>
        }

      </TabPanel>
      <Snackbar open={errorValidation.value} anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={6000} onClose={()=>setErrorValidation({value: false, message: ""})}>
  <Alert
    onClose={()=>setErrorValidation({value: false, message: ""})}
    severity="error"
    variant="filled"
    sx={{ width: '100%' }}
  >
    {errorValidation.message}
  </Alert>
</Snackbar>
<Snackbar open={dataChanged} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} autoHideDuration={6000} onClose={()=>setDataChanged(false)}>
  <Alert
    onClose={()=>setDataChanged(false)}
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
  >
    Los cambios se guardaron con éxito!
  </Alert>
</Snackbar>

    </Box>
  );
}
