// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className="border-b border-white/10 backdrop-blur-md bg-black/30 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link to="/" className="text-xl font-bold text-green-400">
          Rick & Morty
        </Link>

        <div className="flex items-center gap-3">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:text-green-400">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost" className="text-white hover:text-green-400">
              About
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
