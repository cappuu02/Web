import React from 'react';
import style from "../Store_style.module.css"
import XF33 from "../components/Lens_Product/XF33_Lens"
import XF18 from "../components/Lens_Product/XF18_Lens"
import XF56 from "../components/Lens_Product/XF56_Lens"
import XF80 from "../components/Lens_Product/XF80_Lens"
import XF16 from "../components/Lens_Product/XF16_Lens"
import XF70 from "../components/Lens_Product/XF70_Lens"
import XF100 from "../components/Lens_Product/XF100_Lens"
import GF20 from "../components/Lens_Product/GF20_Lens"
import GF120 from "../components/Lens_Product/GF120_Lens"
import GF250 from "../components/Lens_Product/GF250_Lens"
import GF55 from "../components/Lens_Product/GF55_Lens"
import GF500 from "../components/Lens_Product/GF500_Lens"



function Store_Lens() {
  return (
    <div className={style.container}>
      <div className={style.grid}>
        <div className={style.row}>
          <div className={style.col}>
            <XF33 />
          </div>
          <div className={style.col}>
            <XF18 />
          </div>
          <div className={style.col}>
            <XF56 />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.col}>
            <XF80 />
          </div>
          <div className={style.col}>
            <XF16 />
          </div>
          <div className={style.col}>
            <XF70/>
          </div>
          <div className={style.col}>
            <XF100/>
          </div>
          <div className={style.col}>
            <GF20/>
          </div>
          <div className={style.col}>
            <GF120/>
          </div>
          <div className={style.col}>
            <GF250/>
          </div>
          <div className={style.col}>
            <GF55/>
          </div>
          <div className={style.col}>
            <GF500/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Store_Lens;