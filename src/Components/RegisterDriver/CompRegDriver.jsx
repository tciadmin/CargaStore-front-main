import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../../Redux/Actions/UserActions/userActions";
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

export default function CompRegDriver() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mobile = useMediaQuery("(max-width:720px)");

  const [driver, setDriver] = React.useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onClick = () => {
    dispatch(postUser(driver)) && navigate("/register/driver/vehicle-info");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setDriver({ ...driver, [name]: value });
  };

  return (
    <Box className="registerContainer">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            border: mobile ? "none" : "1px solid rgb(102, 113, 133, 0.3)",
            borderRadius: "8px",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "1.5rem" }}>
            {" "}
            Registro de socios conductores{" "}
          </h1>
          <p
            style={{
              fontWeight: 400,
              color: Colors.secondary.contrastText,
            }}
          >
            Datos personales
          </p>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* //? --------------------------------------------- NAME */}
            <span style={{ display: "flex", width: "100%" }}>
              Nombre<p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                value={driver.name}
                name="name"
                onChange={onChange}
                placeholder="Ingrese nombre"
                style={{
                  borderRadius: "8px",
                  height: "40px",
                  width: 400,
                }}
              />
            </FormControl>
            {/* //? --------------------------------------------- LAST NAME */}
            <span style={{ display: "flex", width: "100%" }}>
              Apellido<p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                name="lastName"
                value={driver.lastName}
                onChange={onChange}
                placeholder="Ingrese apellido"
                style={{ borderRadius: "8px", height: "40px", width: 400 }}
              />
            </FormControl>
            {/* //? --------------------------------------------- EMAIL */}
            <span style={{ display: "flex", width: "100%" }}>
              Correo electrónico<p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                value={driver.email}
                name="email"
                onChange={onChange}
                placeholder="emailexample.com"
                style={{ borderRadius: "8px", height: "40px", width: 400 }}
              />
            </FormControl>
            {/* //? --------------------------------------------- PASSWORD */}
            <span style={{ display: "flex", width: "100%" }}>
              Crea una contraseña <p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                value={driver.password}
                name="password"
                onChange={onChange}
                placeholder="Máximo 8 carácteres"
                type={showPassword ? "text" : "password"}
                style={{
                  borderRadius: "8px",
                  height: "40px",
                  width: 400,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <img src="/imgLogin/OpenEyeIcon.svg" />
                      ) : (
                        <img src="/imgLogin/EyeIcon.svg" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {/* //? --------------------------------------------- CONFIRM PASSWORD */}
            <span style={{ display: "flex", width: "100%" }}>
              Confirma contraseña <p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                placeholder="Máximo 8 carácteres"
                type={showConfirmPassword ? "text" : "password"}
                style={{ borderRadius: "8px", height: "40px", width: 400 }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? (
                        <img src="/imgLogin/OpenEyeIcon.svg" />
                      ) : (
                        <img src="/imgLogin/EyeIcon.svg" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              onClick={onClick}
              variant="contained"
              sx={{
                m: 1,
                height: "40px",
                width: 400,
              }}
              style={{
                color: Colors.primary.contrastText,
                backgroundColor: Colors.primary.main,
                borderRadius: "8px",
              }}
            >
              Siguiente paso
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
