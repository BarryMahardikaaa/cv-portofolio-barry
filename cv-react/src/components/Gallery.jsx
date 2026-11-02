import { SectionHead } from "./Sections.jsx";

/**
 * Galeri kartu gambar (portofolio & sertifikat).
 * Klik kartu non-kosong → buka lightbox (state di-angkat ke App).
 */
export default function Gallery({
  id,
  alt,
  label,
  title,
  desc,
  items,
  groupTitle,
  note,
  variant,
  onOpen,
}) {
  return (
    <section className={`section${alt ? " alt" : ""}`} id={id}>
      <div className="wrap">
        <SectionHead label={label} title={title} desc={desc} />

        {groupTitle && <h3 className="sub-title reveal">{groupTitle}</h3>}

        <div className={`cert-grid${variant ? ` ${variant}` : ""}`}>
          {items.map((item, i) => {
            const style = { "--d": `${i * 90}ms` };
            const inner = (
              <>
                <div className="cert-thumb">
                  <img src={item.src} alt={item.alt} />
                </div>
                <div className="cert-info">
                  <h3>{item.title}</h3>
                  <p>{item.meta}</p>
                  {!item.empty && (
                    <p className="cert-hint">Klik untuk memperbesar</p>
                  )}
                </div>
              </>
            );

            if (item.empty) {
              return (
                <div className="cert-card reveal cert-card-empty" key={item.title} style={style}>
                  {inner}
                </div>
              );
            }
            return (
              <button
                className="cert-card reveal"
                type="button"
                key={item.title}
                style={style}
                onClick={() => onOpen(item)}
              >
                {inner}
              </button>
            );
          })}
        </div>

        {note && <p className="porto-note reveal">{note}</p>}
      </div>
    </section>
  );
}
