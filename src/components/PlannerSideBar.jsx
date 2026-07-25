import eventconnect from "../assets/logos/eventconnect.svg";

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

          <div className="mt-12 rounded-xl bg-[#2563EB] p-5 text-white">
            <h3 className="text-sm font-semibold">Upgrade to Pro</h3>

            <p className="mt-2 mb-2 text-xs text-blue-100 max-w-full">
              Discover more vendors, send unlimited enquiries, and unlock
              premium planning features.
            </p>

            <a
              href=""
              className="mt-5 w-full border border-border rounded-md text-[12px] bg-white py-1 px-4 text-primary transition hover:bg-gray-100"
            >
              Upgrade Now
            </a>
          </div>
        </aside>

        <div className="flex flex-col w-full">
          <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 py-4">
            {/* className="p-4 flex w-full justify-between items-center mr-3" */}
            <div className="">
              <h1 className="font-semibold text-base">
                Good Morning, Sarah 👋
              </h1>
              <p className="text-xs text-gray">
                What event are you plaing today?
              </p>
            </div>

            <div>a
              <h4 className="text-sm font-semibold">Sarah Adeyemi</h4>
              <span className="text-xs text-gray">Planner</span>
            </div>
          </header>

          <hr className="mt-6 border-gray-200" />

          <main className="overflow-x-hidden">s
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

              <div></div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PlannerSideBar;
