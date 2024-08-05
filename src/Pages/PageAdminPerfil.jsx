import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Button,
  Stack,
  useMediaQuery,
  Box,
  FormControl,
  OutlinedInput,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { patchBasicUserData } from '../Redux/Actions/UserActions/userActions';
import { Colors } from '../Utils/Colors';

const PageAdminPerfil = () => {
  const mobile = useMediaQuery('(max-width: 750px)');
  const dispatch = useDispatch();
  const [editar, setEditar] = useState(false);
  const { user, userLoading } = useSelector((state) => state.user);
  const [showImage, setShowImage] = useState(null);

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      profile_image: '',
      name: '',
      lastname: '',
      email: '',
    },
  });

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

  const urlBack = import.meta.env.VITE_URL_BACKEND;

  React.useEffect(() => {
    if (user) {
      user.profile_image &&
        setShowImage(`${urlBack}/${user.profile_image}`);
      setValue('name', user.name);
      setValue('lastname', user.lastname);
      setValue('email', user.email);
    }
  }, [setValue, user, urlBack]);

  React.useEffect(() => {
    setEditar(false);
  }, [user]);

  const putBasicData = () => {
    const { profile_image, name, lastname } = watch();
    dispatch(patchBasicUserData(profile_image, name, lastname));
  };

  return (
    <>
      <Stack direction="row" justifyContent={'center'}>
        <Stack
          display="flex"
          width={mobile ? '90%' : '100%'}
          maxWidth={'650px'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignContent={'center'}
          height={'100vh'}
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
                style={{
                  display: 'none',
                }}
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
            <Box
              style={{
                display: 'flex',
                textAlign: 'left',
                flexDirection: 'column',
                gap: 3,
                justifyContent: 'center',
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
                  {...register('lastname', {
                    required: {
                      value: true,
                      message: 'Este campo es requerido',
                    },
                  })}
                  readOnly={!editar}
                />
                {errors.lastname && (
                  <p style={{ color: 'red' }}>
                    {errors.lastname.message}
                  </p>
                )}
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
              onClick={putBasicData}
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
      </Stack>
    </>
  );
};

export default PageAdminPerfil;
