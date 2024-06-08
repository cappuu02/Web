import React from 'react';
import './Cart.css';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <div className="cart">
        <h1>Shopping Cart</h1>
        <ul className="cart-list">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
              <button 
                className="btn btn-remove"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;