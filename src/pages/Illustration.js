import { useState } from "react";
import portfolioData from "../assets/data";
import "../assets/css/illustration.css";
import ArtNav from "../components/ArtNav";

function Illustration() {
  const illustrations = portfolioData.illustration;
  // const newOrder = illustrations.reverse();
  // Returns a list of series titles
  const list = illustrations.flatMap((series) => {
    return series.volumes.map((vol) => vol.title);
  });
  
  // State variables
  const [series, setSeries] = useState("days");
  const [displaySet, setDisplaySet] = useState(list[0])
  
  const handleClick = (series, set) => {
    console.log("series: " + series)
    console.log("set: " + set)

    const selectedSeries = illustrations.find((obj) => {
      return obj.series === series
    })

    const selectedVol = selectedSeries.volumes.find(obj => {
      return obj.title === set
    })

    console.log(selectedVol.images)
    return setDisplaySet(selectedVol)
  }

  // current list of illustrations
  const seriesList = ["days", "bluestrawberry", "hebdomas", "slice"];
  // console.log(illustrations); // prints illustrations portfolio array
  // console.log(series) // default prints "days", can change by user
  console.log(displaySet); // default prints, can be set by user

  return (
    <>
      <ArtNav links={seriesList} setDisplay={setSeries} id={"art-nav"} />

      {/* use state & hooks to create relationship */}
      <section className="section" id="illustrations">
        <h2>{series}</h2>
        <ul>
          {list.map((set, i) => (
            <li key={i} data-focus={"true"} className="title" onClick={() => handleClick(series, set)}>{set}</li>
          ))}
        </ul>

        <article>
          <div className="img-wrapper">
            {}
          </div>
        </article>
      </section>

      {/* delete after implementing above */}
      {/* {newOrder.map((illustration) => (
        <section
          key={illustration.series}
          id={illustration.series}
          className="section"
        >
          <h2>{illustration.series}</h2>
          {illustration.volumes.map((volume) => (
            <article key={volume.title} id={volume.title} className="volume">
              <h3 className="title">
                {volume.title}
                <span className="md-hide">-</span>
              </h3>
              <div className="img-wrapper">
                {volume.images.map((img) => (
                  <img
                    src={require(`../assets/img/illustration/${illustration.series}/${img}`)}
                    key={img}
                    alt={volume.title}
                    className="illustration-img"
                  />
                ))}
              </div>
            </article>
          ))}
        </section>
      ))} */}
    </>
  );
}

export default Illustration;
