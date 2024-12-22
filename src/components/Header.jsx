import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/#aboutus", label: "About Us" },
    { path: "/gallery#gallery", label: "Photo Gallery" },
    { path: "/contact#contact", label: "Contact" },
    { path: "/authentication", label: "Login", isButton: true },
  ];

  return (
    <header>
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-sm z-50 px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="w-12 h-12 md:w-14 md:h-14">
              <img
                src="https://jrpschool.netlify.app/image2vector.svg"
                alt="logo"
                className="w-full h-full"
              />
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isButton ? (
                <Link
                  to={link.path}
                  key={link.label}
                  className="bg-amber-100 px-8 py-2 font-bold hover:bg-black hover:text-white border-2 border-amber-100 transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  to={link.path}
                  key={link.label}
                  className="text-white hover:text-amber-200 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Links */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 transition-all ease-in-out">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  to={link.path}
                  key={link.label}
                  className={`${
                    link.isButton
                      ? "bg-amber-100 px-8 py-2 font-bold hover:bg-black hover:text-white border-2 border-amber-100 transition-colors inline-block text-center"
                      : "text-white hover:text-amber-200 transition-colors"
                  }`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
