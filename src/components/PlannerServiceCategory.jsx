import { Link } from "react-router-dom";

import decorators from "../assets/icons/decorators.png";
import cakemakers from "../assets/icons/cakemakers.png";
import photoGraphers from "../assets/icons/photoGraphers.png";
import caterers from "../assets/icons/caterers.png";
import mc from "../assets/icons/mc.png";
import dj from "../assets/icons/dj.png";
import makeupartists from "../assets/icons/makeupartists.png";
import eventplanners from "../assets/icons/eventplanners.png";

const PlannerServiceCategory = () => {
  const plannerService = [
    {
      id: 1,
      img: decorators,
      heading: "Decorators",
      description: "124 Vendors",
    },
    {
      id: 2,
      img: cakemakers,
      heading: "Cake Makers",
      description: "67 Vendors",
    },
    {
      id: 3,
      img: photoGraphers,
      heading: "Photographers",
      description: "98 Vendors",
    },
    {
      id: 4,
      img: caterers,
      heading: "Caterers",
      description: "143 Vendors",
    },
    {
      id: 5,
      img: mc,
      heading: "MCs",
      description: "52 Vendors",
    },
    {
      id: 6,
      img: dj,
      heading: "DJs",
      description: "81 Vendors",
    },
    {
      id: 7,
      img: makeupartists,
      heading: "Makeup Artists",
      description: "119 Vendors",
    },
    {
      id: 8,
      img: eventplanners,
      heading: "Event Planners",
      description: "76 Vendors",
    },
  ];

  return (
    <section className="mt-8">
      {/* Section Header */}
      <div className="flex items-center justify-between px-5">
        <h2 className="text-md font-semibold">Service Categories</h2>

        <Link
          to="/service-categories"
          className="text-xs font-medium text-primary hover:underline"
        >
          View all
        </Link>
      </div>

      {/* Category Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 px-5 sm:grid-cols-3 lg:grid-cols-4">
        {plannerService.map((service) => (
          <div
            key={service.id}
            className="flex cursor-pointer flex-col items-center rounded-xl border border-gray-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={service.img}
              alt={service.heading}
              className="h-14 w-14 object-contain"
            />

            <h3 className="mt-4 text-sm font-semibold">{service.heading}</h3>

            <p className="mt-1 text-xs text-gray">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlannerServiceCategory;
