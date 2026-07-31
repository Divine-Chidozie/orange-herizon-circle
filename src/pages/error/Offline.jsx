import { useState } from "react";
import { useNavigate } from "react-router-dom";
import offlineoninternet from "../../assets/icons/offlineoninternet.png";

const Offline = () => {
  const [isChecking, setIsChecking] = useState(false);
  const navigate = useNavigate();

  const handleRetry = () => {
    setIsChecking(true);

    if (navigator.onLine) {
      navigate("/", { replace: true });
    } else {
      setTimeout(() => {
        setIsChecking(false);
      }, 500);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <img
          src={offlineoninternet}
          alt="Offline"
          className="mb-8 w-32 sm:w-32 md:w-32"
        />

        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          You're Offline
        </h1>

        <p className="mt-4 max-w-sm text-sm leading-6 text-gray sm:text-base">
          It looks like you are not connected to the internet. Check your
          connection and try again.
        </p>

        <button
          onClick={handleRetry}
          disabled={isChecking}
          className="mt-8 rounded-full bg-primary px-5 py-2 text-xs font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isChecking ? "Checking..." : "Try Again"}
        </button>
      </div>
    </section>
  );
};

export default Offline;
