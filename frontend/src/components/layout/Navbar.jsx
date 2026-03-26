import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

        {/* logo */}
        <Link
          to="/about"
          className="font-display text-xl font-bold tracking-tight"
        >
          Fiona Spencer
        </Link>

        {/* desktop navigation */}
        <div className="hidden items-center gap-10 md:flex">

          <Link to="/about" className="minimal-link">
            About
          </Link>

          <Link to="/contact" className="minimal-link">
            Contact
          </Link>

          <Link to="/resume" className="minimal-link">
            Resume
          </Link>
        </div>

        {/* mobile menu button */}
        <button className="text-2xl md:hidden">
          ☰
        </button>

      </nav>
    </header>
  );
}