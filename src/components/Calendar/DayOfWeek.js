import React from 'react';
import Meal from './Meal';
import '../../styles/DayOfWeek.scss';
import { Droppable } from 'react-beautiful-dnd';
import UnusedMeals from './UnusedMeals';

const DayOfWeek = ({ index, day, calendarMeals, setCalendarMeals, setUnusedMeals, unusedMeals }) => {
    
    // const dailyMeal = meal.map(meal => {
    //     return <Meal img={meal.img} name={meal.name} time={meal.time} />
    // });
    let dailyMeal = '';

    const removeCalItem = () => {
        let newCalMeals = Array.from(calendarMeals);
        let newUnusedMeals = Array.from(unusedMeals);
        let movedMeal = newCalMeals.splice(index, 1, '');
        newUnusedMeals.splice(0, 0, ...movedMeal);
        setCalendarMeals(newCalMeals);
        setUnusedMeals(newUnusedMeals);
    }

    if(Object.keys(calendarMeals.length && calendarMeals[index]).length) {
        const { id, img, name, time } = calendarMeals[index];
        dailyMeal = <Meal 
                        key={id} 
                        img={img} 
                        name={name} 
                        time={time} 
                        index={index} 
                        removeCalItem={removeCalItem}
                    />
    }
    
    return (
        <div className="dayOfWeek">
            <h4>{day}</h4>
            <Droppable droppableId={day}>
                {(provided) => {
                    return (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {dailyMeal}
                            {provided.placeholder}
                        </div>   
                    )
                }}
            </Droppable>
        </div>
    )
};

export default DayOfWeek;