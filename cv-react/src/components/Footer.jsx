import { footer } from "../data/content.jsx";

export default function Footer({ onPrint }) {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>{footer.left}</p>
        <p>
          {footer.right} ·{" "}
          <button type="button" className="footer-link" onClick={onPrint}>
            Simpan sebagai PDF
          </button>
        </p>
      </div>
    </footer>
  );
}
