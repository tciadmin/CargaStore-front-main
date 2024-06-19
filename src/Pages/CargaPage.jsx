import { Box, Button, Container, Divider, Grid, Modal, Stack, Typography, useMediaQuery } from '@mui/material'
import React, {  useState } from 'react'
import ResponsiveImageBox from '../Components/imageComponents/ResponsiveImageBox'
import ChargeRequestCard from '../Components/cards/ChargeRequestCard'
import ConductorAsignadoCard from '../Components/cards/ConductorAsignadoCard'
import VerticalGreenStepper from '../Components/steppers/VerticalGreenStepper'
import CompNavLanding from '../Components/NavLanding/CompNavLanding'
import { useNavigate } from 'react-router-dom'



const GreenCircle = () => {
    return (
        <svg width="9" height="9" style={{ verticalAlign: "center", padding: "auto 0px", marginRight: "5px", }} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4.39844" cy="4.66016" r="4" fill="#007C52" />
        </svg>
    )
}
const CargaPage = () => {
  
    const mobile = useMediaQuery("(max-width:750px)");
    const [asignado, setAsignado] = useState(false);
    const [postular, setPostular] = useState(false);
    const userRol = localStorage.getItem("userPrueba");
    const navigate = useNavigate();

    //adaptarlo para que una vez que esten los datos se pueda obtener id de carga por url params y de ahi hacer llamado a la api
    return (
        <>
            <CompNavLanding></CompNavLanding>
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
                        {userRol == "client" &&
                            <Stack direction="row" justifyContent={"center"} mt={3}>
                                <Button variant='outlined' sx={{ fontWeight: 600, width: "150px", height: "40px" }}
                                    onClick={() => navigate("/editarEnvio")}
                                >Duplicar</Button></Stack>
                        }
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
                <Grid item direction={"column"} maxWidth="100%" justifyContent={"center"} xs={3}>
                    <Grid item maxWidth="100%" justifyContent={"center"} border="1px solid lightgrey" borderRadius={"5px"} p={3} xs={3} >
                        <Grid container flexDirection={"column"}>
                            <Typography mb={3} fontSize="20px" fontWeight={600} >
                                Información del cliente
                            </Typography >
                            <Typography fontSize="16px" fontWeight={600}  >
                                Nombre: <span style={{ fontWeight: "400" }}> Ignacio Sanchez</span>
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
                    {userRol == "conductor" &&
                        <Button sx={{ marginTop: "20px", width: "100%" }} onClick={() => setPostular(true)}>Postularse</Button>

                    }

                </Grid>

            </Grid>
            <Container>
                {!mobile && userRol == "admin" && !asignado &&

                    <>

                        <Typography fontSize="16px" fontWeight={600}  >
                            Solicitudes de conductores
                        </Typography >
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                            <ChargeRequestCard nombre={"Juan perez"} marca={"ford"} modelo={"taunus"} capacidad={"2 toneladas"}
                                carga="seca" estrellas={2.5}
                                asignar={() => setAsignado(true)}

                            ></ChargeRequestCard>
                            <ChargeRequestCard nombre={"Juan perez"} marca={"ford"} modelo={"taunus"} capacidad={"2 toneladas"}
                                carga="seca" estrellas={4.5}
                                asignar={() => setAsignado(true)}
                            ></ChargeRequestCard>
                            <ChargeRequestCard nombre={"Juan perez"} marca={"ford"} modelo={"taunus"} capacidad={"2 toneladas"}
                                carga="seca" estrellas={5}
                                asignar={() => setAsignado(true)}
                            ></ChargeRequestCard>
                            <ChargeRequestCard nombre={"Juan perez"} marca={"ford"} modelo={"taunus"} capacidad={"2 toneladas"}
                                carga="seca" estrellas={.5}
                                asignar={() => setAsignado(true)}
                            ></ChargeRequestCard>
                        </Stack>
                    </>}

                {asignado && userRol == "admin" &&
                    <Grid direction={mobile ? "column" : "row"} my={5} container>
                        <Grid item xs={6}>

                            <Box width="100%" >
                                <ConductorAsignadoCard nombre="juan Perez" estrellas={4.5} marca="ford" modelo={"taunus"} capacidad="1 tonelada" carga="seca" ></ConductorAsignadoCard>


                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <VerticalGreenStepper steps={["En preparación", "Preparado", "En camino", "Retirado"]}></VerticalGreenStepper>

                        </Grid>
                    </Grid>
                }
                {
                    userRol != "admin" &&
                    <Grid direction={mobile ? "column" : "row"} my={5} container>
                        <Grid item xs={6}>

                            <Box width="100%" >
                                <ConductorAsignadoCard nombre="juan Perez" estrellas={4.5} marca="ford" modelo={"taunus"} capacidad="1 tonelada" carga="seca"></ConductorAsignadoCard>


                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <VerticalGreenStepper steps={["En preparación", "Preparado", "En camino", "Retirado"]}></VerticalGreenStepper>

                        </Grid>
                    </Grid>
                }


            </Container>
            <Modal
                open={postular}
                onClose={() => setPostular(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 500,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 2,
                    }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <Box
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: "10px",
                            width: "100%",
                        }}
                    >
                        <Box
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "right",
                                alignItems: "right",
                                cursor: "pointer",
                            }}
                        >
                            <img
                                onClick={() => setPostular(false)}
                                style={{
                                    display: "flex",
                                    justifyContent: "right",
                                    alignContent: "right",
                                }}
                                src="/public/imgShipments/CloseButton.svg"
                            />
                        </Box>

                        <img src="/imgMarketplace/PostulationSent.jpg" />

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Postulación enviada
                        </Typography>

                        <Typography
                            id="modal-modal-description"
                            style={{ marginBottom: "30px" }}
                        >
                            Si te asignan el envío recibirás una notificación
                        </Typography>
                    </Box>
                </Box>
            </Modal>

        </>
    )
}

export default CargaPage