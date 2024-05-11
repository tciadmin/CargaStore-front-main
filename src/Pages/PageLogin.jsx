import React from "react";
import CompLogin from "../Components/Login/CompLogin";
import CompForgotPassword from "../Components/ForgotPassword/CompForgotPassword";
import CompVerificationCode from "../Components/VerificationCode/CompVerificationCode";
import CompNewPassword from "../Components/NewPassword/CompNewPassword";

const PageLogin = () => {
  return (
    <div>
      {/* <CompLogin /> */}
      {/* <CompForgotPassword /> */}
      {/* <CompVerificationCode /> */}
      <CompNewPassword />
    </div>
  );
};

export default PageLogin;
