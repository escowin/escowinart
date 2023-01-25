import Logo from "../../assets/icons/logo-header.png";
import "./index.css";
import Artist from "../Artist";
import FineArt from "../FineArt";
import Illustration from "../Illustration";
import GraphicDesign from "../GraphicDesign";


function Header(props) {
  const { currentComponent, setCurrentComponent } = props;

  const handleClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <header>
      <section id="logo-container">
        <a href="/">
          <img src={Logo} id="logo" alt="Escowin Art" />
        </a>
      </section>
      <nav>
        <ul id="navigation">
          <li
            className={currentComponent === "fineArt" ? "selected" : ""}
            onClick={() => handleClick("fineArt")}
          >
            Fine art
          </li>
          <li
            className={currentComponent === "illustration" ? "selected" : ""}
            onClick={() => handleClick("illustration")}
          >
            Illustration
          </li>
          <li
            className={currentComponent === "graphicDesign" ? "selected" : ""}
            onClick={() => handleClick("graphicDesign")}
          >
            Graphic design
          </li>
          <li
            className={currentComponent === "artist" ? "selected" : ""}
            onClick={() => handleClick("artist")}
          >
            Artist
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
