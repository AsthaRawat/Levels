import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import "./global.css";
import AuthLayout from "./components/layout/AuthLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

interface YourComponentProps {
  onNextStep?: () => void;
  // Other props if any
}
const App: React.FC<YourComponentProps> = ({ onNextStep }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogin = () => {
    // Perform authentication logic here (e.g., check credentials against database)
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        {/* <button onClick={handleLogout}>Logout</button> */}
        <Routes>
          <Route path="/" element={<AuthLayout />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/" element={<PrivateRoute
            path="/dashboard"
            element={<Dashboard />}
            isAuthenticated={isAuthenticated}
            redirectTo="/login"
          />}/> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
