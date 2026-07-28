import { Link } from "react-router-dom";

import chefkoladecatering from "../assets/images/chefkoladecatering.png";
import luminarystudios2 from "../assets/images/luminarystudios2.png";
import bloombliss from "../assets/images/bloombliss.png";
import goldentouch from "../assets/images/goldentouch.png";

import plannerlocation from "../assets/icons/plannerlocation.png";
import plannerstar from "../assets/icons/plannerstar.png";

function PlannerFeaturePortfolio() {
  const featurePortfolio = [
    {
      id: 1,
      img: chefkoladecatering,
      heading: "Chef Kolade Catering",
      locationIcon: plannerlocation,
      locationName: "Lagos, Nigeria",
      starRating: plannerstar,
      textRating: "4.7",
      button: "View Vendor",
    },
    {
      id: 2,
      img: luminarystudios2,
      heading: "Luminary Studios",
      locationIcon: plannerlocation,
      locationName: "Lagos, Nigeria",
      starRating: plannerstar,
      textRating: "4.8",
      button: "View Vendor",
    },
    {
      id: 3,
      img: bloombliss,
      heading: "Bloom & Bliss Decor",
      locationIcon: plannerlocation,
      locationName: "Abuja, Nigeria",
      starRating: plannerstar,
      textRating: "4.9",
      button: "View Vendor",
    },
    {
      id: 4,
      img: goldentouch,
      heading: "Golden Touch Events",
      locationIcon: plannerlocation,
      locationName: "Ibadan, Nigeria",
      starRating: plannerstar,
      textRating: "4.6",
      button: "View Vendor",
    },
  ];

  return (
    <section className="mt-10 mb-20">
      {/* Header */}
      <div className="flex items-center justify-between px-5">
        <h2 className="text-md font-semibold">Featured Portfolio</h2>

        <Link
          to="/featured-portfolio"
          className="text-xs font-medium text-primary hover:underline"
        >
          View all
        </Link>
      </div>

      {/* Portfolio Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {featurePortfolio.map((service) => (
          <div
            key={service.id}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Portfolio Image */}
            <img
              src={service.img}
              alt={service.heading}
              className="h-28 w-full object-cover"
            />

            {/* Card Content */}
            <div className="p-4">
              {/* Top */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xs font-semibold">{service.heading}</h3>

                  <div className="mt-1 flex items-center gap-1">
                    <img
                      src={service.locationIcon}
                      alt="Location"
                      className="h-3 w-3"
                    />

                    <span className="text-xs">{service.locationName}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <img
                    src={service.starRating}
                    alt="Rating"
                    className="h-4 w-4"
                  />

                  <span className="text-xs font-semibold">
                    {service.textRating}
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 border-t border-gray-200 pt-3">
                <Link
                  to="/vendor-profile"
                  className="flex w-full items-center justify-center rounded-md border border-primary px-3 py-2 text-xs font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  {service.button}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlannerFeaturePortfolio;
