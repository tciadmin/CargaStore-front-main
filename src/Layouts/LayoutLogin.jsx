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
          ""
        ) : (
          <Box className="imgContainer">
            <img src="/imgLogin/LoginCamion.jpg" />
          </Box>
        )}

        <Box
          style={{
            width: "100%",
            heigth: "100%",
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
            <Box
              className="arrow"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "left",
              }}
            >
              {mobile ? (
                <img
                  onClick={goBack}
                  src="/imgLogin/GoBackArrow.svg"
                  style={{
                    display: location.pathname !== "/login" ? "flex" : "none",
                    cursor: "pointer",
                    alignItems: "left",
                  }}
                />
              ) : (
                ""
              )}
            </Box>

            <Box className="headerContainer">
              {mobile ? (
                location.pathname.includes("/forgot-password") ? (
                  <img src="/imgLogin/ForgotPassword.jpg" />
                ) : location.pathname === "/login/verification-code" ? (
                  <img src="/imgLogin/VerificationCodeImage.jpg" />
                ) : location.pathname === "/login/new-password" ? (
                  <img src="/imgLogin/NewPasswordImage.jpg" />
                ) : (
                  <img src="/imgLanding/LogoCargaStore.svg" />
                )
              ) : (
                <img src="/imgLanding/LogoCargaStore.svg" />
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
