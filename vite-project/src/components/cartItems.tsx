import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
  cartItems: any;
};
function CartItems({ cartItems }: CartItemProps) {
  const { productId, photo, name, price, quantity, stock } = cartItems;

  return (
    <div className="cart-item">
      <img src={photo} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <p>₹{price}</p>
      </article>
      <div>
        <button>-</button>
        <p>Quantity: {quantity}</p>
        <p>Stock: {stock}</p>
        <button>+</button>
      </div>
      <button><FaTrash/></button>
      
    </div>
  );
}

export default CartItems;
