import React from 'react'
import style from "../../style/header.module.scss";
const InputBaseField = (props) => {
    const {label, className, labelclassname , inputsearch, searchhandleClick}=props;
  return (
    <div className={style.input_wrapper}>
        {label && (<label className={labelclassname}>{label}</label>)}
        <input {...props}  className= {className} value={inputsearch} onChange={searchhandleClick}/>
    </div>
  )
}
export default InputBaseField