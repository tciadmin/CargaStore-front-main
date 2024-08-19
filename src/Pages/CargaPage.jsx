import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Modal,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import ResponsiveImageBox from '../Components/imageComponents/ResponsiveImageBox';
import ChargeRequestCard from '../Components/cards/ChargeRequestCard';
import ConductorAsignadoCard from '../Components/cards/ConductorAsignadoCard';
import VerticalGreenStepper from '../Components/steppers/VerticalGreenStepper';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { orderDetail } from '../Redux/Actions/OrderActions/orderDetail';
import { format, isValid, parseISO } from 'date-fns';
import Loading from '../Components/Loading/Loading';
import { duplicateOrder } from '../Redux/Actions/OrderActions/duplicateorder';
import { applicForOrder } from '../Redux/Actions/ApplicationActions/applyForOrder';
import { getOrderState } from '../Redux/Actions/OrderActions/getOrderState';
import { aceptOrder } from '../Redux/Actions/ApplicationActions/aceptOrder';
import { declineOrder } from '../Redux/Actions/ApplicationActions/declineOrder';
import { clearOrderDetail } from '../Redux/Actions/OrderActions/clearOrderDetail';
import { clearApplicationMessage } from '../Redux/Actions/ApplicationActions/clearApplicationMessage';
import { changeOrderState } from '../Redux/Actions/OrderActions/changeOrderState';
// import { Colors } from '../Utils/Colors';
import { finishOrder } from '../Redux/Actions/OrderActions/finishOrder';
import { postChat } from '../Redux/Actions/ChatActions/chatActions';

const GreenCircle = () => {
  return (
    <svg
      width="9"
      height="9"
      style={{
        verticalAlign: 'center',
        padding: 'auto 0px',
        marginRight: '5px',
      }}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4.39844" cy="4.66016" r="4" fill="#007C52" />
    </svg>
  );
};
const CargaPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(orderDetail(id));
    return () => {
      dispatch(clearOrderDetail());
    };
  }, [dispatch, id]);

  const {
    singleOrder,
    singleOrderLoading,
    duplicating,
    orderState,
    changingOrderState,
  } = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.user);
  const { applicationLoading, applicationMessage } = useSelector(
    (state) => state.application
  );

  React.useEffect(() => {
    singleOrder?.status !== 'pendiente' &&
      dispatch(getOrderState(id));
  }, [singleOrder?.status, dispatch, id]);

  const mobile = useMediaQuery('(max-width:750px)');

  const handleCloseModal = () => {
    dispatch(clearApplicationMessage());
  };

  const [applyed, setApplyed] = useState(false);

  React.useEffect(() => {
    singleOrder?.applications.map((el) => {
      el.driverId === user?.driver?.id && setApplyed(true);
    });
    !singleOrder?.applications?.length && setApplyed(false);
  }, [
    applyed,
    singleOrder?.applications,
    singleOrder?.applications.length,
    user?.driver?.id,
  ]);

  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return isValid(date) ? format(date, 'dd/MM/yy') : 'Invalid date';
  };

  const duplcateOrder = () => {
    dispatch(duplicateOrder(id));
  };

  const applyForOrder = () => {
    dispatch(applicForOrder(user?.driver?.id, id));
  };

  const handleAceptOrder = async () => {
    dispatch(aceptOrder(id));
    const chatData = {
      clientId: singleOrder.customer.user.id,
      driverId: user.id,
      orderId: singleOrder.id,
      driverName: user.name,
      driverLastname: user.lastname,
    };
    await postChat(chatData);
  };

  const handleDeclineOrder = () => {
    dispatch(declineOrder(id));
  };

  const handleChangeOrderState = () => {
    dispatch(changeOrderState(id));
  };

  const handleFinishOrder = () => {
    dispatch(finishOrder(id, user?.driver?.id));
  };

  const urlBack = import.meta.env.VITE_URL_BACKEND;

  //adaptarlo para que una vez que esten los datos se pueda obtener id de carga por url params y de ahi hacer llamado a la api
  return (
    <Box
      style={{
        display: 'flex',
        height: '100%',
        marginTop: '64px',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {singleOrderLoading && (
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
      {singleOrder && (
        <Box style={{ padding: 10 }}>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              mb={3}
              ml={5}
              fontSize="16px"
              color={'secondary'}
              fontWeight={600}
            >
              {`#${singleOrder?.id}`}
            </Typography>
            {user.role === 'customer' && (
              <Button
                variant="contained"
                sx={{
                  fontWeight: 600,
                  width: '150px',
                  height: '40px',
                  marginRight: 5,
                }}
                onClick={() => navigate(`/editarEnvio/${id}`)}
              >
                Editar envío
              </Button>
            )}
          </Box>
          <Grid
            container
            direction={mobile ? 'column' : 'row'}
            alignItems={mobile ? 'center' : 'flex-start'}
            justifyContent={'center'}
            mt={2}
            gap={3}
          >
            {!mobile && (
              <Grid
                item
                container
                style={{ height: '450px', maxWidth: '450px' }}
                xs={5}
              >
                <Grid
                  item
                  container
                  gap={1}
                  pt={'6px'}
                  alignContent={'center'}
                  xs={4}
                >
                  <ResponsiveImageBox
                    w="140px"
                    h="140px"
                    url={`${urlBack}/api/${singleOrder.package.image1}`}
                  />
                  <ResponsiveImageBox
                    w="140px"
                    h="140px"
                    url={`${urlBack}/api/${singleOrder.package.image2}`}
                  />
                  <ResponsiveImageBox
                    w="140px"
                    h="140px"
                    url={`${urlBack}/api/${singleOrder.package.image3}`}
                  />
                </Grid>
                <Grid
                  item
                  direction={'row'}
                  alignItems={'flex-start'}
                  xs={8}
                >
                  <ResponsiveImageBox
                    url={`${urlBack}/api/${singleOrder.package.image4}`}
                  />
                </Grid>
              </Grid>
            )}
            <Grid
              item
              maxWidth="100%"
              justifyContent={'center'}
              xs={4}
            >
              <Grid container flexDirection={'column'} p={3}>
                <Typography fontSize="16px" fontWeight={600}>
                  Valor ofertado:{' '}
                  <span style={{ fontWeight: '400' }}>
                    {`$${singleOrder?.package.offered_price}`}
                  </span>
                </Typography>
                <Typography fontSize="40px" fontWeight={600} mb={3}>
                  {singleOrder?.package.product_name}
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  <GreenCircle></GreenCircle>
                  Producto:{' '}
                  <span style={{ fontWeight: '400' }}>
                    {singleOrder?.package.product_name}
                  </span>
                </Typography>
                <Typography
                  fontSize="16px"
                  fontWeight={600}
                  verticalAlign="center"
                >
                  <GreenCircle></GreenCircle>
                  Cantidad de unidades:{' '}
                  <span style={{ fontWeight: '400' }}>
                    {singleOrder?.package.quantity}
                  </span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  <GreenCircle></GreenCircle>
                  Volumen:{' '}
                  <span style={{ fontWeight: '400' }}>
                    {singleOrder?.package.weight}
                  </span>
                </Typography>
                <Typography fontSize="16px" fontWeight={600}>
                  <GreenCircle></GreenCircle>
                  Tipo de carga:{' '}
                  <span style={{ fontWeight: '400' }}>
                    {singleOrder?.package.type}
                  </span>
                </Typography>
                {!singleOrder?.adittional_information ? (
                  ''
                ) : (
                  <Typography mt={5} fontSize="16px" fontWeight={600}>
                    Información adicional
                  </Typography>
                )}

                <Typography fontSize="16px" fontWeight={400}>
                  {!singleOrder?.adittional_information
                    ? ''
                    : `${singleOrder?.adittional_information}`}{' '}
                </Typography>
                {user.role === 'customer' && (
                  <Stack
                    direction="row"
                    justifyContent={'center'}
                    mt={3}
                    gap={5}
                  >
                    <Button
                      disabled={duplicating}
                      variant="outlined"
                      sx={{
                        fontWeight: 600,
                        width: '150px',
                        height: '40px',
                      }}
                      onClick={duplcateOrder}
                    >
                      {duplicating ? 'cargando' : ' Duplicar envío'}
                    </Button>
                  </Stack>
                )}
              </Grid>
              <Grid
                item
                container
                maxWidth="100%"
                style={{ overflowX: 'auto', overflowY: 'hidden' }}
              ></Grid>
              {mobile && (
                <div
                  style={{
                    display: 'flex',
                    alignSelf: 'flex-end',
                    overflowX: 'scroll',
                    overflowY: 'hidden',
                    position: 'relative',
                    maxWidth: '100vw',
                  }}
                >
                  <img
                    src={`${urlBack}/api/${singleOrder.package.image1}`}
                    width="130px"
                    style={{
                      flex: '0 0 auto',
                      marginRight: '5px',
                      marginLeft: '5px',
                    }}
                  />
                  <img
                    src={`${urlBack}/api/${singleOrder.package.image2}`}
                    width="130px"
                    style={{ flex: '0 0 auto', marginRight: '5px' }}
                  />
                  <img
                    src={`${urlBack}/api/${singleOrder.package.image3}`}
                    width="130px"
                    style={{ flex: '0 0 auto', marginRight: '5px' }}
                  />
                  <img
                    src={`${urlBack}/api/${singleOrder.package.image4}`}
                    width="130px"
                    style={{ flex: '0 0 auto', marginRight: '5px' }}
                  />
                </div>
              )}
            </Grid>
            <Grid
              item
              direction={'column'}
              maxWidth="100%"
              justifyContent={'center'}
              xs={3}
            >
              <Grid
                item
                maxWidth="100%"
                justifyContent={'center'}
                border="1px solid lightgrey"
                borderRadius={'5px'}
                p={3}
                xs={3}
              >
                <Grid container flexDirection={'column'}>
                  <Typography mb={3} fontSize="20px" fontWeight={600}>
                    Información del cliente
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Nombre:{' '}
                    <span style={{ fontWeight: '400' }}>
                      {' '}
                      {`${singleOrder?.customer.user.name} ${singleOrder?.customer.user.lastname}`}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    Ciudad de orígen:{' '}
                    <span style={{ fontWeight: '400' }}>
                      {singleOrder?.customer.city}
                    </span>
                  </Typography>
                  <Typography mb={3} fontSize="16px" fontWeight={600}>
                    Empresa:{' '}
                    <span style={{ fontWeight: '400' }}>
                      {singleOrder?.customer.company_name}
                    </span>
                  </Typography>
                  <Typography mb={3} fontSize="20px" fontWeight={600}>
                    Información del envío{' '}
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    <GreenCircle></GreenCircle>
                    Fecha de retiro:{' '}
                    <span style={{ fontWeight: '400' }}>
                      {formatDate(singleOrder?.pick_up_date)}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    <GreenCircle></GreenCircle>
                    Hora de retiro:{' '}
                    <span style={{ fontWeight: '400' }}>
                      {`${singleOrder?.pick_up_time}hs`}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    <GreenCircle></GreenCircle>
                    Dirección de retiro:{' '}
                    <span style={{ fontWeight: '400' }}>
                      {singleOrder?.pick_up_address}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    <GreenCircle></GreenCircle>
                    Teléfono:{' '}
                    <span style={{ fontWeight: '400' }}>
                      {singleOrder?.customer.company_phone}
                    </span>
                  </Typography>
                  <Divider />
                  <Typography fontSize="16px" fontWeight={600}>
                    <GreenCircle></GreenCircle>
                    Fecha de entrega:{' '}
                    <span style={{ fontWeight: '400' }}>
                      {formatDate(singleOrder?.delivery_date)}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    <GreenCircle></GreenCircle>
                    Hora de entrega:{' '}
                    <span
                      style={{ fontWeight: '400' }}
                    >{`${singleOrder?.delivery_time}hs`}</span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    <GreenCircle></GreenCircle>
                    Dirección de entrega:{' '}
                    <span style={{ fontWeight: '400' }}>
                      {singleOrder?.delivery_address}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    <GreenCircle></GreenCircle>
                    Teléfono:{' '}
                    <span style={{ fontWeight: '400' }}>
                      {singleOrder?.contact_number}
                    </span>
                  </Typography>
                  <Typography fontSize="16px" fontWeight={600}>
                    <GreenCircle></GreenCircle>
                    Destinatario:{' '}
                    <span style={{ fontWeight: '400' }}>
                      {singleOrder?.receiving_company}
                    </span>
                  </Typography>
                </Grid>
              </Grid>
              {user.role === 'driver' &&
                singleOrder?.status === 'pendiente' &&
                !singleOrder?.pendingAssignedDriverId &&
                !applyed && (
                  <Button
                    variant="contained"
                    disabled={applicationLoading}
                    sx={{
                      backgroundColor: '#007C52',
                      color: '#fff',
                      marginTop: '20px',
                      width: '100%',
                    }}
                    onClick={applyForOrder}
                  >
                    Postularse
                  </Button>
                )}
              {applyed &&
                user.role === 'driver' &&
                singleOrder?.pendingAssignedDriverId !==
                  user?.driver?.id &&
                singleOrder?.assignedDriverId !==
                  user?.driver?.id && (
                  <p
                    style={{
                      color: '#007C52',
                      fontFamily: 'Montserrat',
                      fontSize: '16px',
                      fontWeight: 500,
                      lineHeight: '23.2px',
                      textAlign: 'left',
                    }}
                  >
                    {'Te postulaste a este envío'}
                  </p>
                )}
              {singleOrder?.status === 'pendiente' &&
                singleOrder?.pendingAssignedDriverId ===
                  user?.driver?.id && (
                  <Grid
                    display={'flex'}
                    height={'39px'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={'34px'}
                    marginTop={'20px'}
                  >
                    <Button
                      disabled={applicationLoading}
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: '600',
                        lineHeight: '23.2px',
                        textAlign: 'center',
                        backgroundColor: '#007C52',
                        color: '#fff',
                        borderRadius: '8px',
                        fontSize: '16px',
                        width: 'Hug (121px)px',
                        height: 'Fixed (39px)px',
                        padding: '16px 24px 16px 24px',
                        gap: '10px',
                      }}
                      onClick={handleAceptOrder}
                    >
                      Aceptar
                    </Button>
                    <Button
                      disabled={applicationLoading}
                      sx={{ width: '110px' }}
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: '600',
                        lineHeight: '23.2px',
                        textAlign: 'center',
                        color: '#007C52',
                        border: 'solid 1px #007C52',
                        borderRadius: '8px',
                        fontSize: '16px',
                        backgroundColor: 'transparent',
                        width: 'Hug (121px)px',
                        height: 'Fixed (39px)px',
                        padding: '16px 24px 16px 24px',
                        gap: '10px',
                      }}
                      onClick={handleDeclineOrder}
                    >
                      Rechazar
                    </Button>
                  </Grid>
                )}
            </Grid>
          </Grid>
          <Container>
            {!mobile &&
              user?.role === 'admin' &&
              singleOrder?.status === 'pendiente' && (
                <>
                  <Typography fontSize="16px" fontWeight={600}>
                    Solicitudes de conductores
                  </Typography>
                  <Stack
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    spacing={3}
                  >
                    {singleOrder?.applications.map((element) => (
                      <ChargeRequestCard
                        key={element.id}
                        perfilImg={
                          element.driver.user_driver.profile_image
                        }
                        nombre={element.driver.user_driver.name}
                        apellido={element.driver.user_driver.lastname}
                        marca={element.driver.truck.brand}
                        modelo={element.driver.truck.model}
                        capacidad={
                          element.driver.truck.charge_capacity
                        }
                        carga={element.driver.truck.charge_type}
                        estrellas={element.driver.rating}
                        driverId={element.driverId}
                        orderId={id}
                        pending={
                          singleOrder?.pendingAssignedDriverId ===
                          element?.driverId
                        }
                        assigned={
                          singleOrder?.assignedDriverId ===
                          element?.driverId
                        }
                      />
                    ))}
                  </Stack>
                </>
              )}

            <Grid
              direction={mobile ? 'column' : 'row'}
              my={5}
              container
            >
              {singleOrder?.status !== 'pendiente' &&
                user?.role !== 'driver' && (
                  <Grid item xs={6}>
                    <Box width="100%">
                      <ConductorAsignadoCard
                        nombre={`${singleOrder?.assignedDriver?.user_driver.name} ${singleOrder?.assignedDriver?.user_driver.lastname}`}
                        estrellas={
                          singleOrder?.assignedDriver?.rating
                        }
                        marca={
                          singleOrder?.assignedDriver?.truck.brand
                        }
                        modelo={
                          singleOrder?.assignedDriver?.truck.model
                        }
                        capacidad={
                          singleOrder?.assignedDriver?.truck
                            .charge_capacity
                        }
                        carga={
                          singleOrder?.assignedDriver?.truck
                            .charge_type
                        }
                      />
                    </Box>
                  </Grid>
                )}
              {singleOrder?.status !== 'pendiente' && orderState && (
                <Grid item xs={6}>
                  {user?.role === 'customer' &&
                    (!orderState?.enPreparacion ||
                      !orderState?.preparado) && (
                      <Button
                        disabled={changingOrderState}
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: '600',
                          lineHeight: !mobile ? '23.2px' : '10px',
                          textAlign: 'center',
                          backgroundColor: '#007C52',
                          color: '#fff',
                          borderRadius: '8px',
                          fontSize: '16px',
                          width: 'Hug (121px)px',
                          height: 'Fixed (39px)px',
                          padding: '16px 24px 16px 24px',
                          gap: '10px',
                          marginBottom: '10px',
                          marginTop: mobile && '10px',
                        }}
                        onClick={handleChangeOrderState}
                      >
                        {changingOrderState
                          ? 'Cargando...'
                          : !orderState?.enPreparacion
                          ? 'Orden en preparación'
                          : orderState?.enPreparacion &&
                            !orderState?.preparado &&
                            'Orden preparada'}
                      </Button>
                    )}
                  {user?.role === 'driver' &&
                    orderState?.enPreparacion &&
                    orderState?.preparado &&
                    (!orderState?.retirado ||
                      !orderState?.enCamino) && (
                      <Button
                        disabled={changingOrderState}
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: '600',
                          lineHeight: !mobile ? '23.2px' : '10px',
                          textAlign: 'center',
                          color: '#fff',
                          backgroundColor: '#007C52',
                          borderRadius: '8px',
                          fontSize: '16px',
                          width: 'Hug (121px)px',
                          height: 'Fixed (39px)px',
                          padding: '16px 24px 16px 24px',
                          gap: '10px',
                          marginBottom: '10px',
                          marginTop: mobile && '10px',
                        }}
                        onClick={handleChangeOrderState}
                      >
                        {!orderState.retirado
                          ? 'Orden retirada'
                          : !orderState.enCamino && 'Orden en camino'}
                      </Button>
                    )}
                  {user?.role === 'driver' &&
                    singleOrder?.status === 'en curso' &&
                    orderState?.enPreparacion &&
                    orderState?.preparado &&
                    orderState?.retirado &&
                    orderState?.enCamino && (
                      <Button
                        disabled={changingOrderState}
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: '600',
                          lineHeight: !mobile ? '23.2px' : '10px',
                          textAlign: 'center',
                          backgroundColor: '#007C52',
                          color: '#fff',
                          borderRadius: '8px',
                          fontSize: '16px',
                          width: 'Hug (121px)px',
                          height: 'Fixed (39px)px',
                          padding: '16px 24px 16px 24px',
                          gap: '10px',
                          marginBottom: '10px',
                          marginTop: mobile && '10px',
                        }}
                        onClick={handleFinishOrder}
                      >
                        Finalizar envío
                      </Button>
                    )}
                  {singleOrder?.status === 'finalizado' && (
                    <p
                      style={{
                        color: '#007C52',
                        fontFamily: 'Montserrat',
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: '23.2px',
                        textAlign: 'left',
                        margin: '10px 0px',
                      }}
                    >
                      {'Envío finalizado'}
                    </p>
                  )}
                  <VerticalGreenStepper
                    steps={orderState}
                    driverName={
                      singleOrder?.assignedDriver?.user_driver.name
                    }
                  />
                </Grid>
              )}
            </Grid>
          </Container>

          {/* MODAL  */}

          <Modal
            open={applicationMessage}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 500,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 2,
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  gap: '10px',
                  width: '100%',
                }}
              >
                <Box
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'right',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    onClick={handleCloseModal}
                    style={{
                      display: 'flex',
                      justifyContent: 'right',
                      alignContent: 'right',
                    }}
                    src="/imgShipments/CloseButton.svg"
                  />
                </Box>

                <img src="/imgMarketplace/PostulationSent.jpg" />

                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {applicationMessage?.msg1}
                </Typography>

                <Typography
                  id="modal-modal-description"
                  style={{ marginBottom: '30px' }}
                >
                  {applicationMessage?.msg2}
                </Typography>
              </Box>
            </Box>
          </Modal>
          <Box
            style={{
              display: 'flex',
              alignItems: 'right',
              justifyContent: 'right',
              padding: '10px',
              position: 'fixed',
              width: '100%',
              bottom: 0,
            }}
          >
            <Box
              style={{
                display: 'flex',
                position: 'absolute',
                bottom: 0,
                rigth: 0,
              }}
            >
              <img
                style={{ cursor: 'pointer' }}
                src="/imgShipments/QuestionIcon.svg"
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CargaPage;
