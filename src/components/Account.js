
import style from '../profile.module.css'

function Account(){
    return(
        <div id={style.container_profile} className='container'>
        <div id={style.box_profile} >
            <h2 id={style.title}>Account settings</h2>
            <p id={style.paragrafo_1}>manage and visualized your personal information</p>
            <div id={style.box_row}  class="mb-1 row">
                <label  class="col-sm-2 col-form-label">Name</label>
                <div id={style.col_input} class="col-sm-10">
                    <input type="text" id={style.name_field} name="name" value="Name" />
                </div>
            </div>
            <div id={style.box_row}  class="mb-1 row">
                <label  class="col-sm-2 col-form-label">Surname</label>
                <div id={style.col_input} class="col-sm-10">
                    <input type="text" id={style.surname_field} name="surname" value="surname" />
                </div>
            </div>
            <div id={style.box_row}   class="mb-1 row">
                <label  for="staticEmail" class="col-sm-2 col-form-label">Email </label>
                <div id={style.col_input} class="col-sm-10">
                    <input type="text" id={style.email_field} name="email" value="Email" />
                </div>
            </div>
            <div id={style.box_row}  class="mb-1 row">
                <label  class="col-sm-2 col-form-label">Password</label>
                <div id={style.col_input} class="col-sm-10">
                    <input type="text" id={style.pass_field} name="password" value="password" />
                </div>
            </div>
            <hr>
            </hr>
            <h2 id={style.paragrafo_2}>Shipping Info</h2>
            <p >information about main shipping address</p>
            <div id={style.box_row}   class="mb-1 row">
                <label  class="col-sm-2 col-form-label">Address</label>
                <div id={style.col_input} class="col-sm-10">
                    <input type="text" id={style.Address_field} name="address" value="Via X" />
                </div>
            </div>
            <div id={style.box_row}   class="mb-1 row">
                <label  class="col-sm-2 col-form-label">Nm.</label>
                <div id={style.col_input} class="col-sm-10">
                    <input type="text" id={style.Nm_field} name="Nm." value="Nm." />
                </div>
            </div>
            <div id={style.box_row}   class="mb-1 row">
                <label  class="col-sm-2 col-form-label">Cap</label>
                <div id={style.col_input} class="col-sm-10">
                    <input type="text" id={style.Cap_field} name="Cap" value="06035" />
                </div>
            </div>
            <div id={style.box_row}   class="mb-1 row">
                <label  class="col-sm-2 col-form-label">City</label>
                <div id={style.col_input} class="col-sm-10">
                    <input type="text" id={style.city_field} name="City" value="Gualdo Cattaneo" />
                </div>
            </div>
            <div id={style.box_row}   class="mb-1 row">
                <label  class="col-sm-2 col-form-label">Region</label>
                <div id={style.col_input} class="col-sm-10">
                    <input type="text" id={style.region_field} name="Regions" value="Umbria" />
                </div>
            </div>
            <div id={style.box_row}   class="mb-1 row">
                <label  class="col-sm-2 col-form-label">Nation</label>
                <div id={style.col_input} class="col-sm-10">
                    <input type="text" id={style.nation_field} name="Nation" value="Italy" />
                </div>
            </div>
        </div>
        </div>
    )
}


export default Account;