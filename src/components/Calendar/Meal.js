import React from 'react';
import '../../styles/meal.scss';
import { Draggable } from 'react-beautiful-dnd';
import {FaTrashAlt } from 'react-icons/fa';

const Meal = ({ id, meal_name, img, prep_time, index, removeCalItem }) => {

    return (
         <Draggable draggableId={meal_name} index={index}>
            {(provided) => {
                return (
                    <div className='meal' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
                            <h5>{meal_name}</h5>
                            <div className='prep-time'>
                                <h6>Prep time</h6>
                                <p>{prep_time}</p>
                            </div>
                        </div>
                        <FaTrashAlt 
                            role="button" 
                            className='delete-button'
                            onClick={removeCalItem} />
                    </div>
            )}}
         </Draggable> 
        
    )
};

export default Meal;