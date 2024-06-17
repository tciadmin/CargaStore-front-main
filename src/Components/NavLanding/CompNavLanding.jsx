import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//? --------------------------------------------- MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

//? --------------------------------------------- STYLES
import { Colors } from "../../Utils/Colors";
import { Drawer, Grid, List, ListItem, ListItemButton } from "@mui/material";
import { Navigation } from "@mui/icons-material";

export default function CompNavLanding() {
  const mobile = useMediaQuery("(max-width:720px)");
  const [open, setOpen] = useState(false);
  const [userRol, setUserRol]= useState("cliente")
  React.useEffect(()=>{
    if(localStorage.getItem("userPrueba")){
      setUserRol(localStorage.getItem("userPrueba"));
    }else{
      localStorage.setItem("userPrueba","cliente")
    }
  },[])
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const pages = ["Marketplace", "Mis envíos"];

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate("/login");
  };

  const onClickRegister = () => {
    navigate("/register");
  };
  if (location.pathname == '/home/crearEnvios' && mobile
  ) {
    return <></>
  } else if (location.pathname == "/landing" && mobile) {
    return <Stack direction="row" justifyContent={"space-around"} pt={2} width="100vw" position={"absolute"}>
      <img src="/imgLanding/LogoCargaStoreBlanco.png" width={"80px"} height={"40px"} alt="" />

      <Stack spacing={.5} direction="row" >
        <Button
          onClick={onClickLogin}
          variant="terciary"
          style={{
            color: Colors.primary.contrastText
            ,
            borderColor: "inherit",
            fontWeight: 600
          }}
        >
          Inicia sesión
        </Button>
        <Button
          variant="contained"
          style={{
            color: Colors.primary.contrastText,
            backgroundColor: Colors.primary.main,
            fontWeight: 600
          }}
          onClick={() => navigate("/register")}
        >
          Regístrate
        </Button>
      </Stack>

    </Stack>
  } else {
    return (
      <AppBar
        component="nav"
        elevation={0}
        position="sticky"
        sx={{ width: "100%" }}
        style={{
          backgroundColor: Colors.primary.contrastText,
          borderBottom: "1px solid #E4E7EC",

          display: "flex",

          justifyContent: "space-between ",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {mobile && (
            <Box
              display={"inline-block"}
              style={{ width: "30px", cursor: "pointer" }}
              onClick={() => {
                setOpen(true);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="#007C52"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="#007C52"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="#007C52"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Box>
          )}

          <Drawer open={open} onClose={() => setOpen(false)}>
            <Box sx={{ width: 250 }} role="presentation">
              <Stack direction="row" justifyContent={"space-between"} px={2} alignItems={"center"} spacing={2}>
                  <img src="/imgLanding/LogoCargaStore.svg" width={"100px"} />
                  <svg style={{cursor: "pointer"}} onClick={()=>setOpen(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.281 18.2194C19.3507 18.289 19.406 18.3718 19.4437 18.4628C19.4814 18.5539 19.5008 18.6514 19.5008 18.75C19.5008 18.8485 19.4814 18.9461 19.4437 19.0372C19.406 19.1282 19.3507 19.2109 19.281 19.2806C19.2114 19.3503 19.1286 19.4056 19.0376 19.4433C18.9465 19.481 18.849 19.5004 18.7504 19.5004C18.6519 19.5004 18.5543 19.481 18.4632 19.4433C18.3722 19.4056 18.2895 19.3503 18.2198 19.2806L12.0004 13.0603L5.78104 19.2806C5.64031 19.4213 5.44944 19.5004 5.25042 19.5004C5.05139 19.5004 4.86052 19.4213 4.71979 19.2806C4.57906 19.1399 4.5 18.949 4.5 18.75C4.5 18.551 4.57906 18.3601 4.71979 18.2194L10.9401 12L4.71979 5.78061C4.57906 5.63988 4.5 5.44901 4.5 5.24999C4.5 5.05097 4.57906 4.8601 4.71979 4.71936C4.86052 4.57863 5.05139 4.49957 5.25042 4.49957C5.44944 4.49957 5.64031 4.57863 5.78104 4.71936L12.0004 10.9397L18.2198 4.71936C18.3605 4.57863 18.5514 4.49957 18.7504 4.49957C18.9494 4.49957 19.1403 4.57863 19.281 4.71936C19.4218 4.8601 19.5008 5.05097 19.5008 5.24999C19.5008 5.44901 19.4218 5.63988 19.281 5.78061L13.0607 12L19.281 18.2194Z" fill="#343330"/>
</svg>              </Stack>
              <Stack
                display={"flex"}
                height={"90vh"}
                flexDirection={"column"}
                justifyContent={"space-between"}
              >
                <List>
                  {userRol == "cliente" &&
                  [
                    {nombre: "Inicio", ruta: "/shipments"},
                    {nombre: "Pendiente", ruta: "/shipments"},
                    {nombre:"En curso", ruta: "/shipments/assigned"},
                    {nombre:"Asignados", ruta: "/shipments/in-progress"},
                    {nombre:"Finalizados", ruta: "/shipments/finished"},
                  ].map((item, index) => (
                    <ListItem key={item.nombre} onClick={()=>{
                      setOpen(false)
                      navigate(item.ruta)}}disablePadding>
                      <ListItemButton>
                        <Typography
                          variant={"primary"}
                          sx={{ fontWeight: 400 }}
                        >
                          {item.nombre}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  ))
                  
                  }
                  {userRol == "conductor"&&[
                    {nombre: "Mis envíos",ruta: "/shipments"},
                    {nombre:"Marketplace", ruta: "/marketplace"}
                    
                  ].map((item, index) => (
                    <ListItem key={item.nombre} disablePadding>
                      <ListItemButton onClick={()=>navigate(item.ruta)}>
                        <Typography
                          variant={"primary"}
                          sx={{ fontWeight: 400 }}
                        >
                          {item.nombre}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}
                  {userRol == "admin"&&[
                    {nombre :"Inicio", ruta: "/administrador/panel"},
                    {nombre: "Solicitudes de carga", ruta: "/administrador/panel/solicitudes"},
                    {nombre:  "Viajes activos", ruta: "/administrador/panel/viajes-activos"},
                    {nombre:  "Viajes finalizados", ruta: "/administrador/panel/viajes-finalizados"},
                    {nombre:  "Socios Activos", ruta: "/administrador/panel/socios"},
                    {nombre: "Pagos", ruta: "/payment"}
                    
                  ].map((item, index) => (
                    <ListItem key={item.ruta} disablePadding>
                      <ListItemButton onClick={()=>{
                        navigate(item.ruta)
                        setOpen(false)

                        }}>
                        <Typography
                          variant={"primary"}
                          sx={{ fontWeight: 400 }}
                        >
                          {item.nombre}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <List>
                  <ListItem key="about" disablePadding>
                    <ListItemButton>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.125 16.875C13.125 17.0975 13.059 17.315 12.9354 17.5C12.8118 17.685 12.6361 17.8292 12.4305 17.9144C12.225 17.9995 11.9988 18.0218 11.7805 17.9784C11.5623 17.935 11.3618 17.8278 11.2045 17.6705C11.0472 17.5132 10.94 17.3127 10.8966 17.0945C10.8532 16.8762 10.8755 16.65 10.9606 16.4445C11.0458 16.2389 11.19 16.0632 11.375 15.9396C11.56 15.816 11.7775 15.75 12 15.75C12.2984 15.75 12.5845 15.8685 12.7955 16.0795C13.0065 16.2905 13.125 16.5766 13.125 16.875ZM12 6.75C9.93188 6.75 8.25 8.26406 8.25 10.125V10.5C8.25 10.6989 8.32902 10.8897 8.46967 11.0303C8.61033 11.171 8.80109 11.25 9 11.25C9.19892 11.25 9.38968 11.171 9.53033 11.0303C9.67099 10.8897 9.75 10.6989 9.75 10.5V10.125C9.75 9.09375 10.7597 8.25 12 8.25C13.2403 8.25 14.25 9.09375 14.25 10.125C14.25 11.1562 13.2403 12 12 12C11.8011 12 11.6103 12.079 11.4697 12.2197C11.329 12.3603 11.25 12.5511 11.25 12.75V13.5C11.25 13.6989 11.329 13.8897 11.4697 14.0303C11.6103 14.171 11.8011 14.25 12 14.25C12.1989 14.25 12.3897 14.171 12.5303 14.0303C12.671 13.8897 12.75 13.6989 12.75 13.5V13.4325C14.46 13.1184 15.75 11.7544 15.75 10.125C15.75 8.26406 14.0681 6.75 12 6.75ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z"
                          fill="black"
                        />
                      </svg>
                      <Typography
                        ml={1}
                        variant="primary"
                        sx={{ fontWeight: 400 }}
                      >
                        About
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem key="sesion" disablePadding>
                    <ListItemButton>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_453_10035)">
                          <path
                            d="M12 4.5V12"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.5 5.25C18.7575 6.72187 20.25 9.10406 20.25 12C20.25 14.188 19.3808 16.2865 17.8336 17.8336C16.2865 19.3808 14.188 20.25 12 20.25C9.81196 20.25 7.71354 19.3808 6.16637 17.8336C4.61919 16.2865 3.75 14.188 3.75 12C3.75 9.10406 5.2425 6.72187 7.5 5.25"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_453_10035">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <Typography
                        ml={1}
                        variant="primary"
                        sx={{ fontWeight: 400 }}
                        onClick= {()=>navigate("/landing")}
                      >
                        Cerrar sesión
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Stack>
            </Box>
          </Drawer>
          {!mobile && (
            <Stack
              direction="row"
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  marginRight: 2,
                  cursor: "pointer",
                  gap:"50px",
                  display: { xs: "none", sm: "block" },
                }}
                onClick={() => {
                  
                  if (userRol == "admin") {
                    navigate("/administrador/panel");
                  } else if(userRol == "conductor") {
                    navigate("/marketplace");
                  }else{
                    if(location.pathname == "/landing"){
                      navigate("/landing")
                    }else{
                      navigate("/shipments")
                    }
                  }
                }}
              >
                <img src="/imgLanding/LogoCargaStore.svg" style={{marginRight: "40px"}} />
              </Typography>
              {!mobile && location.pathname != "/landing" && (
                <>
                  {userRol  !== "cliente"
                    &&
                    <Typography marginRight={"40px"}
                      fontSize={"16px"}
                      sx={{ cursor: "pointer" }}
                      onClick={() => navigate(userRol == "admin" ? "/administrador/panel":"/marketplace")}
                      cursor="pointer"
                      color={
                        (userRol == "admin" && location.pathname.startsWith("/administrador/panel") ) || 
                        (userRol == "conductor" && location.pathname == "/marketplace" )
                          ? "primary"
                          : "secondary"
                      }
                    >
                      {userRol == "admin" ? "Panel de control" : "Marketplace"}
                    </Typography>
                  }
                  <Typography mr={"30px"}
                    fontSize={"16px"}
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate(userRol == "admin"? "/payment" :"/shipments")}
                    color={
                      (userRol == "admin" && location.pathname.startsWith("/payment") ) || 
                        ((userRol == "conductor" || userRol == "cliente") && location.pathname.startsWith("/shipments") )
                        ? "primary"
                        : "secondary"
                    }
                  >
                    {userRol == "admin" ? "Pagos" : "Mis envios"}
                  </Typography>
                </>
              )}
            </Stack>
          )}
          {!mobile && location.pathname == "/landing" && (
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
                onClick={onClickRegister}
              >
                Regístrate
              </Button>
            </Stack>
          )}

          {location.pathname != "/landing" && (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              alignSelf="flex-end"
              sx={{ flexGrow: 0 }}
            >
              <Tooltip title="Messages" sx={{ pr: 2 }}>
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.1011 2.86825C19.721 2.71873 17.9815 2.71874 15.7624 2.71875H13.2363C11.0172 2.71874 9.27767 2.71873 7.89759 2.86825C6.48923 3.02084 5.34811 3.33781 4.3738 4.04568C3.78396 4.47423 3.26524 4.99294 2.8367 5.58278C2.64133 5.85168 2.47403 6.13569 2.33128 6.43796C1.89412 7.36363 1.69912 8.43703 1.60409 9.71703C1.50976 10.9877 1.50976 12.5452 1.50977 14.4656V14.5547C1.50976 16.7738 1.50975 18.5133 1.65927 19.8934C1.81186 21.3018 2.12882 22.4429 2.8367 23.4172C3.26524 24.0071 3.78396 24.5258 4.3738 24.9543C5.34811 25.6622 6.48923 25.9792 7.89759 26.1317C9.27765 26.2813 11.0171 26.2813 13.2362 26.2812H15.7624C17.9815 26.2813 19.7211 26.2813 21.1011 26.1317C22.5095 25.9792 23.6506 25.6622 24.6249 24.9543C25.2147 24.5258 25.7335 24.0071 26.162 23.4172C26.8699 22.4429 27.1868 21.3018 27.3394 19.8934C27.4889 18.5134 27.4889 16.7739 27.4889 14.5548V14.4648C27.4889 12.5313 27.4889 10.9655 27.3926 9.68968C27.2954 8.40403 27.096 7.32708 26.6487 6.39868C26.51 6.11095 26.3488 5.83992 26.162 5.58278C25.7335 4.99294 25.2147 4.47423 24.6249 4.04568C23.6506 3.33781 22.5095 3.02084 21.1011 2.86825ZM5.43916 5.51203C6.053 5.06605 6.83868 4.80609 8.09282 4.67021C9.36392 4.53249 11.0054 4.53125 13.291 4.53125H15.7077C17.9933 4.53125 19.6348 4.53249 20.9059 4.67021C22.16 4.80609 22.9457 5.06605 23.5595 5.51203C23.9953 5.82863 24.3785 6.21181 24.6952 6.64752L22.4027 8.93998C20.3707 10.972 18.9098 12.4302 17.6498 13.3916C16.4106 14.337 15.4728 14.7162 14.4993 14.7162C13.5259 14.7162 12.5881 14.337 11.3489 13.3916C10.0889 12.4302 8.62796 10.972 6.59596 8.93998L4.3035 6.64752C4.62016 6.21181 5.0034 5.82863 5.43916 5.51203ZM25.4194 8.48658C25.4924 8.87352 25.5466 9.31493 25.5852 9.82622C25.6758 11.026 25.6764 12.5242 25.6764 14.5C25.6764 16.7857 25.6752 18.4271 25.5375 19.6982C25.4016 20.9523 25.1416 21.738 24.6957 22.3519C24.3789 22.7878 23.9955 23.1712 23.5595 23.488C22.9457 23.934 22.16 24.1939 20.9059 24.3298C19.6348 24.4675 17.9933 24.4688 15.7077 24.4688H13.291C11.0054 24.4688 9.36392 24.4675 8.09282 24.3298C6.83868 24.1939 6.053 23.934 5.43916 23.488C5.00319 23.1712 4.61979 22.7878 4.30304 22.3519C3.85706 21.738 3.5971 20.9523 3.46123 19.6982C3.32351 18.4271 3.32227 16.7857 3.32227 14.5C3.32227 12.5382 3.32283 11.0471 3.41162 9.85123C3.45036 9.32935 3.5051 8.87987 3.57929 8.48658L5.36335 10.2706C7.33568 12.243 8.88135 13.7887 10.2495 14.8325C11.6499 15.901 12.9703 16.5287 14.4993 16.5287C16.0284 16.5287 17.3488 15.901 18.7492 14.8325C20.1173 13.7887 21.663 12.243 23.6353 10.2707L25.4194 8.48658Z"
                    fill="#007C52"
                  />
                </svg>
              </Tooltip>
              <Tooltip title="Notifications" sx={{ pr: 1 }}>
                <svg
                  width="29"
                  height="29"
                  style={{ marginLeft: "10px" }}
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4131 1.5105C9.31016 1.5105 6.13565 5.10653 6.64456 9.17781L6.74045 9.94492C6.88076 11.0674 6.47074 12.1886 5.63939 12.9558C3.91669 14.5454 3.43808 17.0756 4.46112 19.1847L4.586 19.4422C5.53958 21.408 7.53248 22.6563 9.71743 22.6563H19.6509C21.5356 22.6563 23.2896 21.6935 24.3015 20.1035C25.7299 17.8591 25.3516 14.9148 23.4022 13.1044L23.3492 13.0552C22.4568 12.2264 22.0174 11.019 22.1685 9.81055L22.2466 9.18593C22.756 5.11034 19.5781 1.5105 15.4708 1.5105H13.4131ZM8.44306 8.953C8.06938 5.96351 10.4004 3.323 13.4131 3.323H15.4708C18.4879 3.323 20.8223 5.96732 20.448 8.96111L20.37 9.58574C20.1466 11.3726 20.7963 13.1579 22.1158 14.3833L22.1688 14.4325C23.4773 15.6477 23.7312 17.6239 22.7724 19.1304C22.0932 20.1976 20.9159 20.8438 19.6509 20.8438H9.71743C8.22686 20.8438 6.8673 19.9922 6.21677 18.6511L6.09189 18.3937C5.41754 17.0035 5.73303 15.3356 6.86857 14.2878C8.12978 13.124 8.75181 11.423 8.53895 9.72011L8.44306 8.953Z"
                    fill="#007C52"
                  />
                  <path
                    d="M11.8223 24.8313C11.5219 24.4309 10.9539 24.3498 10.5535 24.6501C10.1531 24.9504 10.0719 25.5184 10.3723 25.9188L10.7348 26.4022C12.7285 29.0605 16.716 29.0605 18.7098 26.4022L19.0723 25.9188C19.3726 25.5184 19.2914 24.9504 18.891 24.6501C18.4906 24.3498 17.9226 24.4309 17.6223 24.8313L17.2598 25.3147C15.991 27.0063 13.4535 27.0063 12.1848 25.3147L11.8223 24.8313Z"
                    fill="#007C52"
                  />
                </svg>
              </Tooltip>

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ pr: 1 }}>
                  <Avatar alt="Remy Sharp" src="perfil.webp" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key={453} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate(userRol == "admin"?"/administrador/perfil":"/perfil")}
                  >
                    Ajustes del perfil
                  </Typography>
                </MenuItem>
                <MenuItem key={464} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate("/landing")}
                  >
                    Cerrar sesión
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}
