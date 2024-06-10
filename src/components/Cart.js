import React from 'react';
import './Cart.css';
import { useCart } from '../CartContext';
import Navbar from './navbar'

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div>
        <Navbar />
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
                <div className="cart-item-quantity">
                  <button onClick={() => decreaseQuantity(item.id)} className="quantity-button">-</button>
                  <input type="text" readOnly value={item.quantity} className="quantity-input" />
                  <button onClick={() => increaseQuantity(item.id)} className="quantity-button">+</button>
                </div>
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
        <button className="btn btn-order">
          Ordina
        </button>
      </div>
    </div>
    </div>
  );
};

export default Cart;