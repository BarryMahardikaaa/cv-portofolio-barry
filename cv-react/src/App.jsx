import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import { About, CardSections, Skills } from "./components/Sections.jsx";
import Achievements from "./components/Achievements.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { portfolio, certificates } from "./data/content.jsx";

export default function App() {
  const [lightbox, setLightbox] = useState(null);
  const print = () => window.print();

  /* Scroll-reveal: elemen .reveal masuk sekali saat terlihat */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Lightbox: ESC menutup, kunci gulir halaman di belakangnya */
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <ScrollProgress />
      <Navbar onPrint={print} />
      <Hero />
      <About />
      <CardSections />
      <Skills />
      <Achievements />
      <Gallery
        {...portfolio}
        alt
        variant="porto-design"
        onOpen={setLightbox}
      />
      <Gallery {...certificates} alt={false} onOpen={setLightbox} />
      <Contact />
      <Footer onPrint={print} />
      <BackToTop />

      {lightbox && (
        <div
          className="lightbox open"
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau gambar"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox.src} alt={lightbox.alt} />
          <span className="close-hint">
            Tekan ESC atau klik di luar gambar untuk menutup
          </span>
        </div>
      )}
    </>
  );
}
