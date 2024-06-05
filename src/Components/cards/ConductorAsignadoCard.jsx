import { Avatar, Button, Grid, Rating, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const ConductorAsignadoCard = ({ nombre, marca, modelo, capacidad, carga, imagen = "", estrellas = 1.5 }) => {
    const mobile = useMediaQuery("(max-width:750px)");

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography>Conductor asignado</Typography>
            </Grid>
            <Grid item container xs={12} spacing={1} style={{border: mobile ? "1px solid #007C52": "none",marginTop: 2, borderRadius: "5px", padding: "10px"}}>
                <Grid item container xs={mobile ?4: 6}>
                    <Grid item container direction="row" justifyContent={"center"} alignItems={"center"} xs={12}>
                        <Grid item container justifyContent="center"xs={mobile?12:4}>
                            <Avatar alt="Remy Sharp" sx={{width: mobile ? "100px": "80px", height: mobile ? "100px": "80px"}} src={imagen} />

                        </Grid>
                        {!mobile &&
                            <Grid item xs={8} direction="column" justifyContent={"center"} alignItems={"center"} >
                                <Typography>{nombre}</Typography>
                                <Rating name="half-rating-read" size="small" defaultValue={estrellas} precision={0.5} readOnly />
                            </Grid>
                        }

                    </Grid>
                </Grid>
                <Grid item xs={mobile ? 8  : 6    }>
                    <Stack direction="column" justifyContent={"center"} alignItems={"flex-start"}>
                        {mobile &&
                            <Grid item container direction="column" width="100%" justifyContent={"center"} alignItems={"center"} >
                                <Typography>{nombre}</Typography>
                                <Rating name="half-rating-read" size="small" defaultValue={estrellas} precision={0.5} readOnly />
                            </Grid>
                        }
                        <Typography fontSize="16px" fontWeight={600}  >
                            Marca: <span style={{ fontWeight: "400" }}>{marca}</span>
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600}  >
                            Modelo: <span style={{ fontWeight: "400" }}>{modelo}</span>
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600}  >
                            Capacidad: <span style={{ fontWeight: "400" }}>{capacidad}</span>
                        </Typography >
                        <Typography fontSize="16px" fontWeight={600}  >
                            Carga: <span style={{ fontWeight: "400" }}>{carga}</span>
                        </Typography >


                    </Stack>
                </Grid>

            </Grid>
            <Grid item container direction={"row"} width={"100%"} justifyContent={"center"} mt={3} xs={12}>
                <Button style={{ alignSelf: "center", fontWeight: 600 }}>Ver factura</Button>
            </Grid>
        </Grid>
    )
}

export default ConductorAsignadoCard