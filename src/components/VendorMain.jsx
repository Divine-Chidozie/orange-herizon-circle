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

const statusStyles = {
  Waiting: "bg-yellow-100 text-yellow-700",
  Accepting: "bg-green-100 text-green-700",
  New: "bg-blue-100 text-blue-700",
};

function VendorMain() {
  const vendorProfile = [
    {
      id: 1,
      img: vendormessageicon,
      message: "+3 today",
      headingNumber: 3,
      headingDescription: "New Enquiries",
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
      headingDescription: "Active Conversations",
    },
    {
      id: 4,
      img: vendorstarrating,
      message: "12 reviews",
      headingNumber: 4.9,
      headingDescription: "Average Rating",
    },
  ];

  const enquiries = [
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
      activityDescription: "You received a 5 star review",
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
      {/* LEFT */}
      <div className="min-w-0 flex-[3]">
        {/* Header Card */}

        <div className="rounded-2xl bg-primary p-4 text-white sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                <img src={timeicon} alt="Time" className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-sm font-semibold">
                  2 enquiries waiting for your response
                </h2>

                <p className="mt-1 text-xs text-blue-100">
                  Planners expect a response within 24 hours.
                </p>
              </div>
            </div>

            <Link
              to="/vendor/enquiries"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-4 text-xs font-semibold text-primary transition hover:bg-gray-100"
            >
              Respond Now
            </Link>
          </div>
        </div>

        {/* Stats */}

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {vendorProfile.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <img src={item.img} alt="" className="h-6 w-6" />
                </div>

                <span className="text-xs font-medium text-green-600">
                  {item.message}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-text">
                {item.headingNumber}
              </h2>

              <p className="mt-2 text-sm text-gray">
                {item.headingDescription}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Enquiries */}

        <section className="mt-8">
          <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Recent Enquiries</h2>

            <Link
              to="/vendor/enquiries"
              className="text-sm font-medium text-primary"
            >
              View All
            </Link>
          </div>

          <div className="mt-5 space-y-4">
            {enquiries.map((enquiry, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={enquiry.headshot}
                    alt={enquiry.description}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-text">
                      {enquiry.description}
                    </h3>

                    <div className="mt-1 flex items-center gap-1">
                      <img src={enquiry.location} alt="" className="h-3 w-3" />

                      <p className="text-xs text-gray">
                        {enquiry.locationAddress}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      statusStyles[enquiry.status]
                    }`}
                  >
                    {enquiry.status}
                  </span>

                  <Link
                    to="/vendor/enquiries"
                    className="rounded-lg border border-primary px-4 py-2 text-xs font-medium text-primary transition hover:bg-primary hover:text-white"
                  >
                    {enquiry.btn}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}

        <section className="mt-8">
          <h2 className="mb-5 text-lg font-semibold">Recent Activity</h2>

          <div className="space-y-4">
            {vendorActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                  <img src={activity.activityIcon} alt="" className="h-5 w-5" />
                </div>

                <div className="flex-1">
                  <p className="font-medium text-text">
                    {activity.activityDescription}
                  </p>

                  <p className="mt-1 text-xs text-gray">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ================= RIGHT SIDEBAR ================= */}

      <aside className="w-full lg:max-w-sm lg:flex-1">
        <div className="sticky top-6 space-y-6">
          {/* Profile Completion */}

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-text">
                Complete Profile
              </h3>

              <span className="text-lg font-bold text-primary">85%</span>
            </div>

            {/* Progress Bar */}

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-[85%] rounded-full bg-primary"></div>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray">
              Complete your profile to attract more bookings, improve visibility
              and build trust with planners.
            </p>

            <Link
              to="/vendor/profile"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-primary px-4 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
            >
              Complete Profile
            </Link>
          </div>

          {/* Quick Tips */}

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-text">Vendor Tips</h3>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-gray">
              <li>• Respond to enquiries within 24 hours.</li>

              <li>• Keep your portfolio updated with recent work.</li>

              <li>• Ask satisfied clients for reviews.</li>

              <li>• Upload high-quality photos to improve bookings.</li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default VendorMain;
