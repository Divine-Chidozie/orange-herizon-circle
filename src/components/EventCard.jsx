import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";

import verifiedicon from "../assets/icons/verifiedicon.png";
import reviewicon from "../assets/icons/reviewicon.png";
import pricingicon from "../assets/icons/pricingicon.png";
import messagingicon from "../assets/icons/messagingicon.png";
import portfolioicon from "../assets/icons/portfolioicon.png";
import bookingicon from "../assets/icons/bookingicon.png";

const features = [
  {
    icon: verifiedicon,
    title: "Vetted & Verified",
    description:
      "Every vendor passes through ID verification before they can list on EventConnect.",
  },
  {
    icon: reviewicon,
    title: "Real Reviews",
    description:
      "Ratings and photos come only from planners who actually booked, so you know what to expect.",
  },
  {
    icon: pricingicon,
    title: "Transparent Pricing",
    description:
      "Compare clear packages and starting prices upfront—no hidden fees.",
  },
  {
    icon: messagingicon,
    title: "Direct Messaging",
    description:
      "Chat, share briefs, and confirm details with vendors right inside the platform.",
  },
  {
    icon: portfolioicon,
    title: "Curated Portfolio",
    description:
      "See real work from real events so you can shortlist vendors that match your style.",
  },
  {
    icon: bookingicon,
    title: "Secure Bookings",
    description:
      "Protected payments and clear agreements keep both planners and vendors covered.",
  },
];

const EventCard = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16" id="why-us">
      {/* Section Header */}
      <motion.div
        className="flex flex-col items-center text-center gap-3 mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-dark">
          Why Planners Choose EventConnect
        </h2>

        <p className="max-w-2xl text-gray leading-7">
          We remove the guesswork from hiring vendors, making it easier to plan
          your event with confidence from start to finish.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
            }}
            className="h-full bg-white border border-border rounded-xl p-6 flex flex-col items-start transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-8 h-8 mb-5"
            />

            <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>

            <p className="text-gray text-sm leading-7">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventCard;
