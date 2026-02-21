import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Homepage from "./pages/Homepage";
import Artist from "./pages/Artist";
import FineArt from "./pages/FineArt";
import Illustration from "./pages/Illustration";
import GraphicDesign from "./pages/GraphicDesign";
// components
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./assets/css/index.css"

function App() {

  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/fine-art" element={<FineArt />} />
            <Route path="/illustration" element={<Illustration />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
