import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/pages-home";
import Layout from "./layout/Layout";
function App() {
  return (
    <>
      <main className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
