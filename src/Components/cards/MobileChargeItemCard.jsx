import React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const MobileChargeItemCard = ({
  id,
  image,
  product_name,
  country,
  charge_type,
  driver_name,
}) => {
  const urlBack = import.meta.env.VITE_URL_BACKEND;

  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/carga/${id}`)}
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
        src={`${urlBack}/api/${image}`}
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
