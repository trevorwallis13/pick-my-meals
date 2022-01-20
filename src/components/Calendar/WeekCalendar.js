import React from 'react';
import DayOfWeek from './DayOfWeek';
import '../../styles/WeekCalendar.scss';
import Button from 'react-bootstrap/Button';


const WeekCalendar = ({ calendarMeals, setCalendarMeals, unusedMeals, setUnusedMeals, clearCalendar }) => {

    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

    const dayContainers = daysOfWeek.map((day, i) => {
        return (

                <DayOfWeek
                key={i}
                index={i}
                day={day}
                calendarMeals={calendarMeals}
                setCalendarMeals={setCalendarMeals}
                setUnusedMeals={setUnusedMeals}
                unusedMeals={unusedMeals}
                />
 
        )
    });

    return (
        <div className="week-calendar inner-container">
            <div className="cal-header-section">
                <h3>Calendar</h3>
                <Button variant="outline-dark" className="clear-btn" onClick={clearCalendar}>Clear calendar</Button>
            </div>
            <div className="calendar-container">
                {dayContainers}
            </div>
        </div>
    )
}

export default WeekCalendar;