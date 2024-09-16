import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Grid, useMediaQuery, Menu, MenuItem } from '@mui/material';
import MarketplaceCard from '../Components/cards/MarketplaceCard';
import MobileChargeItemCard from '../Components/cards/MobileChargeItemCard';
import { Colors } from '../Utils/Colors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrder } from '../Redux/Actions/OrderActions/listOrder';
import Loading from '../Components/Loading/Loading';
import ShipmentsMessage from '../Components/Shipments/ShipmentsMessage/ShipmentsMessage';

export default function PageMarketplace() {
  const mobile = useMediaQuery('(max-width:720px)');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const { orders, ordersLoading, message } =
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
    dispatch(listOrder('pendiente', orderType, '', '', ''));
  }, [dispatch, orderType]);

  const urlBack = import.meta.env.VITE_URL_BACKEND;

  return (
    <>
      <Box style={{ marginTop: '64px' }}>
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
                  Envíos nacionales
                </h2>
              ) : (
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
                  Envíos internacionales
                </h2>
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
              ) : message ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems={mobile ? '' : 'center'}
                  minHeight="100vh"
                  minWidth={mobile ? '100vw' : '60vw'}
                >
                  <ShipmentsMessage message={message} />
                </Box>
              ) : (
                <>
                  {mobile ? (
                    <Box
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        placeItems: 'center',
                        gap: '5px',
                        width: '100vw',
                      }}
                    >
                      {orders?.map((item) => (
                        <MobileChargeItemCard
                          key={item?.id}
                          id={item?.id}
                          image={item?.package?.image1}
                          product_name={item?.package?.product_name}
                          country={item?.customer?.country}
                          charge_type={item?.package?.type}
                          driver_name={
                            item?.assignedDriver &&
                            `${item?.assignedDriver?.user?.name} ${item?.assignedDriver?.user?.lastname}`
                          }
                        />
                      ))}
                    </Box>
                  ) : (
                    <>
                      <Grid
                        container
                        spacing={3}
                        style={{ display: 'flex', gap: 30 }}
                      >
                        {orders?.map((item) => (
                          <MarketplaceCard
                            key={item.id}
                            image={
                              item.package?.image1
                                ? `${urlBack}/api/${item.package?.image1}`
                                : ''
                            }
                            title={item.package?.product_name}
                            weight={item.package?.weight}
                            price={item.package?.offered_price}
                            typeCharge={item.package?.type}
                            id={item.id}
                          />
                        ))}
                      </Grid>
                    </>
                  )}
                </>
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
                {message && <ShipmentsMessage message={message} />}
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
                <Grid
                  container
                  spacing={3}
                  style={{ display: 'flex', gap: 30 }}
                >
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
                            ? `${urlBack}/api/${item.package?.image1}`
                            : ''
                        }
                        title={item.package?.product_name}
                        weight={item.package?.weight}
                        price={item.package?.offered_price}
                        typeCharge={item.package?.type}
                        id={item.id}
                      />
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
          </Box>
        )}
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
    </>
  );
}
