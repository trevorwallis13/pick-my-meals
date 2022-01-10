import React from 'react';
import styles from '../../styles/meal.scss';

const Meal = ({ name, img, time }) => {
    return (
        <div className='meal'>
            <div className='img-container' 
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '40%',
                    overflow: 'hidden'
                }}>
            </div>
            <div className='info'>
                <h3>{name}</h3>
                <div className='prep-time'>
                    <h4>Prep time</h4>
                    <p>{time}</p>
                </div>
            </div>

        </div>
    )
};

export default Meal;