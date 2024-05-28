import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Colors } from "../Utils/Colors";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LayoutAdminPayment() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  const tabNameToIndex = {
    Pendientes: 0,
    Acreditados: 1,
  };

  const handleChange = (event, newValue) => {
    const tabName = event.target.name;
    if (tabName in tabNameToIndex) {
      setValue(tabNameToIndex[tabName]);
    } else {
      setValue(newValue);
    }
  };

  useEffect(() => {
    if (value === 0) {
      navigate("/payment");
    } else {
      navigate("/payment/acredited");
    }
  }, [value]);
  return (
    <Box sx={{ minWidth: "100%", height: "100vh", display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <span
          style={{
            color: Colors.primary.main,
            fontWeight: 600,
            padding: "20px",
          }}
        >
          Pagos
        </span>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              sx={{ textTransform: "none", display: "flex", width: "239px" }}
              label="Pendientes"
              name="Pendientes"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ textTransform: "none" }}
              label="Acreditados"
              name="Acreditados"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
      </Drawer>

      <Outlet />
    </Box>
  );
}
