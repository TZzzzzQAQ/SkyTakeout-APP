import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import classes from './Confirm.module.css'

const Confirm = ({onCancel, onConfirm}) => {
    return (
        <Backdrop toggle={onCancel}>
            <div className={classes.confirmBox}>
                <p>{'消息'}</p>
                <div className={classes.btnBox}>
                    <button className={classes.cancelBtn} onClick={onCancel}>
                        取消
                    </button>
                    <button className={classes.confirmBtn} onClick={onConfirm}>
                        确认
                    </button>
                </div>
            </div>

        </Backdrop>
    );
};

export default Confirm;
