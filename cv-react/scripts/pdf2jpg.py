"""Konversi halaman pertama PDF menjadi JPG.

Pemakaian:
    python -I pdf2jpg.py <pdf-input> <jpg-output> [dpi]
"""
import sys

import pymupdf

if len(sys.argv) < 3:
    raise SystemExit("usage: pdf2jpg.py <pdf-input> <jpg-output> [dpi]")

src = sys.argv[1]
out = sys.argv[2]
dpi = int(sys.argv[3]) if len(sys.argv) > 3 else 200

doc = pymupdf.open(src)
page = doc[0]
pix = page.get_pixmap(dpi=dpi, colorspace=pymupdf.csRGB)
pix.save(out)
print(f"OK: {doc.page_count} halaman, disimpan {pix.width}x{pix.height} -> {out}")
