import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EventConnectWorks = () => {
  // ================= STATE =================
  const [activeTab, setActiveTab] = useState("planner");

  // ================= DATA =================
  const plannerFeatures = [
    {
      title: "Search & Shortlist",
      description:
        "Browse categories, filter by budget and location, and save vendors you love.",
    },
    {
      title: "Compare & Message",
      description:
        "Review portfolios, read verified reviews, and message vendors directly to get quotes.",
    },
    {
      title: "Book with Confidence",
      description:
        "Confirm details, agree on a package, and secure your booking through the platform.",
    },
  ];

  const vendorFeatures = [
    {
      title: "Create Your Profile",
      description:
        "Showcase your services, portfolio, pricing, and business information to attract planners.",
    },
    {
      title: "Receive Enquiries",
      description:
        "Get enquiries from event planners and respond quickly to increase your booking chances.",
    },
    {
      title: "Grow Your Business",
      description:
        "Build your reputation with verified reviews, manage bookings, and reach more customers.",
    },
  ];

  // ================= ACTIVE FEATURES =================
  const features = activeTab === "planner" ? plannerFeatures : vendorFeatures;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16" id="how-it-works">
      {/* ================= HEADER ================= */}
      <div className="mb-10 flex flex-col items-center gap-3">
        <h2 className="text-2xl font-bold">How EventConnect Works</h2>

        <p className="max-w-2xl text-center text-gray">
          A simple, transparent process—whether you're planning an event or
          growing your business.
        </p>

        {/* ================= TOGGLE BUTTONS ================= */}
        <div className="mt-4 flex items-center rounded-full border border-border bg-white p-1">
          <button
            onClick={() => setActiveTab("planner")}
            className="relative rounded-full px-5 py-2 text-sm font-medium"
          >
            {activeTab === "planner" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 35,
                }}
              />
            )}

            <span
              className={`relative z-10 transition-colors duration-300 ${
                activeTab === "planner" ? "text-white" : "text-gray"
              }`}
            >
              For Planners
            </span>
          </button>

          <button
            onClick={() => setActiveTab("vendor")}
            className="relative rounded-full px-5 py-2 text-sm font-medium"
          >
            {activeTab === "vendor" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 35,
                }}
              />
            )}

            <span
              className={`relative z-10 transition-colors duration-300 ${
                activeTab === "vendor" ? "text-white" : "text-gray"
              }`}
            >
              For Vendors
            </span>
          </button>
        </div>
      </div>

      {/* ================= FEATURE CARDS ================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-border bg-white p-6 shadow-sm"
            >
              <h4 className="mb-2 text-sm font-semibold">{feature.title}</h4>

              <p className="text-sm leading-6 text-gray">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default EventConnectWorks;
