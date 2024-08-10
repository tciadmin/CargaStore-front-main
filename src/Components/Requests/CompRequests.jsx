import { Box, useMediaQuery, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../Utils/Colors';
import Loading from '../Loading/Loading';
import { pageInfo } from '../../Redux/Actions/UserActions/pageInfo';

export const CompRequests = () => {
  const mobile = useMediaQuery('(max-width:720px)');
  const dispatch = useDispatch();
  const { pageInfoLoading, pageData } = useSelector(
    (state) => state.pageInfo
  );
  useEffect(() => {
    dispatch(pageInfo());
  }, [dispatch]);
  return (
    <>
      {pageInfoLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems={mobile ? '' : 'center'}
          minHeight="100vh"
          minWidth={mobile ? '100vw' : '60vw'}
        >
          <Loading color="#333" />
        </Box>
      ) : (
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={mobile ? 6 : 4}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <img
                  src="/imgControlPanel/NotAssignedTrips.svg"
                  style={{ maxWidth: '150px', width: '100%' }}
                />
                <p
                  style={{
                    fontSize: '45px',
                    color: Colors.primary.main,
                  }}
                >
                  {pageData?.viajesSinAsignar}
                </p>
                <p>Viajes sin asignar</p>
              </Box>
            </Grid>
            <Grid item xs={mobile ? 6 : 4}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <img
                  src="/imgControlPanel/ActiveTrips.svg"
                  style={{ maxWidth: '150px', width: '100%' }}
                />
                <p
                  style={{
                    fontSize: '45px',
                    color: Colors.primary.main,
                  }}
                >
                  {pageData?.viajesActivos}
                </p>
                <p>Viajes activos</p>
              </Box>
            </Grid>

            <Grid item xs={mobile ? 6 : 4}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <img
                  src="/imgControlPanel/FinishedTrips.svg"
                  style={{ maxWidth: '150px', width: '100%' }}
                />
                <p
                  style={{
                    fontSize: '45px',
                    color: Colors.primary.main,
                  }}
                >
                  {pageData?.viajesFinalizados}
                </p>
                <p>Viajes finalizados</p>
              </Box>
            </Grid>

            <Grid item xs={mobile ? 6 : 4}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <img
                  src="/imgControlPanel/TripRequest.svg"
                  style={{ maxWidth: '150px', width: '100%' }}
                />
                <p
                  style={{
                    fontSize: '45px',
                    color: Colors.primary.main,
                  }}
                >
                  {pageData?.solicitudesDeViaje}
                </p>
                <p>Solicitudes de viaje</p>
              </Box>
            </Grid>

            <Grid item xs={mobile ? 6 : 4}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <img
                  src="/imgControlPanel/ActiveMembers.svg"
                  style={{ maxWidth: '150px', width: '100%' }}
                />
                <p
                  style={{
                    fontSize: '45px',
                    color: Colors.primary.main,
                  }}
                >
                  {pageData?.sociosActivos}
                </p>
                <p>Socios activos</p>
              </Box>
            </Grid>

            <Grid item xs={mobile ? 6 : 4}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <img
                  src="/imgControlPanel/RegisteredTrucks.svg"
                  style={{ maxWidth: '150px', width: '100%' }}
                />
                <p
                  style={{
                    fontSize: '45px',
                    color: Colors.primary.main,
                  }}
                >
                  {pageData?.camionesRegistrados}
                </p>
                <p>Camiones registrados</p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};
