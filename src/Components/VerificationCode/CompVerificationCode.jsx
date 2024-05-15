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

export default function CompVerificationCode() {
  const mobile = useMediaQuery("(max-width:720px)");
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/login/forgot-password");
  };

  const goForward = () => {
    navigate("/login/new-password");
  };

  return (
    <Box
      sx={{ display: "flex" }}
      className={mobile ? "" : "loginContainer"}
      style={{ overflow: mobile ? "" : "hidden" }}
    >
      <Box className="formContainer">
        <Box className="headerContainer" style={{ alignItems: "center" }}>
          <h1
            style={{
              fontSize: "1.5rem",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            {" "}
            Te enviamos un código{" "}
          </h1>
          <p
            style={{
              fontWeight: 400,
              color: Colors.secondary.contrastText,
            }}
          >
            Consulta tu correo para obtener tu código de confirmación
          </p>
        </Box>
        <Box className="inputContainer">
          <p>Código de verificación</p>
          <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
            <OutlinedInput
              placeholder="122342445"
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
