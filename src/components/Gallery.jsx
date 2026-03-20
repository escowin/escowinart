import "../assets/css/gallery.css";

function formatWorkDimensions(work) {
  if (work?.height != null && work?.width != null) {
    return `${work.height} × ${work.width} in`;
  }
  return "";
}

function Gallery({
  galleryId,
  series,
  volumes,
  currentVol,
  setCurrentVol,
  buildImageSrc,
  getImageAlt = (_, __, vol) => vol.title,
  getDataTitle,
  worksTitle = "Works",
}) {
  const volumeMeta =
    currentVol.medium || currentVol.year != null
      ? [currentVol.medium, currentVol.year].filter(Boolean).join(" · ")
      : null;

  return (
    <section className="section gallery-container" id={galleryId}>
      <h2 className="series-title">{series}</h2>
      <ul className="volume-title-list">
        {volumes.map((vol) => (
          <li
            key={vol.id}
            onClick={() => setCurrentVol(vol)}
            className={`title${currentVol.id === vol.id ? " active" : ""}`}
          >
            {vol.title}
          </li>
        ))}
      </ul>
      <article className={`outer-gallery-wrapper ${currentVol.id}`}>
        {volumeMeta ? (
          <p className="gallery-volume-meta">{volumeMeta}</p>
        ) : null}
        <div className="inner-gallery-wrapper" data-series={series}>
          {currentVol.images.map((img, i) => (
            <img
              key={i}
              alt={getImageAlt(img, i, currentVol)}
              className="gallery-img"
              src={buildImageSrc(img)}
              {...(getDataTitle && { "data-title": getDataTitle(img, i) })}
            />
          ))}
        </div>
        {currentVol.works?.length > 0 ? (
          <div className="gallery-works">
            <h3 className="gallery-works__heading">{worksTitle}</h3>
            <dl className="gallery-works__list">
              {currentVol.works.map((work, idx) => (
                <div
                  key={work.title ? `${work.title}-${idx}` : idx}
                  className="gallery-works__row"
                >
                  <dt className="gallery-works__title">{work.title}</dt>
                  <dd className="gallery-works__dimensions">
                    {formatWorkDimensions(work)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}
      </article>
    </section>
  );
}

export default Gallery;
