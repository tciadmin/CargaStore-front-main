import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { postUser } from '../../Redux/Actions/UserActions/userActions';
//? --------------------------------------------- MUI
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
//? --------------------------------------------- STYLES
import { Colors } from '../../Utils/Colors';
import { driverFormData } from '../../Redux/Actions/formActions';
import { useDispatch, useSelector } from 'react-redux';

export default function CompVehicleInfo() {
  const mobile = useMediaQuery('(max-width:720px)');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { driverData } = useSelector((state) => state.forms);
  const { brand, model, year, charge_capacity, charge_type } =
    driverData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      brand: '',
      model: '',
      year: '',
      charge_capacity: '',
      charge_type: '',
    },
  });

  React.useEffect(() => {
    setValue('brand', brand);
    setValue('model', model);
    setValue('year', year);
    setValue('charge_capacity', charge_capacity);
    setValue('charge_type', charge_type);
  }, [brand, model, year, charge_capacity, charge_type, setValue]);

  const onSubmit = (data) => {
    dispatch(driverFormData(data));
    dispatch(
      postUser('driver', { ...driverData, ...data }, navigate)
    );
    // navigate('/login');
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
            Información del vehículo{' '}
          </h1>

          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* //? --------------------------------------------- BRAND */}
            <span style={{ display: 'flex', width: '100%' }}>
              Marca<p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('brand', { required: true })}
                placeholder="Honda"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
              {errors.brand && (
                <p style={{ color: 'red' }}>
                  Este campo es requerido
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- MODEL */}
            <span style={{ display: 'flex', width: '100%' }}>
              Modelo<p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('model', { required: true })}
                placeholder="Dyna 300"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
              {errors.model && (
                <p style={{ color: 'red' }}>
                  Este campo es requerido
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- YEAR */}
            <span style={{ display: 'flex', width: '100%' }}>
              Año del camión<p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('year', { required: true })}
                placeholder="2020"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
              {errors.year && (
                <p style={{ color: 'red' }}>
                  Este campo es requerido
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- LOAD CAPACITY */}
            <span style={{ display: 'flex', width: '100%' }}>
              Capacidad de carga<p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('charge_capacity', { required: true })}
                placeholder="2 toneladas"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
              {errors.charge_capacity && (
                <p style={{ color: 'red' }}>
                  Este campo es requerido
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- LOAD TYPE*/}
            <span style={{ display: 'flex', width: '100%' }}>
              Tipo de unidad de carga
              <p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('charge_type', { required: true })}
                placeholder="Refrigeradas"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
              {errors.charge_type && (
                <p style={{ color: 'red' }}>
                  Este campo es requerido
                </p>
              )}
            </FormControl>

            <Button
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
              type="submit"
            >
              Registrarse
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
