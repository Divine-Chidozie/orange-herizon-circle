import { Link } from "react-router-dom";
import eventconnect from "../../assets/logos/eventconnect.svg";
import accountcreated from "../../assets/icons/accountcreated.png";

export default function AccountCreated() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-light-blue px-6 py-10">
      {/* Logo */}
      <div className="mb-6">
        <img src={eventconnect} alt="EventConnect Logo" className="w-40" />
      </div>

      {/* Success Content */}
      <div className="flex max-w-md flex-col items-center text-center">
        <img
          src={accountcreated}
          alt="Account Created Successfully"
          className="mb-4 h-16 w-16"
        />

        <h1 className="text-3xl font-bold text-text">
          Account Created Successfully
        </h1>

        <p className="mt-3 text-base leading-7 text-gray">
          Your account has been created successfully. We've sent a verification
          code to your email address. Please verify your email to activate your
          account.
        </p>

        <Link
          to="/sign-in"
          className="mt-6 rounded-md bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Continue to Sign In
        </Link>
      </div>
    </div>
  );
}
