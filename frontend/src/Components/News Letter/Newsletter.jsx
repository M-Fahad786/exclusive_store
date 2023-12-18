import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsLetter">
      <h1>Get Exclusive Offers on your Email</h1>
      <p>Subscrive to our NewsLetter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email Address" />
        <button type="submit">Subscribe</button>
      </div>
    </section>
  );
}
