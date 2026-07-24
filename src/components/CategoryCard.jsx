import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";

import decorationimg from "../assets/images/decorationimg.png";
import cateringimg from "../assets/images/cateringimg.png";
import photographyimg from "../assets/images/photographyimg.png";
import musicimg from "../assets/images/musicimg.png";
import venueimg from "../assets/images/venueimg.png";
import stageimg from "../assets/images/stageimg.png";

const CategoryCard = () => {
  return (
    <section className="py-16 mx-auto max-w-7xl px-6" id="categories">
      {/* Heading */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
        <motion.div
          className="lg:w-1/2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">Every Vendor Your Event Needs</h2>

          <p className="text-gray mt-2 max-w-md">
            Browse by category and connect with specialists who bring your
            vision to life.
          </p>
        </motion.div>

        <Link
          to="/"
          className="text-primary text-sm font-medium hover:underline"
        >
          View All Categories →
        </Link>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Decoration */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={decorationimg}
            alt="Decoration"
            className="w-full h-58 object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="font-semibold">Decoration & Styling</h4>
            <p className="text-sm">1,240 Vendors</p>
          </div>
        </div>

        {/* Catering */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={cateringimg}
            alt="Catering"
            className="w-full h-58 object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="font-semibold">Catering & Cakes</h4>
            <p className="text-sm">980+ Vendors</p>
          </div>
        </div>

        {/* Photography */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={photographyimg}
            alt="Photography"
            className="w-full h-58 object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="font-semibold">Photography & Video</h4>
            <p className="text-sm">1,510+ Vendors</p>
          </div>
        </div>

        {/* Music */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={musicimg}
            alt="Music"
            className="w-full h-58 object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="font-semibold">Music & Entertainment</h4>
            <p className="text-sm">760+ Vendors</p>
          </div>
        </div>

        {/* Venue */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={venueimg}
            alt="Venue"
            className="w-full h-58 object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="font-semibold">Venues & Spaces</h4>
            <p className="text-sm">540+ Vendors</p>
          </div>
        </div>

        {/* Stage */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={stageimg}
            alt="Stage & Lighting"
            className="w-full h-58 object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="font-semibold">Stage & Lighting</h4>
            <p className="text-sm">430+ Vendors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCard;
