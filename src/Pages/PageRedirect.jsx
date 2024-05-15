import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageRedirect = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/landing");
  });
  return <div>PageRedirect</div>;
};

export default PageRedirect;
