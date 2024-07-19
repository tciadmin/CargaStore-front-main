import { Avatar, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const ReceptorWriting = ({nameOfUser}) => {
    return (
        <Grid container p={0} >
            <Grid item xs={2}>
                <Avatar alignSelf="flex-end"></Avatar>
            </Grid>
            <Grid item xs={10}>
                <Stack
                    direction="column"
                    alignItems={'flex-start'}
                >
                    <Typography fontSize="16px" color="#000">
                        {nameOfUser}
                    </Typography>
                    <Stack
                        direction="row"
                        justifyContent={'space-around'}
                        p="10px 15px 10px 15px"
                        borderRadius="0px 10px 10px 10px"
                        width="91px"
                        height="35px"
                        bgcolor={'#F1F7FF'}
                    >
                        <svg
                            width="16"
                            className="worm"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="8"
                                cy="7.5"
                                r="7.5"
                                fill="#C7DFFF"
                            />
                        </svg>
                        <svg
                            width="16"
                            className="worm worm-delay2"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="8"
                                cy="7.5"
                                r="7.5"
                                fill="#C7DFFF"
                            />
                        </svg>
                        <svg
                            width="16"
                            className="worm worm-delay3"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="8"
                                cy="7.5"
                                r="7.5"
                                fill="#C7DFFF"
                            />
                        </svg>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default ReceptorWriting