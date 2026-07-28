import { Link } from "react-scroll";

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
  const plannerIcons = [
    {
      id: 1,
      icon: plannerdashboardhome,
      text: "Home",
    },

    {
      id: 2,
      icon: plannerdashboardsearch,
      text: "Discover Vendors",
    },

    {
      id: 3,
      icon: plannerdashboardenquire,
      text: "My enquires",
    },

    {
      id: 4,
      icon: plannerdashboardnotification,
      text: "Notifications",
    },

    {
      id: 5,
      icon: plannerdashboardprofile,
      text: "Profile",
    },
    {
      id: 6,
      icon: plannerdashboardsetting,
      text: "Settings",
    },
  ];

  const recommendedVendors = [
    {
      id: 1,
      image: luminarystudios,
      heading: "Luminary Studios",
      description: "Event Decoration & Styling",
      icon: luminarystudiosicon,
      location: plannerlocation,
      locationText: "Lagos, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.9 (128)",
      vendorDescription:
        "Award-winning event photograpghy with 8+ years of capturing unforgettable moments.",
      startPrice: "Starting from",
      price: "₦85,000",
      profileBtn: "View Profile",
    },
    {
      id: 2,
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
      image: chiccelebrations,
      heading: "Chic Celebrations",
      description: "Stage & Lighting",
      icon: chiccelebrationsicon,
      location: plannerlocation,
      locationText: "Port Harcourt, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.8 (75)",
      vendorDescription:
        "This image showcaes a dramatic and romantic wedding reception decor with a ....",
      startPrice: "Starting from",
      price: "₦90,000",
      profileBtn: "View Profile",
    },
    {
      id: 4,
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
      image: redientevent,
      heading: "Radiant Events",
      description: "Event Decoration & Styling",
      icon: redienteventicon,
      location: plannerlocation,
      locationText: "Enugu, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.5 (50)",
      vendorDescription:
        "Creating Unforgettable environments with a personal touch and elegance.",
      startPrice: "Starting from",
      price: "₦80,000",
      profileBtn: "View Profile",
    },
    {
      id: 6,
      image: timelesstouch,
      heading: "Timeless Touch",
      description: "Party Decorator",
      icon: timelesstouchicon,
      location: plannerlocation,
      locationText: "Kano, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.4 (44)",
      vendorDescription:
        "Timeless Touch excels at creating elegant and memorable parties with impeccable",
      startPrice: "Starting from",
      price: "₦65,000",
      profileBtn: "View Profile",
    },
    {
      id: 7,
      image: dreamscape,
      heading: "Dreamscape Events",
      description: "Event Decorator",
      icon: dreamscapeicon,
      location: plannerlocation,
      locationText: "Kaduna, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.8 (88)",
      vendorDescription:
        "Innovative design that reflect the essence of your celebration.",
      startPrice: "Starting from",
      price: "₦85,000",
      profileBtn: "View Profile",
    },
    {
      id: 8,
      image: ledphoto,
      heading: "LED Photo Booth",
      description: "Photographer",
      icon: ledphotoicon,
      location: plannerlocation,
      locationText: "Benin City, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.6 (39)",
      vendorDescription:
        "Turn any event into an instant showstopper with this LED tunnel photo booth backdrop...",
      startPrice: "Starting from",
      price: "₦68,000",
      profileBtn: "View Profile",
    },
    {
      id: 9,
      image: hausafulani,
      heading: "Hausa Fulani Video",
      description: "Videographer",
      icon: hausafulanicon,
      location: plannerlocation,
      locationText: "Kawo, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.9 (53)",
      vendorDescription:
        "Experience the artistry of an Hausa Fulani event decorator who transforms venues",
      startPrice: "Starting from",
      price: "₦73,000",
      profileBtn: "View Profile",
    },
    {
      id: 10,
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
      image: northenwedding,
      heading: "Northern Wedding",
      description: "Wedding Outfit",
      icon: northenweddingicon,
      location: plannerlocation,
      locationText: "Kaduna, Nigeria",
      vendorStar: plannerstar,
      vendorRating: "4.8 (64)",
      vendorDescription:
        "Crafting exquisite Northen wedding attire that blends trandition with elegance",
      startPrice: "Starting from",
      price: "₦88,000",
      profileBtn: "View Profile",
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full">
        <aside className="w-full lg:w-72 shrink-0 border-b lg:border-b-0 lg:border-r border-border bg-white px-4 sm:px-6 py-6">
          <div className="flex gap-5">
            <img src={eventconnect} className="w-28 sm:w-32 lg:w-36" />
          </div>

          <hr className="mt-6 border-gray-200" />

          {plannerIcons.map((icon) => (
            <div
              key={icon.id}
              className="mt-2 flex flex-row  cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-light-blue"
            >
              <img src={icon.icon} alt={icon.text} className="h-4 w-4" />
              <span className="text-xs font-medium text-text">{icon.text}</span>
            </div>
          ))}

          <div className="mt-24 rounded-xl bg-[#E2E8F0] p-5 text-white">
            <h3 className="text-sm font-semibold text-primary">
              Upgrade to Pro
            </h3>

            <p className="mt-2 mb-4 text-xs text-gray max-w-full">
              Connect with more verified vendors, send unlimited enquires, and
              access premium planning tools.
            </p>

            <a
              href=""
              className="mt-5 flex w-full items-center justify-center border border-primary px-3 py-2 rounded-md text-xs bg-primary text-white transition hover:border hover:text-primary hover:bg-white hover:border-primary"
            >
              Upgrade to Pro
            </a>
          </div>
        </aside>

        <div className="flex min-w-0 flex-col w-full">
          <header className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="font-semibold text-base">
                Good Morning, Sarah 👋
              </h1>

              <p className="text-xs text-gray">
                What event are you planning today?
              </p>
            </div>

            <div className="flex items-center gap-2">
              <img
                src={plannerheadshot}
                alt="Planner head shot"
                className="h-10 w-10 rounded-full object-cover"
              />

              <div>
                <h4 className="text-sm font-semibold leading-tight">
                  Sarah Adeyemi
                </h4>

                <span className="text-xs text-gray">Planner</span>
              </div>
            </div>
          </header>

          <hr className="mt-6 border-gray-200" />

          <main className="overflow-x-hidden">
            <div className="flex justify-between items-center p-5">
              <h2 className="font-semibold text-md">Enquiry Status</h2>
              <a href="" className="text-xs text-primary">
                View all enquires
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
              {/* first card container with 2 inner card */}
              <div className="first-card flex flex-col px-5 py-4 gap-3 border border-gray rounded-2xl">
                <div className="flex items-center justify-between">
                  <img
                    src={plannerresponse2}
                    alt="Planner Response Icon"
                    className="w-9"
                  />
                  <span className="font-semibold text-lg">3</span>
                </div>

                <div className="">
                  <h4 className="text-xs font-semibold">
                    Waiting for Response
                  </h4>
                  <span className="text-xs text-gray">
                    Awaiting vendor reply
                  </span>
                </div>
              </div>

              {/* second card container with 2 inner card */}
              <div className="second-container flex flex-col px-5 py-4 gap-3 border border-gray rounded-2xl">
                <div className="flex items-center justify-between">
                  <img src={planneraccepted} alt="Planner Accepted Icon" />
                  <span className="font-semibold text-lg">5</span>
                </div>

                <div>
                  <h4 className="text-xs font-semibold">Accepted</h4>
                  <p className="text-xs text-gray">Confirmed bookings</p>
                </div>
              </div>

              {/* third card  container with 2 inner card */}
              <div className="third-card flex flex-col px-5 py-4 gap-3 border border-gray rounded-2xl">
                <div className="flex items-center justify-between">
                  <img
                    src={plannercompleted}
                    alt="Planner Completed Icon"
                    className="w-9"
                  />
                  <span className="font-semibold text-lg">12</span>
                </div>

                <div>
                  <h4 className="text-xs font-semibold">Completed</h4>
                  <p className="text-xs text-gray">Event concluded</p>
                </div>
              </div>
            </div>
            <section className="mt-10">
              <div className="flex flex-col gap-4 p-5">
                <h2 className="font-semibold text-md">
                  What type of event are you planning?
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                  <div className="border border-primary p-5  rounded-2xl h-24 flex flex-col justify-center items-center gap-3">
                    <img src={wedding} alt="Wedding Image" className="w-8" />
                    <span className="font-semibold text-xs">Wedding</span>
                  </div>

                  <div className="border border-gray p-5  rounded-2xl h-24 flex flex-col justify-center items-center gap-3">
                    <img src={birthday} alt="birthday image" className="w-8" />
                    <span className="font-semibold text-xs">Birthday</span>
                  </div>

                  <div className="border border-gray p-5  rounded-2xl h-24 flex flex-col justify-center items-center gap-3">
                    <img src={naming} alt="Naming image" className="w-8" />
                    <span className="font-semibold text-xs">
                      Naming Ceremony
                    </span>
                  </div>

                  <div className="border border-gray p-5  rounded-2xl h-24 flex flex-col justify-center items-center gap-3">
                    <img
                      src={conference}
                      alt="conference image"
                      className="w-8"
                    />
                    <span className="font-semibold text-xs">conference</span>
                  </div>

                  <div className="border border-gray p-5  rounded-2xl h-24 flex flex-col justify-center items-center gap-3">
                    <img
                      src={booklaunch}
                      alt="booklaunch image"
                      className="w-8"
                    />
                    <span className="font-semibold text-xs">book launch</span>
                  </div>

                  <div className="border border-gray p-5  rounded-2xl h-24 flex flex-col justify-center items-center gap-3">
                    <img
                      src={graduation}
                      alt="graduation image"
                      className="w-8"
                    />
                    <span className="font-semibold text-xs">graduation</span>
                  </div>

                  <div className="border border-gray p-5  rounded-2xl h-24 flex flex-col justify-center items-center gap-3">
                    <img
                      src={coparatevent}
                      alt="coparatevent image"
                      className="w-8"
                    />
                    <span className="font-semibold text-xs">
                      coparate Event
                    </span>
                  </div>
                </div>
              </div>
            </section>
            {/* Recommended videos section */}
            <section className="mt-3">
              <div className="flex gap-4 p-5  justify-between items-center ">
                <h2 className="font-semibold text-md">Recommended Videos</h2>
                <a href="" className="text-xs text-primary">
                  View all
                </a>
              </div>

              <div className="grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {recommendedVendors.map((vendor) => (
                  <div
                    key={vendor.id}
                    className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Vendor Image */}
                    <img
                      src={vendor.image}
                      alt={vendor.heading}
                      className="w-full h-28 object-cover rounded-t-2xl"
                    />

                    {/* Vendor Details */}
                    <div className="flex items-center justify-between p-4">
                      <div>
                        <h3 className="text-sm font-semibold text-text">
                          {vendor.heading}
                        </h3>

                        <p className="mt-1 text-[11px] font-medium text-primary">
                          {vendor.description}
                        </p>
                      </div>

                      <img
                        src={vendor.icon}
                        alt={`${vendor.heading} logo`}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    </div>

                    {/* Vendor Location */}
                    <div className="flex items-center gap-2 px-4 pb-2">
                      <img
                        src={vendor.location}
                        alt="Location"
                        className="h-3 w-3"
                      />

                      <p className="text-xs text-gray">{vendor.locationText}</p>
                    </div>

                    {/* Vendor Rating */}
                    <div className="flex items-center gap-2 px-4 pb-3 pt-1">
                      <img
                        src={vendor.vendorStar}
                        alt="Rating"
                        className="h-3 w-3"
                      />

                      <p className="text-xs font-semibold">
                        {vendor.vendorRating}
                      </p>
                    </div>

                    {/* Vendor Profile Description */}
                    <div className="px-4">
                      <p
                        className="text-xs leading-5 text-gray font-medium min-h-[60px]"
                        title={vendor.vendorDescription}
                      >
                        {vendor.vendorDescription}
                      </p>
                    </div>

                    {/* Vendor Pricing */}
                    <div className="mt-auto flex items-center justify-between border-t border-gray-200 p-4">
                      <div>
                        <h3 className="text-xs text-gray">
                          {vendor.startPrice}
                        </h3>

                        <p className="mt-1 text-xs font-bold">{vendor.price}</p>
                      </div>

                      <Link
                        to={`/vendor/${vendor.id}`}
                        className="rounded border border-primary px-2 py-1 text-[11px] font-medium text-primary hover:bg-primary hover:text-white transition"
                      >
                        {vendor.profileBtn}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <PlannerServiceCategory />
            <PlannerFeaturePortfolio />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PlannerSideBar;
