import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold">
          Fiona Spencer
        </Link>

        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>
    </header>
  );
}