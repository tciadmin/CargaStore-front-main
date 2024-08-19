import {
  Avatar,
  Button,
  Grid,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assingDriverToOrder } from '../../Redux/Actions/ApplicationActions/assignDriverToOrder';

const ChargeRequestCard = ({
  perfilImg,
  nombre,
  apellido,
  marca,
  modelo,
  capacidad,
  carga,
  imagen,
  estrellas,
  driverId,
  orderId,
  pending,
  assigned,
}) => {
  const dispatch = useDispatch();
  const [ocultar, setOcultar] = useState(false);
  const { applicationLoading } = useSelector(
    (state) => state.application
  );

  const { singleOrder } = useSelector((state) => state.orders);

  const assignDriver = () => {
    dispatch(assingDriverToOrder(driverId, orderId));
  };

  const urlBack = import.meta.env.VITE_URL_BACKEND;
  return (
    <Grid
      container
      height={ocultar ? '0px' : '40px'}
      display={ocultar == true ? 'none' : 'flex'}
      spacing={0.5}
    >
      <Grid
        item
        container
        direction="row"
        justifyContent={'center'}
        alignItems={'center'}
        xs={2}
      >
        <Grid item xs={4}>
          <Avatar alt={nombre} src={`${urlBack}/api/${perfilImg}`} />
        </Grid>
        <Grid
          item
          xs={8}
          direction="column"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography>{nombre}</Typography>
          <Typography>{apellido}</Typography>
          <Rating
            name="half-rating-read"
            size="small"
            defaultValue={estrellas}
            precision={0.5}
            readOnly
          />{' '}
        </Grid>
      </Grid>
      <Grid item xs={2} alignSelf={'center'}>
        <Typography mb={3} fontSize="16px" fontWeight={600}>
          Marca: <span style={{ fontWeight: '400' }}>{marca}</span>
        </Typography>
      </Grid>
      <Grid item xs={2} alignSelf={'center'}>
        <Typography mb={3} fontSize="16px" fontWeight={600}>
          Modelo: <span style={{ fontWeight: '400' }}>{modelo}</span>
        </Typography>
      </Grid>
      <Grid item xs={2} alignSelf={'center'}>
        <Typography mb={3} fontSize="16px" fontWeight={600}>
          Capacidad:{' '}
          <span style={{ fontWeight: '400' }}>{capacidad}</span>
        </Typography>
      </Grid>
      <Grid item xs={2} alignSelf={'center'}>
        <Typography mb={3} fontSize="16px" fontWeight={600}>
          Carga: <span style={{ fontWeight: '400' }}>{carga}</span>
        </Typography>
      </Grid>
      <Grid
        item
        direction="row"
        justifyContent={'center'}
        alignItems={'center'}
        xs={2}
      >
        {pending ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
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
              Conductor pendiente
            </p>
          </div>
        ) : (
          <Stack
            direction="row"
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Button
              disabled={
                singleOrder?.pendingAssignedDriverId ||
                applicationLoading ||
                assigned ||
                pending
              }
              style={{ fontWeight: 600, marginRight: '4px' }}
              variant="outlined"
              onClick={assignDriver}
            >
              {assigned
                ? 'Asignado'
                : pending
                ? 'pendiente'
                : 'Asignar'}
            </Button>
            <Button
              disabled={
                singleOrder?.pendingAssignedDriverId ||
                applicationLoading ||
                assigned ||
                pending
              }
              variant="sf"
            >
              <Typography
                fontSize={'16px'}
                fontWeight={600}
                color="secondary"
                onClick={() => setOcultar(true)}
              >
                {' '}
                Ignorar
              </Typography>
            </Button>
          </Stack>
        )}
      </Grid>
    </Grid>
  );
};

export default ChargeRequestCard;
