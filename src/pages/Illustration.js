import { useState } from "react";
import portfolioData from "../assets/data";
import "../assets/css/illustration.css";
import ArtNav from "../components/ArtNav";

function Illustration() {
  // Illustration variables
  const seriesList = ["days", "bluestrawberry", "hebdomas", "slice"];
  const illustrations = portfolioData.illustration;
  const list = illustrations.flatMap((series) => {
    return series.volumes.map((vol) => vol.title);
  });

  // State variables are initially defined as the first indexed array-object
  const [series, setSeries] = useState(seriesList[0]);
  const [displaySet, setDisplaySet] = useState(illustrations[0].volumes[0]);

  // Users can redefine state variables through clicking UI elements
  const handleClick = (series, set) => {
    const result = illustrations
      .find((obj) => obj.series === series)
      .volumes.find((vol) => vol.title === set);

    setDisplaySet(result);
  };

  return (
    <>
      <ArtNav
        links={seriesList}
        setDisplay={setSeries}
        id={"art-nav"}
        navClass={"illustration-nav"}
      />

      <section className="section" id="illustrations">
        <h2>{series}</h2>
        <ul>
          {list.map((set, i) => (
            <li
              key={i}
              data-focus={"true"}
              className="title"
              onClick={() => handleClick(series, set)}
            >
              {set}
            </li>
          ))}
        </ul>

        <article>
          <div className="img-wrapper">
            {displaySet?.images.map((img, i) => (
              <img
                key={i}
                alt={displaySet?.title}
                className="illustration-img"
                src={require(`../assets/img/illustration/${series}/${img}`)}
              />
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

export default Illustration;
