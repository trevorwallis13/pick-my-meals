import React from 'react';
import Meal from './Meal';
import '../../styles/UnusedMeals.scss';
import SearchMeal from './SearchMeal';
import { Droppable } from 'react-beautiful-dnd';
import Button from 'react-bootstrap/Button';

const UnusedMeals = ({ unusedMeals, sortAscending, searchMeals, setSearchMeals }) => {

    let mealVals

    if (!unusedMeals.length) {
        mealVals = <h4>Add meals to get started!</h4>
    } else {
        mealVals = unusedMeals.map((meal, i) => <Meal key={meal.id} id={meal.id} img={meal.img} meal_name={meal.meal_name} prep_time={meal.prep_time} index={i}/>); 
    }

    //  if (!unusedMeals.length) {
    //     return (
    //         <div className="unused-meals inner-container">
    //             <div className="unused-header-section">
    //                 <h3>Meals</h3>
    //                 <Button variant="outline-dark" onClick={sortAscending}>Sort A-Z</Button>
    //             </div>
    //             <SearchMeal searchMeals={searchMeals} setSearchMeals={setSearchMeals}/>
    //             <div className="unused-meals-container">
    //                 <p>Add meals to get started!</p>
    //             </div>  
    //         </div>
    //     )
    // }


    return (
        <div className='unused-meals inner-container'>
            <div className="unused-header-section">
                <h3>Meals</h3>
                <Button variant="outline-dark" onClick={sortAscending}>Sort A-Z</Button>
            </div>
            <SearchMeal searchMeals={searchMeals} setSearchMeals={setSearchMeals}/>
            <Droppable droppableId='unused-meals' direction="horizontal">
                    {(provided) => {
                        return (
                            <div className="unused-meals-container" ref={provided.innerRef} {...provided.droppableProps}>
                                {mealVals}
                                {provided.placeholder}
                            </div>
                    )}}
                </Droppable>
        </div>
    )
}

export default UnusedMeals;