import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import eventconnect from "../assets/logos/eventconnect.svg";
import footerinternent from "../assets/icons/footerinternent.png";
import footerat from "../assets/icons/footerat.png";
import footerchat from "../assets/icons/footerchat.png";
import footeremessage from "../assets/icons/footeremessage.png";

const Footer = () => {
  const handleComingSoon = (feature) => {
    alert(`${feature} page is coming soon.`);
  };

  return (
    <footer className="bg-primary text-white" id="footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link
              to="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <img
                src={eventconnect}
                alt="EventConnect Logo"
                className="w-40 mb-5 brightness-0 invert cursor-pointer"
              />
            </Link>

            <p className="text-sm leading-7 text-gray-200">
              The trusted marketplace connecting planners with vendors for
              unforgettable events.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {[footerinternent, footerat, footerchat, footeremessage].map(
                (icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer transition hover:scale-105"
                  >
                    <img
                      src={icon}
                      alt={`Social icon ${index + 1}`}
                      className="w-5 h-5"
                    />
                  </div>
                ),
              )}
            </div>
          </div>

          {/* For Planners */}
          <div>
            <h4 className="text-lg font-semibold mb-5">For Planners</h4>

            <ul className="space-y-3 text-sm text-gray-200">
              <li>
                <Link to="/sign-in" className="hover:text-white transition">
                  Find Vendors
                </Link>
              </li>
              <li>
                <ScrollLink
                  to="categories"
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-white"
                >
                  Browse Categories
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="how-it-works"
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-white"
                >
                  How It Works
                </ScrollLink>
              </li>
              <li
                onClick={() => handleComingSoon("Pricing")}
                className="cursor-pointer hover:text-white"
              >
                Pricing
              </li>
              <li
                onClick={() => handleComingSoon("Reviews")}
                className="cursor-pointer hover:text-white"
              >
                Reviews
              </li>
            </ul>
          </div>

          {/* For Vendors */}
          <div>
            <h4 className="text-lg font-semibold mb-5">For Vendors</h4>

            <ul className="space-y-3 text-sm text-gray-200">
              <li className="hover:text-white cursor-pointer">
                <Link to="/sign-up">Become a Vendor</Link>
              </li>
              <li className="hover:text-white cursor-pointer">
                <Link to="/sign-in">Vendor Login</Link>
              </li>
              <li
                onClick={() => handleComingSoon("Success Stories")}
                className="hover:text-white cursor-pointer"
              >
                Success Stories
              </li>
              <li
                onClick={() => handleComingSoon("Resources")}
                className="hover:text-white cursor-pointer"
              >
                Resources
              </li>
              <li
                onClick={() => handleComingSoon("Help Center")}
                className="hover:text-white cursor-pointer"
              >
                Help Center
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Company</h4>

            <ul className="space-y-3 text-sm text-gray-200">
              <li
                onClick={() => handleComingSoon("About Us")}
                className="hover:text-white cursor-pointer"
              >
                About Us
              </li>
              <li
                onClick={() => handleComingSoon("About Us")}
                className="hover:text-white cursor-pointer"
              >
                Careers
              </li>
              <li
                onClick={() => handleComingSoon("About Us")}
                className="hover:text-white cursor-pointer"
              >
                Press
              </li>
              <li
                onClick={() => handleComingSoon("Contact")}
                className="hover:text-white cursor-pointer"
              >
                Contact
              </li>
              <li
                onClick={() => handleComingSoon("Blog")}
                className="hover:text-white cursor-pointer"
              >
                Blog
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-200">
          <p>© 2026 EventConnect. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white">
              Terms of Service
            </Link>
            <p
              onClick={() => handleComingSoon("Cookies")}
              className="cursor-pointer hover:text-white"
            >
              Cookies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
