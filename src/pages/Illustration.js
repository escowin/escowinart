import portfolioData from "../assets/data"
import "../assets/css/illustration.css";

function Illustration() {
  const illustrations = portfolioData.illustration
  const newOrder = illustrations.reverse();

  return (
    <>
      {newOrder.map((illustration) => (
        <section
          key={illustration.series}
          id={illustration.series}
          className="section"
        >
          <h2>{illustration.series}</h2>
          {illustration.volumes.map((volume) => (
            <article key={volume.title} id={volume.title} className="volume">
              <h3 className="title">{volume.title}<span className="md-hide">-</span></h3>
              <div className="img-wrapper">
                {volume.images.map((img) => (
                  <img
                    src={require(`../../assets/images/illustration/${illustration.series}/${img}`)}
                    key={img}
                    alt={volume.title}
                    className="illustration-img"
                  />
                ))}
              </div>
            </article>
          ))}
        </section>
      ))}
    </>
  );
}

export default Illustration;
