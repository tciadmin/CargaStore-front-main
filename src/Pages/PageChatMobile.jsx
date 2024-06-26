import { Button, Stack, Typography, Avatar, Grid,Box, Input } from '@mui/material';
import { Colors } from '../Utils/Colors';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PageChatMobile = () => {
    const navigate = useNavigate();
    const [chatear, setChatear] = useState(false)
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

                <Typography ml={2} fontSize="24px">Chats</Typography>
            </Stack>
            <Stack direction="column" maxWidth="100%" >
                {!chatear ?
                    <>
                        <Stack direction={"row"} width="100vw" maxWidth="100%" p={2} sx={{ cursor: "pointer" }} onClick={() => setChatear(true)}>
                            <Avatar width="40px" src="imagen" height="40px" ></Avatar>
                            <Stack direction="column" ml={0.5} maxWidth="100%">
                                <Typography fontSize={"12px"} color="#000">José Luis</Typography>

                                <Grid container xs={12} maxWidth={"100%"}>
                                    <Grid item xs={8}>
                                        <Typography
                                            fontSize={"12px"}
                                            fontWeight={600}
                                            maxWidth="100%"
                                            color="#000" sx={{
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                maxWidth: '100%',
                                            }}>Hola,estoy afuera, abrime por favor asi descargamos </Typography>

                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography width="100px" maxWidth="100%" fontSize={"12px"} color={"#8C94A6"}>Hace 1 hora</Typography>

                                    </Grid>

                                </Grid>
                            </Stack>
                        </Stack>


                        <Stack direction={"row"} width="100vw" maxWidth="100%" p={2} sx={{ cursor: "pointer" }} onClick={() => setChatear(true)} >
                            <Avatar width="40px" src="imagen" height="40px" ></Avatar>
                            <Stack direction="column" ml={0.5}>
                                <Typography fontSize={"12px"} color="#000">Ana Luz</Typography>

                                <Grid container xs={12} maxWidth={"100%"}>
                                    <Grid item xs={8}>
                                        <Typography fontSize={"12px"} fontWeight={400} color="#000" sx={{
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                            maxWidth: '100%',
                                        }}>Ya enviamos el pedido! </Typography>

                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography fontSize={"12px"} width="100px" maxWidth="100%" color={"#8C94A6"}>Hace 2 hora</Typography>

                                    </Grid>

                                </Grid>
                            </Stack>
                        </Stack>
                    </>

                    :
                    <>
                        {/*Nuestro mensaje */}

                        <Stack direction="column" alignItems={"flex-end"} p={2}>
                            <Box style={{ backgroundColor: Colors.primary.main, width: "230px", borderRadius: "10px 0px 10px 10px", padding: "10px 15px 10px 15px" }}>
                                <Typography fontSize={"16px"} color="#fff" fontWeight={400}>Hola! El paquete salió a hora?</Typography>

                            </Box>
                            <Typography fontSize={"14px"} fontWeight={400} width="230px" color={"#0D082C66"}>08:15 AM</Typography>


                        </Stack>
                        {/*Respuesta */}
                        <Grid container p={2}>

                            <Grid item xs={2}>
                                <Avatar alignSelf="flex-end"></Avatar>
                            </Grid>
                            <Grid item xs={10}>
                                <Stack direction="column" alignItems={"flex-start"} >
                                    <Typography fontSize="16px" color="#000" >José Luis</Typography>
                                    <Box style={{ backgroundColor: "#F1F7FF", width: "230px", borderRadius: "0px 10px 10px 10px", padding: "10px 15px 10px 15px" }}>
                                        <Typography fontSize={"16px"} color={"#000"} fontWeight={400}>Hola, Mariana, el paquete salió a horario y se entregará en horario.</Typography>

                                    </Box>
                                    <Typography fontSize={"14px"} fontWeight={400} width="230px" textAlign="end" color={"#0D082C66"}>08:18 AM</Typography>


                                </Stack>
                            </Grid>

                        </Grid>


                        <Grid container p={2}>

                            <Grid item xs={2}>
                                <Avatar alignSelf="flex-end"></Avatar>
                            </Grid>
                            <Grid item xs={10}>
                                <Stack direction="column" alignItems={"flex-start"} >
                                    <Typography fontSize="16px" color="#000" >José Luis</Typography>
                                    <Stack direction="row" justifyContent={"space-around"} p="10px 15px 10px 15px" borderRadius="0px 10px 10px 10px" width="91px" height="35px" bgcolor={"#F1F7FF"}>
                                        <svg width="16" className="worm" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="7.5" r="7.5" fill="#C7DFFF" />
                                        </svg>
                                        <svg width="16" className="worm worm-delay2" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="7.5" r="7.5" fill="#C7DFFF" />
                                        </svg>
                                        <svg width="16" className="worm worm-delay3" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="7.5" r="7.5" fill="#C7DFFF" />
                                        </svg>

                                    </Stack>


                                </Stack>
                            </Grid>

                        </Grid>
                        {/*Escribir */}
                        <Stack direction="row" position="absolute" bottom={0} left={0} justifyContent={"space-between"} width="100vw" height="60px" pb={2} px={2}>
                            <Stack direction="row" alignItems={"center"}>
                                <svg width="25" style={{ cursor: "pointer" }} height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.5 14C8.5 14 10 16 12.5 16C15 16 16.5 14 16.5 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.5 9H9.51" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.5 9H15.51" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <Input placeholder="Responder" style={{ marginLeft: "5px", border: "none", color: "#0D082C", fontSize: "16px" }}></Input>
                            </Stack>
                            <Stack direction="row" alignItems="center">
                                <svg style={{ cursor: "pointer" }} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <svg opacity="0.4">
                                        <path d="M19.5 3H5.5C4.39543 3 3.5 3.89543 3.5 5V19C3.5 20.1046 4.39543 21 5.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V5C21.5 3.89543 20.6046 3 19.5 3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.5 11C10.6046 11 11.5 10.1046 11.5 9C11.5 7.89543 10.6046 7 9.5 7C8.39543 7 7.5 7.89543 7.5 9C7.5 10.1046 8.39543 11 9.5 11Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.5 15.0002L18.414 11.9142C18.0389 11.5392 17.5303 11.3286 17 11.3286C16.4697 11.3286 15.9611 11.5392 15.586 11.9142L6.5 21.0002" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </svg>
                                <Stack ml={1} direction="column" justifyContent={"center"} alignItems="center" width="40px" height="40px" borderRadius="100px" sx={{ background: Colors.primary.main, cursor: "pointer" }}>
                                    <svg style={{ cursor: "pointer" }} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.5 18L15.5 12L9.5 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Stack>
                            </Stack>
                        </Stack>
                    </>
                }
            </Stack>


        </>
    )
}

export default PageChatMobile