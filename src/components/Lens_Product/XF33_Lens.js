import React from 'react';
import style from "../Store_style.module.css"
/*import XF33 from "../components/Camera_Products/"
import XF18 from "../components/Camera_Products/"
import XF56 from "../components/Camera_Products/"
import XF80 from "../components/Camera_Products/"
import XF16 from "../components/Camera_Products/"
import XF70 from "../components/Camera_Products/"
import XF100 from "../components/Camera_Products/"
import GF20 from "../components/Camera_Products/"
import GF250 from "../components/Camera_Products/"
import GF55 from "../components/Camera_Products/"
import GF500 from "../components/Camera_Products/"
import GFX100II from "../components/Camera_Products/"*/



function Store_Item() {
  return (
    <div className={style.container}>
      <div className={style.grid}>
        <div className={style.row}>
          <div className={style.col}>
            <XF33 />
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