//import { useNavigate } from "react-router-dom"
//? --------------------------------------------- MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
//? --------------------------------------------- STYLES
import { Colors } from "../../Utils/Colors";
import IconMessage from "../../assets/Icons/IconMessage.png";
import Notification from "../../assets/Icons/Notification.png";
import IconAvatar from "../../assets/Icons/IconAvatar.png";

export default function CompNav() {
  const mobile = useMediaQuery("(max-width:720px)");

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        elevation={0}
        position="sticky"
        sx={{ width: "100%" }}
        style={{
          backgroundColor: mobile ? "transparent" : Colors.primary.contrastText,
          paddingLeft: mobile ? "10px" : "20px",
          paddingRight: mobile ? "10px" : "20px",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <img
              src={
                mobile
                  ? "/public/imgLanding/LogoMobileCargaStore.svg"
                  : "/public/imgLanding/LogoCargaStore.svg"
              }
            />
          </Typography>
          <Stack spacing={mobile ? 0.5 : 1} direction="row"></Stack>
          <Stack sx={{ marginRight: "18px" }}>
            <img
              style={{ width: "25px", height: "25px" }}
              src={IconMessage}
              alt="IconMessagge"
            />
          </Stack>
          <Stack sx={{ marginRight: "18px" }}>
            <img
              style={{ width: "29px", height: "29px" }}
              src={Notification}
              alt="IconMessagge"
            />
          </Stack>

          <Stack>
            <img
              style={{
                marginRight: "5px",
                width: "35px",
                height: "35px",
              }}
              src={IconAvatar}
              alt="IconMessagge"
            />
          </Stack>
          <Stack>
            <Typography sx={{ marginLeft: "-1000px", color: "#007C52" }}>
              Mis envíos
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
