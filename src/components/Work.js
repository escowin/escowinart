import "../assets/css/work.css";

function Work({ graphicNovels }) {
  return (
    <>
      <section className="section" id="work">
        <h2>Professional experience</h2>
        {graphicNovels.map((graphicNovel, i) => (
          <article key={i} id="graphic-novel">
            <h3>
              <span
                className="link"
                onClick={() => window.open(graphicNovel.url, "_blank")}
              >
                {graphicNovel.title}
              </span>{" "}
              ({graphicNovel.years}), {graphicNovel.role}
            </h3>
            <div className="chapters">
              {graphicNovel.chapters.map((chapter, j) => (
                <img
                  key={`${i}-${j}`}
                  className="chapter"
                  src={require(`../assets/img/illustration/${graphicNovel.id}/${chapter.img}.jpg`)}
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
