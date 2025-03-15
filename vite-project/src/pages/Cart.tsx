import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItems from "../components/cartItems";
import img from "../assets/images/mac-card-40-macbook-air-202503.jpeg";
import { Link } from "react-router-dom";
const cartItems = [
  {
    productId: "kdjfsadlk",
    photo: img,
    name: "MacBook",
    price: 3000,
    quantity: 40,
    stock: 10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const Discount = 439;

function Cart() {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);
  useEffect(() => {
    const id = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);
    return () => {
      clearTimeout(id);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? cartItems.map((i, idx) => (
          <CartItems cartItems={i} key={idx} />
        )):<h1>No Items Added</h1>}
      </main>
      <aside>
        <p>Subtotal : ₹{subtotal}</p>
        <p>Shipping Charges : ₹{shippingCharges}</p>
        <p>Tax : {tax}</p>
        <p>
          Discount : <em>- ₹{Discount}</em>
        </p>
        <p>
          <b>Total : {total}</b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{Discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red flex items-center">
              Invalid coupon <VscError />
            </span>
          ))}
          {
            cartItems.length > 0 && <Link to="/shipping">Checkout</Link>
          }
      </aside>
    </div>
  );
}

export default Cart;
