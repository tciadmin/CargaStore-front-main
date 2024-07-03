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

const ShipmentsItem = ({
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
  license,
  rating,
  num_plate,
  charge_capacity,
}) => {
  const dispatch = useDispatch();
  const { orderState, orderStateLoading } = useSelector(
    (state) => state.orders
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
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

  return (
    <>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          background: 'white',
          color: 'black',
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
            width={'9%'}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
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
                <FinishMessage driverName={driverName} />
              )}
            </Box>
          </Box>
        )}
      </Modal>
    </>
  );
};

export default ShipmentsItem;
