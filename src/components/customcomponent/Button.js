import React from "react";
const ButtonComponent = (props) => {
    const {label, buttonclassname, onClickHandler, searchClassName, searchIcon} = props;
  return (
    <>
      <button className={buttonclassname} onClick={onClickHandler}>{label && label}
      {searchClassName && (  <img src={searchIcon} alt="img" className={searchClassName}/>)}
      </button>
   
    </>
  );
};
export default ButtonComponent;
