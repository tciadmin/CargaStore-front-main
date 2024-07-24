import React from 'react';
import Box from '@mui/material/Box';
// import { Colors } from '../../../../Utils/Colors';
import Modal from '@mui/material/Modal';
import { format } from 'date-fns';
import FinishMessage from '../ShipmentsItem/FinishMessage';
import { useNavigate } from 'react-router-dom';

const MobileShipmentItem = ({
  id,
  status,
  image,
  price,
  productName,
  pick_up_date,
  delivery_date,
  driverName,
  driver_user_id,
}) => {
  const navigate = useNavigate();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 352,
    bgcolor: '#fff',
    boxShadow: 24,
    p: 2,
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    status === 'finalizado'
      ? setOpen(true)
      : navigate(`/carga/${id}`);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const urlBack = import.meta.env.VITE_URL_BACKEND;

  return (
    <>
      <Box
        onClick={handleOpen}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '370px',
          height: '125px',
          justyfyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          padding: '12px 61px 12px 20px',
          borderRadius: '8px',
          border: 'solid 1px #D0D5DD',
        }}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItemas: 'center',
            width: '108px',
            height: '101px',
            borderRadius: '9px',
            overflow: 'hidden',
          }}
        >
          <img
            src={`${urlBack}/${image}`}
            alt="undefined"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Box>
        <Box
          style={{
            width: '165px',
            height: '89px',
            gap: '2px',
          }}
        >
          <p
            style={{
              // color: Colors.secondary.contrastText,
              fontFamily: 'Montserrat',
              fontSize: '16px',
              fontWeight: '500',
              lineHeight: '23.2px',
            }}
          >
            {productName}
          </p>
          <p
            style={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20.3px',
            }}
          >{`${format(
            new Date(pick_up_date ?? ''),
            'dd/MM/yy'
          )} - ${format(
            new Date(delivery_date ?? ''),
            'dd/MM/yy'
          )}`}</p>
          {!driverName ? (
            <p
              style={{
                fontFamily: 'Montserrat',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '20.3px',
              }}
            >
              Conductor sin asignar
            </p>
          ) : (
            <p
              style={{
                fontFamily: 'Montserrat',
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '20.3px',
                color: '#000000',
              }}
            >
              {driverName}
            </p>
          )}
          <p
            style={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '20.3px',
              color: '#007C52',
            }}
          >
            {`$${price}`}{' '}
          </p>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {status === 'finalizado' && (
            <FinishMessage
              driverName={driverName}
              driver_user_id={driver_user_id}
            />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default MobileShipmentItem;
