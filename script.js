/* ============================================================
   CV Alya Rahmawati — script.js
   Fitur:
   1. Ganti tema gelap/terang (tersimpan di localStorage)
   2. Tombol simpan PDF (memanggil dialog cetak browser)
   3. Bar keterampilan terisi saat seksi terlihat di layar
   4. Tahun di footer otomatis
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 1. Tema gelap / terang ---------- */
  var themeToggle = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("cv-theme", theme);
    // aria-pressed: true berarti tema gelap sedang aktif
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  }

  // Sinkronkan tombol dengan tema yang sudah aktif (dari <head> tadi)
  applyTheme(document.documentElement.getAttribute("data-theme") || "light");

  themeToggle.addEventListener("click", function () {
    var current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  /* ---------- 2. Simpan sebagai PDF ---------- */
  var printBtn = document.getElementById("print-btn");

  printBtn.addEventListener("click", function () {
    // Dialog cetak browser: pilih "Save as PDF" untuk menyimpan file PDF
    window.print();
  });

  /* ---------- 3. Animasi bar keterampilan ---------- */
  var bars = document.querySelectorAll(".skill-bar");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    // Tanpa animasi: langsung isi semua bar (CSS sudah menanganinya
    // lewat kelas .filled atau aturan prefers-reduced-motion)
    bars.forEach(function (bar) {
      bar.classList.add("filled");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("filled");
            obs.unobserve(entry.target); // animasi hanya sekali
          }
        });
      },
      { threshold: 0.4 } // mulai saat 40% bar terlihat
    );

    bars.forEach(function (bar) {
      observer.observe(bar);
    });
  }

  /* ---------- 4. Tahun otomatis di footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
