import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Grid, useMediaQuery, Menu, MenuItem } from '@mui/material';
import MarketplaceCard from '../Components/cards/MarketplaceCard';
import { Colors } from '../Utils/Colors';
import CompNavLanding from '../Components/NavLanding/CompNavLanding';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrder } from '../Redux/Actions/OrderActions/listOrder';
import Loading from '../Components/Loading/Loading';

export default function PageMarketplace() {
  const mobile = useMediaQuery('(max-width:720px)');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const { orders, ordersLoading } =
    useSelector((state) => state.orders) || [];

  const [orderType, setOrderType] = useState('nacional');

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setOrderType(newValue);
  };

  useEffect(() => {
    dispatch(listOrder('', orderType, ''));
  }, [dispatch, orderType]);

  return (
    <>
      <CompNavLanding />
      <Box>
        {mobile ? (
          <>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px',
              }}
            >
              {orderType === 'nacional' ? (
                <h2>Envíos nacionales</h2>
              ) : (
                <h2>Envíos internacionales</h2>
              )}
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
                  value="nacional"
                  onClick={() => {
                    setOrderType('nacional');
                    handleClose();
                  }}
                  style={{
                    fontWeight: 500,
                    color:
                      orderType === 'nacional'
                        ? Colors.primary.main
                        : '',
                  }}
                >
                  Envíos nacionales
                </MenuItem>
                <MenuItem
                  name="Asignado"
                  value="internacional"
                  onClick={() => {
                    setOrderType('internacional');
                    handleClose();
                  }}
                  style={{
                    fontWeight: 500,
                    color:
                      orderType === 'internacional'
                        ? Colors.primary.main
                        : '',
                  }}
                >
                  Envíos internacionales
                </MenuItem>
              </Menu>
            </Box>
            <Box
              style={{
                display: 'grid',
                width: '100%',
                gap: '10px',
                gridTemplateColumns: 'repeat(2, 1fr)',
                padding: '20px',
              }}
            >
              {ordersLoading ? (
                <Box
                  style={{
                    display: 'flex',
                    height: '80vh',
                    width: '90vw',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Loading color="#333" />
                </Box>
              ) : (
                orders?.map((item) => (
                  <Box
                    key={item.id}
                    style={{
                      gap: '5px',
                      display: 'flex',
                      width: '152px',
                      heigth: '307px',
                      flexDirection: 'column',
                      justyfyContent: 'center',
                    }}
                  >
                    <img
                      style={{ height: 200, width: '100%' }}
                      src={
                        item.package?.image1
                          ? `http://localhost:3000/api/${item.package?.image1}`
                          : ''
                      }
                    />
                    <p>{`#${item.id}`}</p>
                    <span style={{ fontWeight: 600 }}>
                      {' '}
                      Valor ofertado:{' '}
                      <p style={{ fontWeight: 400 }}>
                        {' '}
                        {item.package?.offered_price}
                      </p>
                    </span>
                    <p> {item.package?.product_name}</p>
                    <p> {item.package?.weight}</p>
                    <p>{`Tipo de carga: ${item.package?.type}`}</p>
                  </Box>
                ))
              )}
            </Box>
          </>
        ) : (
          <Box sx={{ width: '90%', margin: '30px auto' }}>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Tabs
                variant="secondary"
                value={orderType}
                onChange={handleChange}
                aria-label="envios tabs"
              >
                <Tab
                  value="nacional"
                  label={
                    <Box
                      display={'flex'}
                      justifyContent={'space-around'}
                      alignItems="center"
                    >
                      <Typography
                        variant="p"
                        marginLeft={1}
                        textTransform={'none'}
                      >
                        Envios nacionales
                      </Typography>
                    </Box>
                  }
                  color="secondary"
                />

                <Tab
                  value="internacional"
                  label={
                    <Box
                      display={'flex'}
                      justifyContent={'space-around'}
                      alignItems="center"
                    >
                      <Typography
                        variant="p"
                        marginLeft={1}
                        textTransform={'none'}
                      >
                        Envios internacionales
                      </Typography>
                    </Box>
                  }
                  color="secondary"
                />
              </Tabs>
            </Box>
            {ordersLoading ? (
              <Box
                style={{
                  display: 'flex',
                  height: '80vh',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Loading color="#333" />
              </Box>
            ) : (
              <>
                <h1
                  style={{
                    color: '#1A1A21',
                    margin: '20px 0px',
                    fontFamily: 'Montserrat',
                    fontSize: '24px',
                    fontWeight: 600,
                    lineHeight: '28.8px',
                    letterSpacing: '-0.02em',
                    textAlign: 'left',
                  }}
                >
                  Recientes
                </h1>
                <Grid container spacing={3}>
                  {orders?.map((item) => (
                    <Grid
                      item
                      xs={6}
                      sm={4}
                      md={3}
                      lg={2.4}
                      key={item.id}
                    >
                      <MarketplaceCard
                        image={
                          item.package?.image1
                            ? `http://localhost:3000/api/${item.package?.image1}`
                            : ''
                        }
                        title={item.package?.product_name}
                        weight={item.package?.weight}
                        price={item.package?.offered_price}
                        typeCharge={item.package?.type}
                        id={item.id}
                      ></MarketplaceCard>
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
          </Box>
        )}
        {mobile && (
          <Box
            style={{
              display: 'flex',
              alignItems: 'right',
              justifyContent: 'right',
              padding: '10px',
              cursor: 'pointer',
            }}
          >
            <img src="/imgShipments/QuestionIcon.svg" />
          </Box>
        )}
      </Box>
    </>
  );
}
