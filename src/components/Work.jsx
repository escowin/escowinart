import "../assets/css/work.css";

function Work({ graphicNovels }) {
  return (
    <>
      <section className="section" id="work">
        <h2>Professional experience</h2>
        {graphicNovels.map((graphicNovel, i) => (
          <article key={i} id="graphic-novel">
            <h3>
              <span className="role">
                {graphicNovel.role}
              </span>
              <span
                className="link"
                onClick={() => window.open(graphicNovel.url, "_blank")}
              >
                {graphicNovel.title}, {graphicNovel.years}
              </span>
            </h3>
            <div className="chapters">
              {graphicNovel.chapters.map((chapter, j) => (
                <img
                  key={`${i}-${j}`}
                  className="chapter"
                  src={new URL(`../assets/img/illustration/${graphicNovel.id}/${chapter.img}.jpg`, import.meta.url).href}
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
