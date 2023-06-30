import Work from "../Work";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import portfolioData from "../../assets/data";
import "./index.css";

function Artist() {
  const artist = portfolioData.about

  return (
    <>
      <section className="section" id="artist">
        <article id="profile-pic"></article>
        <article id="contact">
          <h3>{artist.name}</h3>
          <p>{artist.location}</p>
          <ul id="contact-links">
            <li
              className="icon"
              onClick={() => window.open(`mailto:${artist.contact.email}`)}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
            <li
              className="icon"
              onClick={() => window.open(artist.contact.github, "_blank")}
            >
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li
              className="icon"
              onClick={() => window.open(artist.contact.linkedIn, "_blank")}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
          </ul>
        </article>
      </section>
      <Work/>
    </>
  );
}

export default Artist;
