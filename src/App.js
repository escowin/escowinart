import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Artist from "./components/Artist";
import FineArt from "./components/FineArt";
import Illustration from "./components/Illustration";
import GraphicDesign from "./components/GraphicDesign";

function App() {
  // const [currentComponent, setCurrentComponent] = useState("homepage");

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
