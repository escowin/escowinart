import { Link } from "react-router-dom";
import "../assets/css/homepage.css";
import { portfolio, format } from "../utils/helpers";

function Homepage() {
  console.log(portfolio.filter(key => !key.includes("about")))

  const portfolioImages = {
    fineart: [
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
      "days/edwin-escobar-days-20210306-0002.jpg"
    ],
    graphicDesign: [
      // "edwin-escobar-20210225-made-in-a-lab.png",
      // "edwin-escobar-20220515-cool-with-coolidge.jpg",
      // "edwin-escobar-20220515-stop-being-poor.png",
      // "edwin-escobar-20210220-capitalism.png",
      "edwin-escobar-20220515-mindlessly-parrot-social-media.png",
      // "Edwin Escobar 20211021 ACE Posters_CPR.png",
      // "Edwin Escobar 20211021 ACE Posters_History.png",
      // "Edwin Escobar 20211021 ACE Posters_Math.png",
      // "Edwin Escobar 20211021 ACE Posters_English.png"
    ],
  };


  const randomFineArt =
    portfolioImages.fineart[Math.floor(Math.random() * portfolioImages.fineart.length)];
  const randomIllustration =
    portfolioImages.illustration[
      Math.floor(Math.random() * portfolioImages.illustration.length)
    ];
  const randomGraphicDesign =
    portfolioImages.graphicDesign[
      Math.floor(Math.random() * portfolioImages.graphicDesign.length)
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
      {portfolio.map((art, i) => (
        <article key={i} className="portfolio" id={`random-${format.kebab(art)}`}>
          <Link to={`/${format.kebab(art)}`}>
            <img className="random-img" alt={format.kebab(art)} src={require(`../assets/images/${art}/${randomFineArt}`)} />
            <p>{format.kebab(art)}</p>
          </Link>
        </article>
      ))}
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
