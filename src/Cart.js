import React, { useContext, useState } from "react";
import { ShopContext } from "./context/shop-context";
import { PRODUCTS } from "./Product";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import CheckoutComponent from "./CheckoutComponent"; // Importing the CheckoutComponent
import './Cart.css';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [showCheckout, setShowCheckout] = useState(false); // State to toggle showing the CheckoutComponent

  return (
    <div className="cart">
      <div>
        <h1 className="cartheading">Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null; // Added to avoid warning about a missing return statement
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <b><p className='price'> Subtotal: ₹{totalAmount} </p></b>
          <button onClick={() => navigate("/")} className="ui green button"> Continue Shopping </button>
          <button
            onClick={() => setShowCheckout(true)} // Show the CheckoutComponent on click
            className="ui red button"
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}

      {showCheckout && <CheckoutComponent />} {/* Render the CheckoutComponent if showCheckout is true */}
    </div>
  );
};

export default Cart;
