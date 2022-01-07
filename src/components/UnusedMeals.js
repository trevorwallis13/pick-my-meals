import React from 'react';
import Meal from './Meal';
import { mealOptions } from '../data/mealOptions';
import styles from '../styles/UnusedMeals.module.css';

const UnusedMeals = ({ mealIds }) => {
    console.log(mealIds);
    const unusedMeals = mealIds.map(idx => {
        return <Meal img={mealOptions[idx].img} name={mealOptions[idx].name} time={mealOptions[idx].time} />
    });
   
    return (
        <div className={styles.unusedMealsContainer}>
            {unusedMeals}
        </div>
    )
}

export default UnusedMeals;