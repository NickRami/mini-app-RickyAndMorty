import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm">
        Hecho con 💚 por Rama
      </footer>
    </div>
  );
};

export default Layout;
