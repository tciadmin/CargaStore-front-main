import { Image } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const MarketplaceCard = ({image, price = 0, title, weight, typeCharge, id}) => {
  return (
    <Stack flexDirection={"column"} gap={"3px"} >
        <Box       bg="background.paper" height={"240px"} mb={3}  > <img src={image} width={"100%"} height={"100%"}></img> </Box>
        <p style={{fontSize: "16px", marginBottom: "5px"}}> Valor ofertado: <span style={{fontWeight: "normal"}}>  $  {price}</span> </p>
        <Typography fontSize={"12px"} fontWeight={400}>{title} </Typography>
        <Typography fontSize={"12px"} fontWeight={400}>{weight} </Typography>
        <Typography fontSize={"12px"} mb={2} fontWeight={400}>Tipo de carga: {typeCharge} </Typography>
        <Button variant="contained" 
      style={{fontWeight: 600, padding: "10px 24px"}} color='primary'> Ver detalles</Button>

    </Stack>
  )
}

export default MarketplaceCard