import {
  Button,
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
  useMediaQuery,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Box,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import GreenStepper from '../Components/steppers/GreenStepper';
import { useNavigate } from 'react-router-dom';
import CompNavLanding from '../Components/NavLanding/CompNavLanding';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../Redux/Actions/OrderActions/createOrder';
import { Colors } from '../Utils/Colors';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Importar configuración de idioma español
import { TimeField } from '@mui/x-date-pickers';

dayjs.locale('es'); // Establecer el idioma globalmente para dayjs

const PageCrearEnvios = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const mobile = useMediaQuery('(max-width:750px)');

  const steps = ['Datos personales', 'Producto', 'Envío', 'Pago'];
  const descripciones = [
    'Detalles del generador de carga',
    'Información del producto',
    'Detalles del envío',
    'Pago con tarjeta',
  ];
  const selectChargeType = ['Seca', 'Peligrosa', 'Refrigerada'];
  const selectOrderType = ['nacional', 'internacional'];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputFileStyles = {
    border: 'solid 1px red',
    position: 'absolute',
    width: mobile ? '90px' : '139px',
    height: mobile ? '90px' : '142px',
    cursor: 'pointer',
    opacity: 0,
  };

  const imageStyles = {
    display: 'flex',
    // border: 'solid 1px red',
    borderRadius: '8px',
    width: mobile ? '90px' : '139px',
    height: mobile ? '90px' : '142px',
    overFlow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '30px',
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company_name: '',
      company_phone: '',
      ruc: '',
      receiving_company: '',
      contact_number: '',
      receiving_company_RUC: '',
      product_name: '',
      quantity: '',
      type: '',
      weight: '',
      volume: '',
      offered_price: '',
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      orderType: '',
      pick_up_date: '',
      pick_up_time: '',
      pick_up_address: '',
      delivery_date: '',
      delivery_time: '',
      name: '',
      card: '',
      expire: '',
      payment: '',
    },
  });

  const { singleOrderLoading } = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.user);

  const [showImage1, setShowImage1] = React.useState('');
  const [showImage2, setShowImage2] = React.useState('');
  const [showImage3, setShowImage3] = React.useState('');
  const [showImage4, setShowImage4] = React.useState('');

  const setFileToBase = (file, imageNum) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (imageNum === 1) {
          setShowImage1(reader.result);
        } else if (imageNum === 2) {
          setShowImage2(reader.result);
        } else if (imageNum === 3) {
          setShowImage3(reader.result);
        } else if (imageNum === 4) {
          setShowImage4(reader.result);
        }
      };
    }
  };

  const handleFileChange = (ev, imageNum) => {
    const selectedFile = ev.target.files?.[0];
    setFileToBase(selectedFile, imageNum);
  };

  const watchAllFields = watch();

  React.useEffect(() => {
    console.log('index: ', stepIndex);
  }, [stepIndex]);

  React.useEffect(() => {
    console.log(watchAllFields);
  }, [watchAllFields]);

  const formatNumber = (value) => {
    // Elimina cualquier carácter no numérico
    const numericValue = value.replace(/\D/g, '');

    // Formatea el número insertando puntos cada tres dígitos
    const formattedValue = numericValue.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      '.'
    );

    return formattedValue;
  };

  const formatPrice = (e) => {
    const formattedValue = formatNumber(e.target.value);
    setValue('offered_price', formattedValue); // Actualiza el valor en react-hook-form
  };

  const formatPayment = (e) => {
    const formattedValue = formatNumber(e.target.value);
    setValue('payment', formattedValue); // Actualiza el valor en react-hook-form
  };

  const onClick = (data) => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      const {
        product_name, //string
        quantity, //integer
        type, // 'Seca' | 'Peligrosa' | 'Refrigerada'
        weight, //float
        volume, //integer
        offered_price, //integer
        orderType, //'national' | 'international'
        receiving_company, //string
        contact_number, //integer
        receiving_company_RUC, //integer
        pick_up_date, //date
        pick_up_time, //string
        pick_up_address, //string
        delivery_date, //date
        delivery_time, //string
        delivery_address, //string
        image1,
        image2,
        image3,
        image4,
      } = data;
      dispatch(
        createOrder(
          user?.customer?.id,
          {
            product_name, //string
            quantity, //integer
            type, // 'Seca' | 'Peligrosa' | 'Refrigerada'
            weight, //float
            volume, //integer
            offered_price, //integer
            orderType, //'national' | 'international'
            receiving_company, //string
            contact_number, //integer
            receiving_company_RUC, //integer
            pick_up_date, //date
            pick_up_time, //string
            pick_up_address, //string
            delivery_date, //date
            delivery_time, //string
            delivery_address, //string
            image1,
            image2,
            image3,
            image4,
          },
          navigate
        )
      );
    }
  };

  return (
    <>
      <CompNavLanding></CompNavLanding>
      <section
        style={{ background: '#F6F6F6', height: '100%' }}
        id="arriba"
      >
        <Container maxWidth={'md'} sx={{ padding: '20px 0' }}>
          {!mobile ? (
            <>
              <GreenStepper
                steps={steps}
                activeStep={stepIndex}
              ></GreenStepper>
            </>
          ) : (
            <>
              <svg
                width="24"
                style={{ marginLeft: '15px', cursor: 'pointer' }}
                onClick={() => {
                  setStepIndex(stepIndex - 1);
                  if (stepIndex == 0) {
                    navigate('/shipments');
                  }
                }}
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_343_8051)">
                  <path
                    d="M23.25 12H0.75"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.25 1.5L0.75 12L11.25 22.5"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_343_8051">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(-1 0 0 -1 24 24)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <Stack direction="row" justifyContent={'center'}>
                <Typography
                  color="secondary"
                  mb={1}
                  fontWeight={600}
                  fontSize={'14px'}
                >
                  Paso {stepIndex + 1}
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={(stepIndex + 1) * 25}
              />
            </>
          )}
          <Typography variant="h5" textAlign={'center'} mt={5}>
            Crear envío
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: '16px',
              marginBottom: 5,
              color: '#8C94A6',
              textAlign: 'center',
              fontWeight: 400,
            }}
          >
            {descripciones[stepIndex]}
          </Typography>
          <Stack direction="column" alignItems={'center'}>
            {stepIndex === 0 && (
              <>
                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Usuario o empresa que envía
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register('company_name', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  />
                  {errors.company_name && (
                    <p style={{ color: 'red' }}>
                      {errors.company_name.message}
                    </p>
                  )}
                </FormControl>
                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Número de teléfono
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register('company_phone', {
                      required: 'Este campo es requerido',
                      pattern: {
                        value: /^[0-9\b]+$/,
                        message: 'Ingrese un número válido',
                      },
                      minLength: {
                        value: 10,
                        message:
                          'El número debe tener al menos 10 dígitos',
                      },
                      maxLength: {
                        value: 15,
                        message:
                          'El número no debe tener más de 15 dígitos',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  />
                  {errors.company_phone && (
                    <p style={{ color: 'red' }}>
                      {errors.company_phone.message}
                    </p>
                  )}
                </FormControl>
                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  RUC
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register('ruc', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  />
                  {errors.ruc && (
                    <p style={{ color: 'red' }}>
                      {errors.ruc.message}
                    </p>
                  )}
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Empresa que recibe
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register('receiving_company', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  />
                  {errors.receiving_company && (
                    <p style={{ color: 'red' }}>
                      {errors.receiving_company.message}
                    </p>
                  )}
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Número de contacto
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register('contact_number', {
                      required: 'Este campo es requerido',
                      pattern: {
                        value: /^[0-9\b]+$/,
                        message: 'Ingrese un número válido',
                      },
                      minLength: {
                        value: 10,
                        message:
                          'El número debe tener al menos 10 dígitos',
                      },
                      maxLength: {
                        value: 15,
                        message:
                          'El número no debe tener más de 15 dígitos',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  />
                  {errors.contact_number && (
                    <p style={{ color: 'red' }}>
                      {errors.contact_number.message}
                    </p>
                  )}
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  RUC
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register('receiving_company_RUC', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  />
                  {errors.receiving_company_RUC && (
                    <p style={{ color: 'red' }}>
                      {errors.receiving_company_RUC.message}
                    </p>
                  )}
                </FormControl>
              </>
            )}
            {stepIndex === 1 && (
              <>
                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Nombre del producto
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register('product_name', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  />
                  {errors.product_name && (
                    <p style={{ color: 'red' }}>
                      {errors.product_name.message}
                    </p>
                  )}
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Cantidad de unidades
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register('quantity', {
                      required: 'Este campo es requerido',
                      pattern: {
                        value: /^\d+$/,
                        message: 'Ingrese solo números',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  />
                  {errors.quantity && (
                    <p style={{ color: 'red' }}>
                      {errors.quantity.message}
                    </p>
                  )}
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Tipo de carga
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <Select
                    {...register('type', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  >
                    {selectChargeType.map((type, index) => (
                      <MenuItem key={index} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.type && (
                    <p style={{ color: 'red' }}>
                      {errors.type.message}
                    </p>
                  )}
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Tipo de envío
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <Select
                    {...register('orderType', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  >
                    {selectOrderType.map((type, index) => (
                      <MenuItem key={index} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.orderType && (
                    <p style={{ color: 'red' }}>
                      {errors.orderType.message}
                    </p>
                  )}
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Peso total
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register('weight', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  />
                  {errors.weight && (
                    <p style={{ color: 'red' }}>
                      {errors.weight.message}
                    </p>
                  )}
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Volumen del paquete
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register('volume', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  />
                  {errors.volume && (
                    <p style={{ color: 'red' }}>
                      {errors.volume.message}
                    </p>
                  )}
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Valor ofertado
                </p>
                <FormControl
                  sx={{
                    m: 1,
                    width: mobile ? '300px' : '666px',
                  }}
                  variant="outlined"
                >
                  <OutlinedInput
                    type="text"
                    {...register('offered_price', {
                      required: 'Este campo es requerido',
                      pattern: {
                        value:
                          /^(\d{1,3}(\.\d{3})*|(\d+))([.,]\d{1,2})?$/,
                        message: 'Ingrese un precio válido',
                      },
                      min: {
                        value: 0.01,
                        message: 'El precio debe ser mayor que 0',
                      },
                    })}
                    onChange={formatPrice} // Llama a formatPrice en cada cambio
                    value={watch('offered_price')}
                    startAdornment={
                      <InputAdornment position="start">
                        $
                      </InputAdornment>
                    }
                    inputProps={{
                      style: {
                        height: mobile ? '40px' : '50px',
                        borderRadius: '8px',
                      },
                    }}
                    aria-describedby="outlined-price-helper-text"
                  />
                  {errors.offered_price && (
                    <p style={{ color: 'red' }}>
                      {errors.offered_price.message}
                    </p>
                  )}
                </FormControl>

                <Stack
                  direction="row"
                  width={mobile ? '90%' : '100%'}
                  justifyContent={'space-between'}
                >
                  <label
                    style={{ color: '#475367', fontWeight: 500 }}
                    htmlFor={'imagenes'}
                  >
                    Imagénes del producto
                  </label>
                  <label
                    style={{
                      color: '#475367',
                      fontWeight: 800,
                      cursor: 'pointer',
                    }}
                  >
                    Subir
                  </label>
                </Stack>

                <Grid
                  container
                  margin="0 auto"
                  width="100%"
                  my={2}
                  mb={2}
                  justifyContent={'flex-start'}
                  spacing={1}
                >
                  <Box
                    item
                    container
                    xs={6}
                    sm={3}
                    direction="row"
                    justifyContent={'center'}
                    style={imageStyles}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      style={inputFileStyles}
                      {...register('image1', {
                        required: {
                          value: true,
                          message: 'Image is required',
                        },
                      })}
                      onChange={(ev) => {
                        handleFileChange(ev, 1);
                      }}
                    />
                    <img
                      src={
                        showImage1
                          ? showImage1
                          : '/crearenvios/i1.png'
                      }
                      style={{
                        borderRadius: '8px',
                        maxHeight: '100%',
                        maxWidth: '100%',
                      }}
                      alt="imagen de prueba"
                    />
                  </Box>
                  <Box
                    item
                    container
                    xs={6}
                    sm={3}
                    direction="row"
                    justifyContent={'center'}
                    style={imageStyles}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      style={inputFileStyles}
                      {...register('image2', {
                        required: {
                          value: true,
                          message: 'Image is required',
                        },
                      })}
                      onChange={(ev) => {
                        handleFileChange(ev, 2);
                      }}
                    />
                    <img
                      src={
                        showImage2
                          ? showImage2
                          : '/crearenvios/i2.png'
                      }
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        borderRadius: '8px',
                      }}
                      alt="imagen de prueba"
                    />
                  </Box>
                  <Box
                    item
                    container
                    xs={6}
                    sm={3}
                    direction="row"
                    justifyContent={'center'}
                    style={imageStyles}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      style={inputFileStyles}
                      {...register('image3', {
                        required: {
                          value: true,
                          message: 'Image is required',
                        },
                      })}
                      onChange={(ev) => {
                        handleFileChange(ev, 3);
                      }}
                    />
                    <img
                      src={
                        showImage3
                          ? showImage3
                          : '/crearenvios/i3.png'
                      }
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        borderRadius: '8px',
                      }}
                      alt="imagen de prueba"
                    />
                  </Box>
                  <Box
                    item
                    container
                    xs={6}
                    sm={3}
                    direction="row"
                    justifyContent={'center'}
                    style={imageStyles}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      style={inputFileStyles}
                      {...register('image4', {
                        required: {
                          value: true,
                          message: 'Image is required',
                        },
                      })}
                      onChange={(ev) => {
                        handleFileChange(ev, 4);
                      }}
                    />
                    <img
                      src={
                        showImage4
                          ? showImage4
                          : '/crearenvios/i4.png'
                      }
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        borderRadius: '8px',
                      }}
                      alt="imagen de prueba"
                    />
                  </Box>
                </Grid>
                {(errors.image1 ||
                  errors.image2 ||
                  errors.image3 ||
                  errors.image4) && (
                  <p style={{ color: 'red' }}>imagen requerida</p>
                )}
              </>
            )}
            {stepIndex === 2 && (
              <>
                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Fecha de retiro
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="es"
                  >
                    <DatePicker
                      {...register('pick_up_date', {
                        required: 'Este campo es requerido',
                      })}
                      value={null} // Debes establecer el valor de DatePicker, puedes usar null o una fecha inicial
                      onChange={(date) =>
                        setValue('pick_up_date', date)
                      }
                      inputFormat="DD/MM/YYYY" // Formato día, mes, año
                      renderInput={(params) => (
                        <TextField {...params} />
                      )}
                      style={{
                        height: mobile ? '40px' : '50px',
                        borderRadius: '8px',
                      }}
                    />
                    {errors.pick_up_date && (
                      <p style={{ color: 'red' }}>
                        {errors.pick_up_date.message}
                      </p>
                    )}
                  </LocalizationProvider>
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Hora de retiro
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="es"
                  >
                    <TimeField
                      {...register('pick_up_time', {
                        required: {
                          value: true,
                          message: 'Este campo es requerido',
                        },
                      })}
                      style={{
                        height: mobile ? '40px' : '50px',
                        borderRadius: '8px',
                      }}
                      onChange={(e) => {
                        const formattedTime =
                          dayjs(e).format('HH:mm');
                        setValue('pick_up_time', formattedTime);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} />
                      )}
                      format="HH:mm"
                    />
                    {errors.pick_up_time && (
                      <p style={{ color: 'red' }}>
                        {errors.pick_up_time.message}
                      </p>
                    )}
                  </LocalizationProvider>
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Dirección de retiro
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register('pick_up_address', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  />
                  {errors.pick_up_address && (
                    <p style={{ color: 'red' }}>
                      {errors.pick_up_address.message}
                    </p>
                  )}
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Fecha de entrega
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="es"
                  >
                    <DatePicker
                      {...register('delivery_date', {
                        required: 'Este campo es requerido',
                      })}
                      value={null} // Debes establecer el valor de DatePicker, puedes usar null o una fecha inicial
                      onChange={(date) =>
                        setValue('delivery_date', date)
                      }
                      inputFormat="dd/MM/yyyy" // Formato día, mes, año
                      renderInput={(params) => (
                        <TextField {...params} />
                      )}
                      style={{
                        height: mobile ? '40px' : '50px',
                        borderRadius: '8px',
                      }}
                    />
                    {errors.delivery_date && (
                      <p style={{ color: 'red' }}>
                        {errors.delivery_date.message}
                      </p>
                    )}
                  </LocalizationProvider>
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Hora de entrega
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="es"
                  >
                    <TimeField
                      {...register('delivery_time', {
                        required: {
                          value: true,
                          message: 'Este campo es requerido',
                        },
                      })}
                      style={{
                        height: mobile ? '40px' : '50px',
                        borderRadius: '8px',
                      }}
                      onChange={(e) => {
                        const formattedTime =
                          dayjs(e).format('HH:mm');
                        setValue('delivery_time', formattedTime);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} />
                      )}
                      format="HH:mm"
                    />
                    {errors.delivery_time && (
                      <p style={{ color: 'red' }}>
                        {errors.delivery_time.message}
                      </p>
                    )}
                  </LocalizationProvider>
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Dirección de entrega
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register('delivery_address', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  />
                  {errors.delivery_address && (
                    <p style={{ color: 'red' }}>
                      {errors.delivery_address.message}
                    </p>
                  )}
                </FormControl>
              </>
            )}
            {stepIndex === 3 && (
              <>
                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Nombre
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  />
                  {errors.name && (
                    <p style={{ color: 'red' }}>
                      {errors.name.message}
                    </p>
                  )}
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Número de tarjeta
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    {...register('card', {
                      required: {
                        value: true,
                        message: 'Este campo es requerido',
                      },
                    })}
                    style={{
                      height: mobile ? '40px' : '50px',
                      borderRadius: '8px',
                    }}
                  />
                  {errors.card && (
                    <p style={{ color: 'red' }}>
                      {errors.card.message}
                    </p>
                  )}
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Fecha de vencimiento
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="es"
                  >
                    <DatePicker
                      {...register('expire', {
                        required: 'Este campo es requerido',
                      })}
                      value={null} // Debes establecer el valor de DatePicker, puedes usar null o una fecha inicial
                      onChange={(date) => setValue('expire', date)}
                      inputFormat="DD/MM/YYYY" // Formato día, mes, año
                      renderInput={(params) => (
                        <TextField {...params} />
                      )}
                      style={{
                        height: mobile ? '40px' : '50px',
                        borderRadius: '8px',
                      }}
                    />
                    {errors.expire && (
                      <p style={{ color: 'red' }}>
                        {errors.expire.message}
                      </p>
                    )}
                  </LocalizationProvider>
                </FormControl>

                <p
                  style={{
                    fontWeight: 400,
                    color: Colors.secondary.main,
                    textAlign: 'left',
                  }}
                >
                  Monto a pagar
                </p>
                <FormControl
                  sx={{ m: 1, width: mobile ? '300px' : '666px' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    type="text"
                    {...register('payment', {
                      required: 'Este campo es requerido',
                      pattern: {
                        value: /^[0-9]*[.,]?[0-9]+$/,
                        message: 'Ingrese un precio válido',
                      },
                      min: {
                        value: 0.01,
                        message: 'El precio debe ser mayor que 0',
                      },
                    })}
                    onChange={formatPayment} // Llama a formatPrice en cada cambio
                    value={watch('payment')}
                    startAdornment={
                      <InputAdornment position="start">
                        $
                      </InputAdornment>
                    }
                    inputProps={{
                      style: {
                        height: mobile ? '40px' : '50px',
                        borderRadius: '8px',
                      },
                    }}
                    aria-describedby="outlined-price-helper-text"
                  />
                  {errors.payment && (
                    <p style={{ color: 'red' }}>
                      {errors.payment.message}
                    </p>
                  )}
                </FormControl>
              </>
            )}
            <Button
              sx={{
                width: mobile ? '300px' : '666px',
                padding: mobile ? '' : '18px 0',
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
              disabled={singleOrderLoading}
              onClick={handleSubmit(onClick)}
              href="#arriba"
            >
              {singleOrderLoading
                ? 'Cargando'
                : stepIndex == steps.length - 1
                ? 'Pagar '
                : 'Siguiente paso'}
            </Button>
          </Stack>
        </Container>
      </section>
    </>
  );
};

export default PageCrearEnvios;
