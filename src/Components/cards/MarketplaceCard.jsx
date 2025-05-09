import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MarketplaceCard = ({
  image,
  price = 0,
  title,
  weight,
  typeCharge,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      style={{
        width: '20vw',
        height: '500px',
        padding: '10px',
      }}
    >
      <Stack flexDirection={'column'} gap={'3px'}>
        <Box bg="background.paper" height={'100%'} mb={3}>
          {' '}
          <img src={image} width={'100%'} height={'100%'}></img>{' '}
        </Box>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '5px',
            fontWeight: 600,
          }}
        >
          {' '}
          Valor ofertado:{' '}
          <span style={{ fontWeight: 400 }}> $ {price}</span>{' '}
        </p>
        <Typography fontSize={'16px'} fontWeight={400}>
          {title}{' '}
        </Typography>
        <Typography fontSize={'16px'} fontWeight={400}>
          {weight}{' '}
        </Typography>
        <Typography fontSize={'16px'} mb={2} fontWeight={400}>
          Tipo de carga: {typeCharge}{' '}
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate(`/carga/${id}`)}
          style={{ fontWeight: 600, padding: '10px 24px' }}
          color="primary"
        >
          {' '}
          Ver detalles
        </Button>
      </Stack>
    </Box>
  );
};

export default MarketplaceCard;
