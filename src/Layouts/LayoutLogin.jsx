import * as React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

const LayoutLogin = () => {
  const mobile = useMediaQuery("(max-width:720px)");
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    if (
      location.pathname === "/login/forgot-password" ||
      location.pathname === "/login/new-password"
    ) {
      navigate("/login");
    } else if (location.pathname === "/login/verification-code") {
      navigate("/login/forgot-password");
    }
  };

  return (
    <Box>
      <Box
        sx={{ display: "flex" }}
        className="loginContainer"
        style={{
          height: "100vh",
          overflow: mobile ? "" : "hidden",
        }}
      >
        {mobile ? (
          <img
            onClick={goBack}
            src="/src/assets/imgLogin/GoBackArrow.svg"
            style={{
              display: location.pathname !== "/login" ? "" : "none",
              maxHeight: "20px",
              maxWidth: "20px",
              marginLeft: "10px",
              marginTop: "10px",
              cursor: "pointer",
              top: "0",
              right: 0,
            }}
          />
        ) : (
          <Box className="imgContainer">
            <img src="/src/assets/imgLogin/LoginCamion.jpg" />
          </Box>
        )}

        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box
            className="formContainer"
            style={{
              border: mobile ? "" : "1px solid rgb(102, 113, 133, 0.3)",
              padding: mobile ? "" : "30px 50px",
            }}
          >
            <Box className="headerContainer">
              {mobile ? (
                location.pathname.includes("/forgot-password") ? (
                  <img src="/src/assets/imgLogin/ForgotPassword.jpg" />
                ) : location.pathname === "/login/verification-code" ? (
                  <img src="/src/assets/imgLogin/VerificationCodeImage.jpg" />
                ) : location.pathname === "/login/new-password" ? (
                  <img src="/src/assets/imgLogin/NewPasswordImage.jpg" />
                ) : (
                  <img src="/src/assets/imgLanding/LogoCargaStore.svg" />
                )
              ) : (
                <img src="/src/assets/imgLanding/LogoCargaStore.svg" />
              )}
            </Box>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default LayoutLogin;
