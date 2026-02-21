import { Link } from "react-router-dom";
import { portfolio, format } from "../utils/helpers";
import "../assets/css/homepage.css";

// Vite's new URL() does not include files in subdirectories - use glob for paths with subdirs (e.g. illustration/bluestrawberry/...)
const imageModules = import.meta.glob("../assets/img/**/*.{jpg,jpeg,png}", {
  eager: true,
  query: '?url',
  import: 'default',
});

function getImageSrc(art, imgFile) {
  const path = `../assets/img/${format.kebab(art)}/${imgFile}`;
  return imageModules[path] ?? new URL(path, import.meta.url).href;
}

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
      "bluestrawberry/edwin-escobar-20171018-bluestrawberry-01.jpg",
      "bluestrawberry/edwin-escobar-20171025-bluestrawberry-02.jpg",
      "bluestrawberry/edwin-escobar-20171112-bluestrawberry-03.jpg",
      "bluestrawberry/edwin-escobar-20180502-bluestrawberry-04.jpg",
      "bluestrawberry/edwin-escobar-20180509-bluestrawberry-05.jpg",
      "bluestrawberry/edwin-escobar-20180516-bluestrawberry-06.jpg",
      "bluestrawberry/edwin-escobar-20180523-bluestrawberry-07.jpg",
      "bluestrawberry/edwin-escobar-20180530-bluestrawberry-08.jpg",
      // "bluestrawberry/edwin-escobar-20200819-bluestrawberry-hungover-03.jpg",
      // "bluestrawberry/edwin-escobar-20201002-bluestrawberry-gertrude.jpg",
      // "days/edwin-escobar-days-20210420-0026.jpg",
      // "row/edwin-escobar-2023-001_001.jpg",
      // "city-life/edwin-escobar-20170301-nat-sool.jpg",
      "days/edwin-escobar-days-20210306-0002.jpg",
    ],
    graphicDesign: [
      "edwin-escobar-20210225-made-in-a-lab.png",
      // "edwin-escobar-20220515-cool-with-coolidge.jpg",
      "edwin-escobar-20220515-stop-being-poor.png",
      // "edwin-escobar-20210220-capitalism.png",
      "edwin-escobar-20220515-mindlessly-parrot-social-media.png",
      "edwin-escobar-20211021-ace-posters_cpr.png",
      "edwin-escobar-20211021-ace-posters_history.png",
      "edwin-escobar-20211021-ace-posters_math.png",
      "edwin-escobar-20211021-ace-posters_english.png"
    ],
  };

  const randomImage = Object.fromEntries(
    portfolios.map((art) => {
      const imgs = images[art];
      const img =
        imgs?.length > 0
          ? imgs[Math.floor(Math.random() * imgs.length)]
          : null;
      return [art, img];
    })
  );

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
      {portfolios.map((art, i) => {
        const imgFile = randomImage[art];
        if (!imgFile) return null;
        return (
        <article key={i} className="portfolio">
          <Link to={`/${format.kebab(art)}`}>
            <img
              className="portfolio-img"
              alt={format.sentence(art)}
              src={getImageSrc(art, imgFile)}
            />
            <p>{format.sentence(art)}</p>
          </Link>
        </article>
        );
      })}

      <article
        className="portfolio"
        onClick={() => window.open(github, "_blank")}
      >
        <img
          className="portfolio-img"
          alt="software"
          src={new URL(`../assets/img/software/portfolio${suffix}.jpg`, import.meta.url).href}
        />
        <p>Software</p>
      </article>
    </section>
  );
}

export default Homepage;
