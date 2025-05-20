import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { postUser } from '../../Redux/Actions/UserActions/userActions';
//? --------------------------------------------- MUI
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
//? --------------------------------------------- STYLES
import { Colors } from '../../Utils/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { clientFormData } from '../../Redux/Actions/formActions';
import PhoneInput from 'react-phone-input-2';

export default function CompCompanyInfo() {
  const mobile = useMediaQuery('(max-width:720px)');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { clientData } = useSelector((state) => state.forms);
  const { userLoading } = useSelector((state) => state.user);
  const { company_name, company_ident, address, city, company_phone } = clientData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    defaultValues: {
      company_name: '',
      company_ident: '',
      address: '',
      city: '',
      company_phone: '',
    },
  });

  React.useEffect(() => {
    setValue('company_name', company_name);
    setValue('company_ident', company_ident);
    setValue('address', address);
    setValue('city', city);
    setValue('company_phone', company_phone);
  }, [company_name, company_ident, address, city, company_phone, setValue]);

  const onSubmit = (data) => {
    dispatch(clientFormData(data));
    // console.table({ ...clientData, ...data });
    dispatch(
      postUser('customer', { ...clientData, ...data }, navigate)
    );
  };

  return (
    <Box className="registerContainer">
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
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
            Información de la empresa{' '}
          </h1>

          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* //? --------------------------------------------- COMPANY NAME */}
            <span style={{ display: 'flex', width: '100%' }}>
              Nombre de la empresa
              <p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('company_name', { required: true })}
                placeholder="El mundo del papel"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
              {errors.company_name && (
                <p style={{ color: 'red', width: 400 }}>
                  Este campo es requerido
                </p>
              )}
            </FormControl>
            {/* //? -------------------------------- COMPANY IDENTIFICATION */}
            <span style={{ display: 'flex', width: '100%' }}>
            Número de identificación fiscal <p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('company_ident', {
                  required: {
                    value: true,
                    message: 'Este campo es requerido',
                  },
                  minLength: {
                  value: 9,
                  message: 'Debe tener al menos 9 caracteres',
                  },
                })}
                placeholder="Ingrese el Nº de identificación"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
              {errors.company_ident && (
                <p style={{ color: 'red', width: 400 }}>
                  {errors.company_ident.message}
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- ADDRESS */}
            <span style={{ display: 'flex', width: '100%' }}>
              Dirección<p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('address', { required: true })}
                placeholder="C. Principal y Secundaria, Numeración"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
              {errors.address && (
                <p style={{ color: 'red', width: 400 }}>
                  Este campo es requerido
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- CITY */}
            <span style={{ display: 'flex', width: '100%' }}>
              Ciudad<p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('city', { required: true })}
                placeholder="Bogotá"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
              {errors.city && (
                <p style={{ color: 'red', width: 400 }}>
                  Este campo es requerido
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- PHONE */}
            <span style={{ display: 'flex', width: '100%' }}>
              Número de celular <p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined" style={{ width: 400 }}>
             <Controller
                name="company_phone"
                control={control}
                rules={{
                  required: 'Este campo es requerido',
                  validate: (value) => {
                    const cleanValue = value.replace(/\D/g, '');
                    if (cleanValue.length < 10 || cleanValue.length > 16) {
                      return 'Número inválido';
                    }
                    return true;
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
              {errors.company_phone && (
                <p style={{ color: 'red', marginTop: '5px' }}>
                  {errors.company_phone.message}
                </p>
              )}
            </FormControl>
            <Button
              variant="contained"
              type="submit"
              disabled={userLoading || Object.keys(errors).length > 0}
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
              {userLoading ? 'Cargando' : 'Registrarse'}
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
