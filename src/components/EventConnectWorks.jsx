const EventConnectWorks = () => {
  const features = [
    {
      title: "Search & Shortlist",
      description:
        "Browse categories,filter by budget and location, and save vendors you love",
    },

    {
      title: "Compare & message",
      description:
        "Review portfolios, read verified reviews and message vendors directly to get quotes",
    },

    {
      title: "Book with confidence",
      description:
        "Confirm details, agree on a package and secure your booking through the  platform",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-16" id="how-it-works">
      <div className="flex justify-center items-center mb-8 flex-col gap-2">
        <h2 className="text-2xl -space-x-0.5 font-bold">
          How EventConnect Works
        </h2>
        <p className="max-w-2xl text-gray sm:text-center">
          A simple, transparent process - whether you are planning an event or
          growing your business
        </p>
        <div className="mt-3 flex justify-center items-center gap-4 border border-border rounded-full px-2 py-1">
          <button className="bg-primary text-white text-sm py-1 px-3 border rounded-full">
            For Planners
          </button>
          <button className="text-gray text-sm py-1 px-2">For Vendors</button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="border border-border rounded-xl p-6 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h4 className="text-sm font-normal mb-2">{feature.title}</h4>

            <p className="text-gray text-sm leading-6">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventConnectWorks;
