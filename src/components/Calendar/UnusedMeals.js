import React from 'react';
import MealSmall from './MealSmall';
import '../../styles/UnusedMeals.scss';

const UnusedMeals = ({ unusedMeals, searchMeals }) => {

     if (!unusedMeals.length) {
        return (
            <div className="unused-meals">
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

    const unusedMealComponents = searchUnusedMeals.map(meal => {
        return <MealSmall key={meal.id} img={meal.img} name={meal.name} time={meal.time} />
    });
   
    return (
        <div className='unused-meals'>
            <h3>Meals</h3>
            <div className="unused-meals-container">
                {unusedMealComponents}
            </div>
        </div>
    )
}

export default UnusedMeals;