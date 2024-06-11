import { Avatar, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const AvatarDescriptionCard = ({ imagen, tituloImagen, descripcion, colorFondo = "#ddf4ec" }) => {
    const mobile = useMediaQuery("(max-width: 750px)");
    return (
        <Grid item xs={3} container justifyContent="center" alignItems="center" gap={1}>
            <Avatar p={5} sx={{ width: mobile ?40 : 80, height: mobile ?40 : 80, backgroundColor: colorFondo }}>
                <img width={mobile ?20 : 40} height={mobile ?20 : 40} src={imagen} alt={tituloImagen} />
            </Avatar>
            <Typography width="100%" textAlign="center" fontWeight={"normal"} fontSize={mobile ? "10px" : "20px" }  variant='p'>{descripcion}</Typography>
        </Grid>)
}

export default AvatarDescriptionCard