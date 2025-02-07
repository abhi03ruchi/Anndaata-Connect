import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import Logo from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar-container">
          <div className="logo-container">
            <a
              href="/"
              className="logo-link"
              onClick={(e) => handleNavClick(e, "/")}
            >
              <img src={Logo} alt="Food Donor Logo" className="logo-image" />
            </a>
          </div>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="nav-links">
            {["Home", "About", "Services", "Team","contributers"].map((item) => (
              <a
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : item === "About"
                    ? "#about"
                    : `/${item.toLowerCase()}`
                }
                onClick={(e) =>
                  handleNavClick(
                    e,
                    item === "Home"
                      ? "/"
                      : item === "About"
                      ? "#about"
                      : `/${item.toLowerCase()}`
                  )
                }
              >
                <i
                  className={
                    item === "Home"
                      ? "fas fa-home"
                      : item === "About"
                      ? "fas fa-info-circle"
                      : item === "Services"
                      ? "fas fa-cogs"
                      : item === "Team"
                      ? "fas fa-users"
                      : "fas fa-hands-helping"
                  }
                ></i>
                <span className="ml-2">{item}</span>
              </a>
            ))}
          </div>

          <div className="button-container">
            <Button />
          </div>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div
            className="mobile-menu-overlay"
            onClick={() => setMobileMenuOpen(false)}
          />
          <Dialog.Panel className="mobile-menu">
            <div className="mobile-menu-header">
              <a
                href="/"
                className="logo-container"
                onClick={(e) => handleNavClick(e, "/")}
              >
                <img src={Logo} alt="Food Donor Logo" className="h-8 w-auto" />
              </a>
              <button
                type="button"
                className="mobile-menu-button"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mobile-menu-links">
              {["Home", "About", "Services", "Team", "contributers"].map((item) => (
                <a
                  key={item}
                  href={
                    item === "Home"
                      ? "/"
                      : item === "About"
                      ? "#about"
                      : `/${item.toLowerCase()}`
                  }
                  onClick={(e) =>
                    handleNavClick(
                      e,
                      item === "Home"
                        ? "/"
                        : item === "About"
                        ? "#about"
                        : `/${item.toLowerCase()}`
                    )
                  }
                >
                  <i
                    className={
                      item === "Home"
                        ? "fas fa-home"
                        : item === "About"
                        ? "fas fa-info-circle"
                        : item === "Services"
                        ? "fas fa-cogs"
                        : item === "Team"
                        ? "fas fa-users"
                        : "fas fa-hands-helping"
                    }
                  ></i>
                  <span className="ml-2">{item}</span>
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Button />
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
