import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import AccountCreated from "../pages/auth/AccountCreated";
import PlannerDashboard from "../pages/planner/PlannerDashboard";

// import VendorDashboard from "../pages/vendor/VendorDashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/account-created" element={<AccountCreated />} />

        <Route path="/planner/dashboard" element={<PlannerDashboard />} />

        {/* <Route path="/vendor/dashboard" element={<VendorDashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
