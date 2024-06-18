import Navbar from "../components/navbar";
import style from "../InvioOrdini.module.css"
import Cart_tot from "../components/Cart_tot";
import Navbar_Store from "../components/Navbar_Store";
function InvioOrdini() {
  return (
    <> 
        <Navbar />
        <Navbar_Store />
        <div id={style.grid_container}>
            <div id={style.box}>
                <h1 id={style.titolo}>Fill and Order</h1> 
                <hr></hr>
                <p id={style.paragrafo} >Confirm or modify your data, these will be used for shipping</p>
                <div id={style.rowbox} className="row">
                    <div className="col">
                        <label id={style.label}>Name</label>
                        <input id={style.input_ordine} class="form-control" type="text" defaultValue='Name'/>
                    </div>
                    <div className="col">
                        <label id={style.label}>Surname</label>
                        <input id={style.input_ordine} class="form-control" type="surname" defaultValue='Surname'/>
                    </div>
                    <div className="col">
                        <label id={style.label}>Email</label>
                        <input id={style.input_ordine} class="form-control" type="surname" defaultValue='Email'/>
                    </div>
                </div>
                <div id={style.rowbox} className="row">
                    <div className="col">
                        <label id={style.label}>Address</label>
                        <input id={style.input_ordine} class="form-control" type="text" defaultValue='Name'/>
                    </div>
                    <div className="col">
                        <label id={style.label}>Nation</label>
                        <input id={style.input_ordine} class="form-control" type="surname" defaultValue='Surname'/>
                    </div>
                </div>
                <div id={style.rowbox} className="row">
                    <div className="col">
                        <label id={style.label}>House Nm.</label>
                        <input id={style.input_ordine} class="form-control" type="text" defaultValue='Name'/>
                    </div>
                    <div className="col">
                        <label id={style.label}>Region</label>
                        <input id={style.input_ordine} class="form-control" type="surname" defaultValue='Surname'/>
                    </div>
                    <div className="col">
                        <label id={style.label}>City</label>
                        <input id={style.input_ordine} class="form-control" type="surname" defaultValue='Surname'/>
                    </div>
                </div>
                <hr></hr>
                <div id={style.rowbox} className="row">
                    <div className="col">
                        <label id={style.label}>Card Number</label>
                        <input id={style.input_ordine_credit} class="form-control" type="text" defaultValue='Name'/>
                    </div>
                </div>
                <hr></hr>
                <div id={style.rowbox} className="row">
                    <h2 id={style.Products}>Products</h2>
                     <div className="col">

                     </div>
                    <div>
                    <Cart_tot /> 
                    </div>
                </div>
                <button id={style.button_send_order}  class="btn btn-success">Success</button>
            </div>
        </div>
    </>
  );
}


export default InvioOrdini;




