import React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FinishMessage = ({ driverName, driver_user_id }) => {
  const navigate = useNavigate();
  return (
    <>
      <img src="/imgShipments/Success.jpg" />
      <Typography id="modal-modal-title" variant="h6" component="h2">
        ¡Tu envío ha sido entregado con éxito!
      </Typography>

      <Typography id="modal-modal-description">
        {`Califica a ${driverName}`}
      </Typography>
      <Button
        variant="contained"
        style={{
          borderRadius: '15px',
          marginBottom: '20px',
          fontWeight: 600,
        }}
        onClick={() => {
          navigate(`/conductor/${driver_user_id}`);
        }}
      >
        Calificar
      </Button>
    </>
  );
};

export default FinishMessage;
