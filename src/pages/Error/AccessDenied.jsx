import { Link } from "react-router-dom";
import accessdenied from "../../assets/icons/accessdenied.png";

const AccessDenied = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        {/* Image */}
        <img
          src={accessdenied}
          alt="Access Denied"
          className="mb-8  w-32 sm:w-32 md:w-32"
        />

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-500 sm:text-3xl">
          Access Denied
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-sm text-sm leading-6 text-gray sm:text-base">
          For your security, you do not have permission to access this page.
          Please contact the administrator if you believe this is an error.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-medium text-white transition hover:opacity-90"
        >
          Home
        </Link>
      </div>
    </section>
  );
};

export default AccessDenied;
