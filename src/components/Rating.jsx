const Rating = () => {
  const stats = [
    {
      number: "12,000+",
      label: "Active Planners",
    },
    {
      number: "5,400+",
      label: "Verified Vendors",
    },
    {
      number: "38,000+",
      label: "Events Booked",
    },
    {
      number: "4.9/5",
      label: "Average Vendor Rating",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16" id="rating">
      <div className="bg-primary rounded-3xl px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {stat.number}
              </h3>

              <p className="text-sm md:text-base text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rating;
