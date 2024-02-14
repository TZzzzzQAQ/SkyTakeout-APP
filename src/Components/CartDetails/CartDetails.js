import React, {useContext, useState} from 'react';
import classes from './CartDetails.module.css'
import Backdrop from "../UI/Backdrop/Backdrop";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import cartContext from "../../store/cartContext";
import Meal from "../Meals/Meal/Meal";
import Confirm from "../UI/Confirm/Confirm";

const CartDetails = ({toggle}) => {
    const context = useContext(cartContext);
    const [confirmFlag, setConfirmFlag] = useState(false);
    const cancelConfirm = () => {
        setConfirmFlag(false);
    }
    const confirmConfirm = () => {
        setConfirmFlag(false);
        context.clearCart();
    }
    const confirmHandler = () => {
        setConfirmFlag(true);
    }
    return (

        <>
            <Backdrop toggle={toggle}>
                <div onClick={(e) => {
                    e.stopPropagation()
                }}
                     className={classes.cartDetailsDiv}>
                    <div className={classes.headerBox}>
                        <h2>餐品详情</h2>
                        <div
                            className={classes.clearCart}
                            onClick={confirmHandler}
                        >
                            <FontAwesomeIcon icon={faTrash}/>
                            <p>清空购物车</p>
                        </div>
                    </div>
                    <div className={classes.cartMeals}>
                        {context.itemDetail.map(item =>
                            <Meal
                                data={item}
                                key={item.title}
                                noDesc='true'/>)}
                    </div>
                </div>
            </Backdrop>
            {confirmFlag &&
                <Confirm
                    onCancel={cancelConfirm}
                    onConfirm={confirmConfirm}/>}
        </>
    );
};

export default CartDetails;
