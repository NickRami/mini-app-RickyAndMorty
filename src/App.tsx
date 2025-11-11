import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/pages-home";
import Layout from "./layout/Layout";
import EpisodesSection from "./components/EpisodesSection";
import EpisodeDetail from "./pages/episode-details";
function App() {
  return (
    <>
      <main className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/episode/:id" element={<EpisodeDetail />} />
          </Route>
          <Route path="/episodes" element={<EpisodesSection />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
