import { useRef, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import "../assets/css/gallery.css";

function formatWorkDimensions(work) {
  if (work?.height != null && work?.width != null) {
    return `${work.height} × ${work.width} in`;
  }
  return "";
}

function formatVolumeMeta(vol) {
  if (!vol) return "";
  const parts = [vol.medium, vol.year].filter(
    (x) => x !== undefined && x !== null && x !== ""
  );
  return parts.join(" · ");
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
  const worksDialogRef = useRef(null);
  const [worksDialogScope, setWorksDialogScope] = useState("all");

  const volumeMeta = formatVolumeMeta(currentVol);
  const hasWorks = Boolean(currentVol.works?.length);
  const worksDialogId = `${galleryId}-works-dialog`;
  const sameImageWorkCount =
    hasWorks &&
    currentVol.images.length === currentVol.works.length;

  useEffect(() => {
    worksDialogRef.current?.close();
    setWorksDialogScope("all");
  }, [currentVol.id]);

  function openWorksDetails(imageIndex) {
    if (!hasWorks) return;
    flushSync(() => {
      setWorksDialogScope(
        sameImageWorkCount ? String(imageIndex) : "all"
      );
    });
    const el = worksDialogRef.current;
    if (el && !el.open) {
      el.showModal();
    }
  }

  function closeWorksDetails() {
    worksDialogRef.current?.close();
  }

  const worksToShow =
    hasWorks && sameImageWorkCount && worksDialogScope !== "all"
      ? [currentVol.works[Number(worksDialogScope)]].filter(Boolean)
      : currentVol.works ?? [];

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
          {currentVol.images.map((img, i) =>
            hasWorks ? (
              <button
                key={i}
                type="button"
                className="gallery-img-button"
                onClick={() => openWorksDetails(i)}
                aria-haspopup="dialog"
                aria-controls={worksDialogId}
                aria-label={`View work details: ${getImageAlt(img, i, currentVol)}`}
              >
                <img
                  alt={getImageAlt(img, i, currentVol)}
                  className="gallery-img"
                  src={buildImageSrc(img)}
                  {...(getDataTitle && { "data-title": getDataTitle(img, i) })}
                />
              </button>
            ) : (
              <img
                key={i}
                alt={getImageAlt(img, i, currentVol)}
                className="gallery-img"
                src={buildImageSrc(img)}
                {...(getDataTitle && { "data-title": getDataTitle(img, i) })}
              />
            )
          )}
        </div>
      </article>

      {hasWorks ? (
        <dialog
          ref={worksDialogRef}
          id={worksDialogId}
          className="gallery-works-dialog"
          closedby="any"
          aria-labelledby={`${worksDialogId}-title`}
          onClose={() => setWorksDialogScope("all")}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeWorksDetails();
          }}
        >
          {/* <div
            className="gallery-works-dialog__inner"
            onClick={(e) => e.stopPropagation()}
          > */}
            <form method="dialog" className="gallery-works-dialog__close-form">
              <button
                type="submit"
                className="gallery-works-dialog__close"
                autoFocus
                aria-label="Close work details"
              >
                ×
              </button>
            </form>

            <h3
              id={`${worksDialogId}-title`}
              className="gallery-works-dialog__volume-title"
            >
              {currentVol.title}
            </h3>
            {volumeMeta ? (
              <p className="gallery-works-dialog__volume-meta">{volumeMeta}</p>
            ) : null}

            <dl className="gallery-works__list">
              {worksToShow.map((work, idx) => (
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
          {/* </div> */}
        </dialog>
      ) : null}
    </section>
  );
}

export default Gallery;
