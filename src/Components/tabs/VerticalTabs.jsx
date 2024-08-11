/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  MenuItem,
  Select,
  Stack,
  useMediaQuery,
  FormControl,
  OutlinedInput,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import ResponsiveImageBox from '../imageComponents/ResponsiveImageBox';
// import InputForm from '../inputs/InputForm';
import CobroItemCard from '../cards/CobroItemCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  patchBasicUserData,
  patchCustomer,
  patchDriver,
  patchDriverLegalDocuments,
  patchTruck,
} from '../../Redux/Actions/UserActions/userActions';
import { Colors } from '../../Utils/Colors';

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

  const [tab, setTab] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  const [editar, setEditar] = React.useState(false);
  const { user, userLoading } = useSelector((state) => state.user);
  const [showImage, setShowImage] = React.useState(null);

  const { register, watch, setValue } = useForm({
    defaultValues: {
      profile_image: '',
      name: '',
      lastname: '',
      email: '',
      description: '',
      phone: '',
      brand: '',
      model: '',
      year: '',
      num_plate: '',
      charge_capacity: '',
      charge_type: '',
      num_license: '',
      iess: '',
      port_permit: '',
      insurance_policy: '',
      img_driver_license: '',
      img_insurance_policy: '',
      pdf_iess: '',
      pdf_port_permit: '',
      company_name: '',
      ruc: '',
      company_phone: '',
      address: '',
      country: '',
      city: '',
    },
  });

  const selectChargeType = ['Seca', 'Peligrosa', 'Refrigerada'];

  const booleanSelect = [
    { boolean: true, string: 'Si' },
    { boolean: false, string: 'No' },
  ];

  const setFileToBase = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setShowImage(reader.result);
      };
    }
  };

  const handleFileChange = (ev) => {
    const selectedFile = ev.target.files?.[0];
    setValue('profile_image', selectedFile);
    setFileToBase(selectedFile);
  };

  const handleLegalDocumentFileChange = (ev, param) => {
    const selectedFile = ev.target.files?.[0];
    setValue(`${param}`, selectedFile);
  };

  const urlBack = import.meta.env.VITE_URL_BACKEND;

  React.useEffect(() => {
    if (user) {
      user.profile_image &&
        setShowImage(`${urlBack}/${user.profile_image}`);
      setValue('name', user.name);
      setValue('lastname', user.lastname);
      setValue('email', user.email);
    }
    if (user?.customer) {
      setValue('company_name', user?.customer?.company_name);
      setValue('ruc', user?.customer?.ruc);
      setValue('company_phone', user?.customer?.company_phone);
      setValue('address', user?.customer?.address);
      setValue('country', user?.customer?.country);
      setValue('city', user?.customer?.city);
    }
    if (user?.driver) {
      setValue('description', user?.driver?.description);
      setValue('phone', user?.driver?.phone);
      setValue('num_license', user?.driver?.num_license);
      setValue('iess', user?.driver?.iess);
      setValue('port_permit', user?.driver?.port_permit);
      setValue('insurance_policy', user?.driver?.insurance_policy);
      setValue('brand', user?.driver?.truck?.brand);
      setValue('model', user?.driver?.truck?.model);
      setValue('year', user?.driver?.truck?.year);
      setValue('num_plate', user?.driver?.truck?.num_plate);
      setValue(
        'charge_capacity',
        user?.driver?.truck?.charge_capacity
      );
      setValue('charge_type', user?.driver?.truck?.charge_type);
    }
  }, [setValue, user, urlBack]);

  React.useEffect(() => {
    setEditar(false);
  }, [user, user.driver]);

  const mobile = useMediaQuery('(max-width: 750px)');
  const driverOptionsMobile = [
    'Datos Personales',
    'Datos del camión',
    'Documentos Legales',
    'Historial de cobros',
  ];
  const containerBox = mobile
    ? {
        flexGrow: 1,
        bgcolor: '#f5f5f5ff',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        height: '100%',
      }
    : {
        flexGrow: 1,
        bgcolor: '#f5f5f5ff',
        display: 'flex',
        width: '100%',
        height: '100%',
      };
  const clientOptionsMobile = [
    'Datos Personales',
    'Configuración de la cuenta',
    // "Configuración de pagos",
    'Historial de cobros',
  ];

  const putBasicDriverData = () => {
    const { profile_image, name, lastname, description, phone } =
      watch();
    dispatch(
      patchDriver(profile_image, name, lastname, description, phone)
    );
  };

  const putBasicCustomerData = () => {
    const { profile_image, name, lastname } = watch();
    dispatch(patchBasicUserData(profile_image, name, lastname));
  };

  const putCustomerDataClient = () => {
    const customerId = user?.customer.id;
    const {
      company_name,
      ruc,
      company_phone,
      address,
      country,
      city,
    } = watch();
    dispatch(
      patchCustomer(
        customerId,
        company_name,
        ruc,
        company_phone,
        address,
        country,
        city
      )
    );
  };

  const putTruckData = () => {
    const {
      brand,
      model,
      year,
      num_plate,
      charge_capacity,
      charge_type,
    } = watch();
    dispatch(
      patchTruck({
        brand,
        model,
        year,
        num_plate,
        charge_capacity,
        charge_type,
      })
    );
  };

  const patchLegalDocuments = () => {
    const {
      num_license,
      iess,
      port_permit,
      insurance_policy,
      img_insurance_policy,
      img_driver_license,
      pdf_iess,
      pdf_port_permit,
    } = watch();
    const driverId = user?.driver.id;
    dispatch(
      patchDriverLegalDocuments(
        driverId,
        num_license,
        iess,
        port_permit,
        insurance_policy,
        img_insurance_policy,
        img_driver_license,
        pdf_iess,
        pdf_port_permit
      )
    );
  };

  const handleChange = (event, newValue) => {
    setEditar(false);
    // setData(user);
    setTab(newValue);
  };

  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  return (
    <Box
      sx={containerBox}
      height={'100vh'}
      style={{ marginTop: '64px' }}
    >
      {mobile && (
        <Container>
          <Stack
            direction="row"
            justifyContent={'space-between'}
            style={{ padding: '10px 0' }}
            alignContent={'center'}
          >
            <Typography fontSize={'20px'} fontWeight={600}>
              {user.role == 'driver'
                ? driverOptionsMobile[tab]
                : clientOptionsMobile[tab]}
            </Typography>
            <div style={{ height: '100%', position: 'relative' }}>
              <Button
                variant="terciary"
                onClick={() => setOpen(!open)}
              >
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7869 1.2809L8.51452 8.78006C8.44698 8.84978 8.36677 8.9051 8.27849 8.94284C8.1902 8.98058 8.09557 9 8 9C7.90443 9 7.8098 8.98058 7.72151 8.94284C7.63323 8.9051 7.55302 8.84978 7.48548 8.78006L0.213121 1.2809C0.0766618 1.14018 0 0.949334 0 0.750333C0 0.551332 0.0766618 0.360482 0.213121 0.219767C0.34958 0.0790523 0.534658 0 0.72764 0C0.920622 0 1.1057 0.0790523 1.24216 0.219767L8 7.1893L14.7578 0.219767C14.8254 0.150092 14.9056 0.0948231 14.9939 0.0571154C15.0822 0.0194076 15.1768 0 15.2724 0C15.3679 0 15.4625 0.0194076 15.5508 0.0571154C15.6391 0.0948231 15.7193 0.150092 15.7869 0.219767C15.8544 0.289442 15.908 0.372158 15.9446 0.463193C15.9812 0.554227 16 0.651798 16 0.750333C16 0.848868 15.9812 0.946439 15.9446 1.03747C15.908 1.12851 15.8544 1.21122 15.7869 1.2809Z"
                    fill="#007C52"
                  />
                </svg>
              </Button>
              {open && (
                <Paper
                  style={{
                    maxWidth: '500px',
                    width: '200px',
                    position: 'absolute',
                    right: '25px ',
                    top: '30px',
                    zIndex: 10,
                  }}
                >
                  {user.role == 'driver' &&
                    driverOptionsMobile.map((option, index) => (
                      <Button
                        variant="terciary"
                        key={index}
                        sx={{
                          fontSize: '14px',
                          textAlign: 'start',
                          width: '100%',
                          display: 'inline-block',
                          fontWeight: tab == index ? 600 : 400,
                          color: tab == index ? '#007C52' : 'black',
                        }}
                        onClick={() => setTab(index)}
                      >
                        {option}
                      </Button>
                    ))}
                  {user.role == 'customer' &&
                    clientOptionsMobile.map((option, index) => (
                      <Button
                        variant="terciary"
                        key={index}
                        sx={{
                          fontSize: '14px',
                          textAlign: 'start',
                          width: '100%',
                          display: 'inline-block',
                          fontWeight: tab == index ? 600 : 400,
                          color: tab == index ? '#007C52' : 'black',
                        }}
                        onClick={() => setTab(index)}
                      >
                        {option}
                      </Button>
                    ))}
                </Paper>
              )}
            </div>
          </Stack>
        </Container>
      )}

      {!mobile && user.role == 'driver' && (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tab}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            width: '300px',
            // height: "100vh",
          }}
        >
          <Tab
            label="Datos Personales"
            sx={{
              textTransform: 'none',
              background: tab == 0 ? 'white' : 'transparent',
              width: '100%',
              alignItems: 'flex-start',
              fontWeight: 'bold',
            }}
            {...a11yProps(0)}
          />
          <Tab
            label="Datos del camión"
            sx={{
              textTransform: 'none',
              background: tab == 1 ? 'white' : 'transparent',
              width: '100%',
              alignItems: 'flex-start',
              fontWeight: 'bold',
            }}
            {...a11yProps(1)}
          />
          <Tab
            label="Documentos legales"
            sx={{
              textTransform: 'none',
              background: tab == 2 ? 'white' : 'transparent',
              width: '100%',
              alignItems: 'flex-start',
              fontWeight: 'bold',
            }}
            {...a11yProps(2)}
          />
          {/* <Tab
            label="Historial de pagos"
            sx={{
              textTransform: "none",
              background: value == 3 ? "white" : "transparent",
              width: "100%",
              alignItems: "flex-start",
              fontWeight: "bold",
            }}
            {...a11yProps(3)}
          /> */}
        </Tabs>
      )}
      {!mobile && user.role == 'customer' && (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tab}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            width: '300px',
            minHeight: '100vh',
          }}
        >
          <Tab
            label="Datos Personales"
            sx={{
              textTransform: 'none',
              background: tab == 0 ? 'white' : 'transparent',
              width: '100%',
              alignItems: 'flex-start',
              fontWeight: 'bold',
            }}
            {...a11yProps(0)}
          />
          <Tab
            label="Configuración de cuenta"
            sx={{
              textTransform: 'none',
              background: tab == 1 ? 'white' : 'transparent',
              width: '100%',
              alignItems: 'flex-start',
              fontWeight: 'bold',
            }}
            {...a11yProps(1)}
          />
          {/* <Tab
            label="Configuración de pagos"
            sx={{
              textTransform: "none",
              background: value == 2 ? "white" : "transparent",
              width: "100%",
              alignItems: "flex-start",
              fontWeight: "bold",
            }}
            {...a11yProps(2)}
          /> */}
          {/* <Tab
            label="Historial de pagos"
            sx={{
              textTransform: "none",
              background: value == 2 ? "white" : "transparent",
              width: "100%",
              alignItems: "flex-start",
              fontWeight: "bold",
            }}
            {...a11yProps(3)}
          /> */}
        </Tabs>
      )}

      <TabPanel
        value={tab}
        style={{
          width: tab == 0 ? '100%' : '0',
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
        }}
        index={0}
      >
        <Stack
          display="flex"
          width={mobile ? '85vw' : '50vw'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignContent={'center'}
          p={5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            {editar ? (
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="avatar"
                {...register('profile_image', {
                  required: {
                    value: true,
                  },
                })}
                onChange={(ev) => {
                  handleFileChange(ev);
                }}
              />
            ) : (
              ''
            )}
            <label htmlFor="avatar">
              <Avatar
                alt="Profile"
                src={showImage}
                sx={{
                  width: 100,
                  height: 100,
                  alignSelf: 'center',
                  cursor: editar ? 'cell' : 'default',
                }}
              />
            </label>
          </div>
          <form
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            {tab == 0 && user.role === 'driver' && (
              <Box
                style={{
                  display: 'flex',
                  textAlign: 'left',
                  flexDirection: 'column',
                  gap: 3,
                  justifyContent: 'center',
                  padding: 5,
                }}
              >
                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Nombre
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>
                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Apellido
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '370px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('lastname', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>

                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Correo electrónico
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>

                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Número de contacto
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('phone', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>

                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Descripción
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('description', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>
              </Box>
            )}
            {tab == 0 && user.role === 'customer' && (
              <Box
                style={{
                  display: 'flex',
                  textAlign: 'left',
                  flexDirection: 'column',
                  gap: 3,
                  justifyContent: 'center',
                  padding: 5,
                }}
              >
                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Nombre
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>
                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Apellido
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '370px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('lastname', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>

                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Correo electrónico
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>
              </Box>
            )}
          </form>

          {editar ? (
            <Button
              variant="contained"
              disabled={userLoading}
              style={{
                fontWeight: 600,
                alignSelf: 'center',
                marginTop: '20px',
              }}
              onClick={() => {
                switch (user?.role) {
                  case 'driver':
                    putBasicDriverData();
                    break;
                  case 'customer':
                    putBasicCustomerData();
                    break;
                }
              }}
            >
              {' '}
              Guardar Cambios
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => setEditar(true)}
              style={{
                fontWeight: 600,
                alignSelf: 'center',
                border: '2px solid',
                backgroundColor: Colors.primary.contrastText,
                marginTop: '20px',
              }}
            >
              {' '}
              Editar datos
            </Button>
          )}
        </Stack>
      </TabPanel>
      <TabPanel
        value={tab}
        style={{
          width: tab == 1 ? '100%' : '0',
          display: 'flex',
          justifyContent: 'center',
        }}
        index={1}
      >
        <Stack
          display="flex"
          width={mobile ? '85vw' : '50vw'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignContent={'center'}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            {editar && (
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="avatar"
                type="file"
              />
            )}

            <label htmlFor="avatar">
              <Avatar
                alt="profile image"
                src={showImage}
                sx={{
                  width: 100,
                  height: 100,
                  alignSelf: 'center',
                  cursor: editar ? 'cell' : 'none',
                }}
              />
            </label>
          </div>
          <form
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            {user.role == 'customer' && (
              <Box
                style={{
                  display: 'flex',
                  textAlign: 'left',
                  flexDirection: 'column',
                  gap: 3,
                  justifyContent: 'center',
                  padding: 5,
                }}
              >
                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Nombre de la empresa
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('company_name', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>

                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Número de telefono
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    name="company_phone"
                    {...register('company_phone', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>

                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  RUC
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    name="ruc"
                    {...register('ruc', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>

                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Dirección
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    name="address"
                    {...register('address', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>

                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  País
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    name="country"
                    {...register('country', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>

                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Ciudad
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    name="city"
                    {...register('city', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>
              </Box>
            )}
            {user.role == 'driver' && (
              <Box
                style={{
                  display: 'flex',
                  textAlign: 'left',
                  flexDirection: 'column',
                  gap: 3,
                  justifyContent: 'center',
                  padding: 5,
                }}
              >
                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Marca
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('brand', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>

                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Modelo
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('model', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>
                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Año
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('year', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>
                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Matrícula
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('num_plate', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>
                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Capacidad de carga
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('charge_capacity', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>
                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Unidad de carga
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <Select
                    defaultValue={watch().charge_type}
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('charge_type', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  >
                    {selectChargeType.map((type, index) => (
                      <MenuItem key={index} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}

            {editar ? (
              <Button
                variant="contained"
                disabled={userLoading}
                style={{
                  fontWeight: 600,
                  alignSelf: 'center',
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
                onClick={() => {
                  switch (user.role) {
                    case 'customer':
                      putCustomerDataClient();
                      break;
                    case 'driver':
                      putTruckData();
                      break;
                  }
                }}
              >
                {' '}
                Guardar Cambios
              </Button>
            ) : (
              <Button
                variant="outlined"
                onClick={() => setEditar(true)}
                style={{
                  fontWeight: 600,
                  alignSelf: 'center',
                  border: '2px solid',
                  backgroundColor: Colors.primary.contrastText,
                  marginTop: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                {' '}
                Editar datos
              </Button>
            )}
          </form>
          <form
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            {user.role == 'customer' && (
              <Stack>
                <svg
                  // style={{marginLeft: '10px', marginTop: 10}}
                  width="665"
                  height="2"
                  viewBox="0 0 665 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.1875"
                    y1="1.11719"
                    x2="665"
                    y2="1.11719"
                    stroke="#D0D5DD"
                  />
                </svg>
                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Contraseña
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                      color: Colors.primary.main,
                      fontWeight: 600,
                    }}
                    readOnly={!editar}
                    endAdornment="Cambiar"
                  />
                </FormControl>
              </Stack>
            )}
          </form>
        </Stack>
      </TabPanel>
      <TabPanel
        value={tab}
        style={{
          width: tab == 2 ? '100%' : '0',
          display: 'flex',
          justifyContent: 'center',
        }}
        index={2}
      >
        <Stack
          display="flex"
          width={mobile ? '85vw' : '50vw'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignContent={'center'}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            {editar && (
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="avatar"
                type="file"
              />
            )}

            <label htmlFor="avatar">
              <Avatar
                alt="profile image"
                src={showImage}
                sx={{
                  width: 100,
                  height: 100,
                  alignSelf: 'center',
                  cursor: editar ? 'cell' : 'none',
                }}
              />
            </label>
          </div>
          <form
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            {user.role == 'driver' && (
              <Box
                style={{
                  display: 'flex',
                  textAlign: 'left',
                  flexDirection: 'column',
                  gap: 3,
                  justifyContent: 'center',
                  padding: 5,
                }}
              >
                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Licencia de conducir
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('num_license', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>
                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Afiliación IESS
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <Select
                    defaultValue={watch().iess}
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('iess', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  >
                    {booleanSelect.map((item, index) => (
                      <MenuItem key={index} value={item.boolean}>
                        {item.string}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Permiso de puerto
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <Select
                    defaultValue={watch().port_permit}
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('port_permit', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  >
                    {booleanSelect.map((item, index) => (
                      <MenuItem key={index} value={item.boolean}>
                        {item.string}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <p
                  style={{
                    fontWeight: 500,
                    color: Colors.secondary.contrastText,
                    textAlign: 'left',
                  }}
                >
                  Póliza de seguro
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '370px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    sx={{
                      backgroundColor: Colors.primary.contrastText,
                      borderRadius: '8px',
                    }}
                    {...register('insurance_policy', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    readOnly={!editar}
                  />
                </FormControl>

                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between ',
                  }}
                  mb={3}
                  width="100%"
                >
                  <Typography
                    style={{
                      display: 'inline',
                      color: '#475367',
                      fontWeight: 500,
                    }}
                  >
                    Foto de licencia de conducir{' '}
                    {editar && (
                      <span style={{ color: 'red' }}>*</span>
                    )}
                  </Typography>
                  {editar && (
                    <>
                      <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="licencia"
                        multiple
                        type="file"
                        {...register('img_driver_license', {
                          required: {
                            value: true,
                          },
                        })}
                        onChange={(ev) => {
                          handleLegalDocumentFileChange(
                            ev,
                            'img_driver_license'
                          );
                        }}
                      />
                      <label htmlFor="licencia">
                        <Typography
                          style={{
                            color: '#475367',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                          }}
                        >
                          Subir
                        </Typography>
                      </label>
                    </>
                  )}
                </Box>

                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between ',
                  }}
                  mb={3}
                  width="100%"
                >
                  <Typography
                    style={{
                      display: 'inline',
                      color: '#475367',
                      fontWeight: 500,
                    }}
                  >
                    Comprobante de afiliación IESS (PDF){' '}
                    {editar && (
                      <span style={{ color: 'red' }}>*</span>
                    )}
                  </Typography>
                  {editar && (
                    <>
                      <input
                        accept="application/pdf"
                        style={{ display: 'none' }}
                        id="comprobanteAfiliacion"
                        multiple
                        type="file"
                        {...register('pdf_iess', {
                          required: {
                            value: true,
                          },
                        })}
                        onChange={(ev) => {
                          handleLegalDocumentFileChange(
                            ev,
                            'pdf_iess'
                          );
                        }}
                      />
                      <label htmlFor="comprobanteAfiliacion">
                        <Typography
                          style={{
                            color: '#475367',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                          }}
                        >
                          Subir
                        </Typography>
                      </label>
                    </>
                  )}
                </Box>
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between ',
                  }}
                  mb={3}
                  width="100%"
                >
                  <Typography
                    style={{
                      display: 'inline',
                      color: '#475367',
                      fontWeight: 500,
                    }}
                  >
                    Comprobante de permiso de puerto (PDF){' '}
                    {editar && (
                      <span style={{ color: 'red' }}>*</span>
                    )}
                  </Typography>
                  {editar && (
                    <>
                      <input
                        accept="application/pdf"
                        style={{ display: 'none' }}
                        id="permisoPuerto"
                        multiple
                        type="file"
                        {...register('pdf_port_permit', {
                          required: {
                            value: true,
                          },
                        })}
                        onChange={(ev) => {
                          handleLegalDocumentFileChange(
                            ev,
                            'pdf_port_permit'
                          );
                        }}
                      />
                      <label htmlFor="permisoPuerto">
                        <Typography
                          style={{
                            color: '#475367',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                          }}
                        >
                          Subir
                        </Typography>
                      </label>
                    </>
                  )}
                </Box>
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between ',
                  }}
                  mb={3}
                  width="100%"
                >
                  <Typography
                    style={{
                      display: 'inline',
                      color: '#475367',
                      fontWeight: 500,
                    }}
                  >
                    Foto póliza de seguro
                    {editar && (
                      <span style={{ color: 'red' }}>*</span>
                    )}
                  </Typography>
                  {editar && (
                    <>
                      <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="insurance_policy"
                        multiple
                        type="file"
                        {...register('img_insurance_policy', {
                          required: {
                            value: true,
                          },
                        })}
                        onChange={(ev) => {
                          handleLegalDocumentFileChange(
                            ev,
                            'img_insurance_policy'
                          );
                        }}
                      />
                      <label htmlFor="insurance_policy">
                        <Typography
                          style={{
                            color: '#475367',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                          }}
                          width={'50%'}
                        >
                          Subir
                        </Typography>
                      </label>
                    </>
                  )}
                </Box>
              </Box>
            )}
            {/* {user.role == "customer" && (
              <Box
                style={{
                  display: "flex",
                  textAlign: "left",
                  flexDirection: "column",
                  gap: 3,
                  justifyContent: "center",
                  padding: 5,
                }}
              > */}
            {/* <p
                style={{
                  fontWeight: 500,
                  color: Colors.secondary.contrastText,
                  textAlign: "left",
                }}
              >
                Nombre
              </p>
              <FormControl
                sx={{
                  m: 1,
                  width: mobile ? "370px" : "666px",
                }}
                variant="outlined"
              >
                <OutlinedInput
                  sx={{
                    backgroundColor: Colors.primary.contrastText,
                    borderRadius: "8px",
                  }}
                  readOnly={!editar}
                />
              </FormControl> */}
            {/* <p
                style={{
                  fontWeight: 500,
                  color: Colors.secondary.contrastText,
                  textAlign: "left",
                }}
              >
                Banco
              </p>
              <FormControl
                sx={{
                  m: 1,
                  width: mobile ? "370px" : "666px",
                }}
                variant="outlined"
              >
                <OutlinedInput
                  sx={{
                    backgroundColor: Colors.primary.contrastText,
                    borderRadius: "8px",
                  }}
                  readOnly={!editar}
                />
              </FormControl>
              <p
                style={{
                  fontWeight: 500,
                  color: Colors.secondary.contrastText,
                  textAlign: "left",
                }}
              >
               Tipo de cuenta
              </p>
              <FormControl
                sx={{
                  m: 1,
                  width: mobile ? "370px" : "666px",
                }}
                variant="outlined"
              >
                <OutlinedInput
                  sx={{
                    backgroundColor: Colors.primary.contrastText,
                    borderRadius: "8px",
                  }}
                  readOnly={!editar}
                />
              </FormControl>

              <p
                style={{
                  fontWeight: 500,
                  color: Colors.secondary.contrastText,
                  textAlign: "left",
                }}
              >
                Numero de cuenta
              </p>
              <FormControl
                sx={{
                  m: 1,
                  width: mobile ? "370px" : "666px",
                }}
                variant="outlined"
              >
                <OutlinedInput
                  sx={{
                    backgroundColor: Colors.primary.contrastText,
                    borderRadius: "8px",
                  }}
                  readOnly={!editar}
                />
              </FormControl> */}
            {/* <p
                style={{
                  fontWeight: 500,
                  color: Colors.secondary.contrastText,
                  textAlign: "left",
                }}
              >
                País
              </p>
              <FormControl
                sx={{
                  m: 1,
                  width: mobile ? "370px" : "666px",
                }}
                variant="outlined"
              >
                <OutlinedInput
                  sx={{
                    backgroundColor: Colors.primary.contrastText,
                    borderRadius: "8px",
                  }}
                  readOnly={!editar}
                />
              </FormControl> */}
            {/* </Box>
            )} */}
          </form>
          {user.role === 'driver' &&
            (editar ? (
              <Button
                variant="contained"
                disabled={userLoading}
                style={{
                  fontWeight: 600,
                  alignSelf: 'center',
                  marginTop: '20px',
                }}
                onClick={() => {
                  patchLegalDocuments();
                }}
              >
                {' '}
                Guardar Cambios
              </Button>
            ) : (
              <Button
                variant="outlined"
                onClick={() => setEditar(true)}
                style={{
                  fontWeight: 600,
                  alignSelf: 'center',
                  border: '2px solid',
                  backgroundColor: Colors.primary.contrastText,
                  marginTop: '20px',
                }}
              >
                {' '}
                Editar datos
              </Button>
            ))}
        </Stack>
      </TabPanel>
      <TabPanel
        value={tab}
        style={{
          width: tab == 3 ? '100%' : '0',
          display: 'flex',
          justifyContent: 'center',
        }}
        index={3}
      >
        {mobile ? (
          <Stack
            width="100%"
            direction="column"
            alignItems={'center'}
            style={{ border: 'none' }}
            spacing={3}
          >
            <Grid
              item
              container
              xs={12}
              height="100%"
              width="100%"
              p={1}
              style={{
                borderRadius: '5px',
                border: '1px solid lightgrey',
              }}
              spacing={2}
            >
              <Grid
                item
                container
                direction="row"
                justifyContent={'flex-end'}
                xs={6}
              >
                <ResponsiveImageBox
                  w="120px"
                  h="120px"
                  url={'/marketplace/7.png'}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize="14px">
                  Bobinas de papel
                </Typography>
                <Typography fontSize="12px" color="secondary">
                  Perú - Bolivia
                </Typography>
                <Typography fontSize="12px" color="secondary">
                  Carga seca
                </Typography>

                <Typography fontSize="12px" color="secondary">
                  {' '}
                  20/5/2024
                </Typography>
                <Typography fontSize="12px" color="primary">
                  $2000
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              height="100%"
              width="100%"
              p={1}
              style={{
                borderRadius: '5px',
                border: '1px solid lightgrey',
              }}
              spacing={2}
            >
              <Grid
                item
                container
                direction="row"
                justifyContent={'flex-end'}
                xs={6}
              >
                <ResponsiveImageBox
                  w="120px"
                  h="120px"
                  url={'/marketplace/7.png'}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize="14px">
                  Bobinas de papel
                </Typography>
                <Typography fontSize="12px" color="secondary">
                  Perú - Bolivia
                </Typography>
                <Typography fontSize="12px" color="secondary">
                  Carga seca
                </Typography>

                <Typography fontSize="12px" color="secondary">
                  {' '}
                  20/5/2024
                </Typography>
                <Typography fontSize="12px" color="primary">
                  $2000
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              height="100%"
              width="100%"
              p={1}
              style={{
                borderRadius: '5px',
                border: '1px solid lightgrey',
              }}
              spacing={2}
            >
              <Grid
                item
                container
                direction="row"
                justifyContent={'flex-end'}
                xs={6}
              >
                <ResponsiveImageBox
                  w="120px"
                  h="120px"
                  url={'/marketplace/7.png'}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize="14px">
                  Bobinas de papel
                </Typography>
                <Typography fontSize="12px" color="secondary">
                  Perú - Bolivia
                </Typography>
                <Typography fontSize="12px" color="secondary">
                  Carga seca
                </Typography>

                <Typography fontSize="12px" color="secondary">
                  {' '}
                  20/5/2024
                </Typography>
                <Typography fontSize="12px" color="primary">
                  $2000
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              height="100%"
              width="100%"
              p={1}
              style={{
                borderRadius: '5px',
                border: '1px solid lightgrey',
              }}
              spacing={2}
            >
              <Grid
                item
                container
                direction="row"
                justifyContent={'flex-end'}
                xs={6}
              >
                <ResponsiveImageBox
                  w="120px"
                  h="120px"
                  url={'/marketplace/7.png'}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize="14px">
                  Bobinas de papel
                </Typography>
                <Typography fontSize="12px" color="secondary">
                  Perú - Bolivia
                </Typography>
                <Typography fontSize="12px" color="secondary">
                  Carga seca
                </Typography>

                <Typography fontSize="12px" color="secondary">
                  {' '}
                  20/5/2024
                </Typography>
                <Typography fontSize="12px" color="primary">
                  $2000
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        ) : (
          <Stack
            display="flex"
            width={mobile ? '85vw' : '65vw'}
            maxWidth={'600px'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignContent={'center'}
          >
            <Box
              display="flex"
              flexDirection={'column'}
              alignItems="center"
              justifyContent={'center'}
              sx={{
                border: '2px solid #D0D5DD',
                padding: '30px 50px',
                borderRadius: '5px',
              }}
            >
              <CobroItemCard
                title="Bobinas de papel"
                countrys={'Perú - Bolivia'}
                typeCharge={'Seca'}
                date={'20/06/2024'}
                price={4000}
                discount={'20% de descuento por comisión'}
              ></CobroItemCard>
              <CobroItemCard
                title="Bobinas de papel"
                countrys={'Perú - Bolivia'}
                typeCharge={'Seca'}
                date={'20/06/2024'}
                price={4000}
                discount={'20% de descuento por comisión'}
              ></CobroItemCard>
              <CobroItemCard
                title="Bobinas de papel"
                countrys={'Perú - Bolivia'}
                typeCharge={'Seca'}
                date={'20/06/2024'}
                price={4000}
                discount={'20% de descuento por comisión'}
              ></CobroItemCard>
              <CobroItemCard
                title="Bobinas de papel"
                countrys={'Perú - Bolivia'}
                typeCharge={'Seca'}
                date={'20/06/2024'}
                price={4000}
                discount={'20% de descuento por comisión'}
              ></CobroItemCard>
            </Box>
          </Stack>
        )}
      </TabPanel>
    </Box>
  );
}
