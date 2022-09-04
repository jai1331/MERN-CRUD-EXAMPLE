import React from "react";
import { useNavigate } from "react-router-dom";

function HOCForRouterProps({ Component }) {
  const navigate = useNavigate();
  return <Component navigate={navigate} />;
}

export default HOCForRouterProps;