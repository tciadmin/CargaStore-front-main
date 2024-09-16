import Box from '@mui/material/Box';
import StepItem from './StepItem';
import StepTrail from '../svg/StepTrail';

const GreenStepper = ({ steps, activeStep = 2 }) => {
  return (
    <Box sx={{ width: '90%' }} display="flex" alignItems="start" justifyContent="space-evenly">
      {steps.map((label, index) => {
        if (steps.length - 1 === index) {
          return (
            <StepItem
              key={`step-item-${index}`} // Clave única para StepItem
              description={label}
              active={index <= activeStep}
            />
          );
        } else {
          return (
            <React.Fragment key={`step-group-${index}`}>
              <StepItem
                key={`step-item-${index}`} // Clave única para StepItem
                description={label}
                active={index <= activeStep}
              />
              <StepTrail
                key={`step-trail-${index}`} // Clave única para StepTrail
                active={index + 1 <= activeStep}
              />
            </React.Fragment>
          );
        }
      })}
    </Box>
  );
};

export default GreenStepper;
