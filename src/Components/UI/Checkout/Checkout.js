import React, {useContext} from 'react';
import ReactDOM from "react-dom";
import classes from "./Checkout.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import cartContext from "../../../store/cartContext";
import Meal from "../../Meals/Meal/Meal";
import Cart from "../../Cart/Cart";

const Checkout = ({setCheckoutFlag}) => {
    const context = useContext(cartContext);
    const toggleHandler = () => {
        setCheckoutFlag(false);
    }
    return (
        ReactDOM.createPortal(
            <div className={classes.checkoutBox}>
                <div className={classes.titleBox}>
                    <FontAwesomeIcon icon={faXmark} onClick={toggleHandler}/>
                </div>
                <div className={classes.card}>
                    <div className={classes.cardTitleBox}>
                        <div>
                            <h2>餐品详情</h2>
                        </div>
                        <div className={classes.list}>
                            {context.itemDetail.map(item =>
                                <Meal
                                    data={item}
                                    key={item.title}
                                    noDesc={true}
                                    reverseFlag={true}
                                />)}
                        </div>
                        <div className={classes.price}>
                            <div>{context.totalPrice}</div>
                        </div>
                    </div>
                </div>
                <Cart/>
            </div>
            , document.getElementById('checkout-root'))
    );
};

export default Checkout;
