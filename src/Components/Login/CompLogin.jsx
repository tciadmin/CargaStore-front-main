import * as React from "react";
import { useNavigate } from "react-router-dom";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
//? --------------------------------------------- STYLES
import { Colors } from "../../Utils/Colors";
import "./styles.css";

export default function CompLogin() {
  const mobile = useMediaQuery("(max-width:720px)");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onClick = () => {
    // navigate("/login/forgot-password");
  };

  return (
    <Box sx={{ display: "flex" }} className="loginContainer">
      {mobile ? (
        ""
      ) : (
        <div className="imgContainer">
          <img src="src/assets/imgLogin/LoginCamion.jpg" />
        </div>
      )}

      <div
        className="formContainer"
        style={{
          width: mobile ? "100%" : "40%",
          border: mobile ? "" : "1px solid rgb(102, 113, 133, 0.3)",
        }}
      >
        <div className="headerContainer">
          <img src="src/assets/imgLanding/LogoCargaStore.svg" />
          <h1 style={{ fontSize: "1.5rem" }}> Inicia sesión </h1>
          <p
            style={{
              fontWeight: 400,
              color: Colors.secondary.contrastText,
            }}
          >
            Ingresa tus datos para ingresar al portal
          </p>
        </div>

        <div className="inputContainer">
          {/* //? --------------------------------------------- EMAIL */}
          <p>Correo electrónico</p>
          <FormControl
            sx={{ m: 1, width: mobile ? "300px" : "350px" }}
            variant="outlined"
          >
            <OutlinedInput
              style={{ height: mobile ? "40px" : "50px" }}
              endAdornment={
                <InputAdornment position="end">
                  <img src="src/assets/imgLogin/EmailIcon.svg" />
                </InputAdornment>
              }
            />
          </FormControl>
          {/* //? --------------------------------------------- PASSWORD */}
          <p>Contraseña</p>
          <FormControl
            sx={{ m: 1, width: mobile ? "300px" : "350px" }}
            variant="outlined"
          >
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              style={{ height: mobile ? "40px" : "50px" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <img src="src/assets/imgLogin/OpenEyeIcon.svg" />
                    ) : (
                      <img src="src/assets/imgLogin/EyeIcon.svg" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <span
            onClick={onClick}
            style={{
              cursor: "pointer",
              fontWeight: 500,
              color: Colors.primary.main,
              padding: "20px",
            }}
          >
            ¿Olvidaste la contraseña?
          </span>
          <Button
            variant="contained"
            sx={{
              m: 1,
              width: mobile ? "300px" : "350px",
              height: "40px",
            }}
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
          src="src/assets/imgLogin/Dividers.jpg"
        />
        <p style={{ fontWeight: 400, padding: "10px" }}>
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
