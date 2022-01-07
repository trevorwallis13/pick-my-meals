import React from 'react';
import Meal from './Meal';
import { mealOptions } from '../data/mealOptions';
import styles from '../styles/DayOfWeek.module.css';

const DayOfWeek = ({ day, mealId }) => {
    
    const meals = mealOptions.map(meal => {
        return <Meal img={meal.img} name={meal.name} time={meal.time} />
    });
    
    return (
        <div className={styles.day}>
            <h2>{day}</h2>
            {meals[mealId]}
        </div>
    )
};

export default DayOfWeek;