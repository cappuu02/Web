import { useState, useEffect } from 'react';
import './Cart.css';
import { useCart } from '../CartContext';

const Cart = () => {

  const { cartItems, addToCart } = useCart();

  const getCookie = (name) => {

    const value = `; ${document.cookie}`;
  
    const parts = value.split(`; ${name}=`);
  
    if (parts.length === 2) return JSON.parse(parts.pop().split(';').shift());
  
  };

  const handleRead = async () => {

    const cookies = document.cookie.split(';');
  
    const cartCookies = {};

  
    for (let i = 0; i < cookies.length; i++) {
  
      const cookie = cookies[i].trim();
  
      if (cookie.startsWith('cart_')) {
  
        const [id_tot, value] = cookie.split('=');

        const [headId, id] = id_tot.split('_')
  
        const [qta_tot, name_tot, price_tot, image_tot] = value.split(',');
        const [headQ, qta] = qta_tot.split(':') 
        const [headN, nameFix] = name_tot.split(':') 
        const [headP, price] = price_tot.split(':') 
        const [headI, imageFix] = image_tot.split(':') 
        const [imageFix1, HeadII ] = imageFix.split('}') 

        const name = nameFix.replace(/"/g, ''); // Remove double quotes from the name
        const image = imageFix1.replace(/"/g, ''); // Remove double quotes from the name
        console.log("Image: ", image)
        const insert = {
          id,
  
          qta: parseInt(qta),
  
          name,
  
          price: parseInt(price),
  
          image,
        }

        addToCart(insert)
  
      }
  
    }
  
  };

  useEffect(() => {
    handleRead();
    
    
  }, []);

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
    
                  <input type="text" readOnly value={item.qta} className="quantity-input" />
                 
                </div>
              </div>
           
            </li>
          ))}
        </ul>   
    </div>
   
  );
};

export default Cart;