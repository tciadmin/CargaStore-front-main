import * as React from "react";
import { useState } from "react"
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
import { Drawer, Grid, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function CompNavLanding() {
  const mobile = useMediaQuery("(max-width:720px)");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate("/login");
  };

  const onClickRegister = () => {
    navigate("/register");
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
          {mobile &&
            <Box display={"inline-block"} style={{ width: "30px", cursor: "pointer" }} onClick={() => { setOpen(true) }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="#007C52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 6H21" stroke="#007C52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 18H21" stroke="#007C52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </Box>
          }

          <Drawer open={open} onClose={() => setOpen(false)}>
            <Box sx={{ width: 250 }} role="presentation" >
              <Grid container px={2} spacing={2}>
                <Grid xs={6} mt={2} item>
                  <img src="/src/assets/imgLanding/LogoCargaStore.svg" width={"100px"} />
                </Grid>
                <Grid xs={6} mt={1} sx={{ cursor: "pointer" }} onClick={() => setOpen(false)} textAlign={"end"} item>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.281 18.2194C19.3507 18.289 19.406 18.3718 19.4437 18.4628C19.4814 18.5539 19.5008 18.6514 19.5008 18.75C19.5008 18.8485 19.4814 18.9461 19.4437 19.0372C19.406 19.1282 19.3507 19.2109 19.281 19.2806C19.2114 19.3503 19.1286 19.4056 19.0376 19.4433C18.9465 19.481 18.849 19.5004 18.7504 19.5004C18.6519 19.5004 18.5543 19.481 18.4632 19.4433C18.3722 19.4056 18.2895 19.3503 18.2198 19.2806L12.0004 13.0603L5.78104 19.2806C5.64031 19.4213 5.44944 19.5004 5.25042 19.5004C5.05139 19.5004 4.86052 19.4213 4.71979 19.2806C4.57906 19.1399 4.5 18.949 4.5 18.75C4.5 18.551 4.57906 18.3601 4.71979 18.2194L10.9401 12L4.71979 5.78061C4.57906 5.63988 4.5 5.44901 4.5 5.24999C4.5 5.05097 4.57906 4.8601 4.71979 4.71936C4.86052 4.57863 5.05139 4.49957 5.25042 4.49957C5.44944 4.49957 5.64031 4.57863 5.78104 4.71936L12.0004 10.9397L18.2198 4.71936C18.3605 4.57863 18.5514 4.49957 18.7504 4.49957C18.9494 4.49957 19.1403 4.57863 19.281 4.71936C19.4218 4.8601 19.5008 5.05097 19.5008 5.24999C19.5008 5.44901 19.4218 5.63988 19.281 5.78061L13.0607 12L19.281 18.2194Z" fill="#343330" />
                  </svg>
                </Grid>

              </Grid >
              <Stack display={"flex"} height={"90vh"} flexDirection={"column"} justifyContent={"space-between"}>

                <List>
                  {['Inicio', 'Pendiente', 'En curso', 'Asignados', 'Finalizados'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>

                        <Typography variant={"primary"} sx={{ fontWeight: 400 }}>{text}</Typography>
                      </ListItemButton>
                    </ListItem  >
                  ))}
                </List>
                <List>
                  <ListItem key="about" disablePadding>
                    <ListItemButton>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.125 16.875C13.125 17.0975 13.059 17.315 12.9354 17.5C12.8118 17.685 12.6361 17.8292 12.4305 17.9144C12.225 17.9995 11.9988 18.0218 11.7805 17.9784C11.5623 17.935 11.3618 17.8278 11.2045 17.6705C11.0472 17.5132 10.94 17.3127 10.8966 17.0945C10.8532 16.8762 10.8755 16.65 10.9606 16.4445C11.0458 16.2389 11.19 16.0632 11.375 15.9396C11.56 15.816 11.7775 15.75 12 15.75C12.2984 15.75 12.5845 15.8685 12.7955 16.0795C13.0065 16.2905 13.125 16.5766 13.125 16.875ZM12 6.75C9.93188 6.75 8.25 8.26406 8.25 10.125V10.5C8.25 10.6989 8.32902 10.8897 8.46967 11.0303C8.61033 11.171 8.80109 11.25 9 11.25C9.19892 11.25 9.38968 11.171 9.53033 11.0303C9.67099 10.8897 9.75 10.6989 9.75 10.5V10.125C9.75 9.09375 10.7597 8.25 12 8.25C13.2403 8.25 14.25 9.09375 14.25 10.125C14.25 11.1562 13.2403 12 12 12C11.8011 12 11.6103 12.079 11.4697 12.2197C11.329 12.3603 11.25 12.5511 11.25 12.75V13.5C11.25 13.6989 11.329 13.8897 11.4697 14.0303C11.6103 14.171 11.8011 14.25 12 14.25C12.1989 14.25 12.3897 14.171 12.5303 14.0303C12.671 13.8897 12.75 13.6989 12.75 13.5V13.4325C14.46 13.1184 15.75 11.7544 15.75 10.125C15.75 8.26406 14.0681 6.75 12 6.75ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z" fill="black" />
                      </svg>
                      <Typography ml={1} variant="primary" sx={{ fontWeight: 400 }} >About</Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem key="sesion" disablePadding>
                    <ListItemButton>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_453_10035)">
                          <path d="M12 4.5V12" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M16.5 5.25C18.7575 6.72187 20.25 9.10406 20.25 12C20.25 14.188 19.3808 16.2865 17.8336 17.8336C16.2865 19.3808 14.188 20.25 12 20.25C9.81196 20.25 7.71354 19.3808 6.16637 17.8336C4.61919 16.2865 3.75 14.188 3.75 12C3.75 9.10406 5.2425 6.72187 7.5 5.25" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_453_10035">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <Typography ml={1} variant="primary" sx={{ fontWeight: 400 }} >Cerrar sesión</Typography>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Stack>


            </Box>
          </Drawer>
          {!mobile &&
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
              }}
            >

              <img
                src="/src/assets/imgLanding/LogoCargaStore.svg"

              />
            </Typography>
          }
          {!mobile &&
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
          }

        </Toolbar>
      </AppBar>
    </Box>
  );
}
