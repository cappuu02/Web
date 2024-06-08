import React from 'react';
import style from "../Store_style.module.css"
import  Tripod from "../components/Accessori_Product/Tripod_Accessori"
import  MHGXT5 from "../components/Accessori_Product/MHGXT5_Accessori"
import  EF60F from "../components/Accessori_Product/EF60F_Accessori"
import  EFW1 from "../components/Accessori_Product/EFW1_Accessori"
import  LHCP27 from "../components/Accessori_Product/LHCP27_Accessori"
import  LHXF24II from "../components/Accessori_Product/LHXF24II_Accessori"
import  NPW126S from "../components/Accessori_Product/NPW126S_Accessori"
import NPW235 from "../components/Accessori_Product/NPW235_Accessori"
import  LCX100V from "../components/Accessori_Product/LCX100V_Accessori"
import  RR100 from "../components/Accessori_Product/RR100_Accessori"
import  BCW126S from "../components/Accessori_Product/BCW126S_Accessori"



function Store_Acessori() {
  return (
    <div className={style.container}>
      <div className={style.grid}>
        <div className={style.row}>
          <div className={style.col}>
            <Tripod />
          </div>
          <div className={style.col}>
            <MHGXT5 />
          </div>
          <div className={style.col}>
            <EF60F />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.col}>
            <EF60F />
          </div>
          <div className={style.col}>
            <EFW1 />
          </div>
          <div className={style.col}>
            <LHCP27/>
          </div>
          <div className={style.col}>
            <LHXF24II/>
          </div>
          <div className={style.col}>
            <NPW126S/>
          </div>
          <div className={style.col}>
            <NPW235/>
          </div>
          <div className={style.col}>
            <LCX100V/>
          </div>
          <div className={style.col}>
            <RR100/>
          </div>
          <div className={style.col}>
            <BCW126S/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Store_Acessori;