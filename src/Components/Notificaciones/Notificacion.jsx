import React from 'react'
import getTimeDifference from '../../helpers/diferenciaHoraria'
import { Avatar, Grid, Stack } from '@mui/material'

const Notificacion = ({message, date}) => {
  return (
    <Grid container alignItems={'center'} spacing={1}>
        <Grid item xs={1}>
          <Stack direction="row" justifyContent={'flex-end'}>
            <Avatar
              width="60px"
              height="60px"
              style={{ alignSelf: 'flex-end' }}
            ></Avatar>
          </Stack>
        </Grid>
        <Grid item xs={11}>
          <Stack direction="column" justifyContent="center">
            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                color: 'black',
                textAlign: 'start',
              }}
            >
              {message}
            </p>
          </Stack>
        </Grid>
        <Grid item xs={12} p={0} style={{ padding: '0px' }}>
          <Stack
            direction="row"
            justifyContent={'flex-end'}
            alignItems={'flex-start'}
            sx={{ padding: '0px' }}
          >
            <p
              style={{
                alignSelf: 'flex-end',
                color: '#8C94A6',
                fontWeight: 400,
              }}
            >
              {getTimeDifference(date)}
            </p>
          </Stack>
        </Grid>
      </Grid>
  )
}

export default Notificacion