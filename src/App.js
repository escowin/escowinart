import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Artist from "./components/Artist";
import Portfolio from "./components/Portfolio";

function App() {
  const [currentComponent, setCurrentComponent] = useState("artist");

  return (
    <>
      <Header currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} />
      <main>
        {(() => {
          switch (currentComponent) {
            case "artist":
              return <Artist />;
            case "portfolio":
              return <Portfolio />;
            default:
              return <div>test</div>;
          }
        })()}
      </main>
      <Footer />
    </>
  );
}

export default App;
