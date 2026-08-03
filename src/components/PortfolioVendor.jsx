import { Link } from "react-router-dom";

import ashiawedding from "../assets/images/ashiawedding.png";
import mominaming from "../assets/images/mominaming.png";
import annuelLeadership from "../assets/images/annuelLeadership.png";
import kasugraduation from "../assets/images/kasugraduation.png";

import star2 from "../assets/icons/star2.png";
import plannerLocation from "../assets/icons/plannerlocation.png";
import carlender from "../assets/icons/carlender.png";

const PortfolioVendor = () => {
  const PortfolioItems = [
    {
      id: 1,
      image: ashiawedding,
      title: "Ashia's Wedding",
      star: star2,
      startCount: "5.0",
      description:
        "Aisha's wedding featured a breezy outdoor ceremony with a stunning floral arch and elegant venue styling.",
      location: plannerLocation,
      locationText: "Ikoyi, Lagos",
      carlender: carlender,
      carlenderText: "Nov 2025",
      button: "View Details",
    },

    {
      id: 2,
      image: mominaming,
      title: "Momi Naming Ceremony",
      star: star2,
      startCount: "4.7",
      description:
        "Explore the vibrant and joyous Momi Naming Ceremony, celebrating new beginnings and cherished traditions.",
      location: plannerLocation,
      locationText: "Kawo, Nigeria",
      carlender: carlender,
      carlenderText: "Mar 2026",
      button: "View Details",
    },

    {
      id: 3,
      image: annuelLeadership,
      title: "Annual Leadership Gala",
      star: star2,
      startCount: "4.9",
      description:
        "A refined gala dinner celebrating leadership and excellence with keynote speakers and award presentations.",
      location: plannerLocation,
      locationText: "Lagos, Nigeria",
      carlender: carlender,
      carlenderText: "Sep 2025",
      button: "View Details",
    },

    {
      id: 4,
      image: kasugraduation,
      title: "Kasu Graduation",
      star: star2,
      startCount: "5.0",
      description:
        "Celebrate the achievements of graduates at the Kasu Graduation ceremony, a memorable event filled with pride and joy.",
      location: plannerLocation,
      locationText: "Kaduna, Nigeria",
      carlender: carlender,
      carlenderText: "Jun 2025",
      button: "View Details",
    },
  ];

  return (
    <div>
      {/* Portfolio Section */}
      <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:mt-12 sm:p-6 lg:mt-16 lg:p-8">
        <div>
          <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
            Portfolio
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            A selection of recent events
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {PortfolioItems.map((item) => (
            <div
              key={item.id}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover"
              />

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Title + Rating */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="flex-1 text-sm font-semibold leading-5 text-gray-900">
                    {item.title}
                  </h3>

                  <div className="flex shrink-0 items-center gap-1 rounded-full bg-yellow-50 px-2 py-1">
                    <img src={item.star} alt="Rating" className="h-3.5 w-3.5" />
                    <span className="text-xs font-semibold text-gray-700">
                      {item.startCount}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 flex-1 text-xs leading-6 text-gray-500">
                  {item.description}
                </p>

                {/* Location & Date */}
                <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.location}
                      alt="Location"
                      className="h-4 w-4"
                    />

                    <span className="text-xs text-gray-600">
                      {item.locationText}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={item.carlender} alt="Date" className="h-4 w-4" />

                    <span className="text-xs text-gray-600">
                      {item.carlenderText}
                    </span>
                  </div>
                </div>

                {/* Button */}
                <Link
                  to={`/portfolio/${item.id}`}
                  className="mt-5 inline-flex items-center font-semibold text-primary text-xs transition hover:text-primary/80"
                >
                  {item.button}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioVendor;
