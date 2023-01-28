import "./index.css";

function GraphicDesign() {
  const portfolio = [
    {
      name: "id | keep cool with coolidge",
      img: "edwin-escobar-20220515-cool-with-coolidge.jpg",
    },
    {
      name: "ego | stop being poor",
      img: "edwin-escobar-20220515-stop-being-poor.png",
    },
    {
      name: "super-ego | parrot social media",
      img: "edwin-escobar-20220515-mindlessly-parrot-social-media.png",
    },
  ];

  return (
    <section id="graphic-design" className="section">
        {portfolio.map((graphic, index) => (
            <article key={index} id={graphic.name} className="graphic-wrapper">
                <img src={require(`../../assets/images/graphic-design/${graphic.img}`)} alt={graphic.name} />
            </article>
        ))}
    </section>
  )
}

export default GraphicDesign;
