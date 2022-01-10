import React from 'react';
import DayOfWeek from './DayOfWeek';
import styles from '../../styles/WeekCalendar.module.css';
import UnusedMeals from './UnusedMeals';


const WeekCalendar = ({ calendarMeals, unusedMeals, searchMeals }) => {

    console.log(`calendarMeals: ${calendarMeals}`);

    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

    const dayContainers = daysOfWeek.map((day, i) => {
        return <DayOfWeek 
                    key={i} 
                    day={day} 
                    calendarMeals={calendarMeals} 
                    index={i}
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
                    unusedMeals={unusedMeals} 
                    searchMeals={searchMeals}
                />
            </aside>
        </div>
    )
}

export default WeekCalendar;