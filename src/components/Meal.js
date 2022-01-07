import React from 'react';
import styles from '../styles/meal.module.css';

const Meal = ({ name, img, time }) => {
    return (
        <div className={styles.meal}>
            
            <div className={styles.imgContainer} 
                style={{
                    backgroundImage: `url('${img}')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
            </div>
            <div className={styles.info}>
                <h3>{name}</h3>
                <div className={styles.prepTime}>
                    <h4>Prep time</h4>
                    <p>{time}</p>
                </div>
            </div>

        </div>
    )
};

export default Meal;