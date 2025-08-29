import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <a
          href="https://www.instagram.com/naflyyd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={28} />
        </a>
        <a
          href="https://www.tiktok.com/@naflyy1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={28} />
        </a>
      </div>
      <p className="contact">By NAF - Contact Here</p>
    </footer>
  );
}
