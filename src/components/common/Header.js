import React from "react";
import style from "../../style/header.module.scss";
import imgheader from "../../assets/productImg/swiggy.svg"
import InputBaseField from "../customcomponent/Input";
import searchIcon from "../../assets/productImg/search.png";
import ButtonComponent from "../customcomponent/Button";
import { Link } from 'react-router-dom';
import useScreen from "../../utils/useScreen";
const NavBar = () => {
  const scrollPosition= useScreen();
  return (
    <div className={`container-fluid ${style.conatiner_wrapper} ${scrollPosition? style.scrollcheck: ""}`} >
      <div className="container">
        <div className={style.main_class}>
          <div className={`row ${style.nav_div}`}>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <div className={style.first_div}>
                <img src={imgheader} width={40} height={30} alt="" />
                <div className={style.third_div}>  <Link to="/"> Home</Link></div>
              </div>
            </div>
            <div className="col-md-5 col-lg-3 col-sm-12">
              <div className={style.button_text}>
                <InputBaseField
                  className={style.inputfield}
                  labelclassname={style.forlabel}
                  placeholder="Search restaurants and food here"
                />
                <ButtonComponent searchIcon={searchIcon}
                  searchClassName={style.searchicon} buttonclassname={style.button_custom_text} />
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-12">
              <div className={style.list_item}>
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
                <div>
                  <Link to="/grocery">
                  grocery
                  </Link>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
