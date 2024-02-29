import React from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import ProfileIcon from "../../assets/icons/profileIcon";
import PageNotFound from "../ PageNotFound/PageNotFound";

const Dashboard = () => {
  const { state } = useLocation();
  const { formData } = state || {};
  const { email, userName, country, city, avatar, tradingStyle, tradingExp } =
    formData || {};

  if (!formData) {
    return <PageNotFound/>
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="heading">
          <h1>Hi!! {userName}</h1>
          {avatar ? (
            <img src={avatar} alt="profile" width="120"/>
          ) : (
            <ProfileIcon/>
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
