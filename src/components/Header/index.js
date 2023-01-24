import Logo from "../../assets/icons/logo-header.png";
import "./index.css";
import Artist from "../Artist";
import Portfolio from "../Portfolio";

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
            className={currentComponent === "portfolio" ? "selected" : ""}
            onClick={() => handleClick("portfolio")}
          >
            Portfolio
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
