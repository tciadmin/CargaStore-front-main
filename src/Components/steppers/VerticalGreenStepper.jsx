// import StepItem from './StepItem';
import StepTrail from '../svg/StepTrail';
import Box from '@mui/material/Box';
import CircleStep from '../svg/CircleStep';
import { Stack, Typography } from '@mui/material';
import { format } from 'date-fns';

const VerticalStepItem = ({
  active,
  description,
  date,
  driverName,
  ultimo,
}) => {
  return (
    <Box
      mb={5}
      display={'flex'}
      flexDirection="column"
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Stack direction="row" justifyContent={'between'}>
        <Stack
          direction="column"
          justifyContent={ultimo ? 'flex-start' : 'center'}
          width={'100px'}
          alignItems={'center'}
          spacing={5}
        >
          <CircleStep active={description === 'enPreparacion' && index === 0 || description === 'preparado' && index === 1 || description === 'retirado' && index === 2 || description === 'enCamino' && index === 3 ? active : ''}></CircleStep>
          {!ultimo && (
            <StepTrail vertical={true} active={active}></StepTrail>
          )}
        </Stack>

        <Stack
          direction="column"
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
        >
          <Typography
            variant="p"
            fontSize={'16px'}
            fontWeight={600}
            my={1}
            sx={{ color: active ? '#007C52' : '#8C94A6' }}
          >
            {' '}
            {description === 'enPreparacion' 
              ? 'En preparación'
              : description === 'preparado'
              ? 'Preparado'
              : description === 'retirado'
              ? 'Retirado'
              : description === 'enCamino' && 'En Camino'}
          </Typography>
          <Typography
            variant="p"
            fontSize={'16px'}
            fontWeight={600}
            my={1}
            sx={{ color: active ? '#000' : '#8C94A6' }}
          >
            {' '}
            {date ? format(new Date(date ?? ''), 'dd/MM/yy') : ''}
          </Typography>
          <Typography
            variant="p"
            fontSize={'16px'}
            fontWeight={600}
            my={1}
            sx={{ color: active ? '#000' : '#8C94A6' }}
          >
            {' '}
            {!active
              ? ''
              : description === 'enPreparacion'
              ? 'El cliente está preparando el anvío'
              : description === 'preparado'
              ? 'El cliente está a la espera del retiro'
              : description === 'retirado'
              ? `${driverName} ha retirado el paquete`
              : description === 'enCamino' &&
                `${driverName} se encuentra en camino a destino`}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

const VerticalGreenStepper = ({ steps, driverName }) => {
  return (
    <Box
      sx={{ width: '90%' }}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'start'}
      justifyContent="space-evenly "
    >
      {steps &&
        Object.entries(steps).map(([key, value], index, array) => {
          return (
            <VerticalStepItem
              key={key}
              description={key}
              active={value}
              date={value}
              driverName={driverName}
              ultimo={array.length - 1 === index}
            />
          );
        })}
    </Box>
  );
};

export default VerticalGreenStepper;
