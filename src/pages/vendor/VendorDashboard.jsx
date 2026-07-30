import { Link, useNavigate } from "react-router-dom";
import eventconnect from "../../assets/logos/eventconnect.svg";

import BloomCoEvents from "../../assets/icons/BloomCoEvents.png";

import plannerdashboardhome from "../../assets/icons/plannerdashboardhome.png";
// import plannerdashboardsearch from "../../assets/icons/plannerdashboardsearch.png";
import plannerdashboardenquire from "../../assets/icons/plannerdashboardenquire.png";
import plannerdashboardnotification from "../../assets/icons/plannerdashboardnotification.png";
import plannerdashboardprofile from "../../assets/icons/plannerdashboardprofile.png";
import plannerdashboardsetting from "../../assets/icons/plannerdashboardsetting.png";
import logout from "../../assets/icons/logout.svg";

import VendorMain from "../../components/VendorMain";
import Footer from "../../components/Footer";

function VendorDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (!confirmLogout) return;

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("hasAccount");

    navigate("/sign-in", { replace: true });
  };

  const plannerIcons = [
    {
      id: 1,
      icon: plannerdashboardhome,
      text: "Home",
    },
    // {
    //   id: 2,
    //   icon: plannerdashboardsearch,
    //   text: "Discover Vendors",
    // },
    {
      id: 3,
      icon: plannerdashboardenquire,
      text: "Enquiries",
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
    {
      id: 7,
      icon: logout,
      text: "Logout",
      action: handleLogout,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <aside className="w-full lg:w-72 shrink-0 border-b lg:border-b-0 lg:border-r border-border bg-white px-4 sm:px-6 py-6">
        <div className="flex gap-5">
          <Link to="/">
            <img
              src={eventconnect}
              alt="EventConnect"
              className="w-28 cursor-pointer sm:w-32 lg:w-36"
            />
          </Link>
        </div>

        <hr className="mt-6 border-gray-200" />

        {plannerIcons.map((icon) => (
          <div
            key={icon.id}
            onClick={icon.action}
            className="mt-2 flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-light-blue"
          >
            <img src={icon.icon} alt={icon.text} className="h-4 w-4" />
            <span className="text-xs font-medium text-text">{icon.text}</span>
          </div>
        ))}

        <div className="mt-24 rounded-xl bg-[#E2E8F0] p-5 text-white">
          <h3 className="text-sm font-semibold text-primary">Upgrade to Pro</h3>

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
              Good Morning, Bloom & CO Events.👋
            </h1>

            <p className="text-xs text-gray">
              You're available and have 3 new enquires today.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <img
              src={BloomCoEvents}
              alt="Planner head shot"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <h4 className="text-sm font-semibold leading-tight">
                Bllom & Co
              </h4>

              <span className="text-xs text-gray">Vendor</span>
            </div>
          </div>
        </header>

        <hr className="mt-6 border-gray-200" />

        <main className="overflow-x-hidden">
          <VendorMain />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default VendorDashboard;
