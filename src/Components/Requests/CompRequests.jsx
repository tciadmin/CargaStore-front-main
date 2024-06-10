import { Stack, Box, useMediaQuery } from "@mui/material";
import Frame from "../../assets/Icons/Frame.png";
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
        marginLeft: mobile ? "" : "150px",
      }}
    >
      <Stack
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 50,
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/imgControlPanel/NotAssignedTrips.svg" />
          <p style={{ fontSize: "3rem", color: Colors.primary.main }}>3</p>
          <p>Viajes sin asignar</p>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/imgControlPanel/ActiveTrips.svg" />
          <p style={{ fontSize: "3rem", color: Colors.primary.main }}>6</p>
          <p>Viajes activos</p>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/imgControlPanel/FinishedTrips.svg" />
          <p style={{ fontSize: "3rem", color: Colors.primary.main }}>113</p>
          <p>Viajes finalizados</p>
        </Box>
      </Stack>
      <Stack
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 50,
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/imgControlPanel/TripRequest.svg" />
          <p style={{ fontSize: "3rem", color: Colors.primary.main }}>26</p>
          <p>Solicitudes de viaje</p>
        </Box>{" "}
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/imgControlPanel/ActiveMembers.svg" />
          <p style={{ fontSize: "3rem", color: Colors.primary.main }}>50</p>
          <p>Socios activos</p>
        </Box>{" "}
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/imgControlPanel/RegisteredTrucks.svg" />
          <p style={{ fontSize: "3rem", color: Colors.primary.main }}>50</p>
          <p>Camiones registrados</p>
        </Box>
        {/* <Stack>
          <img
            style={{ width: "70px", height: "70px", marginLeft: "620px" }}
            src={Frame}
          />
        </Stack> */}
      </Stack>
    </Box>
  );
};
