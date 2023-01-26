import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
    <section className="section" id="artist">
      <article id="profile-pic"></article>

      <article>
        <h3>{artist.name}</h3>
        <p>{artist.location}</p>
        <ul id="contact-links">
          <li className='icon'>
            <a href={`mailto:${artist.contact.email}`}>
              <FontAwesomeIcon icon={faEnvelope}/>
            </a>
          </li>
          <li className='icon'>
            <a href={artist.contact.github} target="_blank" rel='noreferrer'>
              <FontAwesomeIcon icon={faGithub}/>
            </a>
          </li>
          <li className='icon'>
            <a href={artist.contact.linkedIn} target="_blank" rel='noreferrer'>
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Artist;
