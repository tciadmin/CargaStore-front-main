import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  recoveryPassword,
  sendEmail,
} from "../../Redux/Actions/PasswordActions/passwordActions";
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
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const goForward = (email) => {
    dispatch(recoveryPassword(email)) &&
      dispatch(sendEmail(email)) &&
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
        <form className="inputContainer" onSubmit={handleSubmit(goForward)}>
          <p>Correo electrónico</p>
          <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
            <OutlinedInput
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/,
              })}
              placeholder="emailexample.com"
              style={{ height: "50px", borderRadius: "8px" }}
            />
            {errors.email && (
              <p style={{ color: "red" }}>Ingrese un email válido</p>
            )}
          </FormControl>

          <Button
            type="submit"
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
        </form>
      </Box>
    </Box>
  );
}
