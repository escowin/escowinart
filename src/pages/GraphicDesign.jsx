import portfolioData from "../assets/data";
import "../assets/css/graphicDesign.css";

function GraphicDesign() {
  const portfolio = portfolioData.graphicDesign

  return (
    <section id="graphic-design" className="section">
        {portfolio.map((graphic, index) => (
            <article key={index} id={graphic.name} className="graphic-wrapper">
                <img src={new URL(`../assets/img/graphic-design/${graphic.img}`, import.meta.url).href} alt={graphic.name} />
            </article>
        ))}
    </section>
  )
}

export default GraphicDesign;
