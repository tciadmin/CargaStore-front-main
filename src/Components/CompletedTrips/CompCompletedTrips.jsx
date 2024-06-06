import {
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
  Box,
} from "@mui/material"
import { useState } from "react"
import Dashboard2 from "../../assets/Dashboard/Dashboard2.png"
import Dashboard3 from "../../assets/Dashboard/Dashboard3.png"
import Dashboard4 from "../../assets/Dashboard/Dashboard4.png"
import Logo from "../../assets/Dashboard/Logo.png"
import CloseIcon from "@mui/icons-material/Close"
import HelpIcon from "@mui/icons-material/Help"
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew"
import MenuIcon from "@mui/icons-material/Menu"

export const CompCompletedTrips = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const listItems = [
    "Inicio",
    "Solicitud de carga",
    "Viajes activos",
    "Viajes finalizados",
    "Socios activos",
    "Pagos",
  ]

  return (
    <div>
      <IconButton
        onClick={toggleDrawer}
        style={open ? {} : { margin: "20px" }}
      >
        {open ? <CloseIcon /> : <MenuIcon sx={{ color: "#007C52" }} />}
      </IconButton>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Drawer
          variant="persistent"
          open={open}
          PaperProps={{
            style: {
              width: "300px",
              marginTop: open ? "0px" : "10px",
              marginBottom: open ? "0px" : "10px",
              backgroundColor: "#F6F6F6",
              border: "1px solid color #F6F6F6",
            },
          }}
        >
          <Box sx={{ margin: 2, display: "flex", flexDirection: "column" }}>
            <IconButton
              onClick={toggleDrawer}
              style={{ marginLeft: "auto" }}
            >
              <CloseIcon />
            </IconButton>
            <img
              style={{ width: "167px", height: "60px" }}
              src={Logo}
              alt="Logo"
            />
            <List sx={{ flexGrow: 1, marginTop: "27px" }}>
              {listItems.map((text, index) => (
                <ListItem
                  button
                  key={index}
                >
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Stack sx={{ marginTop: "350px" }}>
              <ListItem button>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>

                <ListItemText primary="Ayuda" />
              </ListItem>
              <ListItem
                button
                sx={{ marginTop: 2 }}
              >
                <ListItemIcon>
                  <PowerSettingsNewIcon sx={{ color: "#007C52" }} />
                </ListItemIcon>
                <ListItemText primary="Cerrar sesión" />
              </ListItem>
            </Stack>
          </Box>
        </Drawer>
      </div>
      <Stack
        sx={{
          width: { md: "600px", xs: "348px" },
          height: { md: "700px", xs: "522px" },
          marginLeft: { md: "400px", xs: "40px" },
          marginTop: { md: "100px", xs: "70px" },
          //border: "1px solid",
        }}
      >
        <img
          style={{
            width: "90px",
            //height: "80px",
            marginLeft: "224px",
            marginTop: "-120px",
            position: "absolute",
          }}
          src={Dashboard2}
          alt="Dashboard"
        />
        <img
          style={{
            width: "50px",
            //height: "50px",
            marginLeft: "320px",
            marginTop: "-646px",
          }}
          src={Dashboard3}
          alt="Dashboard"
        />
        <img
          style={{
            width: "90px",
            //height: "80px",
            marginLeft: "293px",
            marginTop: "690px",
          }}
          src={Dashboard4}
          alt="Dashboard"
        />
      </Stack>
    </div>
  )
}
