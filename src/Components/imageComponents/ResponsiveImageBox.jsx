import { Box } from '@mui/material';
import React from 'react';

const ResponsiveImageBox = ({ w = '100%', h = '100%', url }) => {
  return (
    <Box width={w} height={h} style={{ borderRadius: '5px' }}>
      <img
        src={url}
        alt={'indefinido'}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
};

export default ResponsiveImageBox;
