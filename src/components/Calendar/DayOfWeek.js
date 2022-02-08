import React from 'react';
import Meal from './Meal';
import '../../styles/DayOfWeek.scss';
import { Droppable } from 'react-beautiful-dnd';

const DayOfWeek = ({ index, day, calendarMeals, setCalendarMeals }) => {
    
    let dailyMeal = '';

    const removeCalItem = () => {
        let newCalMeals = Array.from(calendarMeals);
        newCalMeals.splice(index, 1, '');
        setCalendarMeals(newCalMeals);
    }

    if(Object.keys(calendarMeals.length && calendarMeals[index]).length) {
        const { id, img, meal_name, prep_time } = calendarMeals[index];
        dailyMeal = <Meal 
                        key={id} 
                        img={img} 
                        meal_name={meal_name} 
                        prep_time={prep_time} 
                        index={index} 
                        removeCalItem={removeCalItem}
                    />
    }
    
    return (
        <>
            <Droppable droppableId={day}>
                {(provided) => {
                    return (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <div className="dayOfWeek">
                                <h4>{day}</h4>
                                {dailyMeal}
                                {provided.placeholder}
                            </div>
                        </div>   
                    )
                }}
            </Droppable>
        </>
    )
};

export default DayOfWeek;