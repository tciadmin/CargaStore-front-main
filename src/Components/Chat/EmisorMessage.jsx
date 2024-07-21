import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import getTimeDifference from '../../helpers/diferenciaHoraria'
import { Colors } from '../../Utils/Colors'

const EmisorMessage = ({ date, message }) => {
    return (
        <Stack
            direction="column"
            alignItems={'flex-end'}
            p={2}
        >
            <Box
                style={{
                    backgroundColor: Colors.primary.main,
                    width: '230px',
                    borderRadius: '10px 0px 10px 10px',
                    padding: '10px 15px 10px 15px',
                }}
            >
                <Typography 
                sx={{
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word',
                    hyphens: 'auto',
                }}
                fontSize={'16px'} fontWeight={400}>
                    {message}
                </Typography>
            </Box>
            <Typography
                fontSize={'14px'}
                fontWeight={400}
                width="230px"
                color={'#0D082C66'}
            >
                {getTimeDifference(date)}
            </Typography>
        </Stack>
    )
}

export default EmisorMessage