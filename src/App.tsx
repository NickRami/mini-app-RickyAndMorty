import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/pages-home";

function App() {
  return (
    <>
      <main className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
