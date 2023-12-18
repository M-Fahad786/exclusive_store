import Exclusiveimage from "../Assets/exclusive_image.png";
import "./Offer.css";
export default function Offer() {
  return (
    <section className="offer-section">
      <article className="offer-text">
        <h1> Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY FOR BEST SELLER PRODUCTS</p>
        <button aria-label="Check Now">Check Now</button>
      </article>
      <article className="offer-image">
        <img src={Exclusiveimage} alt="Exclusive img" />
      </article>
    </section>
  );
}
