import businesicon from "../assets/icons/businesicon.png";
import growbusiness from "../assets/images/growbusiness.png";

const benefits = [
  "Reach thousands of active planners",
  "Showcase your portfolio",
  "Get verified to build instant trust",
  "Manage enquiries and bookings in one place",
];

const GrowBusiness = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-20" id="grow-business">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Grow your event business with EventConnect
          </h2>

          <p className="text-gray leading-7 mb-6 max-w-lg">
            Join a marketplace built to help talented vendors get discovered,
            booked, and reviewed by planners who are ready to hire.
          </p>

          {/* Benefits */}
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <img
                  src={businesicon}
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5 flex-shrink-0"
                />

                <span className="text-base">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-lg font-medium transition hover:opacity-90">
              Become a Vendor
            </button>

            <button className="w-full sm:w-auto px-6 py-3 border border-primary rounded-lg font-medium transition hover:bg-primary hover:text-white">
              See how it works
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={growbusiness}
            alt="Vendor using EventConnect"
            className="w-full md:w-[80%] lg:w-[420px] xl:w-[480px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default GrowBusiness;
