import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import AccountCreated from "../pages/auth/AccountCreated";
import PlannerDashboard from "../pages/planner/PlannerDashboard";
import VendorDashboard from "../pages/vendor/VendorDashboard";

import DiscoverVendor from "../pages/planner/DiscoverVendor";

import Page500 from "../pages/error/Page500";
import Offline from "../pages/error/Offline";
import SessionExpired from "../pages/error/SessionExpired";
import AccessDenied from "../pages/error/AccessDenied";
import ServerDelay from "../pages/error/ServerDelay";
import PlannerVerification from "../pages/planner/PlannerVerification";
import VendorVerification from "../pages/vendor/VendorVerification";

import NetworkListener from "../components/NetworkListener";

function AppContent() {
  return (
    <>
      <NetworkListener />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/account-created" element={<AccountCreated />} />
        <Route path="/planner/dashboard" element={<PlannerDashboard />} />

        <Route path="/planner/discover-vendors" element={<DiscoverVendor />} />

        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/page-500" element={<Page500 />} />
        <Route path="/offline" element={<Offline />} />
        <Route path="/session-expired" element={<SessionExpired />} />
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="/server-delay" element={<ServerDelay />} />
        <Route path="/planner-verification" element={<PlannerVerification />} />
        <Route path="/vendor-verification" element={<VendorVerification />} />
      </Routes>
    </>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
