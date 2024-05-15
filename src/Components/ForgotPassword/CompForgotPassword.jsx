import * as React from "react";
import { useNavigate } from "react-router-dom";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
//? --------------------------------------------- STYLES
import { Colors } from "../../Utils/Colors";
import "../Login/styles.css";

export default function CompForgotPassword() {
  const mobile = useMediaQuery("(max-width:720px)");
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/login");
  };

  const goForward = () => {
    navigate("/login/verification-code");
  };

  return (
    <Box
      sx={{ display: "flex" }}
      className={mobile ? "" : "loginContainer"}
      style={{ overflow: mobile ? "" : "hidden" }}
    >
      <Box className="formContainer">
        <Box className="headerContainer" style={{ alignItems: "center" }}>
          <h1 style={{ fontSize: "1.5rem" }}> Olvidé mi contraseña </h1>
          <p
            style={{
              fontWeight: 400,
              color: Colors.secondary.contrastText,
            }}
          >
            Introduce tu correo electrónico para cambiar tu contraseña
          </p>
        </Box>
        <Box className="inputContainer">
          <p>Correo electrónico</p>
          <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
            <OutlinedInput
              placeholder="emailexample.com"
              style={{ height: "50px", borderRadius: "8px" }}
            />
          </FormControl>

          <Button
            onClick={goForward}
            variant="contained"
            sx={{
              m: 1,
              width: "350px",
              height: "40px",
            }}
            style={{
              color: Colors.primary.contrastText,
              backgroundColor: Colors.primary.main,
              borderRadius: "8px",
            }}
          >
            Siguiente
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
