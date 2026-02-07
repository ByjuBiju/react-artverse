import CartEmpty from "./CartEmpty";
import CartItems from "./CartItems";
import Footer from "./Footer";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <>
      {cartItems.length === 0 ? (
        <CartEmpty />
      ) : (
        <CartItems
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      )}
      <Footer />
    </>
  );
};

export default Cart;


