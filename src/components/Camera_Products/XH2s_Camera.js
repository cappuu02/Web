import React from 'react';
import image1 from '../../Images/Camera/XH2s.webp';
import '../store_style.module.css';
import { useCart } from '../CartContext';

function XH2s() {
  const { addToCart } = useCart();

  const product = {
    id: 1,
    name: 'XH2s',
    price: 129,
    image: image1
  };

  return (
    <div id='card_shop' className="container m-4">
      <div className="card border-0 rounded-0 shadow">
        <img src={image1} className="card-img-top rounded-0" alt="..." />
        <div className="card-body mt-3 mb-3">
          <div className="row">
            <div className="col-10">
              <h4 className="card-title">XH2s</h4>
              <p className="card-text">
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                (123)
              </p>
            </div>
          </div>
          <div className="row align-items-center text-center g-0">
            <div className="col-4">
              <h5>${product.price}</h5>
            </div>
            <div className="col-8">
              <button
                className="btn btn-dark w-100 p-3 rounded-0 custom-text-red"
                onClick={() => addToCart(product)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default XH2s;