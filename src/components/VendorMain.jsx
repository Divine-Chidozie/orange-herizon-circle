import timeicon from "../assets/icons/timeicon.png";
import { Link } from "react-router-dom";

function VendorMain() {
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
s
          {/* Content Below Blue Card */}
          <div className="mt-6">
            {/* <h2 className="text-lg font-semibold text-text">Hello</h2> */}
          </div>
        </div>

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
