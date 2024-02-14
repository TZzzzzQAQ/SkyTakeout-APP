import React, {useContext} from 'react';
import classes from './Counter.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cartContext";

const Counter = ({data}) => {
        const {addItem, subItem} = useContext(CartContext);
        const subHandler = () => {
            subItem(data)
        }
        const addHandler = () => {
            addItem(data)
        }
        return (
            <div className={classes.container}>
                {
                    (data.amount === undefined || data.amount === 0) ? '' :
                        < >
                            <button className={classes.sub} onClick={subHandler}><FontAwesomeIcon icon={faMinus}/></button>
                            <span className={classes.pContent}>{data.amount}</span>
                        </>
                }
                <button className={classes.add} onClick={addHandler}><FontAwesomeIcon icon={faPlus}/></button>
            </div>
        )
            ;
    }
;

export default Counter;
