import React from 'react';
import MealSmall from './MealSmall';
import '../../styles/UnusedMeals.scss';

const UnusedMeals = ({ mealIds, mealOptions, searchMeals }) => {

    const mealsAlphaSorted = mealIds.sort((a, b) => {

        let nameA = mealOptions[a].name.toLowerCase();
        let nameB = mealOptions[b].name.toLowerCase();

        if (nameA === nameB) return 0;
        return nameA < nameB ? -1 : 1;
    });

    const searchUnusedMeals = mealsAlphaSorted.map(idx => mealOptions[idx]).filter(meal => {
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