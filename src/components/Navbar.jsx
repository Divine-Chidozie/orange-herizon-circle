import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import eventconnect from "../assets/logos/eventconnect.svg";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-border shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img src={eventconnect} alt="EventConnect Logo" className="w-36" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-gray">
            <li>
              <ScrollLink
                to="categories"
                smooth={true}
                duration={200}
                offset={-90}
                spy={true}
                className="cursor-pointer hover:text-primary transition"
              >
                Categories
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="why-us"
                smooth={true}
                duration={200}
                offset={-90}
                spy={true}
                className="cursor-pointer hover:text-primary transition"
              >
                Why Us
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="how-it-works"
                smooth={true}
                duration={200}
                offset={-90}
                spy={true}
                className="cursor-pointer hover:text-primary transition"
              >
                How It Works
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="vendors"
                smooth={true}
                duration={200}
                offset={-90}
                spy={true}
                className="cursor-pointer hover:text-primary transition"
              >
                Vendors
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="faq"
                smooth={true}
                duration={200}
                offset={-90}
                spy={true}
                className="cursor-pointer hover:text-primary transition"
              >
                FAQ
              </ScrollLink>
            </li>
          </ul>
        </nav>

        {/* Sign Up Button */}
        <Link
          to="/sign-up"
          className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
