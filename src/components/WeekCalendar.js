import React, { useState } from 'react';
import DayOfWeek from './DayOfWeek';
import styles from '../styles/WeekCalendar.module.css';
import { mealOptions } from '../data/mealOptions';
import UnusedMeals from './UnusedMeals';


const WeekCalendar = () => {

    const [mealIds, setMealIds] = useState([]);
    const [unusedMealIds, setUnusedMealIds] = useState(() => {
        return mealOptions.map((meal, i) => i);
    });

    const randomMealIndices = () => {
      let indices = [];
      let randomizedIndices = [];
  
      for (let i = 0; i<mealOptions.length; i++) indices.push(i);
  
      while(randomizedIndices.length < 7) {
          const randIdx = indices.splice(Math.floor(Math.random() * indices.length), 1);
          randomizedIndices.push(randIdx); 
      }
      return [randomizedIndices, indices]
  }
  
    const selectMeals = () => {
        const [ calendarIndices, unusedIndices ] = randomMealIndices();
        setMealIds(calendarIndices);
        setUnusedMealIds(unusedIndices);
    }

    return (
        <div className={styles.container}>
            <div className={styles.headerSection}>
                <h1>What do you want for dinner this week?</h1>
                <button onClick={selectMeals}>Pick my meals!</button>
            </div>
            <div className={styles.mealSection}>
                <div className={styles.calendar}>
                    <DayOfWeek day='Monday' mealId={mealIds[0]} />
                    <DayOfWeek day='Tuesday' mealId={mealIds[1]} />
                    <DayOfWeek day='Wednesday' mealId={mealIds[2]} />
                    <DayOfWeek day='Thursday' mealId={mealIds[3]} />
                    <DayOfWeek day='Friday' mealId={mealIds[4]} />
                    <DayOfWeek day='Saturday' mealId={mealIds[5]} />
                    <DayOfWeek day='Sunday' mealId={mealIds[6]} />
                </div>
                <div className={styles.unusedMeals}>
                    <UnusedMeals mealIds={unusedMealIds}/>
                </div>
            </div>
        </div>
    )
}

export default WeekCalendar;