import footerLogo from "../Assets/logo.png";
import instagramIcon from "../Assets/instagram_icon.png";
import pintrestIcon from "../Assets/pintester_icon.png";
import whatsaappIcon from "../Assets/whatsapp_icon.png";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-logo">
        <img src={footerLogo} alt="Footer Logo" />
        <p>EXCLUSIVE</p>
      </section>
      <section className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </section>
      <section className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagramIcon} alt="Instagram Icon" />
        </div>
        <div className="footer-icons-container">
          <img src={pintrestIcon} alt="Pintrest Icon" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsaappIcon} alt="Whatsapp Icon" />
        </div>
      </section>
      <section className="footer-copyright">
        <hr />
        <p>CopyRight @ 2023 - All Rights Reserved</p>
      </section>
    </footer>
  );
}
