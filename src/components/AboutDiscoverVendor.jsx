import aboutservicebussinessicon from "../assets/icons/aboutservicebussinessicon.png";
import aboutserviceenglsihicon from "../assets/icons/aboutserviceenglsihicon.png";
import aboutserviceicon from "../assets/icons/aboutserviceicon.png";
import aboutservicelocation from "../assets/icons/aboutservicelocation.png";
import aboutservicetimeicon from "../assets/icons/aboutservicetimeicon.png";
import aboutservicetravelicon from "../assets/icons/aboutservicetravelicon.png";

function AboutDiscoverVendor() {
  const specialty = [
    {
      id: 1,
      img: aboutserviceicon,
      heading: "Primary Specialty",
      description: "Wedding Decoration",
    },
  ];

  const serviceDetails = [
    {
      id: 1,
      img: aboutservicelocation,
      alt: "Service Image",
      location: "Location",
      serviceLocation: "Lekki, Lagos Nigeria",
    },

    {
      id: 2,
      img: aboutservicetravelicon,
      alt: "Service Image",
      location: "Travel availibility",
      serviceLocation: "Travels nationwide",
    },

    {
      id: 3,
      img: aboutservicetimeicon,
      alt: "Service Image",
      location: "Response time",
      serviceLocation: "Usually replies within 2 hours",
    },

    {
      id: 4,
      img: aboutserviceenglsihicon,
      alt: "Service Image",
      location: "Language spoken",
      serviceLocation: "English, Igbo, Yoruba, Pidgin",
    },
  ];

  // const bussinessHours = [
  //   {
  //     id: 1,
  //     img: aboutservicebussinessicon,
  //     heading: " Bussiness Hours",
  //     day: "Monday - Friday",
  //     saturday: "Saturday",
  //     sunday: "Sunday",
  //   },
  // ];
  return (
    <>
      <section className="mt-10 sm:mt-12 lg:mt-16 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
          About
        </h2>

        <div className="space-y-5 text-sm leading-7 text-gray-600 sm:text-base">
          <p>
            <span className="font-semibold text-gray-900">
              Bloom &amp; Co. Events
            </span>{" "}
            is an award-winning decoration and styling studio led by Amara
            Okafor, transforming weddings, milestone celebrations, and corporate
            gatherings into unforgettable experiences across Nigeria.
          </p>

          <p>
            Over the past <span className="font-semibold">9 years</span>, we
            have designed more than{" "}
            <span className="font-semibold">400 successful events</span>,
            specializing in lush floral installations, elegant stage designs,
            and complete venue transformations. Our in-house team handles
            everything from concept development and mood boarding to setup and
            teardown, allowing you to fully enjoy your special day.
          </p>

          <p>
            We are known for our meticulous attention to detail, transparent
            pricing, and calm, responsive communication from the first enquiry
            to the final celebration. Every event is thoughtfully crafted to
            reflect your vision while creating memorable experiences for you and
            your guests.
          </p>
        </div>
      </section>

      {/* Service Section */}
      <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:mt-12 sm:p-6 lg:mt-16 lg:p-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Services
          </h2>

          <p className="mt-1 text-sm text-gray-500">What we offer</p>
        </div>

        {specialty.map((special) => (
          <div
            key={special.id}
            className="flex items-center gap-4 rounded-xl border border-gray-100 p-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <img
                src={special.img}
                alt={special.heading}
                className="h-6 w-6 object-contain"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                {special.heading}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                {special.description}
              </p>
            </div>
          </div>
        ))}

        <div className="mt-5 flex flex-wrap gap-3">
          {[
            "Wedding Decoration",
            "Birthday Decoration",
            "Corporate Events",
            "Stage Design",
            "Floral Decoration",
            "Full Venue Styling",
            "Balloon Installations",
            "Lighting & Draping",
          ].map((service) => (
            <span
              key={service}
              className="rounded-full border border-primary bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition hover:bg-primary hover:text-white"
            >
              {service}
            </span>
          ))}
        </div>
      </section>

      {/* Service Details Section */}
      <section className="mt-10 sm:mt-12 lg:mt-16 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
        <h2 className="mb-4 text-md font-bold text-gray-900 sm:text-md">
          Service Details
        </h2>

        <div className="grid grid-cols-1 gap-4 text-sm leading-5 text-gray-600 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {serviceDetails.map((details) => (
            <div
              key={details.id}
              className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <img
                  src={details.img}
                  alt={details.alt}
                  className="h-5 w-5 object-contain"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-gray-600">
                  {details.location}
                </h3>

                <span className="block text-xs text-gray-900 wrap-break-word">
                  {details.serviceLocation}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bussiness Hour */}

        <div>
          <div className="mt-10 sm:mt-12 lg:mt-16 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <div className="flex gap-2 justify-start items-center">
              <img src={aboutservicebussinessicon} alt="Bussiness Image" />
              <h3 className="font-medium ">Business Hours</h3>
            </div>

            <div className="mt-2 flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray">Monday - Friday</span>
                <span className="text-xs">9:00 AM - 6:00 PM</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray">Saturday</span>
                <span className="text-xs">10:00 AM - 4:00 PM</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray">Sunday</span>
                <span className="text-xs">Booked appointment</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutDiscoverVendor;
