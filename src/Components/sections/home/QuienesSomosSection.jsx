import { Box,  Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const QuienesSomosSection = ({ imagen }) => {
    const matches = useMediaQuery('(max-width:1100px)');
    return (
        <Grid width={matches ? "100%" : "90%"} mx={"auto"} container my={25 } columns={16} maxWidth={"1400px"}>
            <Grid display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} item xs={matches ? 16 : 8}>
                {matches && <Typography variant='h4' fontWeight={"bold"} mb={3} color={"primary"}>¿Quiénes somos?</Typography>}

                <img style={{ borderRadius: matches ? "0px" : "5px", bottom: matches ? "0px" : "30%", position: matches ? "none" : "relative", left: matches ? 0 : "7%", zIndex: matches ? 0 : 2 }} src={imagen} width={matches ? "100%" : "95%"} alt="¿quienes somos?" />
                {matches && <Box
                    mt={2}
                    p={6}

                >
                    Transcomerinter Cia. Ltda. Es una empresa con mas de 30 años de experiencia en el Transporte Terrestre de Carga Nacional e Internacional, cubre las rutas de los países miembros del Pacto Andino, como son Ecuador, Colombia, Perú, próximamente Venezuela y Bolivia.
                    Actualmente en estos países invertimos en infraestructura, maquinaria, camiones modernos y tecnología , además lo mas importante para nuestra empresa es contar con el recurso humano calificado que nos permite satisfacer y superar las necesidades y expectativas de nuestros clientes
                </Box>}
            </Grid>
            <Grid item xs={8}>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                    {!matches &&
                        <>
                            <Typography variant='h4' fontWeight={"bold"} color={"primary"}>¿Quiénes somos?</Typography>
                            <Box
                                mt={2}
                                p={6}
                                sx={{ border: '2px solid #007C52', borderRadius: "5px" }}
                            >
                                Transcomerinter Cia. Ltda. Es una empresa con mas de 30 años de experiencia en el Transporte Terrestre de Carga Nacional e Internacional, cubre las rutas de los países miembros del Pacto Andino, como son Ecuador, Colombia, Perú, próximamente Venezuela y Bolivia.
                                Actualmente en estos países invertimos en infraestructura, maquinaria, camiones modernos y tecnología , además lo mas importante para nuestra empresa es contar con el recurso humano calificado que nos permite satisfacer y superar las necesidades y expectativas de nuestros clientes
                            </Box>
                        </>}

                </Box>
            </Grid>
        </Grid>
    )
}

export default QuienesSomosSection