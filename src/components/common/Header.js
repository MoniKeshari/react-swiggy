import React from "react";
import style from "../../style/header.module.scss";
import imgheader from "../../assets/productImg/swiggy.svg"
import InputBaseField from "../customcomponent/Input";
import searchIcon from "../../assets/productImg/search.png";
import ButtonComponent from "../customcomponent/Button";
// import ButtonComponent from "../customcomponent/Button";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={`container-fluid ${style.conatiner_wrapper}`}>
      <div className="container">
        <div className={style.main_class}>
          <div className={style.nav_div}>
            <div className={style.first_div}>

              <img src={imgheader} width={40} height={30} alt="" />

              <div className={style.third_div}>  <Link to="/"> Home</Link></div>

            </div>
            <div className={style.button_text}>
              <div>
                <InputBaseField
                  className={style.inputfield}
                  labelclassname={style.forlabel}
                  placeholder="Search restaurants and food here"

                />
              </div>
              <div >
                <ButtonComponent searchIcon={searchIcon}
                  searchClassName={style.searchicon} buttonclassname={style.button_custom_text} />
              </div>
            </div>

            <div className={style.third_div}>

              <div>

                <Link to="/contact">
                  Contact
                </Link>


              </div>
              <div>
                <Link to="/about">
                  About
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default NavBar;
