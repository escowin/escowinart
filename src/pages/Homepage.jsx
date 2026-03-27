import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { portfolio, format } from "../utils/helpers";
import { images } from "../data/homepage-img";
import "../assets/css/homepage.css";

import lcpWebp from "../assets/img/fine-art/edwin-escobar-set-002.webp?url";
import lcpJpg from "../assets/img/fine-art/edwin-escobar-set-002.jpg?url";

/** Pinned LCP image (matches preload in src/lcp-preload.js). */
const LCP_FILENAME = "edwin-escobar-set-002.jpg";

const IMG_SIZES = "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw";

const lazyImageModules = import.meta.glob("../assets/img/**/*.{jpg,jpeg,png,webp}", {
  query: "?url",
  import: "default",
});

/**
 * Resolves the image path key for a portfolio item (sync helper for path construction).
 * @param {string} art - Portfolio category key
 * @param {string|null} imgFile - Filename from images array
 * @param {string} [suffix=""] - Viewport suffix for software screenshots
 */
function pickImageFile(art, imgFile, suffix = "") {
  let file = imgFile;
  if (art === "software" && images.software?.length) {
    const viewportMatches = images.software.filter((name) =>
      name.includes(suffix)
    );
    const pool =
      viewportMatches.length > 0 ? viewportMatches : images.software;
    file = pool[Math.floor(Math.random() * pool.length)];
  }
  return file;
}

async function resolveImage(art, imgFile, suffix) {
  const file = pickImageFile(art, imgFile, suffix);
  if (!file) {
    return { kind: "img", src: "" };
  }
  const dir = format.kebab(art);
  const basePath = `../assets/img/${dir}/${file}`;
  const webpPath = basePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  const loadWebp = lazyImageModules[webpPath];
  const loadFallback = lazyImageModules[basePath];

  if (loadWebp && loadFallback) {
    const [webp, fallback] = await Promise.all([loadWebp(), loadFallback()]);
    return { kind: "picture", webp, fallback };
  }
  if (loadFallback) {
    return { kind: "img", src: await loadFallback() };
  }
  return {
    kind: "img",
    src: new URL(basePath, import.meta.url).href,
  };
}

function PortfolioFigure({ resolved, alt, fetchpriority, loading }) {
  if (resolved.kind === "picture") {
    return (
      <picture>
        <source srcSet={resolved.webp} type="image/webp" />
        <img
          className="portfolio-img"
          src={resolved.fallback}
          alt={alt}
          fetchpriority={fetchpriority}
          loading={loading}
          sizes={IMG_SIZES}
          decoding="async"
        />
      </picture>
    );
  }
  return (
    <img
      className="portfolio-img"
      src={resolved.src}
      alt={alt}
      fetchpriority={fetchpriority}
      loading={loading}
      sizes={IMG_SIZES}
      decoding="async"
    />
  );
}

/**
 * @param {string} portfolioKey
 * @param {string} githubUrl
 * @returns {{ type: "link" | "external"; to?: string; url?: string }}
 */
function getPortfolioTarget(portfolioKey, githubUrl) {
  if (portfolioKey === "software") {
    return { type: "external", url: githubUrl };
  }
  return { type: "link", to: `/${format.kebab(portfolioKey)}` };
}

function Homepage() {
  const github = "https://escowin.github.io/portfolio";

  const portfolios = useMemo(() => {
    const basePortfolios = portfolio.filter((key) => !key.includes("about"));
    return basePortfolios.includes("software")
      ? basePortfolios
      : [...basePortfolios, "software"];
  }, []);

  const randomImage = useMemo(
    () =>
      Object.fromEntries(
        portfolios.map((art) => {
          if (art === "fineArt") {
            return [art, LCP_FILENAME];
          }
          if (art === "software") {
            return [art, null];
          }
          const imgs = images[art];
          const img =
            imgs?.length > 0
              ? imgs[Math.floor(Math.random() * imgs.length)]
              : null;
          return [art, img];
        })
      ),
    [portfolios]
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

  const [tailCards, setTailCards] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadTail() {
      const out = [];
      for (let i = 1; i < portfolios.length; i++) {
        const art = portfolios[i];
        const imgFile = art === "software" ? null : randomImage[art];
        const target = getPortfolioTarget(art, github);
        if (target.type === "link" && !imgFile) {
          continue;
        }
        const resolved = await resolveImage(art, imgFile, suffix);
        if (cancelled) return;
        out.push({
          art,
          target,
          resolved,
        });
      }
      if (!cancelled) {
        setTailCards(out);
      }
    }

    loadTail();
    return () => {
      cancelled = true;
    };
  }, [portfolios, randomImage, suffix]);

  const firstTarget = getPortfolioTarget("fineArt", github);
  const fineArtLabel = format.sentence("fineArt");

  return (
    <section
      className="section"
      id="homepage"
      aria-label="Portfolios showcasing fine art, illustration, graphic design, and software engineering"
    >
      <article className="portfolio">
        {firstTarget.type === "link" ? (
          <Link to={firstTarget.to}>
            <picture>
              <source srcSet={lcpWebp} type="image/webp" />
              <img
                className="portfolio-img"
                src={lcpJpg}
                alt={fineArtLabel}
                fetchpriority="high"
                sizes={IMG_SIZES}
                decoding="async"
              />
            </picture>
            <p>{fineArtLabel}</p>
          </Link>
        ) : null}
      </article>

      {tailCards === null
        ? portfolios.slice(1).map((art) => (
            <article
              key={`placeholder-${art}`}
              className="portfolio"
              aria-hidden="true"
            >
              <div
                className="portfolio-img portfolio-img--placeholder"
                role="presentation"
              />
            </article>
          ))
        : tailCards.map(({ art, target, resolved }) => {
            const label = format.sentence(art);
            const content = (
              <>
                <PortfolioFigure
                  resolved={resolved}
                  alt={label}
                  loading="lazy"
                  fetchpriority="low"
                />
                <p>{label}</p>
              </>
            );

            return (
              <article key={art} className="portfolio">
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
          })}
    </section>
  );
}

export default Homepage;
