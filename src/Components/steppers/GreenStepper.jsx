import Box from '@mui/material/Box';
import StepItem from './StepItem';
import StepTrail from '../svg/StepTrail';

 const  GreenStepper = ({steps, activeStep = 2}) => {
  return (
    <Box sx={{ width: '90%' }} display={"flex"} alignItems={"start"} justifyContent="space-evenly ">
        {steps.map((label, index) => 
          {
          if(steps.length -1 == index){
            return <StepItem description= {label} active = {index <= activeStep ? true : false} />
     

          }else{
            return <><StepItem description= {label} active = {index  <= activeStep   ? true : false} /> <StepTrail  active={index + 1 <= activeStep  ? true : false}></StepTrail> </>
          }
          }
        )} 
    </Box>
  );
}

export default GreenStepper
