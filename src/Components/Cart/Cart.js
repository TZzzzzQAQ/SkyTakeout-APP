import React, {useContext, useEffect, useState} from 'react';
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png'
import cartContext from "../../store/cartContext";
import CartDetails from "../CartDetails/CartDetails";
import Checkout from "../UI/Checkout/Checkout";

const Cart = () => {
    const context = useContext(cartContext);
    const flag = context.totalAmount !== 0;

    const [detailsFlag, setDetailsFlag] = useState(false);
    const [checkoutFlag, setCheckoutFlag] = useState(false);

    const toggleDetails = () => {
        if (context.totalAmount === 0) {
            return;
        }
        setDetailsFlag(prevState => !prevState);
    }
    const toggle = () => {
        setDetailsFlag(false);
    }

    const toggleCheckout = (e) => {
        e.stopPropagation();
        if (context.totalAmount === 0) {
            return;
        }
        setCheckoutFlag(prevState => !prevState)
    }

    useEffect(() => {
        if (context.totalAmount === 0) {
            setDetailsFlag(false);
            setCheckoutFlag(false);
        }
    }, [context, setCheckoutFlag, setDetailsFlag]);

    return (
        <>
            {(detailsFlag) && <CartDetails toggle={toggle}/>}
            {(checkoutFlag) && <Checkout setCheckoutFlag={setCheckoutFlag}/>}
            <div
                className={classes.cartDiv}
                 onClick={toggleDetails}>
                <div className={classes.cartBox}>
                    <img
                        src={iconImg}
                        alt='' className={classes.img}/>
                    {flag && <p className={classes.amount}>{context.totalAmount}</p>}
                </div>
                <div className={classes.leftDiv}>
                    {flag && <p className={classes.price}>{context.totalPrice}</p>}
                    {!flag && <p className={classes.noPrice}>未选购商品</p>}
                    <button
                        className={flag ? classes.btn : classes.noBtn}
                        onClick={toggleCheckout}
                    >选好了
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart;
