import { Link } from "react-router-dom";
// import sessionExpiredImage from "../assets/images/session-expired.png"; 

const SessionExpired = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        {/* Image */}
        {/* <img
          src={sessionExpiredImage}
          alt="Session Expired"
          className="mb-8 w-52 sm:w-64 md:w-72"
        /> */}

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Your Session Has Expired
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-sm text-sm leading-6 text-gray sm:text-base">
          For your security, your session has ended. Please sign in to continue.
        </p>

        {/* Button */}
        <Link
          to="/sign-in"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-xs font-medium text-white transition hover:opacity-90"
        >
          Sign In
        </Link>
      </div>
    </section>
  );
};

export default SessionExpired;