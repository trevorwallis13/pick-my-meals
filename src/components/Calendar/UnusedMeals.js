import React from 'react';
import Meal from './Meal';
import '../../styles/UnusedMeals.scss';
import SearchMeal from './SearchMeal';
import { Droppable } from 'react-beautiful-dnd';
import Button from 'react-bootstrap/Button';

const UnusedMeals = ({ unusedMeals, sortAscending, searchMeals, setSearchMeals }) => {

     if (!unusedMeals.length) {
        return (
            <div className="unused-meals inner-container">
                <h3>Meals</h3>
                <p>Add meals to get started!</p>
            </div>
        )
    }
    
    const searchUnusedMeals = unusedMeals.filter(meal => {
        const mealName = meal.name.toLowerCase();
        const searchVal = searchMeals.toLowerCase();

        return mealName.includes(searchVal);
    })

    const unusedMealComponents = searchUnusedMeals.map((meal, i) => {
        return <Meal key={meal.id} id={meal.id} img={meal.img} name={meal.name} time={meal.time} index={i}/>
    });

    return (
        <div className='unused-meals inner-container'>
            <div className="unused-header-section">
                <h3>Meals</h3>
                <Button variant="outline-dark" onClick={sortAscending}>Sort A-Z</Button>
            </div>
            <SearchMeal 
                searchMeals={searchMeals}
                setSearchMeals={setSearchMeals}/>
            <Droppable droppableId='unused-meals' direction="horizontal">
                {(provided) => {
                    return (
                    <div className="unused-meals-container" ref={provided.innerRef} {...provided.droppableProps}>
                        {unusedMealComponents}
                        {provided.placeholder}
                    </div>
                    )}}
            </Droppable>
           
        </div>
    )
}

export default UnusedMeals;