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
import "../Login/styles.css";

export default function CompNewPassword() {
  const mobile = useMediaQuery("(max-width:720px)");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const goBack = () => {
    navigate("/login");
  };

  return (
    <Box
      sx={{ display: "flex" }}
      className={mobile ? "" : "loginContainer"}
      style={{ overflow: mobile ? "" : "hidden" }}
    >
      {mobile ? (
        <img
          onClick={goBack}
          src="src/assets/imgLogin/GoBackArrow.svg"
          style={{
            display: "flex",
            maxHeight: "50px",
            maxWidth: "40px",
            marginLeft: "20px",
            cursor: "pointer",
          }}
        />
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
          marginTop: mobile ? "" : "70px",
        }}
      >
        <div className="headerContainer">
          {mobile ? (
            <img src="src/assets/imgLogin/NewPasswordImage.jpg" />
          ) : (
            <img src="src/assets/imgLanding/LogoCargaStore.svg" />
          )}

          <h1 style={{ fontSize: "1.5rem" }}> Elige una contraseña nueva </h1>
          <p
            style={{
              fontWeight: 400,
              color: Colors.secondary.contrastText,
            }}
          >
            Introduce una contraseña nueva difícil de olvidar
          </p>
        </div>

        <div className="inputContainer">
          {/* //? --------------------------------------------- PASSWORD */}
          <p>Contraseña</p>
          <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              style={{ height: "50px" }}
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
          {/* //? --------------------------------------------- CONFIRM PASSWORD */}
          <p>Confirma contraseña</p>
          <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
            <OutlinedInput
              type={showConfirmPassword ? "text" : "password"}
              style={{ height: "50px" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? (
                      <img src="src/assets/imgLogin/OpenEyeIcon.svg" />
                    ) : (
                      <img src="src/assets/imgLogin/EyeIcon.svg" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            variant="contained"
            sx={{
              m: 1,
              width: "350px",
              height: "40px",
            }}
            style={{
              color: Colors.primary.contrastText,
              backgroundColor: Colors.primary.main,
              padding: 10,
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            Cambiar contraseña
          </Button>
        </div>
      </div>
    </Box>
  );
}
