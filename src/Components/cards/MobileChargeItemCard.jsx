import React from 'react';
import Box from '@mui/material/Box';

const MobileChargeItemCard = ({
  id,
  image,
  product_name,
  country,
  charge_type,
  driver_name,
}) => {
  return (
    <Box
      style={{
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justyfyContent: 'center',
        gap: '5px',
      }}
    >
      <img
        style={{
          height: 200,
          width: '100%',
          maxWidth: 200,
        }}
        src={`http://localhost:3000/api/${image}`}
      />
      <p>{`#${id}`}</p>
      <p> {product_name}</p>
      <p> {country}</p>
      <p>{charge_type}</p>
      <p> {driver_name}</p>
    </Box>
  );
};

export default MobileChargeItemCard;
