import handIcon from "../Assets/hand_icon.png";
import arrowIcon from "../Assets/arrow.png";
import headerImg from "../Assets/header_image.png";
import "./Header.css";
export default function Header() {
  return (
    <section className="header-section">
      <div className="header-left">
        <h2>Latest Trend Only</h2>
        <div>
          <div className="header-icon-left">
            <p>new</p>
            <img src={handIcon} alt="New Arrival Icon" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="header-btn">
          <div>
            Latest Collection
            <img src={arrowIcon} alt="Arrow for Latest Collection" />
          </div>
        </div>
      </div>
      <div className="header-right">
        <img src={headerImg} alt="" />
      </div>
    </section>
  );
}
