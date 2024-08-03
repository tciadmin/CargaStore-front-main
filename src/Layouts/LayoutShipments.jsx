import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
//? --------------------------------------------- MUI
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Menu, MenuItem, useMediaQuery } from '@mui/material';
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
  const { user } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // const [userRol, setUserRol] = React.useState('');
  // React.useEffect(() => {
  //   if (localStorage.getItem(user)) {
  //     setUserRol(localStorage.getItem(user.role));
  //   } else {
  //     localStorage.setItem(user, user.role);
  //   }
  // }, []);
  const mobile = useMediaQuery('(max-width:720px)');
  const [value, setValue] = React.useState(0);
  const [title, setTitle] = React.useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      setTitle('Envíos pendiente');
      navigate('/shipments');
    } else if (value === 1) {
      setTitle('Envíos asignados');
      navigate('/shipments/assigned');
    } else if (value === 2) {
      setTitle('Envíos en curso');
      navigate('/shipments/in-progress');
    } else {
      setTitle('Envíos finalizados');
      navigate('/shipments/finished');
    }
  }, [value, navigate]);

  return (
    <div>
      {mobile && user?.role === 'driver' && (
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            marginTop: '50px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Montserrat',
              fontSize: '20px',
              fontWeight: 600,
              lineHeight: '24px',
              letterSpacing: '-0.02em',
              textAlign: 'center',
            }}
          >
            {title}
          </h2>
          <img
            onClick={handleClick}
            style={{
              backgroundColor: Colors.primary.constrastText,
              cursor: 'pointer',
            }}
            src="/imgShipments/ArrowDashboard.svg"
          />

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem
              name="Pendientes"
              value="pendiente"
              onClick={() => {
                setValue(0);
                handleClose();
              }}
              style={{
                fontWeight: 500,
                color: value === 0 ? Colors.primary.main : '',
              }}
            >
              Envíos pendientes
            </MenuItem>
            <MenuItem
              name="Asignado"
              value="asignado"
              onClick={() => {
                setValue(1);
                handleClose();
              }}
              style={{
                fontWeight: 500,
                color: value === 1 ? Colors.primary.main : '',
              }}
            >
              Envíos asignados
            </MenuItem>
            <MenuItem
              name="en curso"
              value="en curso"
              onClick={() => {
                setValue(2);
                handleClose();
              }}
              style={{
                fontWeight: 500,
                color: value === 2 ? Colors.primary.main : '',
              }}
            >
              Envíos en curso
            </MenuItem>
            <MenuItem
              name="finalizado"
              value="finalizado"
              onClick={() => {
                setValue(3);
                handleClose();
              }}
              style={{
                fontWeight: 500,
                color: value === 3 ? Colors.primary.main : '',
              }}
            >
              Envíos finalizados
            </MenuItem>
          </Menu>
        </Box>
      )}
      {!mobile && (
        <Box
          sx={{
            minWidth: '100%',
            height: '100%',
            marginTop: '64px',
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
              position: 'fixed',
              width: '100%',
              bottom: 0,
            }}
          >
            <Box
              style={{
                display: 'flex',
                position: 'absolute',
                bottom: 0,
                rigth: 0,
              }}
            >
              <img
                style={{ cursor: 'pointer' }}
                src="/imgShipments/QuestionIcon.svg"
              />
            </Box>
          </Box>
        </Box>
      )}
      <Outlet />
    </div>
  );
};
export default LayoutShipments;
