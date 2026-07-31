import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import eventconnect from "../../assets/logos/eventconnect.svg";
// import google from "../../assets/logos/google.svg";

const BASE_URL = "https://horizon-circle.onrender.com";

export default function SignUp() {
  const [accountType, setAccountType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleForm(e) {
    e.preventDefault();

    // ==========================================
    // Validate Account Type
    // ==========================================
    if (!accountType) {
      alert("Please select an account type.");
      return;
    }

    // ==========================================
    // Validate Password Match
    // ==========================================
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // ==========================================
    // Validate Terms & Conditions
    // ==========================================
    if (!termsAccepted) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    // ==========================================
    // User Data
    // ==========================================
    const userData = {
      firstName,
      lastName,
      email,
      password,
      role: accountType,
      termsAccepted,
    };

    setLoading(true);

    try {
      // ==========================================
      // Register User
      // ==========================================
      await axios.post(`${BASE_URL}/api/auth/register`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // ==========================================
      // User now has an account
      // Used by Navbar to show Sign In instead
      // ==========================================
      localStorage.setItem("hasAccount", "true");

      // ==========================================
      // Clear Form
      // ==========================================
      setAccountType("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTermsAccepted(false);

      // ==========================================
      // DO NOT LOGIN HERE
      // Send user to Account Created page
      // ==========================================
      navigate("/account-created");
    } catch (error) {
      if (error.response?.data?.errors?.length) {
        alert(error.response.data.errors[0].msg);
      } else {
        alert(error.response?.data?.message || "Registration failed.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-light-blue px-6 py-10">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img src={eventconnect} alt="EventConnect Logo" className="w-48" />
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-text">Create Account</h1>

          <p className="mt-2 text-sm text-gray">
            Create your EventConnect account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleForm} className="space-y-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="mb-1 block text-sm font-medium text-black"
            >
              First Name
            </label>

            <input
              id="firstName"
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              disabled={loading}
              autoComplete="given-name"
              className="w-full rounded-md border border-border bg-white px-4 py-2 text-sm placeholder:text-gray-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="mb-1 block text-sm font-medium text-black"
            >
              Last Name
            </label>

            <input
              id="lastName"
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              disabled={loading}
              autoComplete="family-name"
              className="w-full rounded-md border border-border bg-white px-4 py-2 text-sm placeholder:text-gray-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-black"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              autoComplete="email"
              className="w-full rounded-md border border-border bg-white px-4 py-2 text-sm placeholder:text-gray-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Account Type */}
          <div>
            <label
              htmlFor="account-type"
              className="mb-1 block text-sm font-medium text-black"
            >
              Account Type
            </label>

            <select
              id="account-type"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              required
              disabled={loading}
              className="w-full rounded-md border border-border bg-white px-4 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              <option value="">Select Account Type</option>
              <option value="ORGANIZER">Planner</option>
              <option value="VENDOR">Vendor</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-black"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              autoComplete="new-password"
              className="w-full rounded-md border border-border bg-white px-4 py-2 text-sm placeholder:text-gray-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm-password"
              className="mb-1 block text-sm font-medium text-black"
            >
              Confirm Password
            </label>

            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={loading}
              autoComplete="new-password"
              className="w-full rounded-md border border-border bg-white px-4 py-2 text-sm placeholder:text-gray-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Terms & Conditions */}
          <div>
            <label className="flex items-start gap-2 text-sm text-gray cursor-pointer">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                disabled={loading}
                className="mt-1 h-4 w-4 accent-primary"
              />

              <span>
                I agree to the{" "}
                <Link
                  to="/terms-and-conditions"
                  className="font-medium text-primary hover:underline"
                >
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy-policy"
                  className="font-medium text-primary hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
          </div>

          {/* Sign Up */}
          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer rounded-md bg-primary py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <hr className="flex-1 border-border" />
            <span className="text-sm text-gray">or</span>
            <hr className="flex-1 border-border" />
          </div>

          {/* Google */}
          {/* <button
            type="button"
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-md border border-border bg-white py-3 text-sm font-medium text-gray transition hover:border-primary hover:bg-gray-50"
          >
            <img src={google} alt="Googale" className="h-5 w-5" />
            Continue with Google
          </button> */}

          {/* Sign In */}
          <p className="text-center text-sm text-gray">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="font-semibold text-primary hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
