import React from 'react'
import MealModal from './MealModal'
import Button from 'react-bootstrap/Button';
import '../../styles/PickMeals.scss'

function PickMeals({ selectMeals, addNewMeal, meals, setMeals, currentUser }) {
    return (
        <div className="pick-meals inner-container">
            <h2>What do you want for dinner this week?</h2>
            <div className="pick-meal-btns">
                <Button variant="dark" size="lg" onClick={selectMeals}>Pick my meals!</Button>
                <MealModal
                    addNewMeal={addNewMeal}
                    meals={meals}
                    setMeals={setMeals}
                    currentUser={currentUser} />
            </div>
        </div>
    )
}

export default PickMeals
