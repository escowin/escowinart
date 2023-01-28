import "./index.css";

function Work() {
  const graphicNovels = [
    {
      title: "blue strawberry",
      role: "graphic novelist",
      id: "bluestrawberry",
      chapters: [
        {
          title: "bluestrawberry-01",
          img: "edwin-escobar-20171018-bluestrawberry-01",
        },
        {
          title: "bluestrawberry-02",
          img: "edwin-escobar-20171025-bluestrawberry-02",
        },
        {
          title: "bluestrawberry-03",
          img: "edwin-escobar-20171112-bluestrawberry-03",
        },
        {
          title: "bluestrawberry-04",
          img: "edwin-escobar-20180502-bluestrawberry-04",
        },
        {
          title: "bluestrawberry-05",
          img: "edwin-escobar-20180509-bluestrawberry-05",
        },
        {
          title: "bluestrawberry-06",
          img: "edwin-escobar-20180516-bluestrawberry-06",
        },
        {
          title: "bluestrawberry-07",
          img: "edwin-escobar-20180523-bluestrawberry-07",
        },
        {
          title: "bluestrawberry-08",
          img: "edwin-escobar-20180530-bluestrawberry-08",
        },
      ],
    },
  ];

  return (
    <>
      <section className="section" id="work">
        <h2>Professional experience</h2>
        {graphicNovels.map((graphicNovel, i) => (
          <article key={i} id="graphic-novel">
            <h3>Graphic novel, {graphicNovel.title}</h3>
            <div className="chapters">
              {graphicNovel.chapters.map((chapter, j) => (
                <img
                  key={`${i}-${j}`}
                  className="chapter"
                  src={require(`../../assets/images/illustration/${graphicNovel.id}/${chapter.img}.jpg`)}
                  alt={chapter.title}
                />
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Work;
