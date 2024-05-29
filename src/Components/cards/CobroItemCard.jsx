import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const CobroItemCard = ({ title, countrys, typeCharge, date, discount, price, image = "/marketplace/6.png" }) => {
    return (
        <>        <Grid container style={{ height: "150px", width: "450px" }}>
            <Grid item xs={8}

            >
                <Stack display="flex" flexDirection={"column"} justifyContent={"flex-start"} >
                    <Typography fontSize="20px" fontWeight={500}>{title}</Typography>
                    <Typography fontSize="16px" fontWeight={300} color="secondary">{countrys}</Typography>
                    <Typography fontSize="16px" fontWeight={300} color="secondary">{typeCharge}</Typography>
                    <Typography fontSize="16px" fontWeight={300} color="secondary">{date}</Typography>
                    <Typography fontSize="16px" fontWeight={300} color="secondary">{discount}</Typography>
                    <Typography fontSize="16px" fontWeight={500} color="primary">Total ${price}</Typography>


                </Stack>


            </Grid>
            <Grid item xs={4} height={"150px"}  >
                <img  src={image} alt={title} height={150} />

            </Grid>
        </Grid>
        <svg style={{alignSelf: "center", marginTop: "20px", marginBottom: "20px" }} width="440" height="1" viewBox="0 0 440 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="-3.24539e-08" y1="0.500061" x2="440" y2="0.500009" stroke="#D0D5DD"/>
</svg>
        </>

    )
}

export default CobroItemCard