import eventconnect from "../assets/logos/eventconnect.svg";
import footerinternent from "../assets/icons/footerinternent.png";
import footerat from "../assets/icons/footerat.png";
import footerchat from "../assets/icons/footerchat.png";
import footeremessage from "../assets/icons/footeremessage.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white" id="footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img
              src={eventconnect}
              alt="EventConnect Logo"
              className="w-40 mb-5 brightness-0 invert"
            />

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
              <li className="hover:text-white cursor-pointer">Find Vendors</li>
              <li className="hover:text-white cursor-pointer">
                Browse Categories
              </li>
              <li className="hover:text-white cursor-pointer">How It Works</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Reviews</li>
            </ul>
          </div>

          {/* For Vendors */}
          <div>
            <h4 className="text-lg font-semibold mb-5">For Vendors</h4>

            <ul className="space-y-3 text-sm text-gray-200">
              <li className="hover:text-white cursor-pointer">
                Become a Vendor
              </li>
              <li className="hover:text-white cursor-pointer">Vendor Login</li>
              <li className="hover:text-white cursor-pointer">
                Success Stories
              </li>
              <li className="hover:text-white cursor-pointer">Resources</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Company</h4>

            <ul className="space-y-3 text-sm text-gray-200">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-200">
          <p>© 2026 EventConnect. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <p className="hover:text-white cursor-pointer">Privacy Policy</p>
            <p className="hover:text-white cursor-pointer">Terms of Service</p>
            <p className="hover:text-white cursor-pointer">Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
