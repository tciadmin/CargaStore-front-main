import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import AvatarDescriptionCard from '../../cards/AvatarDescriptionCard'
const NuestroServicioSection = () => {
    const servicios = [{
        titulo: "icono pc",
        imagen: "/icons/Icon.pc.svg",
        descripcion: "Publica tu envío en forma segura"
    },
    {
        titulo: "Dolar",
        imagen: "/icons/Icon.valor.svg",
        descripcion: "Asígnale un valor al mismo"
    },
    {
        titulo: "Usuarios",
        imagen: "/icons/Icon.personas.svg",
        descripcion: "Conecta un conductor"
    },
    {
        titulo: "Brujula",
        imagen: "/icons/Icon.brujula.svg",
        descripcion: "Asígnale un valor al mismo"
    }]
    return (
        <Container>
            <Typography color={"primary"} fontWeight={"bold"} textAlign={"center"} variant="h3" mb={5}columns={16}>Nuestro servicio</Typography>
            <Grid
                container
                justifyContent="space-around"
                spacing={1}
                
            >
                {servicios.map(({ titulo, imagen, descripcion }) => {
                    return <AvatarDescriptionCard titulo={titulo} imagen={imagen} descripcion={descripcion}></AvatarDescriptionCard>
                })}
            </Grid>
        </Container>
    )
}
export default NuestroServicioSection