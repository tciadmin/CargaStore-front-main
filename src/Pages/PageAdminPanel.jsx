import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar, Button, Stack } from '@mui/material';
import InputForm from '../Components/inputs/InputForm';
import CobroItemCard from '../Components/cards/CobroItemCard';
import ChargeItemCard from '../Components/cards/ChargeItemCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function PageAdminPanel() {
  const [value, setValue] = React.useState(0);
  const [editar, setEditar] = React.useState(0);


  const handleChange = (event, newValue) => {
    setEditar(false);
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: '#e6e6e6', display: 'flex', width: "100%", height: "100%" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: "300px", height: "200vh" }}
      >
        <Tab label="Solicitudes de carga" sx={{ textTransform: "none", background: value == 0 ? "white" : "transparent", width: "100%", alignItems: "flex-start", fontWeight: "bold" }} {...a11yProps(0)} />
        <Tab label="Socios activos" sx={{ textTransform: "none", background: value == 1 ? "white" : "transparent", width: "100%", alignItems: "flex-start", fontWeight: "bold" }} {...a11yProps(1)} />

      </Tabs>
      <TabPanel value={value} style={{ width: value == 0 ? "100%" : "0", display: "flex", justifyContent: "center" }} index={0}>

        <ChargeItemCard/>
      </TabPanel>
      <TabPanel value={value} style={{ width: value == 1 ? "100%" : "0", display: "flex", justifyContent: "center" }} index={1}>

        
      </TabPanel>
     


    </Box>
  );
}
