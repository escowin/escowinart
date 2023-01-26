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
  const [currentComponent, setCurrentComponent] = useState("fineart");

  return (
    <>
      <Header
        currentComponent={currentComponent}
        setCurrentComponent={setCurrentComponent}
      />
      <main>
        {(() => {
          switch (currentComponent) {
            case "artist":
              return <Artist/>;
            case "fineArt":
              return <FineArt/>;
            case "illustration":
              return <Illustration/>;
            case "graphicDesign":
              return <GraphicDesign/>;
            default:
              return <Homepage/>;
          }
        })()}
      </main>
      <Footer />
    </>
  );
}

export default App;
