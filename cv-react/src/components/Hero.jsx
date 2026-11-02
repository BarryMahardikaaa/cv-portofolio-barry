import { useEffect, useRef } from "react";
import { hero, stats } from "../data/content.jsx";

/** Hero + strip statistik (angka menghitung naik saat terlihat). */
export default function Hero() {
  return (
    <>
      <header className="hero" id="beranda">
        <div className="wrap">
          <div>
            <p className="hero-eyebrow">{hero.eyebrow}</p>
            <h1>
              <span className="shimmer">{hero.name}</span>
            </h1>
            <p className="hero-role">{hero.role}</p>
            <p className="hero-bio">{hero.bio}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#kontak">
                Hubungi Saya
              </a>
              <a className="btn btn-ghost" href="#portofolio">
                Lihat Portofolio
              </a>
            </div>
          </div>
          <div className="hero-photo">
            <img src={hero.photo} alt={hero.photoAlt} />
          </div>
        </div>
      </header>

      <Stats />
    </>
  );
}

function Stat({ num, cap }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return; /* biarkan angka final */

    const isDecimal = num.includes(",");
    const target = parseFloat(num.replace(",", "."));
    if (isNaN(target)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          io.unobserve(en.target);

          const duration = 1200;
          const start = performance.now();
          const step = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3); /* ease-out cubic */
            const val = target * eased;
            el.textContent = isDecimal
              ? val.toFixed(2).replace(".", ",")
              : String(Math.round(val));
            if (t < 1) requestAnimationFrame(step);
            else el.textContent = num; /* kembali persis ke teks asli */
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [num]);

  return (
    <div className="stat">
      <div className="num" ref={ref}>
        {num}
      </div>
      <div className="cap">{cap}</div>
    </div>
  );
}

function Stats() {
  return (
    <div className="stats">
      <div className="wrap">
        {stats.map((s) => (
          <Stat key={s.cap} num={s.num} cap={s.cap} />
        ))}
      </div>
    </div>
  );
}
