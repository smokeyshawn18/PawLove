import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-pink-300 text-black py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h4 className="text-2xl mb-6 border-b-2 border-black pb-2 font-bold">
              Quick Links
            </h4>
            <ul className="space-y-4 font-bold">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Adoption List", path: "/adoption-list" },
                { name: "Post Adoption", path: "/post-adoption" },
                { name: "Donate Help", path: "/donate-help" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-xl  transition duration-300 hover:text-pink-800"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:pl-6">
            <h4 className="text-2xl mb-6 border-b-2 border-black pb-2 font-bold">
              Contact Us
            </h4>
            <p className="mb-3 text-xl font-semibold">
              <span>Email:</span>{" "}
              <a
                href="mailto:contact@pawlove.com"
                className="hover:underline transition duration-300 text-lg"
              >
                pawlovecontact47@gmail.com
              </a>
            </p>
            <p className="mb-3 text-xl font-semibold">
              <span>Phone:</span>{" "}
              <a
                href="tel:(+977)9801791084"
                className="hover:underline transition duration-300 text-lg"
              >
                (+977) 9801791084
              </a>
            </p>
            <p className="text-xl font-semibold">
              <span>Location:</span> 44600, Kathmandu, Bauddha-06
            </p>
          </div>

          {/* Social Media Links */}
          <div className="md:pl-6">
            <h4 className="text-2xl mb-6 border-b-2 border-black pb-2 font-bold">
              Follow Us
            </h4>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-10 h-10 hover:text-gray-700 transition duration-300" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="w-10 h-10 hover:text-gray-700 transition duration-300" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-10 h-10 hover:text-gray-700 transition duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl font-semibold">
            &copy; {new Date().getFullYear()} PawLove. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
