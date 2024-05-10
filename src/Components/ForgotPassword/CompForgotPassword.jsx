import * as React from "react";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
//? --------------------------------------------- STYLES
import { Colors } from "../../Utils/Colors";

export default function CompForgotPassword() {
  const mobile = useMediaQuery("(max-width:720px)");

  return (
    <Box sx={{ display: "flex" }} className="loginContainer">
      {mobile ? (
        ""
      ) : (
        <div className="imgContainer">
          <img src="src/assets/imgLogin/LoginCamion.jpg" />
        </div>
      )}

      <div className="formContainer" style={{ width: mobile ? "100%" : "60%" }}>
        <div className="headerContainer">
          <img src="src/assets/imgLanding/LogoCargaStore.svg" />
          <h1> Olvidé mi contraseña </h1>
          <p style={{ fontWeight: 400, color: Colors.secondary.contrastText }}>
            Introduce tu correo electrónico para cambiar tu contraseña
          </p>
        </div>

        <div className="inputContainer">
          <p>Correo electrónico</p>
          <FormControl
            sx={{ m: 1, width: mobile ? "350px" : "446px" }}
            variant="outlined"
          >
            <OutlinedInput />
          </FormControl>
          <Button
            variant="contained"
            sx={{ m: 1, width: mobile ? "350px" : "446px" }}
            style={{
              color: Colors.primary.contrastText,
              backgroundColor: Colors.primary.main,
              padding: 10,
            }}
          >
            Siguiente
          </Button>
        </div>
      </div>
    </Box>
  );
}
