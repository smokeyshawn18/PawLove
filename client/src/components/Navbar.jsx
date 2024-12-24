import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for the mobile menu toggle
import logo from "../assets/images/logo.jpg"; // Update the path to your logo image

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-pink-300 p-4 shadow-lg sticky top-0 z-50">
      {" "}
      {/* Make navbar sticky */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Dog Adoption Logo"
            className="h-12 mr-3 rounded-lg"
          />
          <span className="text-3xl font-extrabold text-black">PawLove</span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 text-lg font-bold">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Adoption List", path: "/adoption-list" },
            { name: "Post Adoption", path: "/post-adoption" },
            { name: "Donate Help", path: "/donate-help" },
          ].map((link, index) => (
            <NavLink
              key={index}
              to={link.path} // Direct link to specified paths
              className={({ isActive }) =>
                `text-black hover:bg-pink-400 hover:scale-105 hover:shadow-lg px-4 py-2 rounded transition duration-200 ease-in-out ${
                  isActive ? "bg-pink-400" : "" // Add active class
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-3xl focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <FiX className="text-black" />
            ) : (
              <FiMenu className="text-black" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-pink-400 text-center py-4 space-y-4 mt-5 mb-4">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Adoption List", path: "/adoption-list" },
            { name: "Post Adoption", path: "/post-adoption" },
            { name: "Donate Help", path: "/donate-help" },
          ].map((link, index) => (
            <NavLink
              key={index}
              to={link.path} // Direct link to specified paths
              onClick={() => setMobileMenuOpen(false)} // Close menu on link click
              className={({ isActive }) =>
                `block text-black text-xl font-bold hover:bg-pink-300 transition duration-200 px-4 py-2 rounded ${
                  isActive ? "bg-pink-300" : "" // Add active class
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
