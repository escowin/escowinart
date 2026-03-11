import "../assets/css/gallery.css";

function Gallery({
  galleryId,
  series,
  volumes,
  currentVol,
  setCurrentVol,
  buildImageSrc,
  getImageAlt = (_, __, vol) => vol.title,
  getDataTitle,
}) {
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
      </article>
    </section>
  );
}

export default Gallery;
