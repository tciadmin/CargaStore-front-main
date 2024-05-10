import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const PageRedirect = () => {
  const Navigate = useNavigate()
  useEffect(()=> {
    Navigate("/landing")

  },[])

  return <div>PageRedirect</div>;
};

export default PageRedirect;
