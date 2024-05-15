import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Button } from '@mui/material';

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

export default function EnvioOptions() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '90%', margin: "30px auto" }}>
      <Box display={"flex"} justifyContent={"space-between"} >
        <Tabs variant="secondary" value={value} onChange={handleChange} aria-label="envios tabs">
          <Tab label={<Box display={"flex"} justifyContent={"space-around"} alignItems="center">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.01562 11.5C2.01562 14.2848 3.12187 16.9555 5.091 18.9246C7.06013 20.8938 9.73085 22 12.5156 22C15.3004 22 17.9711 20.8938 19.9402 18.9246C21.9094 16.9555 23.0156 14.2848 23.0156 11.5C23.0156 8.71523 21.9094 6.04451 19.9402 4.07538C17.9711 2.10625 15.3004 1 12.5156 1C9.73085 1 7.06013 2.10625 5.091 4.07538C3.12187 6.04451 2.01562 8.71523 2.01562 11.5Z" stroke={value == 0 ? "#007C52" : "grey"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.5156 11.5V7.75" stroke={value == 0 ? "#007C52" : "grey"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.5156 11.5L17.2026 16.188" stroke={value == 0 ? "#007C52" : "grey"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <Typography variant='p' marginLeft={1} textTransform={"none"}>Pendientes</Typography >
          </Box>}
            {...a11yProps(0)}
            color="secondary" />

          <Tab label={<Box display={"flex"} justifyContent={"space-around"} alignItems="center">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1005_2014)">
                <path d="M4.51562 6V0.75H9.01562V5.96L4.51562 6Z" stroke={value == 1 ? "#007C52" : "grey"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.76562 12.75H1.56562C1.35345 12.75 1.14996 12.6657 0.99994 12.5157C0.84991 12.3657 0.765625 12.1622 0.765625 11.95V1.55C0.765625 1.33783 0.84991 1.13434 0.99994 0.984315C1.14996 0.834285 1.35345 0.75 1.56562 0.75H12.0156" stroke={value == 1 ? "#007C52" : "grey"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M23.2656 14.5C23.2656 13.1076 22.7125 11.7723 21.7279 10.7877C20.7433 9.80312 19.408 9.25 18.0156 9.25C16.6232 9.25 15.2879 9.80312 14.3033 10.7877C13.3187 11.7723 12.7656 13.1076 12.7656 14.5V15.75H15.0156L15.7656 23.25H20.2656L21.0156 15.75H23.2656V14.5Z" stroke={value == 1 ? "#007C52" : "grey"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.0156 3.75C15.0156 2.95435 15.3317 2.19129 15.8943 1.62868C16.4569 1.06607 17.22 0.75 18.0156 0.75C18.8112 0.75 19.5743 1.06607 20.1369 1.62868C20.6995 2.19129 21.0156 2.95435 21.0156 3.75" stroke={value == 1 ? "#007C52" : "grey"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.0156 3.75H12.5156" stroke={value == 1 ? "#007C52" : "grey"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.4757 6.51C20.1978 6.9037 19.8292 7.22467 19.401 7.44573C18.9728 7.6668 18.4976 7.78145 18.0157 7.78C17.533 7.78033 17.0572 7.66414 16.629 7.4413C16.2007 7.21846 15.8325 6.89555 15.5557 6.5" stroke={value == 1 ? "#007C52" : "grey"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1005_2014">
                  <rect width="24" height="24" fill="white" transform="translate(0.015625)" />
                </clipPath>
              </defs>
            </svg>

            <Typography variant='p' marginLeft={1} textTransform={"none"}>Asignados</Typography >
          </Box>}
            {...a11yProps(1)}
            color="secondary" />

          <Tab label={<Box display={"flex"} justifyContent={"space-around"} alignItems="center">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.01562 9.75C6.01562 11.3413 6.64777 12.8674 7.77298 13.9926C8.8982 15.1179 10.4243 15.75 12.0156 15.75C13.6069 15.75 15.133 15.1179 16.2582 13.9926C17.3835 12.8674 18.0156 11.3413 18.0156 9.75C18.0156 8.1587 17.3835 6.63258 16.2582 5.50736C15.133 4.38214 13.6069 3.75 12.0156 3.75C10.4243 3.75 8.8982 4.38214 7.77298 5.50736C6.64777 6.63258 6.01562 8.1587 6.01562 9.75Z" stroke={value == 2 ? "#007C52" : "grey"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.81543 6.75098H8.26543C8.66326 6.75098 9.04479 6.90901 9.32609 7.19032C9.6074 7.47162 9.76543 7.85315 9.76543 8.25098V8.95098C9.76545 9.19791 9.82643 9.44102 9.94296 9.65873C10.0595 9.87644 10.2279 10.062 10.4334 10.199L11.3914 10.838C11.5836 10.9657 11.7413 11.139 11.8504 11.3425C11.9594 11.5459 12.0165 11.7732 12.0165 12.004C12.0165 12.2348 11.9594 12.462 11.8504 12.6655C11.7413 12.8689 11.5836 13.0422 11.3914 13.17L8.86043 14.854" stroke={value == 2 ? "#007C52" : "grey"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.216 6.75098H16.516C16.2603 6.7509 16.0088 6.81621 15.7854 6.9407C15.562 7.0652 15.3741 7.24474 15.2396 7.46227C15.1052 7.67981 15.0286 7.92811 15.0171 8.18359C15.0056 8.43907 15.0596 8.69325 15.174 8.92198C15.601 9.77598 15.699 9.81698 15.964 9.97598L17.864 11.114" stroke={value == 2 ? "#007C52" : "grey"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.0156 9.75C21.0156 17.65 14.0836 22.081 12.3866 23.05C12.2734 23.1144 12.1454 23.1483 12.0151 23.1483C11.8848 23.1483 11.7568 23.1144 11.6436 23.05C9.94663 22.08 3.01562 17.648 3.01562 9.75C3.01562 7.36305 3.96384 5.07387 5.65167 3.38604C7.3395 1.69821 9.62867 0.75 12.0156 0.75C14.4025 0.75 16.6917 1.69821 18.3796 3.38604C20.0674 5.07387 21.0156 7.36305 21.0156 9.75Z" stroke={value == 2 ? "#007C52" : "grey"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <Typography variant='p' marginLeft={1} textTransform={"none"}>En Curso</Typography >
          </Box>}
            {...a11yProps(2)}
            color="secondary" />

          <Tab label={<Box display={"flex"} justifyContent={"space-around"} alignItems="center">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1005_2030)">
                <path d="M8.45775 20.3184L1.82675 13.6864C1.29652 13.1267 1.0056 12.3822 1.01589 11.6113C1.02618 10.8403 1.33686 10.1038 1.88184 9.55848C2.42682 9.01308 3.16309 8.70187 3.93401 8.69103C4.70493 8.68019 5.44965 8.97057 6.00975 9.50038L10.2278 13.7184L18.1278 3.1854C18.3609 2.87423 18.6531 2.61204 18.9876 2.41378C19.3221 2.21553 19.6924 2.0851 20.0773 2.02994C20.4622 1.97479 20.8541 1.99598 21.2309 2.09231C21.6076 2.18865 21.9616 2.35824 22.2728 2.5914C22.5839 2.82456 22.8461 3.11673 23.0444 3.45122C23.2426 3.78572 23.3731 4.15598 23.4282 4.54088C23.4834 4.92578 23.4622 5.31777 23.3659 5.69448C23.2695 6.07119 23.0999 6.42523 22.8668 6.7364L12.9198 20.0014C12.6652 20.3407 12.3408 20.6213 11.9683 20.8243C11.5959 21.0273 11.1842 21.1479 10.7611 21.178C10.338 21.208 9.91338 21.1469 9.51599 20.9986C9.1186 20.8503 8.75771 20.6183 8.45775 20.3184Z" stroke={value == 3 ? "#007C52" : "grey"} stroke-width="1.5" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1005_2030">
                  <rect width="24" height="24" fill="white" transform="translate(0.015625)" />
                </clipPath>
              </defs>
            </svg>
            <Typography variant='p' marginLeft={1} textTransform={"none"}>Finalizados</Typography >
          </Box>}
            {...a11yProps(3)}
            color="secondary" />
        </Tabs>
        <Button variant="contained" color='primary' sx={{ fontWeight: 500 }}>Crear envío</Button>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box display="flex" flexDirection={"column"} alignItems={"center"} height="80vh" justifyContent={"center"}>
          <img src='/src/assets/envios/sinenvios.png' width={"200px "}></img>
          <Typography variant='h4'> Aun no tienes envíos generados</Typography>
          <Typography variant='p'> Para crear un nuevo envio haz clic en el boton de “Crear envío”</Typography>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        componente de asignados
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Componente  de en Curso
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Componente de Finalizados
      </CustomTabPanel>
    </Box>
  );
}
