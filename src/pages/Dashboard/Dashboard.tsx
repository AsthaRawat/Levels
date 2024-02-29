import React from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import ProfileIcon from "../../assets/icons/profileIcon";
import PageNotFound from "../ PageNotFound/PageNotFound";

const Dashboard = () => {
  const { state } = useLocation();
  const { storedData } = state || {};
  let userData;

  if (!storedData || !Array.isArray(storedData) || storedData.length === 0) {
    return <PageNotFound />;
  } else if (storedData.length === 1) {
    userData = storedData[0];
  } else {
    userData = storedData[storedData.length - 1];
  }

  const { email, userName, country, city, avatar, tradingStyle, tradingExp } = userData;

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="heading">
          <h1>Hi!! {userName}</h1>
          {avatar ? (
            <img src={avatar} alt="profile" width="120" />
          ) : (
            <ProfileIcon />
          )}
        </div>
        <div className="dashboard-details">
          <span>Email: {email}</span>
          <span>Country: {country}</span>
          <span>City: {city}</span>
          <span>Trading Style: {tradingStyle?.value}</span>
          <span>Trading Experience: {tradingExp?.value}</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
