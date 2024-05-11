import React from "react";
import CompLogin from "../Components/Login/CompLogin";
import CompForgotPassword from "../Components/ForgotPassword/CompForgotPassword";
import CompVerificationCode from "../Components/VerificationCode/CompVerificationCode";

const PageLogin = () => {
  return (
    <div>
      {/* <CompLogin /> */}
      {/* <CompForgotPassword /> */}
      <CompVerificationCode />
    </div>
  );
};

export default PageLogin;
