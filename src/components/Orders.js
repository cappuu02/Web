import React from 'react';
import style from '../profile.module.css'


    function Orders() {
    return (
        <>  
            <div id={style.box_profile3}>
                <div class={style.dropdown}>
                    <button class={style.dropbtn}>Ordine 1</button>
                    <div class={style.contenuto}>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Order Code: XXXX'/>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Total Amount: YYYY'/>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Type of Shipping: TTTT'/>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Item Ordered: NNNN'/>
                    </div>
                </div>
                <div class={style.dropdown}>
                    <button class={style.dropbtn}>Ordine 2</button>
                    <div class={style.contenuto}>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Order Code: XXXX'/>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Total Amount: YYYY'/>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Type of Shipping: TTTT'/>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Item Ordered: NNNN'/>
                    </div>
                </div>
                <div class={style.dropdown}>
                    <button class={style.dropbtn}>Ordine 3</button>
                    <div class={style.contenuto}>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Order Code: XXXX'/>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Total Amount: YYYY'/>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Type of Shipping: TTTT'/>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Item Ordered: NNNN'/>
                    </div>
                </div>
                <div class={style.dropdown}>
                    <button class={style.dropbtn}>Ordine 4</button>
                    <div class={style.contenuto}>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Order Code: XXXX'/>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Total Amount: YYYY'/>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Type of Shipping: TTTT'/>
                        <input id={style.input_profilo_order} class="form-control" type="text" defaultValue='Item Ordered: NNNN'/>
                    </div>
                </div>
            </div>
        </>
    );
  }

  export default Orders;




