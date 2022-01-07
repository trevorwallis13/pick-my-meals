import React from 'react';
import '../styles/MealSmall.scss';

const MealSmall = ({ name }) => {
    return (
        <div className="small-meal-card">
            <h3>{name}</h3>
        </div>
    )
};

export default MealSmall;