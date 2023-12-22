import headerImg from "../Assets/joy_stick.png";
import "./Header.css";
export default function Header() {
  return (
    <section className="header-section">
      <div className="header-left">
        <h2>New Arrivals</h2>
        <div>
          <div className="header-icon-left">
            <p>Level Up</p>
          </div>
          <p>Your Gaming </p>
          <p>Experience</p>
        </div>
        <div className="header-btn">
          <div>See Latest Collections</div>
        </div>
      </div>
      <div className="header-right">
        <img src={headerImg} alt="" />
      </div>
    </section>
  );
}
