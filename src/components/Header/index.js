import Logo from "../../assets/icons/logo-header.png";
import './index.css';

function Header() {
  return (
    <header>
      <section id="logo-container">
        <a href="/">
          <img src={Logo} id="logo" alt="Escowin Art" />
        </a>
      </section>
      <nav>
        <ul id="navigation">
          <li>
            <a href="/">Fine art</a>
          </li>
          <li>
            <a href="/">Illustration</a>
          </li>
          <li>
            <a href="/">Graphic design</a>
          </li>
          <li>
            <a href="/">Artist</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
