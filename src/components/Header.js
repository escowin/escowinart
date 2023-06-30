import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo-header.png";
import "../assets/css/header.css";

function Header() {
  // const { currentComponent, setCurrentComponent } = props;
  // console.log(props)
  // const handleClick = (component) => {
  //   setCurrentComponent(component);
  // };

  const navLinks = [
    {
      name: "Fine art",
      path: "fine-art"
    },
    {
      name: "Illustration",
      path: "illustration"
    },
    {
      name: "Graphic design",
      path: "graphic-design"
    },
    {
      name: "Artist",
      path: "artist"
    }
  ]

  return (
    <header className="dark">
      <section id="logo-container" 
      // onClick={() => handleClick("homepage")}
      >
        <img
          src={Logo}
          id="logo"
          alt="Escowin Art"
          // className={currentComponent === "homepage" ? "logo-selected" : ""}
        />
      </section>
      <nav>
        <ul id="navigation">
        {navLinks.map((navLink, i) => (
            <li key={i}>
              <Link to={`/${navLink.path}`}>{navLink.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
