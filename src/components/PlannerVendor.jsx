import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";

import vendorstar from "../assets/icons/vendorstar.png";
import vendorstar2 from "../assets/icons/vendorstar2.png";
import vendorstar3 from "../assets/icons/vendorstar3.png";
import vendorstar4 from "../assets/icons/vendorstar4.png";
import vendorstar5 from "../assets/icons/vendorstar5.png";
import vendorstar6 from "../assets/icons/vendorstar6.png";
import vendorstar7 from "../assets/icons/vendorstar7.png";
import vendorstar8 from "../assets/icons/vendorstar8.png";
import vendorstar9 from "../assets/icons/vendorstar9.png";
import vendorstar10 from "../assets/icons/vendorstar10.png";
import vendorstar11 from "../assets/icons/vendorstar11.png";
import vendorstar12 from "../assets/icons/vendorstar12.png";
import vendorstar13 from "../assets/icons/vendorstar13.png";
import vendorstar14 from "../assets/icons/vendorstar14.png";
import vendorstar15 from "../assets/icons/vendorstar15.png";

const PlannerVendor = () => {
  const testimonials = [
    {
      id: 1,
      stars: [vendorstar, vendorstar2, vendorstar3, vendorstar4, vendorstar5],
      description:
        "I planned my entire wedding through EventConnect. Every vendor was professional, the reviews were spot on, and I saved weeks of research.",
      name: "Chidinma Eze",
      occupation: "Bride, Lagos",
    },
    {
      id: 2,
      stars: [vendorstar6, vendorstar7, vendorstar8, vendorstar9, vendorstar10],
      description:
        "As a corporate event manager, I book vendors consistently. The transparent pricing and direct messaging make my job so much easier.",
      name: "Tunde Balogun",
      occupation: "Corporate Event Manager, Abuja",
    },
    {
      id: 3,
      stars: [
        vendorstar11,
        vendorstar12,
        vendorstar13,
        vendorstar14,
        vendorstar15,
      ],
      description:
        "Since joining as a vendor, EventConnect has become my biggest source of bookings. My portfolio does the selling for me.",
      name: "Amara Okafor",
      occupation: "Founder, Bloom & Co.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16" id="vendors">
      {/* Section Header */}
      <motion.div
        className="flex flex-col items-center text-center gap-3 mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Trusted by Planners & Vendors
        </h2>

        <p className="max-w-2xl text-gray">
          Thousands of successful events have been planned with confidence
          through EventConnect.
        </p>
      </motion.div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
            }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-5">
              {testimonial.stars.map((star, index) => (
                <img
                  key={index}
                  src={star}
                  alt={`Rating star ${index + 1}`}
                  className="w-4 h-4"
                />
              ))}
            </div>

            {/* Testimonial */}
            <p className="text-gray text-sm leading-7 italic">
              "{testimonial.description}"
            </p>

            {/* Reviewer */}
            <div className="mt-6 pt-4 border-t border-border">
              <h4 className="font-medium text-sm">{testimonial.name}</h4>

              <p className="text-xs text-gray">{testimonial.occupation}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlannerVendor;
