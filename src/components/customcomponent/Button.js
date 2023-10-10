import React from "react";

const ButtonComponent = (props) => {
    const {label, buttonclassname, onClickHandler, searchClassName, searchIcon} = props;
  return (
    <>
      <button className={buttonclassname} onClick={onClickHandler}>{label}</button>
      <img src={searchIcon} alt="img" className={searchClassName}/>
    </>
  );
};

export default ButtonComponent;
