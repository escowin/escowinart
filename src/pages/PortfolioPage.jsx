import { useState, useEffect, useLayoutEffect, useMemo } from "react";
import portfolioData from "../assets/data";import ArtNav from "../components/ArtNav";
import Gallery from "../components/Gallery";

/** @typedef {'fineArt' | 'illustration' | 'graphicDesign'} PortfolioDataKey */
const PORTFOLIO_CONFIG = {
  fineArt: {
    navClass: "fine-art-nav",
    galleryId: "fine-art-gallery",
    collapseSingleTab: false,
    buildImageSrc: (img) =>
      new URL(`../assets/img/fine-art/${img}`, import.meta.url).href,
    getGalleryProps: (series) => ({
      getImageAlt: (_, __, vol) => `${series} · ${vol.title}`,
      worksTitle: "",
    }),
  },
  illustration: {
    navClass: "illustration-nav",
    galleryId: "illustrations",
    collapseSingleTab: false,
    buildImageSrc: (img, series) =>
      new URL(
        `../assets/img/illustration/${series}/${img}`,
        import.meta.url
      ).href,
    getGalleryProps: () => ({}),
  },
  graphicDesign: {
    navClass: "graphic-design-nav",
    galleryId: "graphic-design",
    collapseSingleTab: false,
    buildImageSrc: (img) =>
      new URL(`../assets/img/graphic-design/${img}`, import.meta.url).href,
    getGalleryProps: (_, currentVol) => {
      const dataTitles = (currentVol?.images ?? []).map((imgFile) =>
        imgFile.split(".")[0].split(/[_-]/).pop()
      );
      return {
        getImageAlt: (_, i, vol) => `${vol.title} ${dataTitles[i] ?? ""}`,
        getDataTitle: (_, i) => dataTitles[i],
      };
    },
  },
};

/**
 * @param {{ portfolioKey: PortfolioDataKey }} props
 */
function PortfolioPage({ portfolioKey }) {
  const cfg = PORTFOLIO_CONFIG[portfolioKey];
  const rows = portfolioData[portfolioKey];

  const seriesList = useMemo(() => rows.map((obj) => obj.series), [rows]);

  const [series, setSeries] = useState(seriesList[0]);
  const [currentVol, setCurrentVol] = useState(rows[0]?.volumes[0]);

  const currentSeries = rows.find((obj) => obj.series === series);
  const volumes = currentSeries ? currentSeries.volumes : [];

  useLayoutEffect(() => {
    const data = portfolioData[portfolioKey];
    const first = data?.[0];
    if (!first?.volumes?.length) return;
    setSeries(first.series);
    setCurrentVol(first.volumes[0]);
  }, [portfolioKey]);

  useEffect(() => {
    const active = rows.find((obj) => obj.series === series);
    if (active?.volumes?.length) {
      setCurrentVol(active.volumes[0]);
    }
  }, [series, rows]);
  const galleryExtra = cfg.getGalleryProps(series, currentVol);

  return (
    <>
      <ArtNav
        links={seriesList}
        setDisplay={setSeries}
        navClass={cfg.navClass}
        activeLink={series}
        collapseSingleTab={cfg.collapseSingleTab}
      />
      <Gallery
        galleryId={cfg.galleryId}
        series={series}
        volumes={volumes}
        currentVol={currentVol}
        setCurrentVol={setCurrentVol}
        buildImageSrc={(img) => cfg.buildImageSrc(img, series)}
        {...galleryExtra}
      />
    </>
  );
}

export default PortfolioPage;
