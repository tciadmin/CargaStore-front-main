import React from 'react'
import Notificacion from './Notificacion'
import { Box, Stack } from '@mui/material'
const data = [{
    message: "Jose Luis Ya envio el paquete",
    date: new Date("December 25, 1995 13:30:00")
}]
const Notificaciones = () => {
  return (
    <Box
    position={'fixed'}
    top={67}
    right={85}
    width="400px"
    px={4}
    py={3}
    maxWidth={'400px'}
    height="600px"
    style={{
      background: 'white',
      border: '1 solid black',
      boxShadow: '#007C521A 0 30px 60px 0',
      borderRadius: '10px',
    }}
  >
    <Stack
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      spacing={0}
    >
        {data.map(e=><Notificacion date={e.date} message={e.message}></Notificacion>)}
      
    </Stack>
  </Box>
  )
}

export default Notificaciones