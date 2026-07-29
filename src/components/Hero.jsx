import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../animations/motion";

import trusted from "../assets/icons/trusted.png";
import findvendors from "../assets/icons/findvendors.png";
import becomevendor from "../assets/icons/becomevendor.png";

import star1 from "../assets/icons/star1.png";
import star2 from "../assets/icons/star2.png";
import star3 from "../assets/icons/star3.png";
import star4 from "../assets/icons/star4.png";
import star5 from "../assets/icons/star5.png";

import eventconnectbannerimg from "../assets/images/eventconnectbannerimg.png";

const Hero = () => {
  return (
    <section className="py-16 " id="home">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 lg:flex-row mt-20">
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Trusted Badge */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-[#10B981] px-3 py-1 text-sm opacity-90"
            whileHover={{ scale: 1.05 }}
          >
            <img src={trusted} alt="Trusted" className="h-4 w-4" />
            <p className="text-xs text-[#10B981]">
              Trusted by 12,000+ Organizers
            </p>
          </motion.div>

          {/* Heading */}
          <div className="mt-6">
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-text sm:text-5xl lg:text-6xl">
              Plan Unforgettable Events with Trusted Vendors
            </h1>

            <p className="mt-4 max-w-xl text-gray">
              Discover vendors, book services,, manage payments, and keep every
              detail of your event organized-all in one place.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/sign-in"
                className="flex items-center gap-2 rounded-full border border-border bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                <img src={findvendors} alt="Find Vendors" className="h-4 w-4" />
                Find Vendors
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/sign-in"
                className="flex items-center gap-2 rounded-full border-2 border-primary px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                <img
                  src={becomevendor}
                  alt="Become Vendor"
                  className="h-4 w-4"
                />
                Become a Vendor
              </Link>
            </motion.div>
          </div>

          {/* Ratings */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <img src={star1} alt="Star" className="h-3 w-3" />
            <img src={star2} alt="Star" className="h-3 w-3" />
            <img src={star3} alt="Star" className="h-3 w-3" />
            <img src={star4} alt="Star" className="h-3 w-3" />
            <img src={star5} alt="Star" className="h-3 w-3" />

            <p className="ml-2 text-sm text-gray">4.9/5 from 8,400+ reviews</p>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex w-full justify-center lg:w-1/2"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.img
            src={eventconnectbannerimg}
            alt="EventConnect Banner"
            className="w-full max-w-xl"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
