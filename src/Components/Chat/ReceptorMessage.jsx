import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import getTimeDifference from '../../helpers/diferenciaHoraria';

const ReceptorMessage = ({ date, message, image }) => {
  return (
    <Grid container p={2}>
      <Grid item xs={2}>
        <Avatar src={image} alignSelf="flex-end" />
      </Grid>
      <Grid item xs={10}>
        <Stack direction="column" alignItems={'flex-start'}>
          <Typography fontSize="16px" color="#000"></Typography>
          <Box
            style={{
              backgroundColor: '#F1F7FF',
              width: '230px',
              borderRadius: '0px 10px 10px 10px',
              padding: '10px 15px 10px 15px',
            }}
          >
            <Typography
              fontSize={'16px'}
              color={'#000'}
              fontWeight={400}
              sx={{
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
                hyphens: 'auto',
              }}
            >
              {message}
            </Typography>
          </Box>
          <Typography
            fontSize={'14px'}
            fontWeight={400}
            width="230px"
            textAlign="end"
            color={'#0D082C66'}
          >
            {getTimeDifference(date)}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ReceptorMessage;
