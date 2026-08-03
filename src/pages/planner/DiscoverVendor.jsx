import { Link } from "react-router-dom";
import AboutDiscoverVendor from "../../components/AboutDiscoverVendor";
import PricingVendor from "../../components/PricingVendor";

import eventconnect from "../../assets/logos/eventconnect.svg";
import plannerheadshot from "../../assets/icons/plannerheadshot.png";

import back from "../../assets/icons/Back.png";

import vendorprofilecoverimg from "../../assets/images/vendorprofilecoverimg.png";
import bloomco from "../../assets/images/bloomco.png";

import airplane from "../../assets/icons/airplane.png";
import commentmessage from "../../assets/icons/commentmessage.png";
import heart from "../../assets/icons/heart.png";
import sendenquiry from "../../assets/icons/sendenquiry.png";
import suitecase from "../../assets/icons/suitecase.png";
// import vendorverified from "../../assets/icons/vendorverified.png";
import plannerlocation from "../../assets/icons/plannerlocation.png";
import star2 from "../../assets/icons/star2.png";
import PortfolioVendor from "../../components/PortfolioVendor";
import VendorReviews from "../../components/VendorReviews";
import Footer from "../../components/Footer";

function DiscoverVendor() {
  const handleComingSoon = (feature) => {
    alert(`${feature} will soon be available`);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-gray-200 px-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <div className="flex items-start gap-3 sm:gap-4">
          <Link to="/" className="shrink-0">
            <img
              src={eventconnect}
              alt="EventConnect Logo"
              className="w-28 sm:w-32 lg:w-36"
            />
          </Link>

          <div>
            <h1 className="text-sm font-semibold text-gray-900 sm:text-base">
              Good Morning, Sarah 👋
            </h1>

            <p className="text-xs text-gray-500">
              What event are you planning today?
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-start lg:self-auto">
          <img
            src={plannerheadshot}
            alt="Sarah Adeyemi"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              Sarah Adeyemi
            </h4>

            <span className="text-xs text-gray-500">Planner</span>
          </div>
        </div>
      </header>

      {/* Navigation Row */}
      <div className="flex items-center border-b border-gray-200 px-4 py-4 lg:px-6">
        <Link to="/planner/dashboard" className="shrink-0">
          <img src={back} alt="Back Icon" className="h-8 w-8 cursor-pointer" />
        </Link>

        <nav className="flex-1 overflow-x-auto">
          <ul className="flex min-w-max justify-center gap-6 px-6 text-xs text-gray-600 sm:gap-10">
            <li className="cursor-pointer hover:text-primary">About</li>
            <li className="cursor-pointer hover:text-primary">Services</li>
            <li className="cursor-pointer hover:text-primary">Pricing</li>
            <li className="cursor-pointer hover:text-primary">Portfolio</li>
            <li className="cursor-pointer hover:text-primary">Reviews</li>
          </ul>
        </nav>
      </div>

      <main>
        <div className="mx-auto my-6 w-[95%] overflow-hidden rounded-t-2xl border border-gray-100 shadow lg:w-[90%]">
          <div>
            {/* <img
              src={vendorprofilecoverimg}
              alt="Vendor Profile Cover"
              className="w-full object-cover"
            /> */}

            <img
              src={vendorprofilecoverimg}
              alt="Vendor Profile Cover"
              className="h-44 w-full object-cover sm:h-56 lg:h-72"
            />
          </div>

          <div className="-mt-12 flex flex-col items-center gap-4 px-4 text-center sm:-mt-16 sm:flex-row sm:items-end sm:px-6 sm:text-left">
            <img
              src={bloomco}
              alt="Vendor Profile"
              className="h-24 w-24 rounded-full border-4 border-white object-cover sm:h-32 sm:w-32"
            />

            <div className="pb-3">
              <h1 className="text-xl font-bold text-gray-900">
                Bloom & Co. Events
              </h1>

              <p className="text-sm text-primary">
                Event Decorations & Styling
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 px-4 sm:justify-start sm:px-6">
            <div className="flex items-center gap-1">
              <img src={plannerlocation} alt="" className="h-3 w-3" />
              <span className="text-xs text-gray">
                Lekki, Lagos State, Nigeria
              </span>
            </div>

            <div className="flex items-center gap-1">
              <img src={airplane} alt="" className="h-3 w-3" />
              <span className="text-xs text-gray">Travels nationwide</span>
            </div>

            <div className="flex items-center gap-1">
              <img src={suitecase} alt="" className="h-3 w-3" />
              <span className="text-xs text-gray">9 years experience</span>
            </div>

            <div className="flex items-center gap-1">
              <img src={star2} alt="" className="h-3 w-3" />
              <span className="text-xs text-gray">4.9 (214 reviews)</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 px-4 pb-6 sm:justify-start sm:px-6">
            <button
              onClick={() => handleComingSoon("Send Enquiry")}
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs text-white transition hover:opacity-90"
            >
              <img src={sendenquiry} alt="" className="h-4 w-4" />
              Send Enquiry
            </button>

            <button
              onClick={() => handleComingSoon("Save Vendor")}
              className="flex items-center gap-2 rounded-full border border-gray-300 bg-gray-100 px-5 py-2 text-xs text-gray-800 transition hover:bg-gray-200"
            >
              <img src={heart} alt="" className="h-4 w-4" />
              Save Vendor
            </button>

            <button
              onClick={() => handleComingSoon("Message")}
              className="flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-xs text-primary transition hover:bg-primary hover:text-white"
            >
              <img src={commentmessage} alt="" className="h-4 w-4" />
              Message
            </button>
          </div>

          <AboutDiscoverVendor />
          <PricingVendor />
          <PortfolioVendor />
          <VendorReviews />

          <Footer />
        </div>
      </main>
    </div>
  );
}

export default DiscoverVendor;
