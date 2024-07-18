import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Stack,
  Button,
  Box,
  Rating,
  useMediaQuery,
  Container,
  Avatar,
  Typography,
} from '@mui/material';
import CompNavLanding from '../NavLanding/CompNavLanding';
import { Colors } from '../../Utils/Colors';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFeedback,
  postFeedback,
} from '../../Redux/Actions/FeedbackActions/feedbackActions';
import { useParams } from 'react-router-dom';
import { driverDetail } from '../../Redux/Actions/DriverAction/driverDetail';
import Loading from '../Loading/Loading';
import { clearSingleDriver } from '../../Redux/Actions/DriverAction/clearSingleDriver';

export const CompProfile = () => {
  const { userId } = useParams();

  // const [value, setValue] = useState(2);
  // const [value2, setValue2] = useState(5);
  const [visibleComments, setVisibleComments] = useState(2);
  const mobile = useMediaQuery('(max-width:720px)');
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      customerId: '',
      driverId: '',
      comment: '',
      score: 0,
    },
  });

  const formValues = watch();

  useEffect(() => {
    console.log('Form Values:', formValues);
  }, [formValues]);

  const { user } = useSelector((state) => state.user);

  const { singleDriver, singleDriverLoading } = useSelector(
    (state) => state.driver
  );

  const { allFeedback, singleFeedBackLoading, feedbackLoading } =
    useSelector((state) => state.feedback);

  useEffect(() => {
    dispatch(driverDetail(userId));
    return () => {
      dispatch(clearSingleDriver());
    };
  }, [dispatch, userId]);

  useEffect(() => {
    singleDriver && setValue('driverId', singleDriver?.driver?.id);
    user?.role === 'customer' &&
      setValue('customerId', user?.customer?.id);
  }, [
    userId,
    setValue,
    user?.role,
    user?.customer?.id,
    singleDriver?.driver?.id,
    singleDriver,
  ]);

  useEffect(() => {
    dispatch(getFeedback(userId));
  }, [dispatch, userId]);

  const handleShowMore = () => {
    setVisibleComments(
      (prevVisibleComments) => prevVisibleComments + 2
    );
  };

  const newFeedback = (data) => {
    console.log('newFeedback ejecutado');
    const { customerId, driverId, comment, score } = data;
    if (customerId && driverId && comment && score) {
      dispatch(postFeedback(data));
    }
  };

  return (
    <Stack
      sx={{
        height: '100%',
        backgroundColor: '#F6F6F6',
      }}
    >
      <CompNavLanding />
      {singleDriverLoading && (
        <Box
          style={{
            display: 'flex',
            height: '80vh',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Loading color="#333" />
        </Box>
      )}
      {singleDriver && (
        <Container>
          <Stack
            display={'flex'}
            direction="row"
            justifyContent={'center'}
            alignItems={'center'}
            pt={5}
          >
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <Box>
                  <Avatar
                    src={
                      singleDriver?.user?.profile_image
                        ? `http://localhost:3000/api/${singleDriver?.user?.profile_image}`
                        : '/imgShipments/DriverDetails.jpg'
                    }
                    sx={{ width: '150px', height: '150px' }}
                  ></Avatar>
                </Box>
                <p
                  style={{ fontWeight: 'bold' }}
                >{`${singleDriver?.user?.name} ${singleDriver?.user?.lastname}`}</p>
                <p style={{ color: Colors.secondary.contrastText }}>
                  Socio desde 01/10/2022
                </p>
                <Box
                  sx={{
                    width: mobile ? '100%' : '50%',
                    padding: '20px',
                  }}
                >
                  <p>
                    {singleDriver?.driver?.description
                      ? singleDriver?.driver?.description
                      : 'El conductor no cuenta con una descripción'}
                  </p>
                </Box>
              </Box>

              <Stack
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  maxWidth: '600px',
                  width: '100%',
                }}
              >
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: ' center',
                    backgroundColor: Colors.primary.contrastText,
                    padding: '5px',
                    borderRadius: '8px',
                    border: '2px solid',

                    borderColor: Colors.terciary.main,
                    height: '107px',
                    width: mobile ? '100%' : '212px',
                    maxWidth: '33.3%',
                    fontWeight: 600,
                  }}
                >
                  <p>+500</p>
                  <p>Viajes</p>
                </Box>{' '}
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: ' center',
                    width: mobile ? '100%' : '212px',
                    maxWidth: '33.3%',
                    height: '107px',
                    backgroundColor: Colors.primary.contrastText,
                    padding: '5px',
                    borderRadius: '8px',
                    border: '2px solid',
                    borderColor: Colors.terciary.main,
                    fontWeight: 600,
                  }}
                >
                  <p>{singleDriver?.driver?.rating}</p>
                  <Rating
                    readOnly
                    value={singleDriver?.driver?.rating}
                  />
                </Box>
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: ' center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Colors.primary.contrastText,
                    padding: '5px',
                    borderRadius: '8px',
                    border: '2px solid',
                    borderColor: Colors.terciary.main,
                    height: '107px',
                    width: mobile ? '100%' : '212px',
                    maxWidth: '33.3%',
                    fontWeight: 600,
                  }}
                >
                  <p>398 </p>
                  <p>Reseñas</p>
                </Box>
              </Stack>
              {mobile && user?.role === 'admin' && (
                <Stack
                  direction="column"
                  justifyContent={'flex-start'}
                  alignItems="flex-start"
                  width="100%"
                  maxWidth={'600px'}
                  style={{
                    border: '1px solid lightgrey',
                    padding: '20px',
                    borderRadius: '10px',
                  }}
                >
                  <Typography fontSize="20px" fontWeight={600} mb={5}>
                    Información personal
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Nombre:{' '}
                    <span style={{ fontWeight: 400 }}>
                      {`${singleDriver?.user?.name} ${singleDriver?.user?.lastname}`}{' '}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Número de documento:{' '}
                    <span style={{ fontWeight: 400 }}>
                      indefinido
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Correo electrónico:{' '}
                    <span style={{ fontWeight: 400 }}>
                      {singleDriver?.user?.email}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Número de contacto:{' '}
                    <span style={{ fontWeight: 400 }}>
                      {singleDriver?.driver?.phone
                        ? singleDriver?.driver?.phone
                        : 'indefinido'}
                    </span>
                  </Typography>

                  <Typography fontSize="20px" fontWeight={600} my={5}>
                    Información del camión
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Marca:{' '}
                    <span style={{ fontWeight: 400 }}>
                      {singleDriver?.driver?.truck?.brand}{' '}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Modelo:{' '}
                    <span style={{ fontWeight: 400 }}>
                      {singleDriver?.driver?.truck?.model}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Año:{' '}
                    <span style={{ fontWeight: 400 }}>
                      {singleDriver?.driver?.truck?.year}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Matrícula:{' '}
                    <span style={{ fontWeight: 400 }}>
                      {' '}
                      {singleDriver?.driver?.truck?.num_plate
                        ? singleDriver?.driver?.truck?.num_plate
                        : 'indefinido'}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Capacidad de carga:{' '}
                    <span style={{ fontWeight: 400 }}>
                      {singleDriver?.driver?.truck?.charge_capacity}
                    </span>
                  </Typography>

                  <Typography fontSize="20px" fontWeight={600} my={5}>
                    Información legal
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Licencia de conducir:{' '}
                    <span style={{ fontWeight: 400 }}>
                      {singleDriver?.driver?.num_license
                        ? singleDriver?.driver?.num_license
                        : 'indefinido'}{' '}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Afiliación IESS:{' '}
                    <span style={{ fontWeight: 400 }}>
                      {singleDriver?.driver?.iess ? 'si' : 'no'}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Póliza de seguro:{' '}
                    <span style={{ fontWeight: 400 }}>
                      {singleDriver?.driver?.insurance_policy
                        ? 'si'
                        : 'no'}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Permiso de puerto:{' '}
                    <span style={{ fontWeight: 400 }}>
                      {singleDriver?.driver?.port_permit
                        ? 'si'
                        : 'no'}
                    </span>
                  </Typography>

                  <Typography fontSize="20px" fontWeight={600} my={5}>
                    Preferencias de viaje
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Internacional:{' '}
                    <span style={{ fontWeight: 400 }}>
                      indefinido
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Carga:{' '}
                    <span style={{ fontWeight: 400 }}>
                      {singleDriver?.driver?.truck?.charge_type}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Ciudad:{' '}
                    <span style={{ fontWeight: 400 }}>
                      indefinido
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Día en ruta:{' '}
                    <span style={{ fontWeight: 400 }}>
                      indefinido
                    </span>
                  </Typography>
                </Stack>
              )}
              {user?.role === 'customer' && (
                <form
                  style={{
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '600px',
                  }}
                  onSubmit={handleSubmit(newFeedback)}
                >
                  <Stack
                    sx={{
                      alignItems: ' center',
                      textAlign: 'left',
                    }}
                    direction="column"
                    justifyContent={'center'}
                    alignItems={'center'}
                    width="100%"
                    maxWidth={'600px'}
                  >
                    <p
                      style={{
                        width: '100%',
                        display: 'flex',
                        fontWeight: 500,
                        fontSize: '14px',
                        textAlign: 'left',
                        marginBottom: 5,
                      }}
                    >
                      Deja tu reseña
                    </p>
                    <input
                      style={{
                        width: '100%',
                        height: '134px',
                        verticalAlign: 'start',
                        borderRadius: '8px',
                        border: '2px solid ' + Colors.primary.main,
                        borderColor: Colors.terciary.main,
                      }}
                      {...register('comment', {
                        required: {
                          value: true,
                          message: 'Este campo es requerido',
                        },
                      })}
                    />
                    <Box
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 10,
                        width: '100%',
                        maxWidth: '600px',
                      }}
                    >
                      <Rating
                        name="simple-controlled"
                        value={formValues.score || 0}
                        onChange={(event, newValue) => {
                          setValue('score', newValue);
                        }}
                      />
                      <Button
                        disabled={
                          singleFeedBackLoading || feedbackLoading
                        }
                        sx={{
                          color: 'white',
                          backgroundColor: '#007C52',
                          fontWeight: 600,
                        }}
                        type="submit"
                        variant="contained"
                      >
                        Publicar
                      </Button>
                    </Box>
                  </Stack>
                </form>
              )}
              {allFeedback?.length > 0 ? (
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      maxWidth: '600px',
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 600,
                        marginBottom: '10px',
                      }}
                    >
                      Otras opiniones
                    </p>
                    {allFeedback
                      ?.slice(0, visibleComments)
                      .map((elem) => (
                        <Stack width={'100%'} mb={2} key={elem.id}>
                          <p>{elem.comment}</p>

                          <Box
                            style={{
                              display: 'flex',
                              flexDirection: 'row',

                              justifyContent: 'space-between',
                            }}
                          >
                            <Rating readOnly value={elem.score} />
                            <p
                              style={{
                                color: Colors.secondary.contrastText,
                                fontWeight: 500,
                              }}
                            >
                              {elem.date}
                            </p>
                          </Box>
                        </Stack>
                      ))}
                    {visibleComments < allFeedback?.length && (
                      <p
                        style={{
                          color: Colors.secondary.contrastText,
                          fontWeight: 500,
                          cursor: 'pointer',
                          marginTop: '10px',
                        }}
                        onClick={handleShowMore}
                      >
                        Mostrar más opiniones
                      </p>
                    )}
                  </Box>
                </Box>
              ) : (
                ''
              )}
            </Stack>
            {!mobile && user?.role === 'admin' && (
              <Stack
                direction="column"
                justifyContent={'flex-start'}
                alignItems="flex-start"
                width="100%"
                maxWidth={'600px'}
                style={{
                  border: '1px solid lightgrey',
                  padding: '20px',
                  borderRadius: '10px',
                }}
              >
                <Typography fontSize="20px" fontWeight={600} mb={5}>
                  Información personal
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Nombre:{' '}
                  <span style={{ fontWeight: 400 }}>
                    {`${singleDriver?.user?.name} ${singleDriver?.user?.lastname}`}{' '}
                  </span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Número de documento:{' '}
                  <span style={{ fontWeight: 400 }}>indefinido</span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Correo electrónico:{' '}
                  <span style={{ fontWeight: 400 }}>
                    {singleDriver?.user?.email}
                  </span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Número de contacto:{' '}
                  <span style={{ fontWeight: 400 }}>
                    {singleDriver?.driver?.phone
                      ? singleDriver?.driver?.phone
                      : 'indefinido'}
                  </span>
                </Typography>

                <Typography fontSize="20px" fontWeight={600} my={5}>
                  Información del camión
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Marca:{' '}
                  <span style={{ fontWeight: 400 }}>
                    {singleDriver?.driver?.truck?.brand}
                  </span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Modelo:{' '}
                  <span style={{ fontWeight: 400 }}>
                    {singleDriver?.driver?.truck?.model}
                  </span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Año:{' '}
                  <span style={{ fontWeight: 400 }}>
                    {singleDriver?.driver?.truck?.year}
                  </span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Matrícula:{' '}
                  <span style={{ fontWeight: 400 }}>
                    {singleDriver?.driver?.truck?.num_plate
                      ? singleDriver?.driver?.truck?.num_plate
                      : 'indefinido'}
                  </span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Capacidad de carga:{' '}
                  <span style={{ fontWeight: 400 }}>
                    {singleDriver?.driver?.truck?.charge_capacity}
                  </span>
                </Typography>

                <Typography fontSize="20px" fontWeight={600} my={5}>
                  Información legal
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Licencia de conducir:{' '}
                  <span style={{ fontWeight: 400 }}>
                    {singleDriver?.driver?.num_license
                      ? singleDriver?.driver?.num_license
                      : 'indefinido'}
                  </span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Afiliación IESS:{' '}
                  <span style={{ fontWeight: 400 }}>
                    {singleDriver?.driver?.iess ? 'si' : 'no'}
                  </span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Póliza de seguro:{' '}
                  <span style={{ fontWeight: 400 }}>
                    {singleDriver?.driver?.insurance_policy
                      ? 'si'
                      : 'no'}
                  </span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Permiso de puerto:{' '}
                  <span style={{ fontWeight: 400 }}>
                    {singleDriver?.driver?.port_permit ? 'si' : 'no'}
                  </span>
                </Typography>

                <Typography fontSize="20px" fontWeight={600} my={5}>
                  Preferencias de viaje
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Internacional:{' '}
                  <span style={{ fontWeight: 400 }}>indefinido</span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Carga:{' '}
                  <span style={{ fontWeight: 400 }}>
                    {singleDriver?.driver?.truck?.charge_type}
                  </span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Ciudad:{' '}
                  <span style={{ fontWeight: 400 }}>indefinido</span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  Día en ruta:{' '}
                  <span style={{ fontWeight: 400 }}>indefinido</span>
                </Typography>
              </Stack>
            )}
          </Stack>
        </Container>
      )}
    </Stack>
  );
};
