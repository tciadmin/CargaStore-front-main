import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Colors } from "../../Utils/Colors";

const pages = ["Marketplace", "Mis envíos"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar
        position="static"
        background="primary"
        style={{ backgroundColor: Colors.primary.contrastText }}
      >
        <Container maxWidth="xl">
          {/*izquierda    */}
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              color={"secondary"}
              sx={{
                mr: 4,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              <img
                src="/src/assets/imgLanding/LogoCargastore.svg"
                alt="carga store"
              />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="secondary"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              color="secondary"
              sx={{
                mr: 4,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              <img src="cargastore.png" alt="carga store" />
            </Typography>
            {isLogin && (
              <>
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="secondary"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none", mr: 2 },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem
                        key={page}
                        color="secondary"
                        onClick={handleCloseNavMenu}
                      >
                        <Typography
                          color={"secondary"}
                          fontWeight={200}
                          textAlign="center"
                        >
                          {page}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  color="secondary"
                  sx={{
                    mr: 4,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    textDecoration: "none",
                  }}
                >
                  <img src="cargastore.png" alt="carga store" />
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      color="secondary"
                      fontWeight={200}
                      style={{ textTransform: "none", fontWeight: 600 }}
                      sx={{ my: 2, mr: 4, display: "block" }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </>
            )}

            {/*derecha    */}
            {isLogin && (
              <>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ flexGrow: 0 }}
                >
                  <Tooltip title="Messages" sx={{ pr: 2 }}>
                    <EmailOutlinedIcon
                      fontWeight="light"
                      color={"secondary"}
                    ></EmailOutlinedIcon>
                  </Tooltip>
                  <Tooltip title="Notifications" sx={{ pr: 1 }}>
                    <NotificationsNoneOutlinedIcon
                      color={"secondary"}
                    ></NotificationsNoneOutlinedIcon>
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
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </>
            )}
            {/*En caso que no esté logueado */}
            {!isLogin && (
              <>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button variant="outlined" sx={{ mr: 4 }}>
                    Inicia sesión
                  </Button>
                  <Button variant="contained" color="secondary">
                    Regístrate
                  </Button>
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
