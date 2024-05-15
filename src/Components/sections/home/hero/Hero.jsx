import React from 'react';
import "./index.css"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';





const Hero = () => {

    return (
        <div className='hero' >
            <Container maxWidth="xl" alignContent="center">
                <Typography  variant="h2" fontWeight={"bold"} align="start" color="primary.contrastText" paragraph>
                    Carga Store
                </Typography>
                <Typography variant="h5"fontWeight={500} align="start" color="primary.contrastText" paragraph>
                    Servicios Mercantiles sin frontera
                </Typography>
            </Container>
        </div>
    );
};
export default Hero;