import React from 'react'

function PickMeals({ selectMeals, addNewMeal }) {
    return (
        <div>
            <h2>What do you want for dinner this week?</h2>
            <button onClick={selectMeals}>Pick my meals!</button>
            <button onClick={addNewMeal}>Add new meal</button>
        </div>
    )
}

export default PickMeals
