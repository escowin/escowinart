import portfolioData from "../../assets/data";
import About from "../About";
import Work from "../Work";
import "./index.css";

function Artist() {
  return (
    <>
      <About artist={portfolioData.about} />
      <Work graphicNovels={portfolioData.graphicNovels} />
    </>
  );
}

export default Artist;
