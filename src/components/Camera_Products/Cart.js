import { useState, useEffect } from 'react';
import '../Cart.css';
import { useCart } from '../../CartContext';
import Navbar from '../navbar'
import NavS from '../Navbar_Store'
const Cart = () => {

  const cookie1 = document.cookie.split('; ').find((row) => row.startsWith('cart_'));
    
    if (cookie1) {
      var hasCartCookie = cookie1!== undefined;
   
      
    }
  
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, addToCart } = useCart();
  const [insert, setInsert] = useState({

    id: '',

    qta: 0,
  
    name: '',
  
    price: '',
  
    image: '',
  
  });
  const getCookie = (name) => {

    const value = `; ${document.cookie}`;
  
    const parts = value.split(`; ${name}=`);
  
    if (parts.length === 2) return JSON.parse(parts.pop().split(';').shift());
  
  };

  const handleOrdina = async (e) => {
    e.preventDefault();
    if(hasCartCookie){
      window.location.href = "/InvioOrdini";
    }
    else{
      alert("Non hai articoli nel carrello")
    }
  }

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
       
        <Navbar />
        <NavS />
        <div className="cart-container">
      <div className="cart">
        {hasCartCookie ?(
          <>
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
                  <input type="text" readOnly value={item.qta} className="quantity-input" />
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
        <button className="btn btn-order" onClick={handleOrdina}>
          Ordina
        </button>
        </>
        ):(
          <h1>No Items in Cart</h1>
        )}
      </div>
    </div>
    </div>
  );
};

export default Cart;