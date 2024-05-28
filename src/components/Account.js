
import style from '../profile.module.css'

function Account(){
    return(
        <>
        <div id={style.box_profile} >
            <h2 class={style.titolo_account}>Account Information</h2>
            <div class={style.grid_item}>
                <label>Name</label>
                <input id={style.input_profilo} type="text" value="Readonly 1" readonly/>
            </div>
            <div class={style.grid_item}>
                <label>Surname:</label>
                <input id={style.input_profilo} type="text" value="Readonly 1" readonly/>
            </div>
            <div class={style.grid_item}>
                <label>Email:</label>
                <input id={style.input_profilo} type="text" value="Readonly 1" readonly/>
            </div>
            <div class={style.grid_item}>
                <label>Password:</label>
                <input id={style.input_profilo} type="text" value="Readonly 1" readonly/>
            </div>
            <div class={style.grid_item}>
                <label>Telephone Number</label>
                <input id={style.input_profilo} type="text" value="Readonly 1" readonly/>
            </div>
            <hr></hr>
            <div class={style.grid_item}>
                <label>Address</label>
                <input id={style.input_profilo} type="text" value="Readonly 1" readonly/>
            </div>
            <div class={style.grid_item}>
                <label>House Nm.</label>
                <input id={style.input_profilo} type="text" value="Readonly 1" readonly/>
            </div>
            <div class={style.grid_item}>
                <label>Cap</label>
                <input id={style.input_profilo} type="text" value="Readonly 1" readonly/>
            </div>
            <div class={style.grid_item}>
                <label>Region</label>
                <input id={style.input_profilo} type="text" value="Readonly 1" readonly/>
            </div>
            <div class={style.grid_item}>
                <label>Nation</label>
                <input id={style.input_profilo} type="text" value="Readonly 1" readonly/>
            </div>
        </div>
        </>
    )
}


export default Account;




