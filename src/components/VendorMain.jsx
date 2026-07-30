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

import portfolioitemicon from "../assets/icons/portfolioitemicon.png";
import fivestaricon from "../assets/icons/fivestaricon.png";
import newenquiryicon from "../assets/icons/newenquiryicon.png";

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

  const vendorActivity = [
    {
      activityIcon: vendormessageicon,
      activityDescription: "Fatima sent a new enquiry",
      time: "2 min ago",
    },

    {
      activityIcon: portfolioitemicon,
      activityDescription: "You uploaded a portfolio item",
      time: "1 hr ago",
    },

    {
      activityIcon: fivestaricon,
      activityDescription: "You recieved a 5 star review",
      time: "3 hrs ago",
    },

    {
      activityIcon: vendormessageicon,
      activityDescription: "James sent a new enquiry",
      time: "Yesterday",
    },

    {
      activityIcon: newenquiryicon,
      activityDescription: "You accepted a new enquiry from Ngozi",
      time: "Yesterday",
    },
  ];

  return (
    <div className="flex flex-col gap-6 px-4 py-4 lg:flex-row">
      {/* ================= LEFT COLUMN ================= */}
      <div className="flex-[3] min-w-0">
        {/* Blue Card */}
        <div className="rounded-2xl bg-primary p-5 text-white">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

            <Link
              to="/vendor/enquiries"
              className="inline-flex h-8 items-center justify-center rounded-md bg-white px-3 text-[11px] font-medium text-primary transition hover:bg-gray-100"
            >
              Respond Now
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-6">
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

                  <span className="text-xs font-medium text-green-600">
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

        {/* Recent Enquiries */}
        <div className="mt-6">
          <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold">Recent Enquiries</h2>

            <Link
              to="/vendor/enquiries"
              className="text-xs font-medium text-primary"
            >
              View all
            </Link>
          </div>

          {/* Recent Enquiries Cards */}
          <div className="mt-6 space-y-4">
            {enquiresVendors.map((enquire, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                {/* Left */}
                <div className="flex items-center gap-3">
                  <img
                    src={enquire.headshot}
                    alt={enquire.description}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-text">
                      {enquire.description}
                    </h3>

                    <div className="mt-1 flex items-center gap-1">
                      <img
                        src={enquire.location}
                        alt="Location"
                        className="h-3 w-3"
                      />

                      <p className="text-xs text-gray">
                        {enquire.locationAddress}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-medium ${
                      enquire.status === "Waiting"
                        ? "bg-yellow-100 text-yellow-700"
                        : enquire.status === "Accepting"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {enquire.status}
                  </span>

                  <Link
                    to="/vendor/enquiries"
                    className="rounded-md border border-primary px-3 py-1 text-xs font-medium text-primary transition hover:bg-primary hover:text-white"
                  >
                    {enquire.btn}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="flex items-center justify-between  p-5 ">
          <h2 className="text-sm font-semibold mt-10">Recent Activity</h2>
        </div>

        {/* Recent Enquiries Cards */}
        {/* <div className="m space-y-4">
          {enquiresVendors.map((enquire, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <img
                  src={enquire.headshot}
                  alt={enquire.description}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-sm font-semibold text-text">
                    {enquire.description}
                  </h3>

                  <div className="mt-1 flex items-center gap-1">
                    <img
                      src={enquire.location}
                      alt="Location"
                      className="h-3 w-3"
                    />

                    <p className="text-xs text-gray">
                      {enquire.locationAddress}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-medium ${
                    enquire.status === "Waiting"
                      ? "bg-yellow-100 text-yellow-700"
                      : enquire.status === "Accepting"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {enquire.status}
                </span>

                <Link
                  to="/vendor/enquiries"
                  className="rounded-md border border-primary px-3 py-1 text-xs font-medium text-primary transition hover:bg-primary hover:text-white"
                >
                  {enquire.btn}
                </Link>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* ================= RIGHT COLUMN ================= */}
      <aside className="hidden lg:block flex-1 max-w-sm">
        <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
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
            className="mt-4 inline-block rounded-md border border-primary px-3 py-2 text-xs font-medium text-primary transition hover:bg-primary hover:text-white"
          >
            Complete Profile
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default VendorMain;
