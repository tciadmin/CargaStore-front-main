import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CompNavLanding from '../Components/NavLanding/CompNavLanding';
//? --------------------------------------------- MUI
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, useMediaQuery } from '@mui/material';
//? --------------------------------------------- STYLES
import { Colors } from '../Utils/Colors';
import { useSelector } from 'react-redux';

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
          <Typography>{children}</Typography>
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

const LayoutShipments = () => {
  const { user }= useSelector((state) => state.user)
  const [userRol, setUserRol] = React.useState('');
  React.useEffect(() => {
    if (localStorage.getItem(user)) {
      setUserRol(localStorage.getItem(user.role));
    } else {
      localStorage.setItem(user, user.role);
    }
  }, []);
  const mobile = useMediaQuery('(max-width:720px)');
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate('/shipments');
    } else if (value === 1) {
      navigate('/shipments/assigned');
    } else if (value === 2) {
      navigate('/shipments/in-progress');
    } else {
      navigate('/shipments/finished');
    }
  }, [value, navigate]);

  return (
    <div>
      <CompNavLanding />
      {!mobile && (
        <Box
          sx={{
            minWidth: '100%',
            height: '100%',
            marginTop: '64px'
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 5,
              height: '20px',
              backgroundColor: Colors.terciary.contrastText,
            }}
          >
            <Box
              className="slider"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '96%',
                height: '60px',
                alignItems: 'center',
                backgroundColor: Colors.terciary.contrastText,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  height: '34px',
                  zIndex: 0,
                  width: '100%',
                  maxWidth: '780px',
                }}
              >
                <Button
                  onClick={() => setValue(0)}
                  sx={{
                    border: 'none',
                    height: '33px',
                    padding: '0px',
                    borderBottom:
                      value == 0
                        ? '2px solid rgb(0, 124, 82)'
                        : 'none',
                    color:
                      value == 0 ? Colors.primary.main : '#475367',
                    fontWeight: 600,
                    fontSize: '16px',
                    borderRadius: '0px',
                  }}
                  zIndex={10}
                  variant="none"
                >
                  {value === 0 ? (
                    <img
                      src="/imgShipments/PendingActive.svg"
                      style={{ marginRight: '5px' }}
                      width="24px"
                    />
                  ) : (
                    <img
                      src="/imgShipments/PendingInactive.svg"
                      style={{ marginRight: '5px' }}
                      width="24px"
                    />
                  )}
                  Pendientes{' '}
                </Button>
                <Button
                  onClick={() => setValue(1)}
                  sx={{
                    border: 'none',
                    height: '33px',
                    padding: '0px',
                    borderRadius: '0px',
                    borderBottom:
                      value == 1
                        ? '2px solid rgb(0, 124, 82)'
                        : 'none',
                    color:
                      value == 1 ? Colors.primary.main : '#475367',
                    fontWeight: 600,
                    fontSize: '16px',
                  }}
                  variant="none"
                >
                  {value === 1 ? (
                    <img
                      src="/imgShipments/AssignedActive.svg"
                      style={{ marginRight: '5px' }}
                      width="24px"
                    />
                  ) : (
                    <img
                      src="/imgShipments/AssignedInactive.svg"
                      style={{ marginRight: '5px' }}
                      width="24px"
                    />
                  )}
                  Asignado
                </Button>
                <Button
                  onClick={() => setValue(2)}
                  sx={{
                    border: 'none',
                    height: '33px',
                    padding: '0px',
                    borderRadius: '0px',
                    borderBottom:
                      value == 2
                        ? '2px solid rgb(0, 124, 82)'
                        : 'none',
                    color:
                      value == 2 ? Colors.primary.main : '#475367',
                    fontWeight: 600,
                    fontSize: '16px',
                  }}
                  variant="none"
                >
                  {value === 2 ? (
                    <img
                      src="/imgShipments/InProgressActive.svg"
                      style={{ marginRight: '5px' }}
                      width="24px"
                    />
                  ) : (
                    <img
                      src="/imgShipments/InProgressInactive.svg"
                      style={{ marginRight: '5px' }}
                      width="24px"
                    />
                  )}
                  En curso{' '}
                </Button>
                <Button
                  sx={{
                    border: 'none',
                    height: '33px',
                    borderRadius: '0px',
                    padding: '0px',
                    borderBottom:
                      value == 3
                        ? '2px solid rgb(0, 124, 82)'
                        : 'none',
                    color:
                      value == 3 ? Colors.primary.main : '#475367',
                    fontWeight: 600,
                    fontSize: '16px',
                  }}
                  onClick={() => setValue(3)}
                  variant="none"
                >
                  {value === 3 ? (
                    <img
                      src="/imgShipments/DoneActive.svg"
                      style={{ marginRight: '5px' }}
                      width="24px"
                    />
                  ) : (
                    <img
                      src="/imgShipments/DoneInactive.svg"
                      style={{ marginRight: '5px' }}
                      width="24px"
                    />
                  )}
                  Finalizados
                </Button>
              </div>
              {user.role == 'customer' && (
                <Button
                  style={{ margin: 0 }}
                  variant="contained"
                  onClick={() => navigate('/crearEnvios')}
                >
                  Crear envío
                </Button>
              )}
            </Box>
          </Box>
          <Box
            style={{
              display: 'flex',
              alignItems: 'right',
              justifyContent: 'right',
              padding: '10px',
              cursor: 'pointer',
              position: 'fixed',
              width: '100%',
              bottom: 0
            }}
          >
            <img src="/imgShipments/QuestionIcon.svg" />
          </Box>
        </Box>
      )}
      <Outlet />
      
    </div>
  );
};
export default LayoutShipments;
