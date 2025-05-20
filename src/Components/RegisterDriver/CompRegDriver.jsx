import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
//? --------------------------------------------- MUI
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
//? --------------------------------------------- STYLES
import { Colors } from '../../Utils/Colors';
import { driverFormData } from '../../Redux/Actions/formActions';
import { useDispatch, useSelector } from 'react-redux';
import PhoneInput from 'react-phone-input-2';

export default function CompRegDriver() {
  const navigate = useNavigate();
  const mobile = useMediaQuery('(max-width:720px)');
  const dispatch = useDispatch();

  const { driverData } = useSelector((state) => state.forms);
  const { name, lastname, email, password, confirmPassword, identification, phone } =
    driverData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      identification: '',
      phone:'',
    },
  });

  React.useEffect(() => {
    setValue('name', name);
    setValue('lastname', lastname);
    setValue('email', email);
    setValue('password', password);
    setValue('confirmPassword', confirmPassword);
    setValue('identification', identification);
    setValue('phone', phone);
  }, [name, lastname, email, password, confirmPassword, identification, phone, setValue]);

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    React.useState(false);

  const handleClickShowPassword = () =>
    setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    dispatch(driverFormData(data)) &&
      navigate('/register/driver/vehicle-info');
  };

  return (
    <Box className="registerContainer">
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          minHeight: '100vh',
          justifyContent: 'center',
          overflowY: 'auto',
        }}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            border: mobile
              ? 'none'
              : '1px solid rgb(102, 113, 133, 0.3)',
            borderRadius: '8px',
            gap: 10,
            justifyContent: 'center',
          }}
        >
          <h1 style={{ fontSize: '1.5rem' }}>
            {' '}
            Registro de socios conductores{' '}
          </h1>
          <p
            style={{
              fontWeight: 400,
              color: Colors.secondary.contrastText,
            }}
          >
            Datos personales
          </p>

          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* //? --------------------------------------------- NAME */}
            <span style={{ display: 'flex', width: '100%' }}>
              Nombre<p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Este campo es requerido',
                  },
                })}
                placeholder="Ingrese nombre"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
              {errors.name && (
                <p style={{ color: 'red', width: 400 }}>
                  {errors.name.message}
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- LAST NAME */}
            <span style={{ display: 'flex', width: '100%' }}>
              Apellido<p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('lastname', {
                  required: {
                    value: true,
                    message: 'Este campo es requerido',
                  },
                })}
                placeholder="Ingrese apellido"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
              {errors.lastname && (
                <p style={{ color: 'red', width: 400 }}>
                  {errors.lastname.message}
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- EMAIL */}
            <span style={{ display: 'flex', width: '100%' }}>
              Correo electrónico<p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Este campo es requerido',
                  }, // Si no hay nada escrito en el input de email se coloca un mensaje
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Si en el input no se cumple con esta expreción regular se coloca un mensaje distinto
                    message: 'Email invalido',
                  },
                })}
                placeholder="emailexample.com"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
            </FormControl>
            {errors.email && (
              <p style={{ color: 'red', width: 400 }}>
                {errors.email.message}
              </p>
            )}
            {/* //? --------------------------------------------- IDENTIFICATION */}
            <span style={{ display: 'flex', width: '100%' }}>
              Cédula o RUC <p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('identification', {
                  required: {
                    value: true,
                    message: 'Este campo es requerido',
                  },
                  minLength: {
                  value: 10,
                  message: 'Debe tener al menos 10 caracteres',
                  },
                })}
                placeholder="Ingrese cédula o RUC"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
              {errors.identification && (
                <p style={{ color: 'red', width: 400 }}>
                  {errors.identification.message}
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- PHONE */}
            <span style={{ display: 'flex', width: '100%' }}>
              Número de celular <p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined" style={{ width: 400 }}>
             <Controller
                name="phone"
                control={control}
                rules={{
                  required: 'Este campo es requerido',
                  minLength: {
                    value: 10,
                    message: 'Número inválido',
                  },
                }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country={'ec'} // puedes cambiar 'ec' por el país predeterminado que necesites
                    enableSearch
                    inputStyle={{
                      width: '100%',
                      height: '40px',
                      borderRadius: '8px',
                    }}
                    buttonStyle={{
                      borderRadius: '8px 0 0 8px',
                    }}
                    onChange={(value) => field.onChange(value)}
                    value={field.value}
                  />
                )}
              />
              {errors.phone && (
                <p style={{ color: 'red', marginTop: '5px' }}>
                  {errors.phone.message}
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- PASSWORD */}
            <span style={{ display: 'flex', width: '100%' }}>
              Crea una contraseña <p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Este campo es requerido',
                  },
                  pattern: {
                    value: /^.{9,}$/i, // maximo 8 caracteres
                    message: 'Mínimo 8 caracteres',
                  },
                })}
                placeholder="Mínimo 8 carácteres"
                type={showPassword ? 'text' : 'password'}
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <img src="/imgLogin/OpenEyeIcon.svg" />
                      ) : (
                        <img src="/imgLogin/EyeIcon.svg" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {errors.password && (
                <p style={{ color: 'red', width: 400 }}>
                  {errors.password.message}
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- CONFIRM PASSWORD */}
            <span style={{ display: 'flex', width: '100%' }}>
              Confirma contraseña <p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('confirmPassword', {
                  required: {
                    value: true,
                    message: 'Este campo es requerido',
                  },
                  pattern: {
                    value: /^.{9,}$/i, // Si en el input no se cumple con esta expreción regular se coloca un mensaje distinto
                    message: 'Mínimo 8 caracteres',
                  },
                  validate: (value, formValues) =>
                    value === formValues.password ||
                    'La contraseña no coincide',
                })}
                placeholder="Mínimo 8 carácteres"
                type={showConfirmPassword ? 'text' : 'password'}
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? (
                        <img src="/imgLogin/OpenEyeIcon.svg" />
                      ) : (
                        <img src="/imgLogin/EyeIcon.svg" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {errors.confirmPassword && (
                <p style={{ color: 'red', width: 400 }}>
                  {errors.confirmPassword.message}
                </p>
              )}
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              sx={{
                m: 1,
                height: '40px',
                width: 400,
              }}
              style={{
                color: Colors.primary.contrastText,
                backgroundColor: Colors.primary.main,
                borderRadius: '8px',
              }}
            >
              Siguiente Paso
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
