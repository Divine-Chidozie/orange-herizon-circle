import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import eventconnect from "../assets/logos/eventconnect.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hasAccount = !!localStorage.getItem("hasAccount");

  const navLinks = [
    { name: "Categories", id: "categories" },
    { name: "Why Us", id: "why-us" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Vendors", id: "vendors" },
    { name: "FAQ", id: "faq" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src={eventconnect} alt="EventConnect Logo" className="w-36" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-gray">
            {navLinks.map((link) => (
              <li key={link.id}>
                <ScrollLink
                  to={link.id}
                  smooth={true}
                  duration={400}
                  offset={-90}
                  spy={true}
                  className="cursor-pointer transition hover:text-primary"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Auth Button */}
        <div className="hidden md:block">
          {hasAccount ? (
            <Link
              to="/sign-in"
              className="rounded-md border border-primary px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
            >
              Sign In
            </Link>
          ) : (
            <Link
              to="/sign-up"
              className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Sign Up
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-gray transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <nav className="px-6 py-6">
              <ul className="flex flex-col gap-5 text-sm text-gray">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <ScrollLink
                      to={link.id}
                      smooth={true}
                      duration={400}
                      offset={-90}
                      onClick={closeMenu}
                      className="block cursor-pointer transition hover:text-primary"
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                ))}

                {/* Mobile Auth Button */}
                <li>
                  {hasAccount ? (
                    <Link
                      to="/sign-in"
                      onClick={closeMenu}
                      className="block rounded-md border border-primary px-5 py-3 text-center text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
                    >
                      Sign In
                    </Link>
                  ) : (
                    <Link
                      to="/sign-up"
                      onClick={closeMenu}
                      className="block rounded-md bg-primary px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                      Sign Up
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
