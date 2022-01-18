import React from 'react';
import '../../styles/meal.scss';
import { Draggable } from 'react-beautiful-dnd';
import {FaTrashAlt } from 'react-icons/fa';

const Meal = ({ id, name, img, time, index, removeCalItem }) => {

    // const removeCalItem = (e) => {
    //     console.log(name, index);
    // }
    return (
         <Draggable draggableId={name} index={index}>
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
                            <h5>{name}</h5>
                            <div className='prep-time'>
                                <h6>Prep time</h6>
                                <p>{time}</p>
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