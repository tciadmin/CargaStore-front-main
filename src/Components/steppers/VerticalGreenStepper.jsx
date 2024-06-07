import StepItem from './StepItem';
import StepTrail from '../svg/StepTrail';
import Box from '@mui/material/Box';
import CircleStep from '../svg/CircleStep';
import { Stack, Typography } from '@mui/material';

const VerticalStepItem = ({ active = false, description, ultimo = false }) => {

  return (
    <Box key={() => Date.now()} mb={5} display={"flex"} flexDirection="column" justifyContent={"center"} alignItems={"center"}>
      <Stack direction="row" justifyContent={"between"} >
        <Stack direction="column" justifyContent={ultimo ? "flex-start" :"center"} width={"100px"} alignItems={"center"} spacing={5}>   
             <CircleStep active={active} ></CircleStep>
          {!ultimo  &&
          
          <StepTrail vertical={true} active={active === true  ? true : false}></StepTrail>
          
          }
        </Stack>

        <Stack direction="column" justifyContent={"flex-start"} alignItems={"flex-start"} >
          <Typography variant="p"  fontSize={"16px"} fontWeight={600} my={1} sx={{ color: active ? "#007C52" : "#8C94A6" }}> {description}</Typography>
          <Typography variant="p" fontSize={"16px"} fontWeight={600} my={1} sx={{ color: active ? "#000" : "#8C94A6" }}> {"20/12/2025"}</Typography>
          <Typography variant="p" fontSize={"16px"} fontWeight={600} my={1} sx={{ color: active ? "#000" : "#8C94A6" }}> {"Luis retiro el paquete"}</Typography>
        </Stack>

      </Stack>



    </Box>

  )
}

const VerticalGreenStepper = ({ steps, activeStep = 2, ultimo = false }) => {
  return (
    <Box sx={{ width: '90%' }} display={"flex"} flexDirection={"column"} alignItems={"start"} justifyContent="space-evenly ">
      {steps.map((label, index) =>
       {
        return (<VerticalStepItem description={label} active={index === 0 ? true : false} ultimo={steps.length -1 === index} />)}

      )}
    </Box>
  );
}

export default VerticalGreenStepper