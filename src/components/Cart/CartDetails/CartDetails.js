import React, {useContext, useState} from 'react';
import Backdrop from "../../UI/Backdrop/Backdrop";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetails.module.css";
import CartContext from "../../../store/cart-context";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../UI/Confirm/Confirm";
const CartDetails = () => {

    const ctx = useContext(CartContext);

    const [showConfirm,setShowConfirm] = useState(false);

    const cancelHandler=(e)=>{
        e.stopPropagation();
        setShowConfirm(false);
    }

    const showConfirmHandler=()=>{
        setShowConfirm(true);
    }

    const okHandler=()=>{
        ctx.clearCart();
    }
    return (
       <Backdrop onClick={cancelHandler}>

           {showConfirm&&<Confirm
               onCancel={cancelHandler}
               onOK={okHandler}
               confirmText={"确认清空购物车吗？"}/>}

           <div
               onClick={e=>e.stopPropagation()}
               className={classes.Details}>
               <header className={classes.Header}>
                   <h2 className={classes.Title}>餐品详情</h2>
                   <div className={classes.Clear}>
                       <FontAwesomeIcon icon={faTrash}/>
                       <span onClick={showConfirmHandler}>清空购物车</span>
                   </div>
               </header>
               <div className={classes.MealsList}>
                   {
                       ctx.items.map(item=>
                       <Meal noDesc key={item.id} meal={item}/>
                       )
                   }
               </div>
           </div>

       </Backdrop>
    );
};

export default CartDetails;