import { Grid, Stack, Avatar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotificacionesMobile = () => {
    const navigate = useNavigate();
    return (
        <>
            <Stack direction="row" justifyContent={"flex-start"} alignItems={"center"} p={2}>
                <svg width="24" style={{ marginLeft: "15px", cursor: "pointer" }} onClick={() => navigate(-1)} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_343_8051)">
                        <path d="M23.25 12H0.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.25 1.5L0.75 12L11.25 22.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_343_8051">
                            <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)" />
                        </clipPath>
                    </defs>
                </svg>

                <Typography ml={2} fontSize="24px">Notificaciones</Typography>
            </Stack>
            <Stack direction={"column"} width="100vw" px={3} justifyContent={"flex-start"} alignItems={"flex-start"} spacing={1}>
                <Stack direction="row" justifyContent={"flex-start"}>
                    <Avatar width="50px" height="50px" style={{ alignSelf: "flex-end" }}></Avatar>

                    <p style={{ fontSize: "14px", fontWeight: 400, color: "black", textAlign: "start", marginLeft: "5px", hyphens: "auto" }}><span style={{ fontWeight: 500 }}> José Luis</span> ha retirado el paquete.
                        <span style={{ alignSelf: "flex-end", color: "#8C94A6", fontWeight: 400, marginLeft: "5px" }}>Hace 1 hora</span>

                    </p>
                </Stack>

                <Stack direction="row" justifyContent={"flex-start"}>

                    <Avatar width="60px" height="60px" style={{ alignSelf: "flex-end" }}></Avatar>

                    <p style={{ fontSize: "14px", fontWeight: 400, color: "black", textAlign: "start", marginLeft: "5px", hyphens: "auto" }}>Tu conductor asignado es <span style={{ fontWeight: 500 }}> José Luis.</span>
                        <span style={{ alignSelf: "flex-end", color: "#8C94A6", fontWeight: 400, marginLeft: "5px" }}>Hace 1 hora</span>
                    </p>


                </Stack>

            </Stack>








        </>
    )
}

export default PageNotificacionesMobile