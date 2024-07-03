import React from 'react';
import Box from '@mui/material/Box';
import { Colors } from '../../../../Utils/Colors';
import Modal from '@mui/material/Modal';
import { format } from 'date-fns';
import FinishMessage from '../ShipmentsItem/FinishMessage';

const MobileShipmentItem = ({
  status,
  image,
  price,
  productName,
  pick_up_date,
  delivery_date,
  type,
  pick_up_address,
  driverName,
}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 352,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    status === 'finalizado' && setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        onClick={handleOpen}
        style={{
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          justyfyContent: 'center',
          gap: '5px',
        }}
      >
        <img src={image} />
        <p style={{ color: Colors.secondary.contrastText }}>
          {productName}
        </p>
        <span
          style={{
            display: 'flex',
            gap: '5px',
            fontWeight: 600,
          }}
        >
          Valor ofertado:{' '}
          <p style={{ fontWeight: 400 }}>{`$${price}`} </p>
        </span>
        <p>{`${format(
          new Date(pick_up_date ?? ''),
          'dd/MM/yy'
        )} - ${format(
          new Date(delivery_date ?? ''),
          'dd/MM/yy'
        )}`}</p>
        <p>Tipo de carga: {type}</p>
        <p>{pick_up_address}</p>
        <p style={{ fontWeight: 500 }}>{driverName}</p>
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
            <FinishMessage driverName={driverName} />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default MobileShipmentItem;
