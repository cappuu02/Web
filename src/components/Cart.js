import React from 'react';
import './Cart.css';
import { useCart } from '../CartContext';
import Navbar from './navbar'
import NavS from './Navbar_Store'
import { Link } from 'react-router-dom';


const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div>
       
        <Navbar />
        <NavS />
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
              <button  className="btn btn-remove" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
              <button  className="btn btn-remove_cell" onClick={() => removeFromCart(item.id)}>
                <i class="bi bi-trash"></i>
              </button>
            </li>
          ))}
        </ul>
        <Link to="/Ordine" class="nav-link" aria-current="page" ><button className="btn btn-order">Buy</button></Link>
      </div>
    </div>
    </div>
  );
};

export default Cart;


