import React from 'react';
import style from "../Store_style.module.css"
import XT5 from "../components/Camera_Products/XT5_Camera"
/*import X100V from ""
import X100VI from ""
import XT50 from ""
import XT5 from ""
import XH2 from ""
import XH2s from ""
import XS20 from ""
import XS10 from ""
import GFX50s from ""
import GFX100 from ""
import GFX100II from ""*/



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