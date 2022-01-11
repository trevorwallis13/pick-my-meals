import React from 'react';
import DayOfWeek from './DayOfWeek';
import '../../styles/WeekCalendar.scss';
import UnusedMeals from './UnusedMeals';


const WeekCalendar = ({ calendarMeals, unusedMeals, searchMeals }) => {

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
        <div className="week-calendar inner-container">
            <h3>Calendar</h3>
            <div className="calendar-container">
                {dayContainers}
            </div>
           
        </div>
    )
}

export default WeekCalendar;