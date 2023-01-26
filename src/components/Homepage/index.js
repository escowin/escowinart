import "./index.css";

function Homepage() {
  const portfolios = {
    fineart: [
      "edwin-escobar-set-001.jpg",
      "edwin-escobar-set-002.jpg",
      "edwin-escobar-set-003.jpg",
    ],
    illustration: [
      "bluestrawberry/edwin-escobar-20171018-bluestrawberry-01.jpg",
      "bluestrawberry/edwin-escobar-20171025-bluestrawberry-02.jpg",
      "bluestrawberry/edwin-escobar-20171112-bluestrawberry-03.jpg",
    ],
    graphicDesign: [
      "edwin-escobar-20210225-made-in-a-lab.png",
      "edwin-escobar-20220515-cool-with-coolidge.jpg",
    ],
  };

  const randomFineArt =
    portfolios.fineart[Math.floor(Math.random() * portfolios.fineart.length)];
  const randomIllustration =
    portfolios.illustration[
      Math.floor(Math.random() * portfolios.illustration.length)
    ];
  const randomGraphicDesign =
    portfolios.graphicDesign[
      Math.floor(Math.random() * portfolios.graphicDesign.length)
    ];

  return (
    <section className="section" id="homepage">
      <article className="portfolio" id="random-fineart" >
        <img
          className="random-img"
          alt="fine art"
          src={require(`../../assets/images/fineart/${randomFineArt}`)}
        />
        <p>Fine art</p>
      </article>

      <article
        className="portfolio"
        id="random-illustration"
        style={{ backgroundImage: randomIllustration }}
      >
        <img
          className="random-img"
          alt="illustration"
          src={require(`../../assets/images/illustration/${randomIllustration}`)}
        />
        <p>Illustration</p>
      </article>

      <article
        className="portfolio"
        id="random-graphic"
        style={{ backgroundImage: randomGraphicDesign }}
      >
        <img
          className="random-img"
          alt="graphic design"
          src={require(`../../assets/images/graphic-design/${randomGraphicDesign}`)}
        />
        <p>Graphic design</p>
      </article>

      <article className="portfolio" id="software">
        <img
          className="random-img"
          alt="software"
          src={require(`../../assets/images/software/professional-portfolio.jpg`)}
        />
        <p>Software</p>
      </article>
    </section>
  );
}

export default Homepage;
