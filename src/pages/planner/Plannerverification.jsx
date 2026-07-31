import { Link } from "react-router-dom";
import verificationbadge from "../../assets/icons/verificationbadge.png";

const PlannerVerification = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg sm:p-10">
        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
          <img
            src={verificationbadge}
            alt="Verification Successful"
            className="h-10 w-10 object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-lg font-bold text-text sm:text-2xl">
          Verification Successful!
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm leading-5 text-gray sm:text-sm">
          Congratulations! Your email has been successfully verified. You're now
          ready to discover trusted vendors, connect with event planners, and
          make your event planning experience smooth and successful.
        </p>

        {/* Button */}
        <Link
          to="/planner/dashboard"
          className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700 sm:w-auto"
        >
          Go to My Dashboard
        </Link>
      </div>
    </section>
  );
};

export default PlannerVerification;
