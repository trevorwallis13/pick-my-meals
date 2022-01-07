import React, { useState } from 'react';
import DayOfWeek from './DayOfWeek';
import styles from '../styles/WeekCalendar.module.css';


const WeekCalendar = ({ mealIds }) => {
  
    return (
        <div className={styles.calendar}>
            <DayOfWeek day='Monday' mealId={mealIds[0]} />
            <DayOfWeek day='Tuesday' mealId={mealIds[1]} />
            <DayOfWeek day='Wednesday' mealId={mealIds[2]} />
            <DayOfWeek day='Thursday' mealId={mealIds[3]} />
            <DayOfWeek day='Friday' mealId={mealIds[4]} />
            <DayOfWeek day='Saturday' mealId={mealIds[5]} />
            <DayOfWeek day='Sunday' mealId={mealIds[6]} />
        </div>
    )
}

export default WeekCalendar;