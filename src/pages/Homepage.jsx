import { Link } from "react-router-dom";
import { portfolio, format } from "../utils/helpers";
import { images } from "../data/homepage-img";
import "../assets/css/homepage.css";

// Vite's new URL() does not include files in subdirectories - use glob for paths with subdirs (e.g. illustration/bluestrawberry/...)
const imageModules = import.meta.glob("../assets/img/**/*.{jpg,jpeg,png}", {
  eager: true,
  query: '?url',
  import: 'default',
});

/**
 * Resolves the image path for a portfolio item.
 * For software, uses viewport suffix (-lg, -md, -sm) to pick an appropriate
 * screenshot from the images array (e.g. sun-tracker-lg.png, portfolio-sm.jpg).
 * @param {string} art - Portfolio category key
 * @param {string|null} imgFile - Filename from images array (ignored for software when suffix provided)
 * @param {string} [suffix=""] - Viewport suffix for software screenshots
 */
function getImageSrc(art, imgFile, suffix = "") {
  let file = imgFile;
  if (art === "software" && images.software?.length) {
    const viewportMatches = images.software.filter((name) =>
      name.includes(suffix)
    );
    const pool =
      viewportMatches.length > 0 ? viewportMatches : images.software;
    file = pool[Math.floor(Math.random() * pool.length)];
  }
  const path = `../assets/img/${format.kebab(art)}/${file}`;
  return imageModules[path] ?? new URL(path, import.meta.url).href;
}

/**
 * Determines whether a portfolio item links in-app (Link) or externally (github).
 * Software projects link to the external GitHub portfolio; all others link in-app.
 * @param {string} portfolioKey - The portfolio category key (e.g. "fineArt", "software")
 * @param {string} githubUrl - The external GitHub portfolio URL
 * @returns {{ type: "link" | "external"; to?: string; url?: string }}
 */
function getPortfolioTarget(portfolioKey, githubUrl) {
  if (portfolioKey === "software") {
    return { type: "external", url: githubUrl };
  }
  return { type: "link", to: `/${format.kebab(portfolioKey)}` };
}

function Homepage() {
  const basePortfolios = portfolio.filter((key) => !key.includes("about"));
  const portfolios = basePortfolios.includes("software")
    ? basePortfolios
    : [...basePortfolios, "software"];
  const github = "https://escowin.github.io/portfolio";

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

  const galleryCards = () =>
    portfolios.map((art, i) => {
      const target = getPortfolioTarget(art, github);
      const imgFile = art === "software" ? null : randomImage[art];
      const imgSrc = getImageSrc(art, imgFile, suffix);

      if (target.type === "link" && !imgFile) return null;

      const content = (
        <>
          <img
            className="portfolio-img"
            alt={format.sentence(art)}
            src={imgSrc}
          />
          <p>{format.sentence(art)}</p>
        </>
      );

      return (
        <article key={i} className="portfolio">
          {target.type === "link" ? (
            <Link to={target.to}>{content}</Link>
          ) : (
            <a
              href={target.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              {content}
            </a>
          )}
        </article>
      );
    });

  return (
    <section
      className="section"
      id="homepage"
      aria-label="Portfolios showcasing fine art, illustration, graphic design, and software engineering"
    >
      {galleryCards()}
    </section>
  );
}

export default Homepage;
