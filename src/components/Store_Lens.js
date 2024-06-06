import React from 'react';
import style from "../Store_style.module.css"
import XT5 from "../components/Camera_Products/XT5_Camera"
import X100V from "../components/Camera_Products/X100V_Camera"
import X100VI from "../components/Camera_Products/X100VI_Camera"
import XT50 from "../components/Camera_Products/XT50_Camera"
import XH2 from "../components/Camera_Products/XH2_Camera"
import XH2s from "../components/Camera_Products/XH2s_Camera"
import XS20 from "../components/Camera_Products/XS20_Camera"
import XS10 from "../components/Camera_Products/XS10_Camera"
import GFX50s from "../components/Camera_Products/GFX50s_Camera"
import GFX100 from "../components/Camera_Products/GFX100_Camera"
import GFX100S from "../components/Camera_Products/GFX100S_Camera"
import GFX100II from "../components/Camera_Products/GFX100II_Camera"



function Store_Lens() {
  return (
    <div className={style.container}>
      <div className={style.grid}>
        <div className={style.row}>
          <div className={style.col}>
            <XT5 />
          </div>
          <div className={style.col}>
            <X100V />
          </div>
          <div className={style.col}>
            <X100V />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.col}>
            <X100VI />
          </div>
          <div className={style.col}>
            <XT50 />
          </div>
          <div className={style.col}>
            <XH2/>
          </div>
          <div className={style.col}>
            <XH2s/>
          </div>
          <div className={style.col}>
            <XS20/>
          </div>
          <div className={style.col}>
            <XS10/>
          </div>
          <div className={style.col}>
            <GFX50s/>
          </div>
          <div className={style.col}>
            <GFX100/>
          </div>
          <div className={style.col}>
            <GFX100S/>
          </div>
          <div className={style.col}>
            <GFX100II/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Store_Lens;