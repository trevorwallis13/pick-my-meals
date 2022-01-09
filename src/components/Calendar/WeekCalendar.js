import React from 'react';
import DayOfWeek from './DayOfWeek';
import styles from '../../styles/WeekCalendar.module.css';
import UnusedMeals from './UnusedMeals';


const WeekCalendar = ({ mealIds, mealOptions, unusedMealIds, searchMeals }) => {

    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

    const dayContainers = daysOfWeek.map((day, i) => {
        return <DayOfWeek 
                    key={i} 
                    day={day} 
                    mealId={mealIds[i]} 
                    mealOptions={mealOptions} 
                />
    })

    return (
        <div className={styles.mealSection}>
            <div className='flex-col f-al-cen'>
                <h3>Calendar</h3>
                <div className={styles.calendar}>
                    {dayContainers}
                </div>
            </div>
            <aside className={styles.unusedMeals}>
                <UnusedMeals 
                    mealIds={unusedMealIds} 
                    mealOptions={mealOptions}
                    searchMeals={searchMeals}
                />
            </aside>
        </div>
    )
}

export default WeekCalendar;