import { useState, useEffect } from "react";
import portfolioData from "../assets/data";
import "../assets/css/fineart.css";
import "../assets/css/gallery.css";
import ArtNav from "../components/ArtNav";
import Gallery from "../components/Gallery";

function FineArt() {
  const paintings = portfolioData.fineArt;
  const seriesList = paintings.map((obj) => obj.series);

  const [series, setSeries] = useState(seriesList[0]);
  const [currentVol, setCurrentVol] = useState(paintings[0].volumes[0]);

  const currentSeries = paintings.find((obj) => obj.series === series);
  const volumes = currentSeries ? currentSeries.volumes : [];

  useEffect(() => {
    const active = paintings.find((obj) => obj.series === series);
    if (active?.volumes?.length) {
      setCurrentVol(active.volumes[0]);
    }
  }, [series]);

  return (
    <>
      <ArtNav
        links={seriesList}
        setDisplay={setSeries}
        navClass="fine-art-nav"
        activeLink={series}
      />
        <Gallery
          galleryId="fine-art-gallery"
          series={series}
          volumes={volumes}
          currentVol={currentVol}
          setCurrentVol={setCurrentVol}
          buildImageSrc={(img) =>
            new URL(`../assets/img/fine-art/${img}`, import.meta.url).href
          }
          getImageAlt={(_, __, vol) => `${series} · ${vol.title}`}
          worksTitle=""
        />
    </>
  );
}

export default FineArt;
