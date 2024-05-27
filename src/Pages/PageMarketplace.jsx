import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MarketplaceCard from '../Components/cards/MarketplaceCard';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>  {children}</Typography>
                </Box>
            )}
        </div>
    );
}
const enviosFake = [{
    title: "bobinas de papel",
    price: 12000,
    weight: "1 tonelada",
    typeCharge: "seca",
    image: "/marketplace/10.png",
    international: false
},
{
    title: "Gas botano",
    price: 2000,
    weight: "123m3",
    typeCharge: "peligrosa",
    image: "/marketplace/9.png",
    international: true

},
{
    title: "Maíz",
    price: 15000,
    weight: "2 tonelada",
    typeCharge: "seca",
    image: "/marketplace/8.png",
    international: false

},
{
    title: "Libros",
    price: 2000,
    weight: "100 kilos",
    typeCharge: "seca",
    image: "/marketplace/7.png",
    international: false

},
{
    title: "Remedio para niños",
    price: 1000,
    weight: "640 kilos",
    typeCharge: "refrigerada",
    image: "/marketplace/10.png",
    international: false

},
{
    title: "Disolvente universal",
    price: 8000,
    weight: "300 kilos",
    typeCharge: "líquido",
    image: "/marketplace/6.png",
    international: true

},
{
    title: "Leña",
    price: 10000,
    weight: "10 kilos",
    typeCharge: "seco",
    image: "/marketplace/9.png",
    international: false

},
{
    title: "Alimento para perro",
    price: 13000,
    weight: "13 kilos",
    typeCharge: "seco",
    image: "/marketplace/6.png",
    international: true

},
{
    title: "Tierra orgánica",
    price: 70000,
    weight: "1 tonelada",
    typeCharge: "seco",
    image: "/marketplace/6.png",
    international: true

},
{
    title: "bobinas de papel",
    price: 12000,
    weight: "1 tonelada",
    typeCharge: "seca",
    image: "/marketplace/10.png",
    international: false
},
{
    title: "Gas botano",
    price: 2000,
    weight: "123m3",
    typeCharge: "peligrosa",
    image: "/marketplace/9.png",
    international: true

},
{
    title: "Maíz",
    price: 15000,
    weight: "2 tonelada",
    typeCharge: "seca",
    image: "/marketplace/8.png",
    international: false

},
{
    title: "Libros",
    price: 2000,
    weight: "100 kilos",
    typeCharge: "seca",
    image: "/marketplace/7.png",
    international: false

},

{
    title: "Disolvente universal",
    price: 8000,
    weight: "300 kilos",
    typeCharge: "líquido",
    image: "/marketplace/6.png",
    international: true

},

]

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function PageMarketplace() {
    const [value, setValue] = useState(0);

    const enviosNacionales = enviosFake.filter(item => item.international == false);
    const enviosInternacionales = enviosFake.filter(item => item.international == true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ width: '90%', margin: "30px auto" }}>
            <Box display={"flex"} justifyContent={"space-between"} >
                <Tabs variant="secondary" value={value} onChange={handleChange} aria-label="envios tabs">
                    <Tab label={<Box display={"flex"} justifyContent={"space-around"} alignItems="center">

                        <Typography variant='p' marginLeft={1} textTransform={"none"}>Envios nacionales</Typography >
                    </Box>}
                        {...a11yProps(0)}
                        color="secondary" />

                    <Tab label={<Box display={"flex"} justifyContent={"space-around"} alignItems="center">


                        <Typography variant='p' marginLeft={1} textTransform={"none"}>Envios internacionales</Typography >
                    </Box>}
                        {...a11yProps(1)}
                        color="secondary" />


                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>

                <Grid container spacing={3} >
                    {enviosNacionales.map(item =>
                        <Grid item xs={6} sm={4} md={3} lg={2.4}>
                            <MarketplaceCard image={item.image} title={item.title} weight={item.weight} price={item.price} typeCharge={item.typeCharge} ></MarketplaceCard>
                        </Grid>

                    )}

                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Grid container spacing={3} >
                    {enviosInternacionales.map(item =>
                        <Grid item xs={6} sm={4} md={3} lg={2.4}>
                            <MarketplaceCard image={item.image} title={item.title} weight={item.weight} price={item.price} typeCharge={item.typeCharge} ></MarketplaceCard>
                        </Grid>

                    )}

                </Grid>
            </CustomTabPanel>

        </Box>
    );
}
