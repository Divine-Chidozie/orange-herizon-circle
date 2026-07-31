import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const BASE_URL = "https://horizon-circle.onrender.com";
import eventconnect from "../../assets/logos/eventconnect.svg";
// import google from "../../assets/logos/google.svg";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleForm(e) {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    setLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL}/api/auth/login`,
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const token = response.data.token;

      const user = response.data.data || response.data.user || response.data;

      // ==========================================
      // Debug: Check what the backend is returning
      // ==========================================
      console.log("Login Response:", response.data);
      console.log("User:", user);
      console.log("Role:", user.role);

      if (token) {
        localStorage.setItem("token", token);
      }

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      const role = user.role?.toUpperCase();

      if (role === "ORGANIZER" || role === "PLANNER") {
        navigate("/planner/dashboard");
      } else if (role === "VENDOR") {
        navigate("/vendor/dashboard");
      } else {
        console.log("Unknown Role:", role);
        navigate("/");
      }
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
          <h1 className="text-3xl font-bold text-text">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray">
            Sign in to continue managing your events
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleForm} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-black"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="w-full rounded-md border border-border bg-white px-4 py-2 text-sm placeholder:text-sm placeholder:text-gray-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
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
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="w-full rounded-md border border-border bg-white px-4 py-2 text-sm placeholder:text-sm placeholder:text-gray-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-primary">
              <input type="checkbox" className="h-4 w-4 accent-primary" />
              Remember Me
            </label>

            <a
              href="#"
              className="text-sm text-primary transition-colors duration-200 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer rounded-md bg-primary py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <hr className="flex-1 border-border" />
            <span className="text-sm text-gray">or</span>
            <hr className="flex-1 border-border" />
          </div>

          {/* Google Sign In */}
          {/* <button
            type="button"
            aria-label="Continue with Google"
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-md border border-border bg-white py-3 text-sm font-medium text-gray transition-all duration-200 hover:border-primary hover:bg-gray-50"
          >
            <img src={google} alt="Google" className="h-5 w-5" />
            Continue with Google
          </button> */}

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="font-semibold text-primary hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
