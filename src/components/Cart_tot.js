import React from 'react';
import './Cart.css';
import { useCart } from '../CartContext';
const Cart = () => {
  const { cartItems, } = useCart();

  return (
    <div>
       
    
   
    
        <ul className="cart-list">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <span>{item.name}</span>
                <span>${item.price}</span>
                <div className="cart-item-quantity">
    
                  <input type="text" readOnly value={item.quantity} className="quantity-input" />
                 
                </div>
              </div>
           
            </li>
          ))}
        </ul>   
    </div>
   
  );
};

export default Cart;