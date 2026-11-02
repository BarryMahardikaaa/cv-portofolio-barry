import { contact } from "../data/content.jsx";
import { SectionHead } from "./Sections.jsx";

export default function Contact() {
  return (
    <section className="section alt" id="kontak">
      <div className="wrap">
        <SectionHead
          label={contact.label}
          title={contact.title}
          desc={contact.desc}
        />

        <div className="contact-grid reveal">
          {contact.items.map((c) => (
            <a
              className="contact-item"
              href={c.href}
              key={c.k}
              {...(c.ext ? { target: "_blank", rel: "noopener" } : {})}
            >
              <p className="k">{c.k}</p>
              <p className="v">{c.v}</p>
            </a>
          ))}
        </div>

        <div className="cta-band reveal">
          <div>
            <h3>{contact.cta.title}</h3>
            <p>{contact.cta.desc}</p>
          </div>
          <a
            className="btn btn-primary"
            href={contact.cta.href}
            target="_blank"
            rel="noopener"
          >
            {contact.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
