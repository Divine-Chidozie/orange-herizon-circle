import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import AccountCreated from "../pages/auth/AccountCreated";
import PlannerDashboard from "../pages/planner/PlannerDashboard";
import VendorDashboard from "../pages/vendor/VendorDashboard";

import Page500 from "../pages/Error/Page500";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/account-created" element={<AccountCreated />} />
        <Route path="/planner/dashboard" element={<PlannerDashboard />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />

        <Route path="/page-500" element={<Page500 />} />
      </Routes>
    </BrowserRouter>
  );
}
