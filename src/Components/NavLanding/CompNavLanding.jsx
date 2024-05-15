import * as React from "react";
import { useNavigate } from "react-router-dom";
//? --------------------------------------------- MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
//? --------------------------------------------- STYLES
import { Colors } from "../../Utils/Colors";

export default function CompNavLanding() {
  const mobile = useMediaQuery("(max-width:720px)");

  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate("/login");
  };
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
                  ? "src/assets/imgLanding/LogoMobileCargaStore.svg"
                  : "src/assets/imgLanding/LogoCargaStore.svg"
              }
            />
          </Typography>
          <Stack spacing={mobile ? 1 : 2} direction="row">
            <Button
              onClick={onClickLogin}
              variant="outlined"
              style={{
                color: mobile
                  ? Colors.primary.contrastText
                  : Colors.primary.main,
                borderColor: mobile ? "inherit" : Colors.primary.main,
              }}
            >
              Inicia sesión
            </Button>
            <Button
              variant="contained"
              style={{
                color: Colors.primary.contrastText,
                backgroundColor: Colors.primary.main,
              }}
            >
              Regístrate
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
