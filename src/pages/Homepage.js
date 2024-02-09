import { Link } from "react-router-dom";
import "../assets/css/homepage.css";

function Homepage() {
  const portfolios = {
    fineart: [
      "edwin-escobar-set-001.jpg",
      "edwin-escobar-set-002.jpg",
      "edwin-escobar-set-003.jpg",
      "edwin-escobar-set-004.jpg",
      "edwin-escobar-set-005.jpg",
    ],
    illustration: [
      "bluestrawberry/edwin-escobar-20171018-bluestrawberry-01.jpg",
      "bluestrawberry/edwin-escobar-20171025-bluestrawberry-02.jpg",
      "bluestrawberry/edwin-escobar-20171112-bluestrawberry-03.jpg",
      "bluestrawberry/edwin-escobar-20180502-bluestrawberry-04.jpg",
      "bluestrawberry/edwin-escobar-20180509-bluestrawberry-05.jpg",
      "bluestrawberry/edwin-escobar-20180516-bluestrawberry-06.jpg",
      "bluestrawberry/edwin-escobar-20180523-bluestrawberry-07.jpg",
      "bluestrawberry/edwin-escobar-20180530-bluestrawberry-08.jpg",
      "bluestrawberry/edwin-escobar-20200819-bluestrawberry-hungover-03.jpg",
      "bluestrawberry/edwin-escobar-20201002-bluestrawberry-gertrude.jpg",
    ],
    graphicDesign: [
      "edwin-escobar-20210225-made-in-a-lab.png",
      "edwin-escobar-20220515-cool-with-coolidge.jpg",
      "edwin-escobar-20220515-stop-being-poor.png",
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

  let suffix = "";
  if (window.matchMedia("(min-width: 1024px)").matches) {
    suffix = "-lg";
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    suffix = "-md";
  } else if (
    !window.matchMedia("(min-width: 768px)").matches &&
    !window.matchMedia("(min-width: 1024px)").matches
  ) {
    suffix = "-sm";
  }

  return (
    <section className="section" id="homepage">
      <article className="portfolio" id="random-fineart">
        <Link to={"/fine-art"}>
          <img
            className="random-img"
            alt="fine art"
            src={require(`../assets/images/fineart/${randomFineArt}`)}
          />
          <p>Fine art</p>
        </Link>
      </article>

      <article className="portfolio" id="random-illustration">
        <Link to={"/illustration"}>
          <img
            className="random-img"
            alt="illustration"
            src={require(`../assets/images/illustration/${randomIllustration}`)}
          />
          <p>Illustration</p>
        </Link>
      </article>

      <article className="portfolio" id="random-graphic">
        <Link to={"/graphic-design"}>
          <img
            className="random-img"
            alt="graphic design"
            src={require(`../assets/images/graphic-design/${randomGraphicDesign}`)}
          />
          <p>Graphic design</p>
        </Link>
      </article>

      <article
        className="portfolio"
        id="software"
        onClick={() =>
          window.open("https://escowin.github.io/portfolio", "_blank")
        }
      >
        <img
          className="random-img"
          alt="software"
          src={require(`../assets/images/software/portfolio${suffix}.jpg`)}
        />
        <p>Software</p>
      </article>
    </section>
  );
}

export default Homepage;
