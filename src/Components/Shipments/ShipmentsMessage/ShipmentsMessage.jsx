import React from 'react';
import { useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Colors } from '../../../Utils/Colors';

const ShipmentsMessage = ({ message, status }) => {
  const mobile = useMediaQuery('(max-width:720px)');
  return (
    <Box
      display="flex"
      flexDirection={'column'}
      alignItems={'center'}
      minHeight="82vh"
      justifyContent={'center'}
      style={{gap: '20px', backgroundColor: '#f5f5f5ff', padding: 5, overflow: mobile ? '': 'hidden'}}
    >
      <img src='/imgShipments/EmptyShipments.svg'></img>
          <h4 style={{ fontSize: mobile ? '16px' : '20px', fontWeight: 600 }}>
        {' '}
        {message}
      </h4>
      <h6
        style={{
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '29px',
          textAlign: 'center',
        }}
      >
        {!mobile &&
          status === 'pendiente' &&
          'Para crear un nuevo envio haz clic en el boton de “Crear envío”'}
      </h6>
    </Box>
  );
};

export default ShipmentsMessage;
