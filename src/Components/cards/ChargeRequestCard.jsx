import { Avatar, Button, Grid, Rating, Stack, Typography } from '@mui/material'
import React from 'react'

const ChargeRequestCard = ({ nombre, marca, modelo, capacidad, carga, imagen = "", estrellas = 4.5 }) => {
    return (
        <Grid container height="40px" spacing={.5}>
            <Grid item container direction="row" justifyContent={"center"} alignItems={"center"} xs={2}>
                <Grid item xs={4}>
                    <Avatar alt="Remy Sharp" src={imagen} />

                </Grid>
                <Grid item xs={8} direction="column" justifyContent={"center"} alignItems={"center"} >
                    <Typography>{nombre}</Typography>
                    <Rating name="half-rating-read" size="small" defaultValue={estrellas} precision={0.5} readOnly />                </Grid>
            </Grid>
            <Grid item xs={2}  alignSelf={"center" }  >
                <Typography mb={3}  fontSize="16px" fontWeight={600}  >
                    Marca: <span style={{ fontWeight: "400" }}>{marca}</span>
                </Typography >
            </Grid>
            <Grid item xs={2} alignSelf={"center" } >
                <Typography mb={3} fontSize="16px" fontWeight={600}  >
                    Modelo: <span style={{ fontWeight: "400" }}>{modelo}</span>
                </Typography >
            </Grid>
            <Grid item xs={2}alignSelf={"center" } > 
                <Typography mb={3} fontSize="16px" fontWeight={600}  >
                    Capacidad: <span style={{ fontWeight: "400" }}>{capacidad}</span>
                </Typography >
            </Grid>
            <Grid item xs={2}alignSelf={"center" }>  
                <Typography mb={3} fontSize="16px" fontWeight={600}  >
                    Carga: <span style={{ fontWeight: "400" }}>{carga}</span>
                </Typography >
            </Grid>
            <Grid item direction="row" justifyContent={"center"} alignItems={"center"} xs={2}>
                <Stack direction="row" justifyContent={"center"} alignItems={"center"}>
                    <Button style={{ fontWeight: 600, marginRight: "4px" }} variant="outlined" >Asignar</Button>
                    <Button  variant='sf'>

                        <Typography fontSize={"16px"} fontWeight={600} color='secondary'> Ignorar</Typography>
                    </Button>

                </Stack>


            </Grid>

        </Grid>
    )
}

export default ChargeRequestCard