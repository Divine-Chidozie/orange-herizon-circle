import { Link } from "react-router-dom";
// import serverDelayImage from "../assets/images/server-delay.png";

const ServerDelay = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        {/* Image */}
        {/* <img
          src={serverDelayImage}
          alt="Server Connection Issue"
          className="mb-8 w-52 sm:w-64 md:w-72"
        /> */}

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-500 sm:text-3xl">
          This Is Taking Longer Than Expected
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-sm text-sm leading-6 text-gray sm:text-base">
          We're having trouble connecting to the server. Try again in a moment.
        </p>

        {/* Button */}
        <Link
          to="/sign-in"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-medium text-white transition hover:opacity-90"
        >
          Sign In
        </Link>
      </div>
    </section>
  );
};

export default ServerDelay;
