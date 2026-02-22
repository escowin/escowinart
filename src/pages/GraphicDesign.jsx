import { useState, useEffect } from "react";
import portfolioData from "../assets/data";
import "../assets/css/graphicDesign.css";
import ArtNav from "../components/ArtNav";
import Gallery from "../components/Gallery";

function GraphicDesign() {
  const portfolio = portfolioData.graphicDesign
  const seriesList = portfolio.flatMap((graphic) => graphic.series);

  const [series, setSeries] = useState(seriesList[0]);
  const [currentVol, setCurrentVol] = useState(portfolio[0].volumes[0]);

  const currentSeries = portfolio.find((obj) => obj.series === series);
  const volumes = currentSeries ? currentSeries.volumes : [];

  useEffect(() => {
    const activeSeries = portfolio.find((obj) => obj.series === series);
    if (activeSeries?.volumes?.length) {
      setCurrentVol(activeSeries.volumes[0]);
    }
  }, [series]);

  // data titles: extract last segment after underscore or hyphen for data-title styling
  const dataTitles = currentVol.images.map((img) => img.split('.')[0].split(/[_-]/).pop());

  return (
    <>
      <ArtNav
        links={seriesList}
        setDisplay={setSeries}
        navClass={"graphic-design-nav"}
        activeLink={series}
      />
      <Gallery
        galleryId="graphic-design"
        series={series}
        volumes={volumes}
        currentVol={currentVol}
        setCurrentVol={setCurrentVol}
        buildImageSrc={(img) => new URL(`../assets/img/graphic-design/${img}`, import.meta.url).href}
        getImageAlt={(_, i, vol) => `${vol.title} ${dataTitles[i]}`}
        getDataTitle={(img, i) => dataTitles[i]}
      />
    </>
  )
}

export default GraphicDesign;
