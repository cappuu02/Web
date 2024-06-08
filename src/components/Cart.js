import React from 'react';
import '.\Cart.css';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 49.99 },
    { id: 3, name: 'Product 3', price: 19.99 },
  ];

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <ul className="cart-list">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            {item.name} - ${item.price}
            <button className="btn btn-dark w-100 p-3 rounded-0 custom-text-yellow">
              ADD TO CART
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;