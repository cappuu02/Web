import React from 'react';
import style from "../Store_style.module.css"
import XT5 from "../components/Camera_Products/XT5_Camera"

//contenitore CARD STORE
function Store_Item() {
  return (
    <div className={style.container}>
      <div className={style.grid}>
        <div className={style.row}>
          <div className={style.col}>
            <XT5 />
          </div>
          <div className={style.col}>
            <XT5 />
          </div>
          <div className={style.col}>
            <XT5 />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.col}>
            <XT5 />
          </div>
          <div className={style.col}>
            <XT5 />
          </div>
          <div className={style.col}>
            <XT5 />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Store_Item;