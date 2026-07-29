import timeicon from "../assets/icons/timeicon.png";
import { Link } from "react-router-dom";

import vendormessageicon from "../assets/icons/vendormessageicon.png";
import vendorreply from "../assets/icons/vendorreply.png";
import vendorchat from "../assets/icons/vendorchat.png";
import vendorstarrating from "../assets/icons/vendorstarrating.png";

import plannerheadshot from "../assets/icons/plannerheadshot.png";
import tariqheadshot from "../assets/icons/tariqheadshot.png";
import sadeheadshot from "../assets/icons/sadeheadshot.png";

import plannerlocation from "../assets/icons/plannerlocation.png";

function VendorMain() {
  const vendorProfile = [
    {
      id: 1,
      img: vendormessageicon,
      message: "+3 today",
      headingNumber: 3,
      headingDescription: "New Enquires",
    },

    {
      id: 2,
      img: vendorreply,
      message: "Reply soon",
      headingNumber: 2,
      headingDescription: "Waiting Responses",
    },

    {
      id: 3,
      img: vendorchat,
      message: "+1 today",
      headingNumber: 5,
      headingDescription: "Acitive Converstations",
    },

    {
      id: 4,
      img: vendorstarrating,
      message: "12 reviews",
      headingNumber: 4.9,
      headingDescription: "Average Rating",
    },
  ];

  const enquiresVendors = [
    {
      headshot: plannerheadshot,
      description: "Wedding Decoration",
      location: plannerlocation,
      locationAddress: "Lagos, NG",
      status: "Waiting",
      btn: "View",
    },

    {
      headshot: tariqheadshot,
      description: "Event Decoration",
      location: plannerlocation,
      locationAddress: "Port Harcourt, NG",
      status: "Accepting",
      btn: "View",
    },

    {
      headshot: sadeheadshot,
      description: "Table Setting Decor",
      location: plannerlocation,
      locationAddress: "Ibadan, NG",
      status: "New",
      btn: "View",
    },
  ];

  return (
    <div className="w-full px-4 py-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Left Column */}
        <div className="lg:col-span-2">
          {/* Blue Card */}
          <div className="rounded-2xl bg-primary p-5 text-white">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Left Side */}
              <div className="flex flex-1 items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <img src={timeicon} alt="Time Icon" className="h-5 w-5" />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold">
                    2 enquiries waiting for your response
                  </h3>

                  <p className="mt-1 text-xs text-blue-100">
                    Planners expect a response within 24 hours.
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <Link
                to="/vendor/enquiries"
                className="inline-flex h-8 items-center justify-center rounded-md bg-white px-3 text-[11px] font-medium text-primary transition hover:bg-gray-100"
              >
                Respond Now
              </Link>
            </div>
          </div>

          {/* Content Below Blue Card */}
          <div className="mt-6">
            {/* <h2 className="text-lg font-semibold text-text">Hello</h2> */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {vendorProfile.map((vendor) => (
                <div
                  key={vendor.id}
                  className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-6 w-6 items-center justify-center rounded-xl bg-blue-50">
                      <img
                        src={vendor.img}
                        alt={vendor.headingDescription}
                        className="h-7 w-7"
                      />
                    </div>

                    <span className="text-xs font-medium text-green-600 text-shadow-2xs">
                      {vendor.message}
                    </span>
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-text">
                    {vendor.headingNumber}
                  </h2>

                  <p className="mt-2 text-xs text-gray">
                    {vendor.headingDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="flex gap-4 p-5  justify-between items-center ">
              <h2 className="font-semibold text-sm">Recent Enquires</h2>
              <a href="" className="text-xs text-primary">
                View all
              </a>
            </div>
          </div>
        </div>

        {/* Cpmplete profile card */}
        {/* Right Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-text">
              Complete Profile
            </h3>

            <span className="text-sm font-bold text-primary">85%</span>
          </div>

          <p className="mt-3 text-xs leading-5 text-gray">
            Complete your profile to attract more bookings and build trust with
            planners.
          </p>

          <Link
            to="/vendor/profile"
            className="mt-4 inline-block rounded-md border border-primary px-3 py-1 text-[11px] font-medium text-primary transition hover:bg-primary hover:text-white"
          >
            Complete Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VendorMain;
