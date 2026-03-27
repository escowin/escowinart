import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

function About({ artist }) {
  return (
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
  );
}

export default About;
