import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo-header.png";
import "../assets/css/header.css";

function Header() {
  const navLinks = [
    {
      name: "Fine art",
      path: "fine-art",
    },
    {
      name: "Illustration",
      path: "illustration",
    },
    {
      name: "Graphic design",
      path: "graphic-design",
    },
    {
      name: "Artist",
      path: "artist",
    },
  ];

  return (
    <header className="dark">
      <section id="logo-container">
        <Link to={""}>
          <img src={Logo} id="logo" alt="Escowin Art" />
        </Link>
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
