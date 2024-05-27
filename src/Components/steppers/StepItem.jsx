import Box from '@mui/material/Box';
import CircleStep from '../svg/CircleStep';
import { Typography } from '@mui/material';

const StepItem = ({active = false, description})=>{

    return (
        <Box key={()=>Date.now()} display={"flex"} flexDirection="column" justifyContent={"center"} alignItems={"center"}>
        <CircleStep active={active} ></CircleStep>
        <Typography variant="p" fontWeight={600} my={1} sx={{color :  active ? "#007C52": "#8C94A6"}}> {description}</Typography>
        </Box>
    )
}
export default StepItem