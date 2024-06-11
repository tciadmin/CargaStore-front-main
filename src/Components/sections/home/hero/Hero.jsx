import React from 'react';
import "./index.css"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useMediaQuery } from '@mui/material';





const Hero = () => {
    const mobile = useMediaQuery("(max-width: 750px)");

    return (
        <div className='hero' >
            <Container maxWidth="xl" alignContent="center">
                <Typography  variant="h2" fontSize={mobile ? "40px": "90px"} fontWeight={"bold"} align="start" color="primary.contrastText" paragraph>
                    Carga Store
                </Typography>
                <Typography variant="h5"fontWeight={500} fontSize={mobile ? "20px":"40px"} align="start" color="primary.contrastText" paragraph>
                    Servicios Mercantiles sin frontera
                </Typography>
            </Container>
        </div>
    );
};
export default Hero;