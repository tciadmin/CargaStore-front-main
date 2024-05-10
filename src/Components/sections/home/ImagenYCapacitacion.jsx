import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const ImagenYCapacitacion = () => {
    return (
        <Container>
            <Grid
                 my={10} 
                container
                justifyContent={"flex-end"}
                spacing={2}  >
                <Grid item xs={6} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-end"} >
                    <Typography xs={6} variant="h4" alignSelf={"flex-start"} textAlign={"start"} color={"primary"} fontWeight={"bold"}> Premio Basc</Typography>
                    <Typography xs={6} variant="p" textAlign={"start"}> Transcomerinter. Recibió el Premio Basc el 07 de Noviembre del 2014, el Primer Puesto en la Categoría Transporte Terrestre, por lo que nos contragulamos con la empresa por este logro. Felicitamos a todos y cada uno de los colaboradores que hacen la cadena logística, y que son merecedores de esta distinción.</Typography>
                </Grid>
                <Grid display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} item xs={6}>
                    <img style={{ borderRadius: "5px" }} width={"100%"} src="/home/premio.png" alt="" />
                </Grid>
            </Grid>

            <Grid
                mb={10}
                container
                justifyContent={"flex-start"}
                spacing={4}  >

                <Grid display={"flex"} flexDirection={"column"} md={6} justifyContent={"center"} alignItems={"center"} item xs={12}>
                    <img style={{ borderRadius: "5px" }} width={"100%"} src="/home/capacitaciones.png" alt="" />
                </Grid>
                <Grid item xs={12} md={5} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-end"} >
                    <Typography xs={2} variant="h4" alignSelf={"flex-start"} textAlign={"start"} color={"primary"} fontWeight={"bold"}>Capacitaciones</Typography>
                    <Typography xs={2} variant="p" textAlign={"start"}> Mantenemos constantemente capacitado a  todo nuestro personal, con la finalidad de incentivar el mejoramiento continuo de la empresa y brindar un mejor servicio en el transporte de carga pesada nacional e internacional. Nuestro saber es la seguridad de los clientes que confían en nuestro servicio.</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ImagenYCapacitacion