import React, { createContext, useState, useContext } from 'react';

// Creare il contesto
const CartContext = createContext();


// Fornire il contesto
export const CartProvider = ({ children }) => {
  const [product, setProduct] = useState({

    qta: 0,
  
    name: '',
  
    price: '',
  
    image: '',
  
  });
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id );
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, qta: cartItem.qta }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    document.cookie = `cart_${id}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQta = item.qta < 100? item.qta + 1 : 1;
          setProduct({
            qta: newQta,
            name: item.name,
            price: item.price,
            image: item.image,
          });
          const cookieString = `cart_${item.id}=${JSON.stringify({qta: newQta, name: item.name, price: item.price, image: item.image})}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;
          document.cookie = cookieString;
          return {...item, qta: newQta };
        } else {
          return item; // return the original item if it's not the one being updated
        }
      })
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQta = item.qta > 1? item.qta - 1 : 1;
          
          const cookieString = `cart_${item.id}=${JSON.stringify({qta: newQta, name: item.name, price: item.price, image: item.image})}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;          
          document.cookie = cookieString;
          return {...item, qta: newQta };
        } else {
          return item; // return the original item if it's not the one being updated
        }
      })
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Usare il contesto
export const useCart = () => {
  return useContext(CartContext);
};
