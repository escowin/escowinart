import "./index.css";

function Artist() {
  const artist = {
    name: "Edwin m. escobar",
    title: "artist",
    location: "austin, tx",
    contact: {
      github: "escowin",
      linkedIn: "escowin",
      email: "edwin@escowinart.com",
    },
    bio: "minimal",
  };

  return (
    <section id="artist">
      <article id="profile-pic"></article>

      <article>
        <h3>{artist.name}</h3>
        <p>{artist.location}</p>
        <ul id="contact-links">
          <li>{artist.contact.email}</li>
          <li>linkedin: {artist.contact.linkedIn}</li>
          <li>github: {artist.contact.github}</li>
        </ul>
      </article>
    </section>
  );
}

export default Artist;
