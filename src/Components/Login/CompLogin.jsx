import * as React from "react";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
//? --------------------------------------------- STYLES
import { Colors } from "../../Utils/Colors";
import "./styles.css";

export default function CompLogin() {
  const mobile = useMediaQuery("(max-width:720px)");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "flex" }} className="loginContainer">
      {mobile ? (
        ""
      ) : (
        <div className="imgContainer">
          <img src="src/assets/imgLanding/LoginCamion.jpg" />
        </div>
      )}

      <div className="formContainer" style={{ width: mobile ? "100%" : "60%" }}>
        <div className="headerContainer">
          <img src="src/assets/imgLanding/LogoCargaStore.svg" />
          <h1> Inicia sesión </h1>
          <p style={{ fontWeight: 400, color: Colors.secondary.contrastText }}>
            Ingresa tus datos para ingresar al portal
          </p>
        </div>

        <div className="inputContainer">
          {/* //? --------------------------------------------- EMAIL */}
          <p>Correo electrónico</p>
          <FormControl
            sx={{ m: 1, width: mobile ? "350px" : "446px" }}
            variant="outlined"
          >
            <OutlinedInput
              endAdornment={
                <InputAdornment position="end">
                  <img src="src/assets/imgLanding/EmailIcon.svg" />
                </InputAdornment>
              }
            />
          </FormControl>
          {/* //? --------------------------------------------- PASSWORD */}
          <p>Contraseña</p>
          <FormControl
            sx={{ m: 1, width: mobile ? "350px" : "446px" }}
            variant="outlined"
          >
            <OutlinedInput
              type={showPassword ? "password" : "text"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <img src="src/assets/imgLanding/EyeIcon.svg" />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <span
            style={{
              fontWeight: 500,
              color: Colors.primary.main,
              padding: "20px",
            }}
          >
            ¿Olvidaste la contraseña?
          </span>
          <Button
            variant="contained"
            sx={{ m: 1, width: mobile ? "350px" : "446px" }}
            style={{
              color: Colors.primary.contrastText,
              backgroundColor: Colors.primary.main,
              padding: 10,
            }}
          >
            Ingresar
          </Button>
        </div>
        <img
          style={{ width: "350px", padding: "10px" }}
          src="src/assets/imgLanding/Dividers.jpg"
        />
        <p tyle={{ fontWeight: 400, padding: "10px" }}>
          ¿No tienes una cuenta?{" "}
          <span
            style={{
              fontWeight: 500,
              color: Colors.primary.main,
            }}
          >
            Regístrate
          </span>
        </p>
      </div>
    </Box>
  );
}
