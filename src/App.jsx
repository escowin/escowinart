import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Keep initial route synchronous for LCP; lazy-load secondary routes.
import Homepage from "./pages/Homepage";
// components
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./assets/css/index.css";

const Artist = lazy(() => import("./pages/Artist"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Suspense fallback={null}>
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
                  <PortfolioPage
                    key="illustration"
                    portfolioKey="illustration"
                  />
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
          </Suspense>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
