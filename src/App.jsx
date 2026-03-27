import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Homepage from "./pages/Homepage";
import Artist from "./pages/Artist";
import PortfolioPage from "./pages/PortfolioPage";
// components
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./assets/css/index.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/artist" element={<Artist />} />
            <Route
              path="/fine-art"
              element={<PortfolioPage key="fineArt" portfolioKey="fineArt" />}
            />
            <Route
              path="/illustration"
              element={
                <PortfolioPage key="illustration" portfolioKey="illustration" />
              }
            />
            <Route
              path="/graphic-design"
              element={
                <PortfolioPage
                  key="graphicDesign"
                  portfolioKey="graphicDesign"
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
