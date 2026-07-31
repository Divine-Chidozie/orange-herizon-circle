import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

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
    <section
      className="mx-auto max-w-7xl px-6 py-16 lg:py-20"
      id="grow-business"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            Grow your event business with EventConnect
          </h2>

          <p className="mb-6 max-w-lg leading-7 text-gray">
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
                  className="h-5 w-5 flex-shrink-0"
                />

                <span className="text-base">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/sign-up"
              className="w-full rounded-lg bg-primary px-6 py-3 text-center font-medium text-white transition hover:opacity-90 sm:w-auto"
            >
              Become a Vendor
            </Link>

            <ScrollLink
              to="how-it-works"
              smooth={true}
              duration={500}
              offset={-90}
              className="w-full cursor-pointer rounded-lg border border-primary px-6 py-3 text-center font-medium transition hover:bg-primary hover:text-white sm:w-auto"
            >
              See how it works
            </ScrollLink>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center lg:w-1/2">
          <img
            src={growbusiness}
            alt="Vendor using EventConnect"
            className="h-auto w-full object-contain md:w-[80%] lg:w-[420px] xl:w-[480px]"
          />
        </div>
      </div>
    </section>
  );
};

export default GrowBusiness;
