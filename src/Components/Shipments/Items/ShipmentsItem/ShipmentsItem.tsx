import React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Colors } from '../../../../Utils/Colors';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderState } from '../../../../Redux/Actions/OrderActions/getOrderState';
import OrderState from './OrderState';
import { clearOrderState } from '../../../../Redux/Actions/OrderActions/clearOrderState';
import DriverInfo from './DriverInfo';
import FinishMessage from './FinishMessage';
import { useNavigate } from 'react-router-dom';

const ShipmentsItem = ({
  userRole,
  status,
  code,
  productName,
  pick_up_address,
  pick_up_date,
  pick_up_time,
  delivery_address,
  delivery_date,
  delivery_time,
  receiving_company,
  assignedDriver,
  brand,
  model,
  type,
  price,
  driverName,
  driver_user_id,
  license,
  rating,
  num_plate,
  charge_capacity,
}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { orderState, orderStateLoading } = useSelector(
    (state) => state.orders
  );

  const [open, setOpen] = React.useState(false);

  const handleOpen = (event) => {
    event.stopPropagation();
    status === 'en curso' && dispatch(getOrderState(code));
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(clearOrderState());
    setOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
  };

  const handleRedirect = () => {
    userRole === 'customer' && navigate(`/carga/${code}`);
  };

  return (
    <>
      <Box
        onClick={handleRedirect}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          background: 'white',
          color: 'black',
          cursor: userRole === 'customer' && 'pointer',
        }}
      >
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '75px',
            background: 'white',
          }}
          spacing={0.5}
        >
          <Grid
            item
            container
            width={'9%'}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <p
              style={{
                fontSize: '12px',
                fontWeight: 500,
                marginLeft: '3px',
              }}
            >
              {`#${code}`}
            </p>
          </Grid>
          <Grid
            item
            container
            width={'9%'}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              style={{
                display: 'flex',
                gap: '5px',
              }}
            >
              <img src="/imgShipments/Product.svg" />
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  marginLeft: '3px',
                }}
              >
                {productName}
              </p>
            </Box>
          </Grid>
          <Grid
            item
            container
            style={{ display: 'flex' }}
            width={'9%'}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              style={{
                display: 'flex',
                gap: '5px',
              }}
            >
              <img
                style={{ display: 'flex' }}
                src="/imgShipments/Location.svg"
              />
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  marginLeft: '3px',
                }}
              >
                {pick_up_address}
              </p>
            </Box>
          </Grid>

          <Grid
            item
            container
            width={'9%'}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              style={{
                display: 'flex',
                gap: '5px',
              }}
            >
              <img src="/imgShipments/Date.svg" />
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  marginLeft: '3px',
                }}
              >
                {`${format(
                  new Date(pick_up_date ?? ''),
                  'dd/MM/yy'
                )} ${pick_up_time}`}
              </p>
            </Box>
          </Grid>
          <Grid
            item
            container
            width={'9%'}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              style={{
                display: 'flex',
                gap: '5px',
              }}
            >
              <img src="/imgShipments/Location.svg" />
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  marginLeft: '3px',
                }}
              >
                {delivery_address}
              </p>
            </Box>
          </Grid>
          <Grid
            item
            container
            width={'9%'}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              style={{
                display: 'flex',
                gap: '5px',
              }}
            >
              <img src="/imgShipments/Date.svg" />
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  marginLeft: '3px',
                }}
              >
                {`${format(
                  new Date(delivery_date ?? ''),
                  'dd/MM/yy'
                )} ${delivery_time}`}
              </p>
            </Box>
          </Grid>
          <Grid
            item
            container
            width={'9%'}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              style={{
                display: 'flex',
                gap: '5px',
              }}
            >
              <img src="/imgShipments/Receiver.svg" />
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  marginLeft: '3px',
                }}
              >
                {receiving_company}
              </p>
            </Box>
          </Grid>
          <Grid
            item
            container
            width={'9%'}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              style={{
                display: 'flex',
                gap: '5px',
              }}
            >
              <img src="/imgShipments/Truck.svg" />
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  marginLeft: '3px',
                }}
              >
                {!assignedDriver ? 'indefinido' : `${brand} ${model}`}
              </p>
            </Box>
          </Grid>
          <Grid
            item
            container
            width={'9%'}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              style={{
                display: 'flex',
                gap: '5px',
              }}
            >
              <img src="/imgShipments/Load.svg" />
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  marginLeft: '3px',
                }}
              >
                {type}
              </p>
            </Box>
          </Grid>
          <Grid
            item
            container
            width={'9%'}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <p
              style={{
                width: '80px',
                fontSize: '12px',
                fontWeight: 500,
                marginLeft: '3px',
              }}
            >
              {`$${price}`}
            </p>
          </Grid>
          <Grid
            item
            container
            onClick={() =>
              userRole === 'driver' && navigate(`/carga/${code}`)
            }
            width={'9%'}
            sx={{
              cursor: userRole === 'driver' ? 'pointer' : 'default',
            }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {userRole === 'driver' && (
              <svg
                width="21"
                height="14"
                viewBox="0 0 21 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.2018 7C20.2018 10.3133 16.0232 13 10.8685 13C5.71382 13 1.53516 10.3133 1.53516 7C1.53516 3.68667 5.71382 1 10.8685 1C16.0232 1 20.2018 3.68667 20.2018 7Z"
                  stroke="#007C52"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.2032 7.00047C13.232 7.8529 12.7937 8.65321 12.0599 9.08797C11.3261 9.52272 10.4136 9.52272 9.67979 9.08797C8.94599 8.65321 8.50767 7.8529 8.5365 7.00047C8.50767 6.14804 8.94599 5.34773 9.67979 4.91298C10.4136 4.47823 11.3261 4.47823 12.0599 4.91298C12.7937 5.34773 13.232 6.14804 13.2032 7.00047V7.00047Z"
                  stroke="#007C52"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {userRole === 'customer' && (
              <Box className="flexTable">
                <Button
                  onClick={handleOpen}
                  variant="outlined"
                  style={
                    status === 'pendiente'
                      ? {
                          cursor: 'not allowed',
                          pointerEvents: 'none',
                          color: Colors.secondary.contrastText,
                          borderColor: Colors.secondary.contrastText,
                        }
                      : {}
                  }
                >
                  Ver
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>

      {/* -----------------------------MODAL----------------------------- */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {orderStateLoading ? (
          <h1>Cargando...</h1>
        ) : (
          <Box
            sx={style}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '10px',
            }}
          >
            {orderState && <OrderState orderState={orderState} />}
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '10px',
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
                  onClick={handleClose}
                  style={{
                    display: 'flex',
                    justifyContent: 'right',
                    alignContent: 'right',
                  }}
                  src="/imgShipments/CloseButton.svg"
                />
              </Box>
              {(status === 'asignado' || status === 'en curso') && (
                <DriverInfo
                  driverName={driverName}
                  rating={rating}
                  license={license}
                  num_plate={num_plate}
                  charge_capacity={charge_capacity}
                  delivery_date={delivery_date}
                />
              )}
              {status === 'finalizado' && (
                <FinishMessage
                  driverName={driverName}
                  driver_user_id={driver_user_id}
                />
              )}
            </Box>
          </Box>
        )}
      </Modal>
    </>
  );
};

export default ShipmentsItem;
