import { Link } from "react-router-dom";
import { portfolio, format } from "../utils/helpers";
import "../assets/css/homepage.css";

function Homepage() {
  const portfolios = portfolio.filter((key) => !key.includes("about"));
  const github = "https://escowin.github.io/portfolio";

  const images = {
    fineArt: [
      "edwin-escobar-set-001.jpg",
      "edwin-escobar-set-002.jpg",
      "edwin-escobar-set-003.jpg",
      "edwin-escobar-set-004.jpg",
      "edwin-escobar-set-005.jpg",
    ],
    illustration: [
      // "bluestrawberry/edwin-escobar-20171018-bluestrawberry-01.jpg",
      // "bluestrawberry/edwin-escobar-20171025-bluestrawberry-02.jpg",
      // "bluestrawberry/edwin-escobar-20171112-bluestrawberry-03.jpg",
      // "bluestrawberry/edwin-escobar-20180502-bluestrawberry-04.jpg",
      // "bluestrawberry/edwin-escobar-20180509-bluestrawberry-05.jpg",
      // "bluestrawberry/edwin-escobar-20180516-bluestrawberry-06.jpg",
      // "bluestrawberry/edwin-escobar-20180523-bluestrawberry-07.jpg",
      // "bluestrawberry/edwin-escobar-20180530-bluestrawberry-08.jpg",
      // "bluestrawberry/edwin-escobar-20200819-bluestrawberry-hungover-03.jpg",
      // "bluestrawberry/edwin-escobar-20201002-bluestrawberry-gertrude.jpg",
      // "days/edwin-escobar-days-20210420-0026.jpg",
      // "row/edwin-escobar-2023-001_001.jpg",
      // "city-life/edwin-escobar-20170301-nat-sool.jpg",
      "days/edwin-escobar-days-20210306-0002.jpg",
    ],
    graphicDesign: [
      // "edwin-escobar-20210225-made-in-a-lab.png",
      // "edwin-escobar-20220515-cool-with-coolidge.jpg",
      "edwin-escobar-20220515-stop-being-poor.png",
      // "edwin-escobar-20210220-capitalism.png",
      // "edwin-escobar-20220515-mindlessly-parrot-social-media.png",
      // "Edwin Escobar 20211021 ACE Posters_CPR.png",
      // "Edwin Escobar 20211021 ACE Posters_History.png",
      // "Edwin Escobar 20211021 ACE Posters_Math.png",
      // "Edwin Escobar 20211021 ACE Posters_English.png"
    ],
  };

  const randomImage = {
    fineArt: images.fineArt[Math.floor(Math.random() * images.fineArt.length)],
    illustration:
      images.illustration[
        Math.floor(Math.random() * images.illustration.length)
      ],
    graphicDesign:
      images.graphicDesign[
        Math.floor(Math.random() * images.graphicDesign.length)
      ],
  };

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
      {portfolios.map((art, i) => (
        <article key={i} className="portfolio">
          <Link to={`/${format.kebab(art)}`}>
            <img
              className="portfolio-img"
              alt={format.sentence(art)}
              src={require(`../assets/img/${format.kebab(art)}/${
                randomImage[art]
              }`)}
            />
            <p>{format.sentence(art)}</p>
          </Link>
        </article>
      ))}

      <article
        className="portfolio"
        onClick={() => window.open(github, "_blank")}
      >
        <img
          className="portfolio-img"
          alt="software"
          src={require(`../assets/img/software/portfolio${suffix}.jpg`)}
        />
        <p>Software</p>
      </article>
    </section>
  );
}

export default Homepage;
