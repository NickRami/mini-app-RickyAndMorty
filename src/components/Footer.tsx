const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-md py-6 mt-16">
      <div className="container mx-auto text-center text-sm text-gray-400">
        <p>
          © {year} Hecho por
          <span className="text-green-400 font-medium ml-2">Rama Silva</span>
        </p>
        <p className="mt-1 text-xs text-gray-600">
          Datos proporcionados por la API de{" "}
          <a
            href="https://rickandmortyapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            Rick and Morty
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
