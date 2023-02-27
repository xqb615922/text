import React from 'react';
import ReactDOM from "react-dom";
import classes from "./Checkout.module.css";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const checkoutRoot = document.getElementById('checkout-root')


const Checkout = (props) => {

    return (
       ReactDOM.createPortal(
           <div className={classes.Checkout}>
               <FontAwesomeIcon onClick={()=>props.onHide()} className={classes.Close} icon={faXmark}/>
               <div className={classes.MealsDesc}>
                   <header className={classes.Header}>
                       <h2>餐品详情</h2>
                   </header>
                   <div>

                   </div>
                   <footer>

                   </footer>
               </div>

           </div>,
           checkoutRoot
       )
    );
};

export default Checkout;