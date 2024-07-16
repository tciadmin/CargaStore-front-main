import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import { StepButton } from '@mui/material';
import { Colors } from '../../../../Utils/Colors';
import { format } from 'date-fns';

const OrderState = ({ orderState }) => {
  return (
    <Box
      sx={{
        width: '35%',
        padding: '40px 20px 10px 0px',
      }}
    >
      <Stepper
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          color: Colors.primary.main,
          fontWeight: 600,
        }}
        activeStep={1}
        alternativeLabel
        orientation="vertical"
      >
        {Object.entries(orderState)?.map(([key, value]) => (
          <Box
            key={key}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              color: Colors.primary.main,
              fontWeight: 600,
            }}
          >
            <StepButton
              icon={<img src="/imgShipments/StepperIcon.svg" />}
              key={key}
            >
              <StepLabel
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'left',
                  alignItems: 'left',
                  gap: '10px',
                  height: '45px',
                }}
              >
                {key}
                <p
                  style={{
                    color: 'black',
                    fontWeight: 500,
                  }}
                >
                  {value &&
                    `${format(new Date(value ?? ''), 'dd/MM/yy')}`}
                </p>
              </StepLabel>
            </StepButton>
            {key !== 'En camino' ? (
              <Box
                style={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <img src="/imgShipments/StepConnector.svg" />
              </Box>
            ) : (
              ''
            )}
          </Box>
        ))}
      </Stepper>
    </Box>
  );
};

export default OrderState;
