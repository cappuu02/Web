
import style from '../profile.module.css'
import React, { useEffect, useState } from 'react';

function Account(){

    const [isEditable, setIsEditable] = useState(false);


    useEffect(() => {
        const EditIcon = document.getElementById(style.icona_modifier);
        const input_profiloM = document.getElementById(style.input_profilo)

        if (EditIcon && input_profiloM) {
            console.log("Sono entrato");


            const handleModifierClick = () => {
                setIsEditable(true);

            }

            EditIcon.addEventListener('click', handleModifierClick);
          
            
        }

        
    
        
      }, []);



    return(
        <>
        {isEditable ?(
        <div id={style.box_profile} >
            <div id={style.div_titolo}>
                <h2 class={style.titolo_account}>Account Information</h2>
                <i id={style.icona_modifier} class="bi bi-pencil-square"></i>
            </div>
            <div class={style.grid_item}>
                    <label>Name</label>
                    <input id={style.input_profilo} class="form-control" type="text" defaultValue='Name'/>
                
            </div>
            <div class={style.grid_item}>
                <label>Surname:</label>
                <input id={style.input_profilo} type="text" defaultValue=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>Email:</label>
                
                <input id={style.input_profilo} type="text" defaultValue=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>Password:</label>
                
                <input id={style.input_profilo} type="text" defaultValue=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>Telephone Number</label>
                
                <input id={style.input_profilo} type="text" defaultValue=" 1" />
            </div>


            <hr></hr>


            <div class={style.grid_item}>
                <label>Address</label>
                
                <input id={style.input_profilo} type="text" defaultValue=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>House Nm.</label>
                
                <input id={style.input_profilo} type="text" defaultValue=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>Cap</label>
                
                <input id={style.input_profilo} type="text" defaultValue=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>City</label>
                
                <input id={style.input_profilo} type="text" defaultValue=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>Region</label>
                
                <input id={style.input_profilo} type="text" defaultValue=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>Nation</label>
                
                <input id={style.input_profilo} type="text" defaultValue=" 1" />
            </div>
            <button id={style.button_modifica} type="button" class="btn btn-danger">Apply Changes</button>

            




        </div>


        ) : (
            <div id={style.box_profile} >
            <div id={style.div_titolo}>
                <h2 class={style.titolo_account}>Account Information</h2>
                <i id={style.icona_modifier} class="bi bi-pencil-square"></i>
            </div>
            <div class={style.grid_item}>
                    <label>Name</label>
                    <input id={style.input_profilo} class="form-control" type="text" value='Name'/>
                
            </div>
            <div class={style.grid_item}>
                <label>Surname:</label>
                <input id={style.input_profilo} type="text" value=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>Email:</label>
                
                <input id={style.input_profilo} type="text" value=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>Password:</label>
                
                <input id={style.input_profilo} type="text" value=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>Telephone Number</label>
                
                <input id={style.input_profilo} type="text" value=" 1" />
            </div>


            <hr></hr>


            <div class={style.grid_item}>
                <label>Address</label>
                
                <input id={style.input_profilo} type="text" value=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>House Nm.</label>
                
                <input id={style.input_profilo} type="text" value=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>Cap</label>
                
                <input id={style.input_profilo} type="text" value=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>City</label>
                
                <input id={style.input_profilo} type="text" value=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>Region</label>
                
                <input id={style.input_profilo} type="text" value=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>Nation</label>
                
                <input id={style.input_profilo} type="text" value=" 1" />
            </div>

            <hr></hr>

            <div class={style.grid_item}>
                <label>Card Number</label>
                <input id={style.input_profilo} type="text" value=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>Expiration date</label>
                <input id={style.input_profilo} type="text" value=" 1" />
            </div>
            <div class={style.grid_item}>
                <label>Pin</label>
                <input id={style.input_profilo} type="text" value=" 1" />
            </div>



        </div>
        )
        }

        








        
        
        </>
    )
}


export default Account;



