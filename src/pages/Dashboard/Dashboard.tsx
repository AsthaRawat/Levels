import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const { state } = useLocation();
  const { formData } = state || {};
  const {
    name,
    email,
    userName,
    country,
    city,
    avatar,
    tradingStyle,
    tradingExp,
    token
  } = formData || {};

  return (
    <div>
      <p>Hi {userName}</p>
      <p>Email: {email}</p>
     
    </div>
  );
};
export default Dashboard;
