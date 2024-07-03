import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Colors } from '../../../Utils/Colors';
import Rating from '@mui/material/Rating';
import { format } from 'date-fns';

const DriverInfo = ({
  driverName,
  rating,
  license,
  num_plate,
  charge_capacity,
  delivery_date,
}) => {
  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Detalles del conductor
      </Typography>
      <Box
        style={{
          display: 'flex',
          border: '1px solid',
          borderColor: Colors.primary.main,
          borderRadius: '8px',
          padding: '20px',
          gap: '10px',
          justifyContent: 'center',
          width: '90%',
        }}
      >
        <Box
          style={{
            display: 'flex',
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src="/imgShipments/DriverDetails.jpg" />
        </Box>

        <Box
          style={{
            display: 'flex',
            width: '70%',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <h3 style={{ textAlign: 'center' }}>{driverName}</h3>

          <Rating
            style={{ marginLeft: '55px' }}
            name="read-only"
            value={rating}
            readOnly
          />

          <span
            style={{
              display: 'flex',
              gap: '5px',
              fontWeight: 500,
            }}
          >
            Documento: <p style={{ fontWeight: 400 }}>123456</p>{' '}
          </span>
          <span
            style={{
              display: 'flex',
              gap: '5px',
              fontWeight: 500,
            }}
          >
            Licencia: <p style={{ fontWeight: 400 }}>{license}</p>
          </span>
          <span
            style={{
              display: 'flex',
              fontWeight: 500,
              gap: '5px',
            }}
          >
            Matrícula:
            <p style={{ fontWeight: 400 }}>{num_plate}</p>
          </span>
          <span
            style={{
              display: 'flex',
              gap: '5px',
              fontWeight: 500,
            }}
          >
            Capacidad de carga:<p>{charge_capacity}</p>
          </span>
        </Box>
      </Box>

      <Typography
        id="modal-modal-description"
        style={{ marginBottom: '20px' }}
      >
        {`Día de entrega ${format(
          new Date(delivery_date ?? ''),
          'dd/MM/yy'
        )}`}
      </Typography>
    </Box>
  );
};

export default DriverInfo;
