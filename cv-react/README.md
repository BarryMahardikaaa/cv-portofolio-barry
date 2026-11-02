# CV — Versi React

Versi React dari CV di folder root (`index.html`).

## Menjalankan

```bash
cd cv-react
npm install     # sekali saja
npm run dev     # mode development (buka http://localhost:5173)
npm run build   # hasil build produksi ke folder dist/
npm run preview # pratinjau hasil build
```

## Struktur

```
cv-react/
  public/          aset gambar (disalin dari folder root)
  src/
    App.jsx        susunan halaman
    styles.css     semua gaya (dari versi asli)
    data/          isi konten (ubah teks di sini)
    components/    komponen per bagian halaman
```

## Mengubah isi CV

Semua teks (sertifikat, prestasi, skill, kontak, dll.) ada di
`src/data/content.js` — tambah/hapus baris data, tidak perlu salin-tempel HTML.

## Kembali ke versi asli

Versi asli tidak tersentuh. Buka `../index.html` seperti biasa,
atau hapus seluruh folder `cv-react/` ini bila tidak dipakai.
