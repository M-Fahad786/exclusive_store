import { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../Assets/cart_cross_icon.png";
export default function CartItems() {
  const { allProducts, cartItem, removeFromCart, getTotalAmount } =
    useContext(ShopContext);
  return (
    <section className="cart-items">
      <div className="cart-item-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProducts.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <section>
              <div className="cart-item-format cart-item-main">
                <img src={e.image} alt="e.name" className="product-icon" />
                <p>{e.name}</p>
                <p>$ {e.newPrice}</p>
                <button className="items-quantity-btn">{cartItem[e.id]}</button>
                <p>${e.newPrice * cartItem[e.id]}</p>
                <img
                  className="product-remove-icon"
                  src={removeIcon}
                  alt="Remove from Cart"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </section>
          );
        }
        return null;
      })}
      <section className="cart-items-bottom">
        <div className="items-total">
          <h1>Product Payment</h1>
          <div>
            <div className="cart-items-total">
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className="cart-items-total">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total">
              <h3>Total</h3>
              <h3>${0}</h3>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </div>
        <div className="promo-code-sec">
          <p>Have a Gift Voucher?</p>
          <div className="promo-code-box">
            <input type="text" name="" id="" placeholder="Enter Promo Code" />
            <button type="submit">Submit</button>
          </div>
        </div>
      </section>
    </section>
  );
}
