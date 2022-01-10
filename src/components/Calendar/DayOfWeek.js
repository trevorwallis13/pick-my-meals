import React from 'react';
import Meal from './Meal';
import '../../styles/DayOfWeek.scss';

const DayOfWeek = ({ index, day, calendarMeals }) => {
    
    // const dailyMeal = meal.map(meal => {
    //     return <Meal img={meal.img} name={meal.name} time={meal.time} />
    // });
    let dailyMeal = '';

    if(calendarMeals.length) {
        const { img, name, time } = calendarMeals[index];
        dailyMeal = <Meal img={img} name={name} time={time} />
    }
    
    return (
        <div className="dayOfWeek">
            <h3>{day}</h3>
            {dailyMeal}
        </div>
    )
};

export default DayOfWeek;