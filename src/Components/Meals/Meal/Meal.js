import React from 'react';
import classes from "./Meal.module.css";
import Counter from "../../UI/Counter/Counter";

const Meal = ({data, noDesc, reverseFlag}) => {
    return (
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <img src={data.img} alt='' className={classes.mealImg}/>
            </div>
            <div className={classes.rightContainer}>
                <div>
                    <h1>{data.title}</h1>
                    {noDesc ? null : <p className={classes.pContent}>{data.desc}</p>}
                </div>
                <div className={`${reverseFlag ? classes.reverse : null} ${classes.contentContainer}`}>
                    <div className={classes.price}>{data.price}</div>
                    <Counter data={data}/>
                </div>
            </div>
        </div>
    );
};

export default Meal;
