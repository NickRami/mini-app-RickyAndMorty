// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md border-b border-green-400/30">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-green-400 drop-shadow-lg"
        >
          Rick & Morty
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/episodes"
            className="hover:text-green-300 transition-all duration-300"
          >
            Episodios
          </Link>
          <Link
            to="/locations"
            className="hover:text-green-300 transition-all duration-300"
          >
            Localizaciones
          </Link>

          {/* Botones Login / Register */}
          <Link
            to="/login"
            className="px-4 py-1 border border-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-black transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-1 bg-green-400 text-black rounded-lg hover:bg-green-300 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-green-400"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col px-6 pb-4 space-y-2 bg-black/80 backdrop-blur-md border-t border-green-400/30">
          <Link to="/characters" className="hover:text-green-300 transition">
            Personajes
          </Link>
          <Link to="/episodes" className="hover:text-green-300 transition">
            Episodios
          </Link>
          <Link to="/locations" className="hover:text-green-300 transition">
            Localizaciones
          </Link>
          <Link
            to="/login"
            className="px-4 py-1 border border-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-black transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-1 bg-green-400 text-black rounded-lg hover:bg-green-300 transition"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
