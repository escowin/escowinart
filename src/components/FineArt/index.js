import "./index.css";
// to-do | horizontal mousewheel scrolling

function FineArt() {
  const art = [
    {
      set: "set-001",
      subtitle: "self",
      medium: "oil on canvas",
      year: 2021,
      img: "edwin-escobar-set-001.jpg",
      artworks: [
        {
          title: "0013202110130 : psyche",
          length: 36,
          width: 24,
        },
        {
          title: "0012202110129 : super-ego",
          length: 36,
          width: 24,
        },
        {
          title: "0010202110127 : ego",
          length: 36,
          width: 24,
        },
        {
          title: "0011202110128 : id",
          length: 36,
          width: 24,
        },
      ],
    },
    {
      set: "set-002",
      subtitle: "focus",
      medium: "oil on canvas",
      year: 2021,
      img: "edwin-escobar-set-002.jpg",
      artworks: [
        {
          title: "001520210210 : white",
          length: 20,
          width: 16,
        },
        {
          title: "001620210211 : grey",
          length: 20,
          width: 16,
        },
        {
          title: "001720210212 : black",
          length: 20,
          width: 16,
        },
      ],
    },
    {
      set: "set-003",
      subtitle: "thought",
      medium: "oil on canvas",
      year: 2021,
      img: "edwin-escobar-set-003.jpg",
      artworks: [
        {
          title: "002420210525 · closed-loop",
          length: 36,
          width: 24,
        },
        {
          title: "002520210525 · interlinked",
          length: 36,
          width: 24,
        },
      ],
    },
    {
      set: "set-004",
      subtitle: "time",
      medium: "oil on canvas",
      year: 2021,
      img: "edwin-escobar-set-004.jpg",
      artworks: [
        {
          title: "002620210902 · onset",
          length: 24,
          width: 18,
        },
        {
          title: "002720210902 · float",
          length: 24,
          width: 18,
        },
        {
          title: "002820210902 · stare",
          length: 24,
          width: 18,
        },
        {
          title: "002920210902 · seated",
          length: 18,
          width: 18,
        },
        {
          title: "003020210902 · done",
          length: 24,
          width: 18,
        },
      ],
    },
    {
      set: "set-005",
      subtitle: "frequency",
      medium: "oil on canvas",
      year: 2021,
      img: "edwin-escobar-set-005.jpg",
      artworks: [
        {
          title: "003120210912 · r-g",
          length: 36,
          width: 24,
        },
        {
          title: "003220210913 · b-w",
          length: 36,
          width: 24,
        },
        {
          title: "003320210914 · y-b",
          length: 36,
          width: 24,
        },
      ],
    },
  ];
  art.reverse();

  return (
    <section className="section" id="fine-art">
      {art.map((item) => (
        <article key={item.set} className="artwork">
          <img
            src={require(`../../assets/images/fineart/${item.img}`)}
            alt={`${item.set} ${item.subtitle}`}
          />

          <div className="art-details">
            <h2>{`${item.set} ${item.subtitle}`}</h2>
            <p className="text-right medium">{item.medium}</p>

            {item.artworks.map((artwork) => (
              <>
                <p>{artwork.title}</p>
                <p className="text-right">
                  {artwork.length} x {artwork.width}
                </p>
              </>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export default FineArt;
