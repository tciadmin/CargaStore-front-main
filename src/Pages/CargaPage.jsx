import { Box, Container, Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import ResponsiveImageBox from '../Components/imageComponents/ResponsiveImageBox'
import ChargeRequestCard from '../Components/cards/ChargeRequestCard'
import ConductorAsignadoCard from '../Components/cards/ConductorAsignadoCard'
import VerticalGreenStepper from '../Components/steppers/VerticalGreenStepper'
const GreenCircle = () => {
    return (
        <svg width="9" height="9" style={{ verticalAlign: "center", padding: "auto 0px", marginRight: "5px", }} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4.39844" cy="4.66016" r="4" fill="#007C52" />
        </svg>
    )
}
const CargaPage = () => {
    const mobile = useMediaQuery("(max-width:750px)");
    //adaptarlo para que una vez que esten los datos se pueda obtener id de carga por url params y de ahi hacer llamado a la api
    return (
        <>
            <Typography mb={3} ml={5} fontSize="16px" color={"secondary"} fontWeight={600} >
                #343535
            </Typography >
            <Grid container direction={mobile ? "column" : "row"} alignItems={mobile ? "center" : "flex-start"} justifyContent={"center"} mt={2} gap={3}>
                {!mobile &&
                    <Grid item container style={{ height: "450px", maxWidth: "450px" }} xs={5}>
                        <Grid item container gap={1} pt={"6px"} alignContent={"center"} xs={4}>
                            <ResponsiveImageBox w="140px" h="140px" url={"/marketplace/8.png"} />
                            <ResponsiveImageBox w="140px" h="140px" url={"/marketplace/7.png"} />
                            <ResponsiveImageBox w="140px" h="140px" url={"/marketplace/10.png"} />
                        </Grid>
                        <Grid item direction={"row"} alignItems={"flex-start"} xs={8}>
                            <ResponsiveImageBox url={"/marketplace/9.png"} />
                        </Grid>
                    </Grid>
                }
                <Grid item maxWidth="100%" justifyContent={"center"} xs={4} >
                    <Grid container flexDirection={"column"} p={3} >
                        <Typography fontSize="16px" fontWeight={600}  >
                            Valor ofertado: <span style={{ fontWeight: "400" }}>$40000</span>
                        </Typography >
                        <Typography fontSize="40px" fontWeight={600} mb={3}>
                            Bolsas de azúcar
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600} >
                            <GreenCircle ></GreenCircle>
                            Producto: <span style={{ fontWeight: "400" }}>Ázucar</span>
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600} verticalAlign="center" >
                            <GreenCircle ></GreenCircle>
                            Cantidad de unidades: <span style={{ fontWeight: "400" }}>500</span>
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600} >
                            <GreenCircle ></GreenCircle>
                            Volúmen: <span style={{ fontWeight: "400" }}>1 toneladas</span>
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600} >
                            <GreenCircle ></GreenCircle>
                            Tipo de carga: <span style={{ fontWeight: "400" }}>seca</span>
                        </Typography >
                        <Typography mt={5} fontSize="16px" fontWeight={600} >
                            Información adicional
                        </Typography >
                        <Typography fontSize="16px" fontWeight={400} >
                            Es un envío nacional de bolsas de azúcar que despacha El mundo mágico para Ledesma. La carga no posee contenido peligroso pero es necesario protegerlas con bolsas más resistentes para poder preservar el contenido de manera intacta,                    </Typography >
                    </Grid>
                    <Grid item container maxWidth="100%" style={{ overflowX: "auto", overflowY: "hidden" }}>
                    </Grid>
                    {mobile &&
                        <div style={{ display: "flex", alignSelf: "flex-end", overflowX: "scroll", overflowY: "hidden", position: "relative", maxWidth: "100vw" }}>
                            <img src="/marketplace/8.png" width="130px" style={{ flex: "0 0 auto", marginRight: "5px", marginLeft: "5px" }} />
                            <img src="/marketplace/8.png" width="130px" style={{ flex: "0 0 auto", marginRight: "5px" }} />
                            <img src="/marketplace/8.png" width="130px" style={{ flex: "0 0 auto", marginRight: "5px" }} />
                            <img src="/marketplace/8.png" width="130px" style={{ flex: "0 0 auto", marginRight: "5px" }} />
                            <img src="/marketplace/8.png" width="130px" style={{ flex: "0 0 auto", marginRight: "5px" }} />
                            <img src="/marketplace/8.png" width="130px" style={{ flex: "0 0 auto", marginRight: "5px" }} />
                            <img src="/marketplace/8.png" width="130px" style={{ flex: "0 0 auto", marginRight: "5px" }} />
                            <img src="/marketplace/8.png" width="130px" style={{ flex: "0 0 auto", marginRight: "5px" }} />
                        </div>
                    }
                </Grid>
                <Grid item maxWidth="100%" justifyContent={"center"} border="1px solid lightgrey" borderRadius={"5px"} p={3} xs={3} >
                    <Grid container flexDirection={"column"}>
                        <Typography mb={3} fontSize="20px" fontWeight={600} >
                            Información del cliente
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600}  >
                            Nombre: <span style={{ fontWeight: "400" }}>Juan Pelotas</span>
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600}  >
                            Ciudad de orígen: <span style={{ fontWeight: "400" }}>La Paz, Bolivia</span>
                        </Typography >
                        <Typography mb={3} fontSize="16px" fontWeight={600}  >
                            Empresa: <span style={{ fontWeight: "400" }}>Lillos S.A.</span>
                        </Typography >
                        <Typography mb={3} fontSize="20px" fontWeight={600} >
                            Información del envío                    </Typography >
                        <Typography fontSize="16px" fontWeight={600} >
                            <GreenCircle ></GreenCircle>
                            Fecha de retiro: <span style={{ fontWeight: "400" }}>23/5/2024</span>
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600} >
                            <GreenCircle ></GreenCircle>
                            Hora de retiro: <span style={{ fontWeight: "400" }}>08:30hs</span>
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600} >
                            <GreenCircle ></GreenCircle>
                            Dirección de retiro: <span style={{ fontWeight: "400" }}>Calle 27, La Paz, Bolivia</span>
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600} >
                            <GreenCircle ></GreenCircle>
                            Teléfono: <span style={{ fontWeight: "400" }}>11939393</span>
                        </Typography >
                        <Divider />
                        <Typography fontSize="16px" fontWeight={600} >
                            <GreenCircle ></GreenCircle>
                            Fecha de entrega: <span style={{ fontWeight: "400" }}>20/01/2025</span>
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600} >
                            <GreenCircle ></GreenCircle>
                            Hora de entrega: <span style={{ fontWeight: "400" }}>23:00hs</span>
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600} >
                            <GreenCircle ></GreenCircle>
                            Dirección de entrega: <span style={{ fontWeight: "400" }}>Calle 2000, Bolivia</span>
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600} >
                            <GreenCircle ></GreenCircle>
                            Teléfono: <span style={{ fontWeight: "400" }}>29039393</span>
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600} >
                            <GreenCircle ></GreenCircle>
                            Destinatario: <span style={{ fontWeight: "400" }}>Ledesma S.A.</span>
                        </Typography >
                    </Grid>
                </Grid>
            </Grid>
            <Container>
                {!mobile &&

                    <>
                        <Typography fontSize="16px" fontWeight={600}  >
                            Solicitudes de conductores
                        </Typography >
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                            <ChargeRequestCard nombre={"Juan perez"} marca={"ford"} modelo={"taunus"} capacidad={"2 toneladas"}
                                carga="seca" estrellas={2.5}
                            ></ChargeRequestCard>
                            <ChargeRequestCard nombre={"Juan perez"} marca={"ford"} modelo={"taunus"} capacidad={"2 toneladas"}
                                carga="seca" estrellas={4.5}
                            ></ChargeRequestCard>
                            <ChargeRequestCard nombre={"Juan perez"} marca={"ford"} modelo={"taunus"} capacidad={"2 toneladas"}
                                carga="seca" estrellas={5}
                            ></ChargeRequestCard>
                            <ChargeRequestCard nombre={"Juan perez"} marca={"ford"} modelo={"taunus"} capacidad={"2 toneladas"}
                                carga="seca" estrellas={.5}
                            ></ChargeRequestCard>
                        </Stack>
                    </>}

                <Grid container direction={mobile ? "column" : "row"} my={5}>
                    <Grid item xs={6}>

                        <Box width="100%" >
                            <ConductorAsignadoCard nombre="juan perezozo" estrellas={4.5} marca="ford" modelo={"taunus"} capacidad="1 tonelada" carga="seca"></ConductorAsignadoCard>


                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <VerticalGreenStepper steps={["En preparacion", "Preparado", "En camino", "Retirado"]}></VerticalGreenStepper>

                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

export default CargaPage