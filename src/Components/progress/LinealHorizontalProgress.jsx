import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinealHorizontalProgress({value}) {

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={75} />
    </Box>
  );
}