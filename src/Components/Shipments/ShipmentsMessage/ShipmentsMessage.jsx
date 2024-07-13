import React from 'react';
import { useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ShipmentsMessage = ({ message }) => {
  const mobile = useMediaQuery('(max-width:720px)');
  return (
    <Box
      display="flex"
      flexDirection={'column'}
      alignItems={'center'}
      height="80vh"
      justifyContent={'center'}
    >
      <svg
        width="175"
        height="196"
        viewBox="0 0 175 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M87.6444 83.7031L27.0605 102.543L87.6444 121.014L148.782 102.543L87.6444 83.7031Z"
          fill="#DDF4EC"
        />
        <path
          d="M123.583 142.434L88.7754 193.033L149.621 176.05V135.243L123.583 142.434Z"
          fill="#DDF4EC"
        />
        <path
          d="M46.2959 44.0078L57.8692 57.3812"
          stroke="#007C52"
          strokeWidth="1.65451"
          strokeLinecap="round"
        />
        <path
          d="M57.8691 44.0078L46.2959 57.3812"
          stroke="#007C52"
          strokeWidth="1.65451"
          strokeLinecap="round"
        />
        <path
          d="M103.647 28.2061L117.535 44.254"
          stroke="#007C52"
          strokeWidth="1.98539"
          strokeLinecap="round"
        />
        <path
          d="M117.535 28.2061L103.647 44.254"
          stroke="#007C52"
          strokeWidth="1.98539"
          strokeLinecap="round"
        />
        <path
          d="M122.569 171.254L140.076 166.081"
          stroke="#007C52"
          strokeWidth="1.65451"
        />
        <path
          d="M128.2 159.798L140.076 156.589"
          stroke="#007C52"
          strokeWidth="1.65451"
        />
        <path
          d="M87.1572 140.616V133.454"
          stroke="#007C52"
          strokeWidth="2"
        />
        <path
          d="M86.7598 195.127V147.38"
          stroke="#007C52"
          strokeWidth="2"
        />
        <path
          d="M23.8936 134.25V175.63L86.3621 194.331L149.228 175.63V135.243"
          stroke="#007C52"
          strokeWidth="2"
        />
        <path
          d="M86.7598 84.5142V104.01"
          stroke="#007C52"
          strokeWidth="1.65451"
        />
        <path
          d="M107.848 66.6084L87.5557 84.1157L149.228 102.419L166.735 84.1157L107.848 66.6084Z"
          fill="#FDFDFD"
          stroke="#007C52"
          strokeWidth="2"
        />
        <path
          d="M7.18164 84.1155L26.2802 102.419L85.1678 84.1155L66.8649 67.4043L7.18164 84.1155Z"
          fill="#FDFDFD"
          stroke="#007C52"
          strokeWidth="2"
        />
        <path
          d="M148.433 102.816L87.5557 120.722L108.644 145.789L172.306 129.077L148.433 102.816Z"
          fill="#FDFDFD"
          stroke="#007C52"
          strokeWidth="2"
        />
        <path
          d="M25.8826 102.419L2.40723 127.486L64.8758 146.585L86.3617 120.722L25.8826 102.419Z"
          fill="#FDFDFD"
          stroke="#007C52"
          strokeWidth="2"
        />
        <circle
          cx="93.5391"
          cy="6.64361"
          r="5.1562"
          stroke="#007C52"
          strokeWidth="1.65451"
        />
        <circle
          cx="69.1983"
          cy="30.2462"
          r="5.98346"
          fill="#007C52"
        />
        <circle
          cx="141.414"
          cy="52.1436"
          r="4.43559"
          fill="#007C52"
        />
      </svg>

      <Typography variant="h4" fontSize={mobile ? '16px' : '24px'}>
        {' '}
        {message}
      </Typography>
    </Box>
  );
};

export default ShipmentsMessage;
