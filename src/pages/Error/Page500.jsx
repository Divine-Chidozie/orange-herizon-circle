const Page500 = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
          We're having trouble loading this page right now. Please try again in
          a moment.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-3 py-1.5 !text-[12px] text-white transition hover:opacity-90"
        >
          Try Again
        </button>
      </div>
    </section>
  );
};

export default Page500;
