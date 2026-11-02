import { about, cardSections, skills } from "../data/content.jsx";

/** Kepala setiap section: label pil + judul + deskripsi. */
export function SectionHead({ label, title, desc }) {
  return (
    <div className="section-head reveal">
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      {desc && <p className="section-desc">{desc}</p>}
    </div>
  );
}

/* ================= TENTANG ================= */
export function About() {
  return (
    <section className="section" id="tentang">
      <div className="wrap">
        <SectionHead label="Profil" title="Tentang Saya" />
        <div className="about-grid">
          <div className="about-card reveal">
            {about.paragraphs.map((p, i) => (
              <p key={i} style={i > 0 ? { marginTop: 14 } : undefined}>
                {p}
              </p>
            ))}
          </div>
          <div className="about-card reveal">
            <ul className="facts">
              {about.facts.map((f) => (
                <li key={f.k}>
                  <span className="k">{f.k}</span>
                  <span className="v">{f.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ PENDIDIKAN / PENGALAMAN / ORGANISASI ============ */
export function CardSection({ id, alt, label, title, desc, cards }) {
  return (
    <section className={`section${alt ? " alt" : ""}`} id={id}>
      <div className="wrap">
        <SectionHead label={label} title={title} desc={desc} />
        <div className="card-grid">
          {cards.map((c, i) => (
            <article
              className="card reveal"
              key={c.title}
              style={{ "--d": `${i * 90}ms` }}
            >
              <span className="date-badge">{c.date}</span>
              <h3>{c.title}</h3>
              <p className="org">{c.org}</p>
              <div className="desc">
                <ul>
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CardSections() {
  return cardSections.map((s) => <CardSection key={s.id} {...s} />);
}

/* ================= KETERAMPILAN ================= */
export function Skills() {
  return (
    <section className="section" id="keterampilan">
      <div className="wrap">
        <SectionHead
          label={skills.label}
          title={skills.title}
          desc={skills.desc}
        />
        <div className="skill-grid">
          {skills.groups.map((g, i) => (
            <div
              className="skill-box reveal"
              key={g.title}
              style={{ "--d": `${i * 90}ms` }}
            >
              <h3>
                <span className="swatch" />
                {g.title}
                {g.strong && <span className="tag-strong">FOKUS</span>}
              </h3>
              <ul className="chips">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
