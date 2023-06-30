import portfolioData from "../../assets/data"
import "./index.css";
// to-do | horizontal mousewheel scrolling

function FineArt() {
  const art = portfolioData.fineart
  const newOrder = art.reverse();

  function getDimensions(length, width) {
    return `${length} x ${width}`;
  };

  return (
    <section className="section" id="fine-art">
      {newOrder.map((item, setIndex) => (
        <article key={setIndex} className="artwork">
          <img
            src={require(`../../assets/images/fineart/${item.img}`)}
            alt={`${item.set} ${item.subtitle}`}
          />

          <div className="art-details">
            <h2>{`${item.set} ${item.subtitle}`}</h2>
            <p className="text-right medium">{item.medium}</p>

            {item.artworks.map((artwork, artworkIndex) => (
              <>
                <p key={`${artwork.title}}`}>{artwork.title}</p>
                <p key={artworkIndex} className="text-right">
                  {getDimensions(artwork.length, artwork.width)}
                </p>
              </>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export default FineArt;
