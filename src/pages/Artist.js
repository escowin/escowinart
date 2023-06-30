import portfolioData from "../assets/data";
import About from "../components/About";
import Work from "../components/Work";
import "../assets/css/artist.css";

function Artist() {
  return (
    <>
      <About artist={portfolioData.about} />
      <Work graphicNovels={portfolioData.graphicNovels} />
    </>
  );
}

export default Artist;
