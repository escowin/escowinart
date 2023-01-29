import "./index.css";

function Illustration() {
  const illustrations = [
    {
      series: "days",
      volumes: [
        {
          title: "01 | 0001-0005",
          id: "days-01",
          images: [
            "edwin-escobar-days-20210305-0001.jpg",
            "edwin-escobar-days-20210306-0002.jpg",
            "edwin-escobar-days-20210309-0003.jpg",
            "edwin-escobar-days-20210310-0004.jpg",
            "edwin-escobar-days-20210310-0005.jpg",
          ],
        },
        {
          title: "02 | 0006-0010",
          id: "days-02",
          images: [
            "edwin-escobar-days-20210312-0006.jpg",
            "edwin-escobar-days-20210313-0007.jpg",
            "edwin-escobar-days-20210314-0008.jpg",
            "edwin-escobar-days-20210315-0009.jpg",
            "edwin-escobar-days-20210316-0010.jpg",
          ],
        },
        {
          title: "03 | 0011-0015",
          id: "days-03",
          images: [
            "edwin-escobar-days-20210317-0011.jpg",
            "edwin-escobar-days-20210318-0012.jpg",
            "edwin-escobar-days-20210319-0013.jpg",
            "edwin-escobar-days-20210320-0014.jpg",
            "edwin-escobar-days-20210321-0015.jpg",
          ],
        },
        {
          title: "04 | 0016-0020",
          id: "days-04",
          images: [
            "edwin-escobar-days-20210329-0016.jpg",
            "edwin-escobar-days-20210329-0017.jpg",
            "edwin-escobar-days-20210329-0018.jpg",
            "edwin-escobar-days-20210329-0019.jpg",
            "edwin-escobar-days-20210329-0020.jpg",
          ],
        },
        {
          title: "05 | 0021-0025",
          id: "days-05",
          images: [
            "edwin-escobar-days-20210330-0021.jpg",
            "edwin-escobar-days-20210331-0022.jpg",
            "edwin-escobar-days-20210401-0023.jpg",
            "edwin-escobar-days-20210402-0024.jpg",
            "edwin-escobar-days-20210403-0025.jpg",
          ],
        },
        {
          title: "06 | 0026-0030",
          id: "days-06",
          images: [
            "edwin-escobar-days-20210420-0026.jpg",
            "edwin-escobar-days-20210421-0027.jpg",
            "edwin-escobar-days-20210422-0028.jpg",
            "edwin-escobar-days-20210423-0029.jpg",
            "edwin-escobar-days-20210424-0030.jpg",
          ],
        },
        {
          title: "07 | 0031-0035",
          id: "days-07",
          images: [
            "edwin-escobar-days-20210425-0031.jpg",
            "edwin-escobar-days-20210426-0032.jpg",
            "edwin-escobar-days-20210427-0033.jpg",
            "edwin-escobar-days-20210428-0034.jpg",
            "edwin-escobar-days-20210429-0035.jpg",
          ],
        },
      ],
    },
  ];
  const newOrder = illustrations.reverse();

  return (
    <>
      {newOrder.map((illustration) => (
        <section
          key={illustration.series}
          id={illustration.series}
          className="section"
        >
          <h2>{illustration.series}</h2>
          {illustration.volumes.reverse().map((volume) => (
            <article key={volume.title} id={volume.title} className="volume">
              <h3 className="title">{volume.title}<span className="md-hide">-</span></h3>
              <div className="img-wrapper">
                {volume.images.map((img) => (
                  <img
                    src={require(`../../assets/images/illustration/${illustration.series}/${img}`)}
                    key={img}
                    alt={volume.title}
                    className="illustration-img"
                  />
                ))}
              </div>
            </article>
          ))}
        </section>
      ))}
    </>
  );
}

export default Illustration;
