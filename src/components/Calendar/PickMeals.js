import React from 'react'
import MealModal from './MealModal'

function PickMeals({ selectMeals, addNewMeal, meals, setMeals, setUnusedMeals }) {
    return (
        <div>
            <h2>What do you want for dinner this week?</h2>
            <button onClick={selectMeals}>Pick my meals!</button>
            <MealModal 
                addNewMeal={addNewMeal}
                meals={meals}
                setMeals={setMeals}
                setUnusedMeals={setUnusedMeals} />
        </div>
    )
}

export default PickMeals
