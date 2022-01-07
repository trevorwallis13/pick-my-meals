import React from 'react';
import Meal from './Meal';
import { mealOptions } from '../data/mealOptions';
import styles from '../styles/UnusedMeals.module.css';

const UnusedMeals = ({ mealIds }) => {
    console.log(mealIds);
    const unusedMeals = mealIds.map(idx => {
        return <Meal key={mealOptions[idx].id} img={mealOptions[idx].img} name={mealOptions[idx].name} time={mealOptions[idx].time} />
    });
   
    return (
        <div className={styles.unusedMeals}>
            <div className='flex-col f-al-cen'>
                <h3>Meals</h3>
                <div className={styles.unusedMealsContainer}>
                    {unusedMeals}
                </div>
            </div>
        </div>
    )
}

export default UnusedMeals;