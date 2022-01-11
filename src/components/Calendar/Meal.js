import React from 'react';
import styles from '../../styles/meal.scss';

const Meal = ({ name, img, time }) => {
    return (
        <div className='meal'>
            <div className='img-container' 
                style={{
                    backgroundImage: `url('${img}')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '40%',
                    overflow: 'hidden'
                }}>
            </div>
            <div className='info'>
                <h5>{name}</h5>
                <div className='prep-time'>
                    <h6>Prep time</h6>
                    <p>{time}</p>
                </div>
            </div>

        </div>
    )
};

export default Meal;