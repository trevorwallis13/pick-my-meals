import React from 'react';
import Meal from './Meal';
import '../../styles/UnusedMeals.scss';
import SearchMeal from './SearchMeal';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const UnusedMeals = ({ unusedMeals, searchMeals, setSearchMeals }) => {

     if (!unusedMeals.length) {
        return (
            <div className="unused-meals inner-container">
                <h3>Meals</h3>
                <p>Add meals to get started!</p>
            </div>
        )
    }
    
    const mealsAlphaSorted = unusedMeals.sort((a, b) => {

        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();

        if (nameA === nameB) return 0;
        return nameA < nameB ? -1 : 1;
    });

    const searchUnusedMeals = mealsAlphaSorted.filter(meal => {
        const mealName = meal.name.toLowerCase();
        const searchVal = searchMeals.toLowerCase();

        return mealName.includes(searchVal);
    })

    const unusedMealComponents = searchUnusedMeals.map((meal, i) => {
        return <Meal key={meal.id} id={meal.id} img={meal.img} name={meal.name} time={meal.time} index={i} />
    });
   
    return (
        <div className='unused-meals inner-container'>
            <h3>Meals</h3>
            <SearchMeal 
                searchMeals={searchMeals}
                setSearchMeals={setSearchMeals}/>
            <Droppable droppableId='unused-meals'>
                {(provided) => {
                    return (
                    <div className="unused-meals-container" ref={provided.innerRef} {...provided.droppableProps}>
                        {unusedMealComponents}
                    </div>
                    )}}
            </Droppable>
           
        </div>
    )
}

export default UnusedMeals;