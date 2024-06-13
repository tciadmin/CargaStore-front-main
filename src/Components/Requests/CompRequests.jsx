import {  Box, useMediaQuery, Grid } from "@mui/material";
import { Colors } from "../../Utils/Colors";

export const CompRequests = () => {
  const mobile = useMediaQuery("(max-width:720px)");
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        padding: 40,
        
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={mobile ? 6:4}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/imgControlPanel/NotAssignedTrips.svg"  style={{maxWidth: "150px", width: "100%"}}/>
          <p style={{ fontSize: "45px", color: Colors.primary.main }}>3</p>
          <p>Viajes sin asignar</p>
        </Box>
        </Grid>
        <Grid item xs={mobile ? 6:4}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/imgControlPanel/ActiveTrips.svg"  style={{maxWidth: "150px", width: "100%"}}/>
          <p style={{ fontSize: "45px", color: Colors.primary.main }}>6</p>
          <p>Viajes activos</p>
        </Box>
        </Grid>

        <Grid item xs={mobile ? 6:4}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/imgControlPanel/FinishedTrips.svg"  style={{maxWidth: "150px", width: "100%"}}/>
          <p style={{ fontSize: "45px", color: Colors.primary.main }}>113</p>
          <p>Viajes finalizados</p>
        </Box>
        </Grid>

        <Grid item xs={mobile ? 6:4}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/imgControlPanel/TripRequest.svg"  style={{maxWidth: "150px", width: "100%"}}/>
          <p style={{ fontSize: "45px", color: Colors.primary.main }}>26</p>
          <p>Solicitudes de viaje</p>
        </Box>
        </Grid>

        <Grid item xs={mobile ? 6:4}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/imgControlPanel/ActiveMembers.svg"  style={{maxWidth: "150px", width: "100%"}}/>
          <p style={{ fontSize: "45px", color: Colors.primary.main }}>50</p>
          <p>Socios activos</p>
        </Box>
        </Grid>

        <Grid item xs={mobile ? 6:4}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/imgControlPanel/RegisteredTrucks.svg"  style={{maxWidth: "150px", width: "100%"}}/>
          <p style={{ fontSize: "45px", color: Colors.primary.main }}>50</p>
          <p>Camiones registrados</p>
        </Box>
        </Grid>
      </Grid>
   
     
    </Box>
  );
};
