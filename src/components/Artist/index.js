import Work from "../Work";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./index.css";

function Artist() {
  const artist = {
    name: "Edwin m. escobar",
    title: "artist",
    location: "austin, tx",
    contact: {
      github: "https://github.com/escowin",
      linkedIn: "https://www.linkedin.com/in/escowin/",
      email: "edwin@escowinart.com",
    },
    bio: "minimal",
  };

  return (
    // might turn this into its own component
    <>
      <section className="section" id="artist">
        <article id="profile-pic"></article>
        <article>
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
