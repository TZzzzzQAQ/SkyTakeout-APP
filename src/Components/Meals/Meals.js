import React from 'react';
import Meal from "./Meal/Meal";
import classes from "./Meals.module.css";

const Meals = ({data}) => {
    return (
        <div className={classes.meals}>
            {data.map(item => <Meal data={item} key={item.title}/>)}
        </div>
    );
};

export default Meals;
