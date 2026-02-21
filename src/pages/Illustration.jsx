import { useState, useEffect } from "react";
import portfolioData from "../assets/data";
import "../assets/css/illustration.css";
import ArtNav from "../components/ArtNav";

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
        id={"art-nav"}
        navClass={"illustration-nav"}
        activeLink={series}
      />

      <section className="section" id="illustrations">
        <h2>{series}</h2>
        <ul>
          {volumes.map((vol, i) => (
            <li
              key={vol.id}
              onClick={() => setCurrentVol(vol)}
              className={`title${currentVol.id === vol.id ? ' active' : ''}`}
            >
              {vol.title}
            </li>
          ))}
        </ul>

        {/* to-do: regex pattern to clip title after first hyphen */}
        <article className={`outer-gallery-wrapper ${currentVol.id}`}>
          <div className={`inner-gallery-wrapper `} data-series={series}>
            {currentVol.images.map((img, i) => (
              <img
                key={i}
                alt={currentVol.title}
                className="illustration-img"
                src={new URL(`../assets/img/illustration/${series}/${img}`, import.meta.url).href}
              />
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

export default Illustration;
