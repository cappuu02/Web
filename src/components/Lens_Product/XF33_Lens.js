import React from 'react';
import image1 from '../../Images/Lens/XF33_Lens.webp';
import '../../Store_style.module.css';

function XF33(){
    return(
        <>
 <div id='card_shop' class="container m-4">
  <div  class="card border-0 rounded-0 shadow" >
    <img src={image1} class="card-img-top rounded-0" alt="..." />
    <div class="card-body mt-3 mb-3">
      <div class="row">
        <div class="col-10">
          <h4 class="card-title">XF33</h4>
          <p class="card-text">
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            (14)
          </p>
        </div>
        
      </div>
    </div>
    <div class="row align-items-center text-center g-0">
      <div class="col-4">
        <h5>$80</h5>
      </div>
      <div class="col-8">
      <a href="#" class="btn btn-dark w-100 p-3 rounded-0 custom-text-red">ADD TO CART</a>
      </div>
    </div>
  </div>
</div>
        </>

    )
}
export default XF33;