import React from 'react';
import { useState} from 'react';
import styles from "../Popup.module.css"

function Popup2({ closePopup }) {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };



    return (
      <div className={styles.popup} onClick={closePopup}>
        <div className={styles.popupInner} onClick={(e) => e.stopPropagation()}>
          <h1>Modify Item</h1>
          <div id={styles.row1}>
            <label id={styles.labelpopup}>ID</label>
            <input id={styles.input_popup} type="text" value="bho" />
          </div>
          <div id={styles.row1}>
            <label id={styles.labelpopup}>Model</label>
            <input id={styles.input_popup} type="text" value="bho" />
          </div>
          <div id={styles.row1}>
            <label id={styles.labelpopup}>Price</label>
            <input id={styles.input_popup} type="text" value="bho" />
          </div>
          <div id={styles.row1}>
            <label id={styles.labelpopup}>Year</label>
            <input id={styles.input_popup} type="text" value="bho" />
          </div>
          <div id={styles.row1}>
            <label id={styles.labelpopup}>Quantity</label>
            <input id={styles.input_popup} type="text" value="bho" />
          </div>
          <div id={styles.row1}>
            <label id={styles.labelpopup}>Type</label>
            <input id={styles.input_popup} type="text" value="bho" />
          </div>
          <div id={styles.row2}>
            <label id={styles.labelpopup}>Description</label>
            <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
          </div>
          <div id={styles.row1}>
            <label for="file-upload" id={styles.custom_file_upload}>Foto</label>
            <input type="file" id="file-upload" name="file" accept=".jpeg, .jpg, image/jpeg"/>
          </div>
          <div id={styles.divbutton}>
            <button id={styles.buttonpopup} onClick={closePopup}>Save</button>
            <button id={styles.buttonpopup} onClick={closePopup}>Close</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Popup2;
