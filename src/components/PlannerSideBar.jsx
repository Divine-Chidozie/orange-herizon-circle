import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import PlannerServiceCategory from "../components/PlannerServiceCategory";
import PlannerFeaturePortfolio from "./PlannerFeaturePortfolio";
import eventconnect from "../assets/logos/eventconnect.svg";

import plannerheadshot from "../assets/icons/plannerheadshot.png";

import plannerdashboardhome from "../assets/icons/plannerdashboardhome.png";
import plannerdashboardsearch from "../assets/icons/plannerdashboardsearch.png";
import plannerdashboardenquire from "../assets/icons/plannerdashboardenquire.png";
import plannerdashboardnotification from "../assets/icons/plannerdashboardnotification.png";
import plannerdashboardprofile from "../assets/icons/plannerdashboardprofile.png";
import plannerdashboardsetting from "../assets/icons/plannerdashboardsetting.png";
import logout from "../assets/icons/logout.svg";

import plannerresponse2 from "../assets/icons/plannerresponse2.png";
import planneraccepted from "../assets/icons/planneraccepted.png";
import plannercompleted from "../assets/icons/plannercompleted.png";

import wedding from "../assets/icons/wedding.png";
import birthday from "../assets/icons/birthday.png";
import naming from "../assets/icons/naming.png";
import conference from "../assets/icons/conference.png";
import booklaunch from "../assets/icons/booklaunch.png";
import graduation from "../assets/icons/graduation.png";
import coparatevent from "../assets/icons/coparatevent.png";

// Recommended Vendor Images
import luminarystudios from "../assets/images/luminarystudios.png";
import elegantevents from "../assets/images/elegantevents.png";
import chiccelebrations from "../assets/images/chiccelebrations.png";
import glamourevent from "../assets/images/glamourevent.png";
import redientevent from "../assets/images/redientevent.png";
import timelesstouch from "../assets/images/timelesstouch.png";
import dreamscape from "../assets/images/dreamscape.png";
import ledphoto from "../assets/images/ledphoto.png";
import hausafulani from "../assets/images/hausafulani.png";
import chefgift from "../assets/images/chefgift.png";
import joyfulgathering from "../assets/images/joyfulgathering.png";
import northenwedding from "../assets/images/northenwedding.png";

// Recommended Vendor Icons
import luminarystudiosicon from "../assets/icons/luminarystudiosicon.png";
import eleganteventsicon from "../assets/icons/eleganteventsicon.png";
import chiccelebrationsicon from "../assets/icons/chiccelebrationsicon.png";
import glamoureventicon from "../assets/icons/glamoureventicon.png";
import redienteventicon from "../assets/icons/redienteventicon.png";
import timelesstouchicon from "../assets/icons/timelesstouchicon.png";
import dreamscapeicon from "../assets/icons/dreamscapeicon.png";
import ledphotoicon from "../assets/icons/ledphotoicon.png";
import hausafulanicon from "../assets/icons/hausafulanicon.png";
import chefgifticon from "../assets/icons/chefgifticon.png";
import joyfulgatheringicon from "../assets/icons/joyfulgatheringicon.png";
import northenweddingicon from "../assets/icons/northenweddingicon.png";

import plannerlocation from "../assets/icons/plannerlocation.png";
import plannerstar from "../assets/icons/plannerstar.png";

const PlannerSideBar = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/sign-in", { replace: true });
    }
  };

  const plannerIcons = [
    {
      id: 1,
      icon: plannerdashboardhome,
      text: "Home",
      path: "/planner/dashboard",
    },
    {
      id: 2,
      icon: plannerdashboardsearch,
      text: "Discover Vendors",
      path: "/planner/discover-vendors",
    },
    {
      id: 3,
      icon: plannerdashboardenquire,
      text: "My Enquiries",
      path: "/planner/enquiries",
    },
    {
      id: 4,
      icon: plannerdashboardnotification,
      text: "Notifications",
      path: "/planner/notifications",
    },
    {
      id: 5,
      icon: plannerdashboardprofile,
      text: "Profile",
      path: "/planner/profile",
    },
    {
      id: 6,
      icon: plannerdashboardsetting,
      text: "Settings",
      path: "/planner/settings",
    },
    { id: 7, icon: logout, text: "Logout", path: "/" },
  ];

  const recommendedVendors = [
    {
      id: 1,
      category: "Wedding",
      image: luminarystudios,
      heading: "Luminary Studios",
      description: "Event Decoration & Styling",
      icon: luminarystudiosicon,
      location: plannerlocation,
      locationText: "Lagos, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.9 (128)",
      vendorDescription:
        "Award-winning event photography with 8+ years of capturing unforgettable moments.",
      startPrice: "Starting from",
      price: "₦85,000",
      profileBtn: "View Profile",
    },
    {
      id: 2,
      category: "Conference",
      image: elegantevents,
      heading: "Elegant Events Co.",
      description: "Venues & Spaces",
      icon: eleganteventsicon,
      location: plannerlocation,
      locationText: "Abuja, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.7 (92)",
      vendorDescription:
        "Specializes in luxury floral arrangements and bespoke event design.",
      startPrice: "Starting from",
      price: "₦70,000",
      profileBtn: "View Profile",
    },
    {
      id: 3,
      category: "Wedding",
      image: chiccelebrations,
      heading: "Chic Celebrations",
      description: "Stage & Lighting",
      icon: chiccelebrationsicon,
      location: plannerlocation,
      locationText: "Port Harcourt, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.8 (75)",
      vendorDescription:
        "This image showcases a dramatic and romantic wedding reception decor...",
      startPrice: "Starting from",
      price: "₦90,000",
      profileBtn: "View Profile",
    },
    {
      id: 4,
      category: "Wedding",
      image: glamourevent,
      heading: "Glamour Events",
      description: "Wedding Stage Backdrop",
      icon: glamoureventicon,
      location: plannerlocation,
      locationText: "Ibadan, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.6 (60)",
      vendorDescription:
        "Experts in themed decorations and custom setups tailored for each event.",
      startPrice: "Starting from",
      price: "₦75,000",
      profileBtn: "View Profile",
    },
    {
      id: 5,
      category: "Birthday",
      image: redientevent,
      heading: "Radiant Events",
      description: "Event Decoration & Styling",
      icon: redienteventicon,
      location: plannerlocation,
      locationText: "Enugu, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.5 (50)",
      vendorDescription:
        "Creating unforgettable environments with a personal touch and elegance.",
      startPrice: "Starting from",
      price: "₦80,000",
      profileBtn: "View Profile",
    },
    {
      id: 6,
      category: "Birthday",
      image: timelesstouch,
      heading: "Timeless Touch",
      description: "Party Decorator",
      icon: timelesstouchicon,
      location: plannerlocation,
      locationText: "Kano, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.4 (44)",
      vendorDescription:
        "Timeless Touch excels at creating elegant and memorable parties.",
      startPrice: "Starting from",
      price: "₦65,000",
      profileBtn: "View Profile",
    },
    {
      id: 7,
      category: "Corporate Event",
      image: dreamscape,
      heading: "Dreamscape Events",
      description: "Event Decorator",
      icon: dreamscapeicon,
      location: plannerlocation,
      locationText: "Kaduna, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.8 (88)",
      vendorDescription:
        "Innovative design that reflects the essence of your celebration.",
      startPrice: "Starting from",
      price: "₦85,000",
      profileBtn: "View Profile",
    },
    {
      id: 8,
      category: "Conference",
      image: ledphoto,
      heading: "LED Photo Booth",
      description: "Photographer",
      icon: ledphotoicon,
      location: plannerlocation,
      locationText: "Benin City, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.6 (39)",
      vendorDescription:
        "Turn any event into an instant showstopper with this LED tunnel photo booth backdrop.",
      startPrice: "Starting from",
      price: "₦68,000",
      profileBtn: "View Profile",
    },
    {
      id: 9,
      category: "Naming Ceremony",
      image: hausafulani,
      heading: "Hausa Fulani Video",
      description: "Videographer",
      icon: hausafulanicon,
      location: plannerlocation,
      locationText: "Kawo, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.9 (53)",
      vendorDescription:
        "Experience the artistry of a Hausa Fulani event decorator who transforms venues.",
      startPrice: "Starting from",
      price: "₦73,000",
      profileBtn: "View Profile",
    },
    {
      id: 10,
      category: "Book Launch",
      image: chefgift,
      heading: "Chef Gift",
      description: "Cake Baker",
      icon: chefgifticon,
      location: plannerlocation,
      locationText: "Warri, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.7 (47)",
      vendorDescription:
        "Delight your favourite chef or baker with a custom cake gift that celebrates them.",
      startPrice: "Starting from",
      price: "₦95,000",
      profileBtn: "View Profile",
    },
    {
      id: 11,
      category: "Graduation",
      image: joyfulgathering,
      heading: "Joyful Gatherings",
      description: "Event Decoration & Styling",
      icon: joyfulgatheringicon,
      location: plannerlocation,
      locationText: "Abeokuta, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.5 (36)",
      vendorDescription:
        "Focusing on intimate settings and joyful atmospheres for personal events.",
      startPrice: "Starting from",
      price: "₦60,000",
      profileBtn: "View Profile",
    },
    {
      id: 12,
      category: "Wedding",
      image: northenwedding,
      heading: "Northern Wedding",
      description: "Wedding Outfit",
      icon: northenweddingicon,
      location: plannerlocation,
      locationText: "Kaduna, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.8 (64)",
      vendorDescription:
        "Crafting exquisite Northern wedding attire that blends tradition with elegance.",
      startPrice: "Starting from",
      price: "₦88,000",
      profileBtn: "View Profile",
    },
  ];

  const filteredVendors = recommendedVendors
    .filter((vendor) => {
      const search = searchTerm.toLowerCase();
      return (
        vendor.category.toLowerCase().includes(search) ||
        vendor.heading.toLowerCase().includes(search) ||
        vendor.description.toLowerCase().includes(search)
      );
    })
    .sort((a, b) => {
      if (filterBy === "price") {
        return (
          Number(a.price.replace(/[^\d]/g, "")) -
          Number(b.price.replace(/[^\d]/g, ""))
        );
      }
      if (filterBy === "location") {
        return a.locationText.localeCompare(b.locationText);
      }
      if (filterBy === "rating") {
        return parseFloat(b.vendorRating) - parseFloat(a.vendorRating);
      }
      return 0;
    });

  return (
    <div className="flex flex-col lg:flex-row w-full bg-white min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-72 shrink-0 border-b lg:border-b-0 lg:border-r border-gray-200 bg-white px-4 sm:px-6 py-6">
        <div className="flex gap-5">
          <Link to="/" className="flex gap-5">
            <img
              src={eventconnect}
              alt="EventConnect Logo"
              className="w-28 sm:w-32 lg:w-36"
            />
          </Link>
        </div>

        <hr className="mt-6 border-gray-200" />

        <nav className="mt-4 flex flex-col gap-1">
          {plannerIcons.map((item) =>
            item.text === "Logout" ? (
              <button
                key={item.id}
                type="button"
                onClick={handleLogout}
                className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-left transition hover:bg-light-blue"
              >
                <img src={item.icon} alt={item.text} className="h-4 w-4" />
                <span className="text-xs font-medium text-text">
                  {item.text}
                </span>
              </button>
            ) : (
              <Link
                key={item.id}
                to={item.path}
                className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-light-blue"
              >
                <img src={item.icon} alt={item.text} className="h-4 w-4" />
                <span className="text-xs font-medium text-text">
                  {item.text}
                </span>
              </Link>
            ),
          )}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex min-w-0 flex-col w-full">
        {/* Header */}
        <header className="flex flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-200">
          <div>
            <h1 className="font-semibold text-base text-gray-900">
              Good Morning, Sarah 👋
            </h1>
            <p className="text-xs text-gray-500">
              What event are you planning today?
            </p>
          </div>

          <div className="flex items-center gap-3">
            <img
              src={plannerheadshot}
              alt="Sarah Adeyemi"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <h4 className="text-sm font-semibold leading-tight text-gray-900">
                Sarah Adeyemi
              </h4>
              <span className="text-xs text-gray-500">Planner</span>
            </div>
          </div>
        </header>

        <main className="overflow-x-hidden p-6 space-y-8">
          {/* Search & Filter */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Wedding, Birthday, Conference..."
                className="w-full rounded-lg border border-gray-300 py-1.5 pl-8 pr-3 text-[10px] placeholder:text-[10px] focus:border-primary focus:outline-none"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-white transition hover:border-primary hover:bg-light-blue"
                title="Filter"
              >
                <SlidersHorizontal size={15} className="text-gray-600" />
              </button>

              {showFilters && (
                <div className="absolute right-0 mt-2 w-44 rounded-lg border border-gray-200 bg-white shadow-lg z-50">
                  {["", "price", "location", "rating"].map((type) => (
                    <button
                      key={type || "default"}
                      onClick={() => {
                        setFilterBy(type);
                        setShowFilters(false);
                      }}
                      className="block w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 capitalize"
                    >
                      {type || "Default"}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Enquiry Status */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-md text-gray-900">
                Enquiry Status
              </h2>
              <Link
                to="/planner/enquiries"
                className="text-xs text-primary hover:underline"
              >
                View all enquiries
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col px-5 py-4 gap-3 border border-gray-200 rounded-2xl bg-white">
                <div className="flex items-center justify-between">
                  <img src={plannerresponse2} alt="Waiting" className="w-9" />
                  <span className="font-semibold text-lg text-gray-900">3</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-900">
                    Waiting for Response
                  </h4>
                  <span className="text-xs text-gray-500">
                    Awaiting vendor reply
                  </span>
                </div>
              </div>

              <div className="flex flex-col px-5 py-4 gap-3 border border-gray-200 rounded-2xl bg-white">
                <div className="flex items-center justify-between">
                  <img src={planneraccepted} alt="Accepted" className="w-9" />
                  <span className="font-semibold text-lg text-gray-900">5</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-900">
                    Accepted
                  </h4>
                  <p className="text-xs text-gray-500">Confirmed bookings</p>
                </div>
              </div>

              <div className="flex flex-col px-5 py-4 gap-3 border border-gray-200 rounded-2xl bg-white">
                <div className="flex items-center justify-between">
                  <img src={plannercompleted} alt="Completed" className="w-9" />
                  <span className="font-semibold text-lg text-gray-900">
                    12
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-900">
                    Completed
                  </h4>
                  <p className="text-xs text-gray-500">Event concluded</p>
                </div>
              </div>
            </div>
          </section>

          {/* Event Categories */}
          <section>
            <h2 className="font-semibold text-md text-gray-900 mb-4">
              What type of event are you planning?
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
              {[
                { label: "Wedding", img: wedding, active: true },
                { label: "Birthday", img: birthday },
                { label: "Naming Ceremony", img: naming },
                { label: "Conference", img: conference },
                { label: "Book Launch", img: booklaunch },
                { label: "Graduation", img: graduation },
                { label: "Corporate Event", img: coparatevent },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`p-4 rounded-2xl h-24 flex flex-col justify-center items-center gap-2 cursor-pointer transition border ${
                    item.active
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="font-semibold text-xs text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended Vendors Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-md text-gray-900">
                Recommended Vendors
              </h2>
              <Link
                to="/planner/discover-vendors"
                className="text-xs text-primary hover:underline"
              >
                View all
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredVendors.length > 0 ? (
                filteredVendors.map((vendor) => (
                  <div
                    key={vendor.id}
                    className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <img
                      src={vendor.image}
                      alt={vendor.heading}
                      className="w-full h-28 object-cover rounded-t-2xl"
                    />

                    <div className="flex items-center justify-between p-4">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                          {vendor.heading}
                        </h3>
                        <p className="mt-1 text-[11px] font-medium text-primary">
                          {vendor.description}
                        </p>
                      </div>
                      <img
                        src={vendor.icon}
                        alt=""
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    </div>

                    <div className="flex items-center gap-2 px-4 pb-2">
                      <img src={vendor.location} alt="" className="h-3 w-3" />
                      <p className="text-xs text-gray-500">
                        {vendor.locationText}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 px-4 pb-3">
                      <img src={vendor.vendorStar} alt="" className="h-3 w-3" />
                      <p className="text-xs font-semibold text-gray-900">
                        {vendor.vendorRating}
                      </p>
                    </div>

                    <div className="px-4">
                      <p className="min-h-[60px] text-xs leading-5 text-gray-500">
                        {vendor.vendorDescription}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-gray-100 p-4">
                      <div>
                        <p className="text-xs text-gray-500">
                          {vendor.startPrice}
                        </p>
                        <p className="text-xs font-bold text-gray-900">
                          {vendor.price}
                        </p>
                      </div>

                      <Link
                        to={`/vendor/${vendor.id}`}
                        className="rounded border border-primary px-2.5 py-1 text-[11px] font-medium text-primary transition hover:bg-primary hover:text-white"
                      >
                        {vendor.profileBtn}
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-16 text-center">
                  <h2 className="text-lg font-semibold text-gray-900">
                    No Vendors Found
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Try searching for Wedding, Birthday, Conference, Graduation,
                    Naming Ceremony, Book Launch, or Corporate Event.
                  </p>
                </div>
              )}
            </div>
          </section>

          <PlannerServiceCategory />
          <PlannerFeaturePortfolio />
        </main>
      </div>
    </div>
  );
};

export default PlannerSideBar;
