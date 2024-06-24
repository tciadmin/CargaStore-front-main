import * as React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../Redux/Actions/UserActions/userActions";
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
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onClick = () => {
    navigate("/login/forgot-password");
  };

  const onClickLogin = (data) => {
    if (user.role === "conductor") {
      dispatch(authUser(data)) &&
        localStorage.setItem(user) &&
        navigate("/marketplace");
    } else if (user.role === "admin") {
      dispatch(authUser(data)) &&
        localStorage.setItem(user) &&
        navigate("/administrador/panel");
    } else {
      dispatch(authUser(data)) &&
        localStorage.setItem(user) &&
        navigate("/shipments");
    }
  };

  const onClickRegister = () => {
    navigate("/register");
  };

  return (
    <Box
      sx={{ display: "flex" }}
      className="loginContainer"
      style={{ overflow: mobile ? "" : "hidden" }}
    >
      <Box className="formContainer">
        <Box className="headerContainer">
          <h1 style={{ fontSize: "1.5rem" }}> Inicia sesión </h1>
          <p
            style={{
              fontWeight: 400,
              color: Colors.secondary.contrastText,
            }}
          >
            Ingresa tus datos para ingresar al portal
          </p>
        </Box>

        <form className="inputContainer" onSubmit={handleSubmit(onClickLogin)}>
          {/* //? --------------------------------------------- EMAIL */}
          <p>Correo electrónico</p>
          <FormControl
            sx={{ m: 1, width: mobile ? "300px" : "350px" }}
            variant="outlined"
          >
            <OutlinedInput
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/,
              })}
              placeholder="emailexample.com"
              style={{ height: mobile ? "40px" : "50px", borderRadius: "8px" }}
              onChange={(e) => setUserPrueba(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <img src="/imgLogin/EmailIcon.svg" />
                </InputAdornment>
              }
            />
            {errors.email && (
              <p style={{ color: "red" }}>Ingrese un email válido</p>
            )}
          </FormControl>
          {/* //? --------------------------------------------- PASSWORD */}
          <p>Contraseña</p>
          <FormControl
            sx={{ m: 1, width: mobile ? "300px" : "350px" }}
            variant="outlined"
          >
            <OutlinedInput
              {...register("password", { required: true })}
              placeholder="Ingresa contraseña"
              type={showPassword ? "text" : "password"}
              style={{ height: mobile ? "40px" : "50px", borderRadius: "8px" }}
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
            {errors.password && (
              <p style={{ color: "red" }}>Este campo es requerido</p>
            )}
          </FormControl>
          <span
            onClick={onClick}
            style={{
              cursor: "pointer",
              fontWeight: 500,
              color: Colors.primary.main,
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
              borderRadius: "8px",
            }}
            type="submit"
          >
            Ingresar
          </Button>
        </form>
        <img style={{ width: "350px" }} src="/imgLogin/Dividers.jpg" />
        <p style={{ fontWeight: 400 }}>
          ¿No tienes una cuenta?{" "}
          <span
            onClick={onClickRegister}
            style={{
              fontWeight: 500,
              color: Colors.primary.main,
              cursor: "pointer",
            }}
          >
            Regístrate
          </span>
        </p>
      </Box>
    </Box>
  );
}
