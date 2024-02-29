import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./route/PrivateRoute";
import TermsAndCondtion from "./pages/TermsAndCondition/TermsAndCondtion";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Login from "./pages/Login/Login";

interface YourComponentProps {
  onNextStep?: () => void;
}
const App: React.FC<YourComponentProps> = ({ onNextStep }) => {

  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<AuthLayout />} />
        <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/terms-condition" element={<TermsAndCondtion />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route element={<PrivateRoute path="/dashboard" element={<Dashboard />} />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
