import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "@/assets/images/fs.svg";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: "Resume", path: "/resume" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-nav/80 text-nav-foreground backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* logo */}
        <Link
          to="/about"
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Fiona Spencer"
            className="h-16 w-auto invert"
          />
        </Link>

        {/* desktop navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="minimal-link">
              {link.name}
            </Link>
          ))}

          <ThemeToggle />
        </div>

        {/* mobile buttons */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 text-foreground transition"
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-background/70 backdrop-blur-xl px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="minimal-link"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}