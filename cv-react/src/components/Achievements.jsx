import { achievements } from "../data/content.jsx";
import { SectionHead } from "./Sections.jsx";

/** Ikon medali sesuai jenis prestasi (diwarnai lewat CSS). */
const icons = {
  medal: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="9" r="5.5" />
      <path d="M9 13.5 7 22l5-3 5 3-2-8.5" />
    </svg>
  ),
  cap: (
    <svg viewBox="0 0 24 24">
      <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
      <path d="M7 9.5V15c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V9.5" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24">
      <path d="M8 4h8v6a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H5v2a3 3 0 0 0 3 3" />
      <path d="M16 5h3v2a3 3 0 0 1-3 3" />
      <path d="M12 14v3" />
      <path d="M9 20h6" />
      <path d="M10 17h4v3h-4z" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.4 2.3 3.6 5.1 3.6 8.5S14.4 18.2 12 20.5c-2.4-2.3-3.6-5.1-3.6-8.5S9.6 5.8 12 3.5Z" />
    </svg>
  ),
};

export default function Achievements() {
  return (
    <section className="section alt" id="prestasi">
      <div className="wrap">
        <SectionHead
          label={achievements.label}
          title={achievements.title}
          desc={achievements.desc}
        />

        {achievements.groups.map((group) => (
          <div key={group.subtitle}>
            <h3 className="sub-title reveal">{group.subtitle}</h3>
            <div className="card-grid">
              {group.items.map((item, i) => (
                <div
                  className="achievement reveal"
                  key={item.title}
                  style={{ "--d": `${i * 90}ms` }}
                >
                  <div className="medal" aria-hidden="true">
                    {icons[item.icon]}
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
