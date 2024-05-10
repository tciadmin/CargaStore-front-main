import { Avatar, Grid, Typography } from '@mui/material'
import React from 'react'

const AvatarDescriptionCard = ({ imagen, tituloImagen, descripcion, colorFondo = "#ddf4ec" }) => {
    return (
        <Grid item xs={3} container justifyContent="center" alignItems="center" gap={1}>
            <Avatar p={5} sx={{ width: 80, height: 80, backgroundColor: colorFondo }}>
                <img width={40} height={40} src={imagen} alt={tituloImagen} />
            </Avatar>
            <Typography width="100%" textAlign="center" fontWeight={"normal"} variant='p'>{descripcion}</Typography>
        </Grid>)
}

export default AvatarDescriptionCard