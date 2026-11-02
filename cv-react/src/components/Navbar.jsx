import { useEffect, useState } from "react";
import { navLinks } from "../data/content.jsx";

/** Navbar: brand kiri, menu di tengah, tombol PDF kanan.
 *  Di mobile: brand + tombol menu (dropdown animasi). */
export default function Navbar({ onPrint }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  /* Garis emas pada menu mengikuti section yang sedang terlihat */
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sectionFor = new Map();
    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) sectionFor.set(el, href);
    });

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(sectionFor.get(en.target) || "");
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sectionFor.forEach((_, sec) => spy.observe(sec));
    return () => spy.disconnect();
  }, []);

  return (
    <nav className="navbar" aria-label="Navigasi utama">
      <div className="wrap nav-inner">
        <a
          href="#beranda"
          className="nav-brand"
          onClick={() => setOpen(false)}
        >
          Barry<span>.</span>
        </a>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Tutup ✕" : "Menu ☰"}
        </button>

        <ul className={`nav-links${open ? " open" : ""}`} id="navLinks">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={active === href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button type="button" className="nav-print" onClick={onPrint}>
          PDF
        </button>
      </div>
    </nav>
  );
}
