import { useState, useEffect } from "react";
import portfolioData from "../assets/data";
import "../assets/css/illustration.css";
import ArtNav from "../components/ArtNav";
import Gallery from "../components/Gallery";

function Illustration() {
  // Illustration variables
  const illustrations = portfolioData.illustration;
  const seriesList = illustrations.flatMap((obj) => obj.series);

  // State variables are initially defined as the first indexed array-object
  const [series, setSeries] = useState(seriesList[0]);
  const [currentVol, setCurrentVol] = useState(illustrations[0].volumes[0]);

  // Volumes for the currently selected series only
  const currentSeries = illustrations.find((obj) => obj.series === series);
  const volumes = currentSeries ? currentSeries.volumes : [];

  // When series changes, reset currentVol to first volume of the new series
  useEffect(() => {
    const activeSeries = illustrations.find((obj) => obj.series === series);
    if (activeSeries?.volumes?.length) {
      setCurrentVol(activeSeries.volumes[0]);
    }
  }, [series]);

  return (
    <>
      <ArtNav
        links={seriesList}
        setDisplay={setSeries}
        navClass={"illustration-nav"}
        activeLink={series}
      />

      <Gallery
        galleryId="illustrations"
        series={series}
        volumes={volumes}
        currentVol={currentVol}
        setCurrentVol={setCurrentVol}
        buildImageSrc={(img) => new URL(`../assets/img/illustration/${series}/${img}`, import.meta.url).href}
      />
    </>
  );
}

export default Illustration;
