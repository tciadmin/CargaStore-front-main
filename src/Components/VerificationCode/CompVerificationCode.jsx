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
    navigate("/login/verification-code");
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
          width: mobile ? "80%" : "30%",
          border: mobile ? "" : "1px solid rgb(102, 113, 133, 0.3)",
          marginTop: mobile ? "" : "100px",
          marginLeft: mobile ? "10px" : "50px",
        }}
      >
        <div className="headerContainer" style={{ alignItems: "center" }}>
          {mobile ? (
            <img src="src/assets/imgLogin/VerificationCodeImage.jpg" />
          ) : (
            <img src="src/assets/imgLanding/LogoCargaStore.svg" />
          )}

          <h1
            style={{
              fontSize: "1.5rem",
              marginTop: 10,
              marginBottom: 10,
              textAlign: mobile ? "justify" : "center",
            }}
          >
            {" "}
            Te enviamos un código{" "}
          </h1>
          <p
            style={{
              fontWeight: 400,
              color: Colors.secondary.contrastText,
              textAlign: "left",
            }}
          >
            Consulta tu correo para obtener tu código de confirmación
          </p>
        </div>
        <div className="inputContainer">
          <p>Código de verificación</p>
          <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
            <OutlinedInput style={{ height: "50px" }} />
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
              padding: 10,
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            Siguiente
          </Button>
        </div>
      </div>
    </Box>
  );
}
