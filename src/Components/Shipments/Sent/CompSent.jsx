import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//? --------------------------------------------- MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { Grid } from '@mui/material';
//? --------------------------------------------- STYLES
import { Colors } from '../../../Utils/Colors';
import { listOrder } from '../../../Redux/Actions/OrderActions/listOrder';
import ShipmentsItem from '../ShipmentsItem/ShipmentsItem';
import { clearOrdersList } from '../../../Redux/Actions/OrderActions/clearOrdersList';

export default function CompSent() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      listOrder(
        'finalizado', //status
        '', //orderType
        'cc22b78d-3e0c-4e4b-b040-644e1061184c' //customerId
      )
    );
    return () => {
      dispatch(clearOrdersList());
    };
  }, [dispatch]);
  const mobile = useMediaQuery('(max-width:720px)');
  const order = useSelector((state) => state.orders.orders) || [];

  return (
    <Box style={{ background: '#F6F6F6' }}>
      {order.length === 0 ? (
        <Box
          display="flex"
          flexDirection={'column'}
          alignItems={'center'}
          height="80vh"
          justifyContent={'center'}
        >
          <svg
            width="175"
            height="196"
            viewBox="0 0 175 196"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M87.6444 83.7031L27.0605 102.543L87.6444 121.014L148.782 102.543L87.6444 83.7031Z"
              fill="#DDF4EC"
            />
            <path
              d="M123.583 142.434L88.7754 193.033L149.621 176.05V135.243L123.583 142.434Z"
              fill="#DDF4EC"
            />
            <path
              d="M46.2959 44.0078L57.8692 57.3812"
              stroke="#007C52"
              strokeWidth="1.65451"
              strokeLinecap="round"
            />
            <path
              d="M57.8691 44.0078L46.2959 57.3812"
              stroke="#007C52"
              strokeWidth="1.65451"
              strokeLinecap="round"
            />
            <path
              d="M103.647 28.2061L117.535 44.254"
              stroke="#007C52"
              strokeWidth="1.98539"
              strokeLinecap="round"
            />
            <path
              d="M117.535 28.2061L103.647 44.254"
              stroke="#007C52"
              strokeWidth="1.98539"
              strokeLinecap="round"
            />
            <path
              d="M122.569 171.254L140.076 166.081"
              stroke="#007C52"
              strokeWidth="1.65451"
            />
            <path
              d="M128.2 159.798L140.076 156.589"
              stroke="#007C52"
              strokeWidth="1.65451"
            />
            <path
              d="M87.1572 140.616V133.454"
              stroke="#007C52"
              strokeWidth="2"
            />
            <path
              d="M86.7598 195.127V147.38"
              stroke="#007C52"
              strokeWidth="2"
            />
            <path
              d="M23.8936 134.25V175.63L86.3621 194.331L149.228 175.63V135.243"
              stroke="#007C52"
              strokeWidth="2"
            />
            <path
              d="M86.7598 84.5142V104.01"
              stroke="#007C52"
              strokeWidth="1.65451"
            />
            <path
              d="M107.848 66.6084L87.5557 84.1157L149.228 102.419L166.735 84.1157L107.848 66.6084Z"
              fill="#FDFDFD"
              stroke="#007C52"
              strokeWidth="2"
            />
            <path
              d="M7.18164 84.1155L26.2802 102.419L85.1678 84.1155L66.8649 67.4043L7.18164 84.1155Z"
              fill="#FDFDFD"
              stroke="#007C52"
              strokeWidth="2"
            />
            <path
              d="M148.433 102.816L87.5557 120.722L108.644 145.789L172.306 129.077L148.433 102.816Z"
              fill="#FDFDFD"
              stroke="#007C52"
              strokeWidth="2"
            />
            <path
              d="M25.8826 102.419L2.40723 127.486L64.8758 146.585L86.3617 120.722L25.8826 102.419Z"
              fill="#FDFDFD"
              stroke="#007C52"
              strokeWidth="2"
            />
            <circle
              cx="93.5391"
              cy="6.64361"
              r="5.1562"
              stroke="#007C52"
              strokeWidth="1.65451"
            />
            <circle
              cx="69.1983"
              cy="30.2462"
              r="5.98346"
              fill="#007C52"
            />
            <circle
              cx="141.414"
              cy="52.1436"
              r="4.43559"
              fill="#007C52"
            />
          </svg>

          <Typography
            variant="h4"
            fontSize={mobile ? '16px' : '24px'}
          >
            {' '}
            Aun no tienes envíos finalizados
          </Typography>
        </Box>
      ) : (
        <>
          {mobile ? (
            <>
              <h3
                style={{
                  paddingLeft: '30px',
                }}
              >
                Envíos finalizados
              </h3>
              <Box
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  padding: '20px',
                }}
              >
                {order.map((row) => (
                  <Box
                    key={row.id}
                    style={{
                      padding: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      justyfyContent: 'center',
                      gap: '5px',
                    }}
                  >
                    <img src={row.img} />
                    <p
                      style={{ color: Colors.secondary.contrastText }}
                    >
                      {row.product}
                    </p>
                    <span
                      style={{
                        display: 'flex',
                        gap: '5px',
                        fontWeight: 600,
                      }}
                    >
                      Valor ofertado:{' '}
                      <p style={{ fontWeight: 400 }}> {row.value} </p>
                    </span>
                    <p>{row.retire}</p>
                    <p>Tipo de carga: {row.seca}</p>
                    <p>{row.country}</p>
                    <p style={{ fontWeight: 500 }}>{row.driver}</p>
                  </Box>
                ))}
              </Box>
            </>
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '100vh',
                paddingLeft: '30px',
                justifyContent: 'flex-start',
                backgroundColor: Colors.terciary.contrastText,
              }}
            >
              <Box
                sx={{
                  minWidth: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start  ',
                  padding: 5,
                  height: '20px',
                  backgroundColor: Colors.terciary.contrastText,
                }}
              >
                {/* //? --------------------------------------------- HEAD */}

                <Box
                  style={{
                    display: 'flex',
                    color: Colors.primary.main,
                    minWdth: '100%',
                    alignItems: 'center',
                    backgroundColor: Colors.terciary.contrastText,
                  }}
                >
                  <Box>
                    <Grid
                      justifyContent={'center'}
                      alignItems={'center'}
                      style={{
                        display: 'flex',
                        height: '100%',
                        marginBottom: 20,
                        padding: 5,
                        border: '1px solid',
                        borderColor: Colors.primary.main,
                        backgroundColor: Colors.primary.main,
                        color: Colors.primary.contrastText,
                        fontWeight: 600,
                        textAlign: 'center',
                      }}
                      spacing={0.5}
                    >
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Producto
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Retiro
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Fecha y hora
                        </p>
                      </Grid>

                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Entrega
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            width: '80px',
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Fecha y hora
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Destinatario
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            width: '80px',
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Unidad
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            width: '80px',
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Tipo de carga
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            width: '80px',
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Valor ofertado
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            width: '80px',
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Conductor
                        </p>
                      </Grid>
                    </Grid>
                    {/* //? --------------------------------------------- BODY */}

                    <Box
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                      }}
                    >
                      {order.map((row) => (
                        <ShipmentsItem
                          key={row.id}
                          status={row.status}
                          code={row.id}
                          productName={row.package.product_name}
                          pick_up_address={row.pick_up_address}
                          pick_up_date={row.pick_up_date}
                          pick_up_time={row.pick_up_time}
                          delivery_address={row.delivery_address}
                          delivery_date={row.delivery_date}
                          delivery_time={row.delivery_time}
                          receiving_company={row.receiving_company}
                          assignedDriver={row.assignedDriver}
                          brand={row.assignedDriver?.truck.brand}
                          model={row.assignedDriver?.truck.model}
                          type={row.package.type}
                          price={row.package.offered_price}
                          driverName={
                            row.assignedDriver?.user_driver.name
                          }
                          license={row.assignedDriver?.num_license}
                          rating={row.assignedDriver?.rating}
                          num_plate={
                            row.assignedDriver?.truck.num_plate
                          }
                          charge_capacity={
                            row.assignedDriver?.truck.charge_capacity
                          }
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </>
      )}
    </Box>
  );
}
